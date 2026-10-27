import { createClient } from 'npm:@supabase/supabase-js@2'

// Test endpoint: receives a form submission (e.g. a Framer form webhook)
// and saves it to the form_submissions table.
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })

// Find a field regardless of capitalisation, e.g. "Name", "name", "Full name".
function pick(data: Record<string, unknown>, words: string[]) {
  for (const [key, value] of Object.entries(data)) {
    const k = key.toLowerCase()
    if (words.some((w) => k.includes(w))) return String(value).slice(0, 200)
  }
  return null
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (req.method !== 'POST') return json({ error: 'Send a POST request' }, 405)

  const raw = await req.text()
  if (raw.length > 10_000) return json({ error: 'Too large' }, 413)

  let data: Record<string, unknown> = {}
  const type = req.headers.get('content-type') ?? ''
  try {
    data = type.includes('application/json')
      ? JSON.parse(raw)
      : Object.fromEntries(new URLSearchParams(raw))
  } catch {
    return json({ error: 'Could not read the form data' }, 400)
  }

  const { error } = await supabase.from('form_submissions').insert({
    name: pick(data, ['name']),
    email: pick(data, ['email', 'e-mail']),
    phone: pick(data, ['phone', 'cell', 'mobile', 'number']),
    payload: data,
  })
  if (error) return json({ error: error.message }, 500)
  return json({ ok: true })
})
