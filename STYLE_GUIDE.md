# Visual Language — Banners & Sections (v2)

Read this in full before designing anything in Framer. It is a synthesis of 19 high-end
Framer/web hero references (index at the bottom). It is a **vocabulary, not a template**.

---

## 0. The prime directive

1. **Never copy a reference.** Every output combines 2–4 moves from *different* references
   into something new. If someone could point at one ref and say "that's just X", redo it.
2. **Same rhythm, different outcome.** Every banner should feel like it came from the same
   designer (spacing, type discipline, restraint) but look different from the last one,
   because the subject (branding studio, real-estate, plumber, SaaS…) drives the content,
   imagery, colour and layout choice.
3. **One idea per banner.** One hero move carries it (giant type, a photo, a bento grid, a
   UI card stack). Everything else is quiet support.

---

## 1. What "high-end Framer" actually means (the rhythm)

These are the principles all 19 refs share. They matter more than any single move.

- **Scale contrast is extreme.** Headline is huge (8–14% of canvas width per line height),
  everything else is tiny (12–15px). There is almost no "medium" text. This gap is the look.
- **Headlines are tight.** Big sans: letter-spacing −0.04 to −0.06em, line-height 0.88–0.95.
  Light/serif headlines: −0.02 to −0.03em, line-height 1.0–1.05. Never default tracking.
- **Small text is loose and quiet.** Micro-labels 11–14px, uppercase, +0.02 to +0.06em
  tracking, muted colour (50–65% opacity). They sit in corners and edges, like annotations.
- **Generous, deliberate emptiness.** Big margins (40–64px inside a 1200–1600 card). Content
  clusters in 3 zones (top bar, headline zone, bottom row); the space between is left empty.
- **Edges are anchored.** Things align to the card edges and to each other. Top-left logo,
  top-right CTA, bottom-left text, bottom-right secondary — the four corners get used.
- **One accent colour, used sparingly.** On max ~5% of the surface: a word, a symbol, a
  button, a ribbon. Everything else is neutrals + the photo's own colours.
- **Realism details.** Nav links, "© 2026", "01/04", "since 1988", ratings, avatars, prices.
  These tiny believable details are what make it read as a real product, not a poster.
- **Soft geometry.** Card radius 16–28px, pills fully rounded, hairlines at 1px / 10–20%
  opacity. Shadows are either absent or very soft and large (blur 40–80px, 8–15% opacity).

---

## 2. Typography system

Max **2 families** per banner (+ optional mono for micro-labels). Pick ONE pairing:

| Pairing | Display | Support | Use for |
|---|---|---|---|
| A. Grotesk + italic serif | Inter Tight 600 / Geist 600 | Instrument Serif *italic* for 1 word | Default. Agencies, studios, lifestyle |
| B. Light editorial serif | Fraunces 300 / Instrument Serif | Inter Tight 400–500 | Premium, SaaS-calm, wellness, finance |
| C. Heavy grotesk caps | Inter Tight 700–800 UPPERCASE | Inter Tight 500 + mono labels | Bold, brutal, fashion, logistics |
| D. Wide/tech display | Michroma or Inter Tight 800 wide | Geist 400 + Geist Mono | Sport, tech, product, gear |
| E. Thin huge sans | Geist 200–300 | Geist 500 | Health, AI, science, calm tech |

Available & tested in Framer: Inter Tight, Geist, Geist Mono, Instrument Serif (+italic),
Fraunces (all weights), Michroma, DM Mono, JetBrains Mono, IBM Plex Mono.

**Signature headline tricks (use at most one per banner):**
- Swap ONE emotional word to italic serif, often on its own line ("People *Thrive*").
- Two-tone headline: part black, part muted grey (or accent) — emphasis without weight.
- Accent only on the symbol in numbers: "92**%**", "15**+**", "24/**7**".
- Second word faded/translucent (30–40% opacity) behind or under the first.
- Small image pill or icon-pill inline between words ("FORM ( img ) FUNCTION").
- Headline split around a central subject (words left/right of a person or object).
- Oversized word bleeding off the card edge (cropped by the frame).

