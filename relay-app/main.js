import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm'

// Public project address + publishable key. Safe to ship in the browser:
// the database's row-level security rules decide what each user can see.
const supabase = createClient(
  'https://ccbqhcmdafaxqnngywmk.supabase.co',
  'sb_publishable__1yKncowvqwBGt5XrWtS4w_NiaTdnw_'
)

const $ = (id) => document.getElementById(id)
let mode = new URLSearchParams(location.search).get('mode') === 'signup' ? 'signup' : 'signin'
let tasks = []

// ---------- Auth ----------
function renderAuthMode() {
  const signup = mode === 'signup'
  $('auth-title').textContent = signup ? 'Create your account' : 'Sign in'
  $('auth-sub').textContent = signup ? 'Start running agents in minutes.' : 'Welcome back. Pick up where your agents left off.'
  $('auth-submit').textContent = signup ? 'Create account' : 'Sign in'
  $('switch-text').textContent = signup ? 'Already have an account?' : 'No account yet?'
  $('switch-link').textContent = signup ? 'Sign in' : 'Create one'
  $('password').autocomplete = signup ? 'new-password' : 'current-password'
  $('auth-msg').textContent = ''
}

$('switch-link').addEventListener('click', (e) => {
  e.preventDefault()
  mode = mode === 'signup' ? 'signin' : 'signup'
  renderAuthMode()
})

$('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const msg = $('auth-msg')
  msg.className = 'msg'
  msg.textContent = ''
  $('auth-submit').disabled = true
  const creds = { email: $('email').value.trim(), password: $('password').value }
  const { data, error } = mode === 'signup'
    ? await supabase.auth.signUp({ ...creds, options: { emailRedirectTo: location.origin } })
    : await supabase.auth.signInWithPassword(creds)
  $('auth-submit').disabled = false
  if (error) {
    msg.textContent = error.message
  } else if (mode === 'signup' && !data.session) {
    msg.className = 'msg good'
    msg.textContent = 'Check your email to confirm your account, then sign in.'
  }
})

// ---------- Dashboard ----------
// Prototype: status is simulated from how long ago the job was sent in.
function statusOf(task) {
  const age = (Date.now() - new Date(task.created_at).getTime()) / 1000
  if (age < 4) return 'queued'
  if (age < 15) return 'running'
  return 'done'
}

function renderTasks() {
  const list = $('task-list')
  list.innerHTML = ''
  $('empty').hidden = tasks.length > 0
  for (const t of tasks) {
    const s = statusOf(t)
    const li = document.createElement('li')
    const left = document.createElement('div')
    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = t.title
    const when = document.createElement('div')
    when.className = 'when'
    when.textContent = new Date(t.created_at).toLocaleString()
    left.append(title, when)
    const badge = document.createElement('span')
    badge.className = `status ${s}`
    badge.textContent = s.toUpperCase()
    li.append(left, badge)
    list.append(li)
  }
}

async function loadTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('id, title, created_at')
    .order('created_at', { ascending: false })
  if (error) {
    $('task-msg').textContent = error.message
    return
  }
  tasks = data
  renderTasks()
}

$('task-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const input = $('task-title')
  const title = input.value.trim()
  if (!title) return
  $('task-msg').textContent = ''
  const { error } = await supabase.from('tasks').insert({ title })
  if (error) {
    $('task-msg').textContent = error.message
    return
  }
  input.value = ''
  loadTasks()
})

setInterval(() => tasks.length && renderTasks(), 1000)

// ---------- Which screen to show ----------
function show(session) {
  const signedIn = !!session
  $('auth-view').hidden = signedIn
  $('app-view').hidden = !signedIn
  const area = $('user-area')
  area.innerHTML = ''
  if (signedIn) {
    const who = document.createElement('span')
    who.className = 'muted'
    who.textContent = session.user.email
    const out = document.createElement('button')
    out.className = 'btn'
    out.textContent = 'Sign out'
    out.onclick = () => supabase.auth.signOut()
    area.append(who, out)
    setTimeout(loadTasks, 0) // don't call Supabase inside the auth callback itself
  } else {
    tasks = []
    renderAuthMode()
  }
}

supabase.auth.onAuthStateChange((_event, session) => show(session))