**Scale (1200px wide card):** display 110–150px · H2 48–64px · stat numbers 56–96px ·
body 16–20px · nav/button 14–16px · micro 11–13px. For a 1600px card multiply by ~1.3.

---

## 3. Colour recipes

Pick one recipe per banner. Accent is always ONE colour.

| Recipe | Base | Text | Accent options |
|---|---|---|---|
| Warm neutral | beige/bone #EDE6D8 / #F2EFE8 | near-black #151515 | orange #FF5A1F |
| Dark premium | #111111 / #171717 | off-white #F2F0EB, grey #8A8780 | orange, lime #C6F24E, coral |
| Clean light | #F6F6F4 / white | #111111, grey #9A9A9A | green #1F5B2E, crimson #B8324B, amber #E89A2C |
| Photo-driven | the photo itself | white on photo | pulled from the photo (sky blue, terracotta, grass green) |
| Cool mist | #DCE6E6 / #D5DEE2 | #1B211F | deep forest #1E2A24 |

Rules: neutrals do 90% of the work · accent on 1–3 elements max · on photos, text is white
and a soft dark gradient (bottom 30–40%) keeps it legible.

---

## 4. Composition archetypes (the skeletons)

Choose one skeleton, then decorate with moves from §5. Mix skeletons across posts.

1. **Classic hero** — nav / headline bottom-left or top-left / blurb + CTA bottom-right.
2. **Centred statement** — avatar-stack proof → centred headline (2 lines) → sub → CTA →
   product UI cards fanned below, joined to the CTA by thin connector lines.
3. **Full-bleed photo** — photo fills the card, white headline over it, small floating card
   (product/listing/case study) bottom-right, chips or stats bottom-left.
4. **Bento** — headline top-left, grid of rounded tiles: 1 big photo, 1 dark stat tile,
   1 light stat tile, 1 photo tile with a floating pill. Tiles notch into each other.
5. **Type wall** — no photo or a small one; giant words edge-to-edge, micro-labels around.
6. **Column grid** — faint vertical hairlines split the hero into 4 columns; nav, labels
   and body text snap to those columns; one column holds stacked cards ("Up next", product).
7. **Subject sandwich** — huge headline top, person/object cut out in the middle, second
   giant word line at the bottom running behind/over the subject and off the edge.

---

## 5. Moves library (the vocabulary)

**Nav & CTAs**
- Minimal nav: logo left · 3–5 links centred or left-of-centre · 1 CTA right.
- Active nav item: accent underline or white pill behind it.
- CTA types: dark pill with ↗ · white pill + accent circle with → · button + square accent
  icon at the end · round "START A PROJECT ↗" badge (circle, 120–140px) floating on the hero ·
  underlined text link "TALK TO US ↗".

**Social proof**
- Avatar stack (3–5 overlapping circles) + one line ("Used by 1,000+ sales teams").
- Review pill: avatar + ★★★★★ + "5 reviews".
- Badges: "Reviewed on Clutch 5.0", award laurel "Best Agency 2025".
- Logo strip under the hero, greyed or monochrome, evenly spaced, no heading.

**Floating elements**
- Small white card over photo: thumbnail + title + 2 lines + price or arrow.
- Frosted/glass stat chip: "8K+ PROJECTS" + 2-line description.
- Product UI cards (charts, gauges, bar columns, big numbers) in cream/white cards.
- "Up next 01/04" slider card with a progress ring.
- Status tab hanging from the top edge: "● Available for new projects".

**Decoration (pick max 2)**
- Blueprint guides: faint dashed lines + small corner dots framing the content.
- Faint vertical column hairlines.
- Tilted marquee ribbon(s) in accent with ✱ separators crossing the image.
- Thin swoosh underline or orbit line in accent/white.
- Giant faded brand letter or word in the background (5–10% opacity).
- Dotted grid texture in a corner.
- Motion-blur streak / colour smear behind the subject (photo-led only).

**Stats**
- Big number + tiny uppercase label under it.
- `10K+ ———— EXCLUSIVE LISTINGS` on one line.
- Stat tiles in a row (soft rounded, 1 filled dark/accent + rest light).
- Giant thin numbers right-aligned (40+, 94%) with a label/quote on the left, hairline
  dividers between rows.

**Micro-copy (always add 2–4)**
- "since 1988", "© 2026", "SKI COLLECTION 2026", "(01) Brand & Web", "LISBON · 8 SEATS",
  "Global Expeditions · Est. Wild", mono label "SMART LOGISTICS SOLUTIONS".

---

## 6. Section patterns (for building sections)

Sections use the same type, colour and spacing rules. Each section = one rounded card
(radius 24px) inset from the page edge; alternate light/dark cards down the page.

- **Section heading row:** tiny tag pill ("● How it works") above · H2 left (2 lines, serif
  or two-tone) · short grey paragraph right, top-aligned or baseline-aligned.
- **Statement paragraph:** 1 big paragraph (32–44px) where the first half is full colour and
  the rest fades to grey or switches to the accent.
- **Features (3-col):** accent circle icon · title · 2-line grey description. On dark or light.
- **Stat row:** 3–5 tiles, numbers with accent on the symbol only.
- **Tabs + visual:** dark segmented pill with accent active tab · H2 + paragraph left ·
  photo with a UI card overlay right · 2×2 mini feature list with small accent icons.
- **Process/timeline:** thin vertical rail with dots + labels, or numbered steps.
- **Testimonial / proof:** giant number (94%) + quote with an accent left border.
- **Product card:** image tile + name + short spec + price + small accent "+" button.

Coverage note: pricing, FAQ, testimonial grids, footers and blog lists are NOT well covered
by the refs yet. Ask the owner for section screenshots before doing those "high-end".

---

## 7. Post presentation (the frame around the banner)

- The website/hero sits inside a card (radius 16–28px, optional thin light border/bezel)
  or a device (monitor/tablet) on a backdrop.
- Backdrop options: near-black · soft grey #E9E9E9 with a faint light gradient · a blurred,
  zoomed, darkened crop of the hero photo (strongest option when there's a photo).
- Optional big label above the mockup ("Real Estate / *Website*") and footer row
  ("UI/UX Design · Real Estate Industry" + "Swipe →" / "Save for Later" pill).
- The owner's personal post frame (avatar/name/footer) should stay identical on every post;
  it is the brand consistency layer. (Owner to design it; not built yet.)
- Formats: 16:9 (1600 × 900) or 4:5 (1080 × 1350). Owner says format is flexible.

---

## 8. Motion (subtle, clean)

- Claude CANNOT set Framer's native Appear effects via the plugin. Give the owner values:
  Opacity 0 · Offset Y 24 · Blur 6 → Ease Out · 1s · stagger 0.15s top to bottom.
  Card/device: Opacity 0 · Scale 0.97 · 1.2s. Buttons: hover Scale 1.02.
- Fallback code overrides exist in `BannerMotion.tsx` (withSiteRise, withReveal1–5,
  withLineDraw, withSlowZoom, withHoverLift).
- Everything settles within ~2s. No bounce, no spin, no loops.

---

## 9. Process for every request

1. Read the brief: industry, audience, feeling. Write a 1-line concept ("calm, premium,
   trust-heavy plumber — dark, one copper accent, big 24/7 stat").
2. Pick: skeleton (§4) · type pairing (§2) · colour recipe (§3) · 2–4 moves (§5) · 1 headline
   trick. Choose combinations NOT used in the last few banners.
3. Write real, specific copy for the industry (never lorem, never generic "Welcome").
4. Build in Framer. When asked for multiple concepts, make each one differ in skeleton,
   pairing and recipe, not just colour.
5. Self-check (§10), fix, then report what was built and which principles were combined.

## 10. Quality checklist (fail any → fix before showing)

- [ ] Is the headline the unmistakable hero? Is there real scale contrast?
- [ ] Headline tracking tightened? Micro-labels small, spaced, muted?
- [ ] Only one accent colour, used on ≤3 elements?
- [ ] ≤2 font families (+ mono)?
- [ ] Four corners / edges used; content in clear zones; lots of calm space?
- [ ] 2–4 realism details present?
- [ ] Could anyone say "that's just a copy of ref X"? If yes, change it.
- [ ] Does it look different from the previous banner?

## 11. Avoid

- Generic SaaS gradients, purple-blue blobs, glassmorphism everywhere, clip-art icons.
- Medium-sized everything (no scale contrast). Centred everything by default.
- More than one accent. Drop shadows on text. Stock "Welcome to our website" copy.
- Filling every empty area. Empty space is intentional.

---

## 12. Framer build notes (technical, for Claude)

- Work on the Home page (Desktop breakpoint 1200px) unless told otherwise. Design page
  "Banners" holds the first test at 1600 × 900.
- New nested stacks default to a WHITE background: always set
  `backgroundColor="rgba(0,0,0,0)"` on wrapper stacks.
- Text colour can only be set through text styles (`manageTextStyle`), not on the node.
  Existing styles live under `/Banner/…`; make a new folder per banner (e.g. `/B02/…`) so
  banners don't change each other.
- Borders/hairlines via XML didn't apply once; prefer a 1px-tall frame with a fill colour.
- Images: `backgroundImage="<url>"` on a frame WORKS — Framer (on the owner's machine)
  downloads it into the project (tested with an images.unsplash.com URL). But Claude's
  cloud computer can't reach unsplash/pexels, so Claude can't search or see photos, and
  can't upload images pasted into chat. Best flow: owner sends direct image links, or
  drops photos into Framer and Claude uses those frames.
- Updating a shared text style changes every node using it — check before editing.
- `bottom` / `right` pins are IGNORED on create (node lands at top/left 0). Always compute
  `top`/`left`. To right-align, wrap in a full-width transparent stack with
  `stackDistribution="end"`; to centre, a full-width stack with `"center"`.
- `name="..."` attribute sets the layer name (use it: "Image Placeholder — …", "Overlay").
- Gradient overlays: `backgroundColor="linear-gradient(...)"` is accepted by the plugin
  (render not yet confirmed by owner).
- Image placeholders = plain frames with a neutral fill, named "Image Placeholder — …";
  owner drops the photo in as the fill.
- Concepts go on their own design page ("Concepts 01", "Concepts 02"…), banners side by
  side at left 0 / 1700 / 3400, 1600 × 900 each.

---

## 13. Feedback log

- Owner: refs are for visual rhythm/vocabulary, not to be matched. Synthesize, never copy.
- Owner: format is flexible; focus is the look.
- Owner: motion should be subtle, not flashy, "creates cleanness".

---

## Reference index (for Claude's memory, not for copying)

1 Foreal (real estate, photo in frame, italic serif word) · 2 Creatiqe (red type wall) ·
3 Skillclass (serif, blurred-photo backdrop) · 4 Mike Bennet (giant lowercase name) ·
5 Kora (flower photo, case-study card) · 6 Trova (mountains, chips, split bottom row) ·
7 Himon (caps, mono label, column lines, lime circle CTA) · 8 Agero (images inside headline,
status tab) · 9–11 Sendoq (beige/black/orange, serif, UI cards, stacked section cards) ·
12 Aureva (bento, notched tiles, glass stat) · 13 Cheerzy (ribbons, blueprint lines, serif
italic) · 14 Healytics (headline around subject, symbol-accent stats) · 15 HavenHues
(monitor mockup, big faded label) · 16 Galileo (bento, accent phrase) · 17 Vanta (column grid,
tech display font, orange, image pill in headline) · 18 Echo (green, stat tiles, fading
paragraph) · 19 MakeLine (motion-blur crowd, giant words top + bottom, round CTA badge).
