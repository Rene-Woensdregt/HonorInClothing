---
name: shopify-dev-loop
description: >
  The complete Honor In Clothing development cycle — use this skill whenever making ANY code change
  to the theme, no matter how small. Covers: HTML mockup → Liquid implementation → QA validation →
  Shopify push → browser visual review → human approval → git commit & push → feedback loop.
  Trigger on: "build this section", "implement", "update the header", "push this", "review in browser",
  "commit", "looks good", "make this change", or any request that will result in editing a theme file.
---

# Honor In Clothing — Shopify Dev Loop

## Context
- **Dev Theme ID:** 163039707357
- **Preview URL:** `https://honorinclothing.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=163039707357`
- **Theme:** Dawn v15.4.1
- **Workflow:** HTML mockup → approve → implement as Liquid → QA → push → review → commit

---

## The Development Loop

Every code change follows this exact sequence. Do not skip steps.

```
[ DESIGN ]  →  [ IMPLEMENT ]  →  [ QA ]  →  [ PUSH ]  →  [ BROWSER REVIEW ]  →  [ APPROVAL ]  →  [ COMMIT ]
                                                                                        ↓ feedback
                                                                                   [ LOOP BACK ]
```

---

## Step 1 — Design (HTML Mockup)

**Only skip this step if the user explicitly says to go straight to Liquid.**

Produce a full standalone HTML file with embedded CSS before writing any Liquid. This lets the user
see and approve the design without touching the theme.

```
File: <section-name>-mockup.html
Save to: C:\Users\ultra\AppData\Local\Temp\claude\...\scratchpad\
```

- Use exact brand colors: `#000000` (black), `#333333` (charcoal), `#FFFFFF` (white),
  `#4A5240` (military green), `#1B2A4A` (deep navy)
- Match Vuori Clothing premium feel — clean, minimal, strong typography
- Use real placeholder text (not Lorem Ipsum) — brand voice: honor, character, purpose, legacy
- After generating, ask: **"Does this design look right? Approve or share feedback before I implement in Liquid."**
- Wait for approval before proceeding to Step 2.

---

## Step 2 — Implement in Liquid

Convert the approved HTML design to a Shopify Liquid section or snippet.

### File placement rules
| File type | Directory | When to use |
|-----------|-----------|-------------|
| `section-name.liquid` | `sections/` | Full-width page component, customizable in theme editor |
| `snippet-name.liquid` | `snippets/` | Reusable fragment, not directly edited in theme editor |
| `block-name.liquid` | `blocks/` | Nested component inside a section |

### Code rules (non-negotiable)
1. **All user-facing text** must use `{{ 'key' | t }}` — never hardcoded strings
2. **Add every new key** to `locales/en.default.json` immediately
3. **Single CSS property settings** → use CSS variables: `style="--gap: {{ section.settings.gap }}px"`
4. **Multi CSS property settings** → use CSS classes: `class="hero {{ section.settings.layout }}"`
5. **Snippets and statically-rendered blocks** must have a `{% doc %}` tag header
6. **Component styles/scripts** go in `{% stylesheet %}` / `{% javascript %}` tags — not separate asset files
7. **Do not reference** `config/settings_data.json` manually — Shopify manages it
8. **Do not use** `asset_url` in Liquid tags for CSS/JS — use `{% stylesheet %}` instead

### Schema pattern
```liquid
{% schema %}
{
  "name": "t:sections.section_name.name",
  "settings": [...],
  "blocks": [{ "type": "@theme" }],
  "presets": [{ "name": "t:sections.section_name.name" }]
}
{% endschema %}
```

---

## Step 3 — QA (Validate Before Push)

Run the Shopify Liquid validator before pushing anything. This validator is part of the `shopify-liquid` skill toolkit.

```bash
node "C:\Users\ultra\.claude\plugins\cache\shopify-ai-toolkit\shopify-plugin\1.0.0\skills\shopify-liquid\scripts\validate.mjs" \
  --filename <filename.liquid> \
  --filetype <sections|snippets|blocks> \
  --code '<full liquid code>' \
  --model claude-sonnet-4-6 \
  --client-name claude-code \
  --client-version 1.0.0 \
  --artifact-id <stable-random-id> \
  --revision 1
```

### If validation fails
1. Read the error message — identify the exact issue
2. Search docs if needed:
   ```bash
   node "C:\Users\ultra\.claude\plugins\cache\shopify-ai-toolkit\shopify-plugin\1.0.0\skills\shopify-liquid\scripts\search_docs.mjs" "<tag or object from the error>"
   ```
3. Fix the issue, increment `--revision`, re-validate
4. Maximum 3 retries — if still failing, explain the issue to the user

### Best practice checklist (run mentally before push)
- [ ] All text uses `{{ 'key' | t }}` filter
- [ ] New locale keys added to `locales/en.default.json`
- [ ] CSS selectors in `{% stylesheet %}` match the HTML `id`/`class` attributes
- [ ] No hardcoded brand copy (use translation keys or section settings)
- [ ] `{% doc %}` tag present on snippets and static blocks
- [ ] Schema JSON is valid — `"name"` uses `t:` translation key pattern
- [ ] No `console.log()` or debug statements left in `{% javascript %}`
- [ ] Images use `| image_url: width: N | image_tag` (not legacy `img_url`)

---

## Step 4 — Push to Shopify Dev Theme

Push only the changed files — never push the entire theme at once unless explicitly asked.

```bash
# Push one file
shopify theme push --theme 163039707357 --only <path/to/file.liquid>

# Push multiple files
shopify theme push --theme 163039707357 --only sections/hero-banner.liquid --only locales/en.default.json

# Push and open preview (if you want to check manually)
shopify theme push --theme 163039707357 --only <file> && shopify theme open --theme 163039707357
```

Run from the project root: `C:\Users\ultra\Downloads\Development\Rene\HonorInClothing\dev_theme_163039707357`

If the push fails (auth error), tell the user: "Run `! shopify auth logout && shopify auth login` in the terminal to re-authenticate."

---

## Step 5 — Browser Visual Review

After a successful push, open the dev theme preview in Chrome and review visually and for console errors.

```
URL: https://honorinclothing.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=163039707357
```

Use Claude in Chrome tools (load via ToolSearch if not yet loaded):
```
ToolSearch: "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__read_console_messages,mcp__claude-in-chrome__tabs_create_mcp"
```

### Review checklist
1. **Navigate** to the preview URL (or the specific page — e.g., `/collections/mens`)
2. **Screenshot** the section/page — check layout, spacing, typography, colors
3. **Console check** — read console messages, filter for errors: `pattern: "error|Error|TypeError|ReferenceError"`
4. **Mobile check** — resize to 375px width and screenshot again
5. **Brand check** — does it feel premium? Does it match the Vuori Clothing reference quality?

### Visual pass criteria
- Colors match brand palette (black, charcoal, white, military green, deep navy)
- Typography is strong and readable — headings bold, body clean
- Spacing is generous and intentional — not cramped
- Images display correctly with proper aspect ratios
- Buttons have correct hover states
- No broken layouts on mobile

Report your findings with a screenshot. Note any issues.

---

## Step 6 — Human Approval Gate

**Always stop here and ask for human approval before committing.**

Present the review findings:
```
✅ Push successful
📸 Screenshot: [attach]
🖥  Console: [clean / N errors found]
📱 Mobile: [looks good / issue noted]

Does this look right? 
→ Approve to commit, or share feedback to iterate.
```

If the user gives feedback → go back to **Step 2** with the feedback. Keep the mockup HTML updated too.
If the user approves → proceed to **Step 7**.

---

## Step 7 — Commit to Git

Stage only the relevant files — not unrelated files or generated files.

```bash
# Stage specific files
git add sections/hero-banner.liquid locales/en.default.json

# Write a clear commit message focused on WHY
git commit -m "$(cat <<'EOF'
Add hero banner section with lifestyle video support

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

### Commit message format
- **First line:** What changed and why — max 72 characters
- **No bullet lists** in the commit body for small changes
- Always append the `Co-Authored-By` line
- Reference the page/section: `Add hero section`, `Update product card`, `Fix mobile nav`

---

## Step 8 — Push to Git

```bash
git push origin main
```

Confirm with: `git log --oneline -3` to show the last 3 commits.

---

## Handling Feedback

When the user gives feedback after the approval gate:

1. **Acknowledge specifically** — "Got it — [specific change they asked for]."
2. **Don't restart from scratch** — edit the existing file, don't rewrite it entirely
3. **Update the mockup HTML too** if the design changed meaningfully
4. **Re-validate** (Step 3) even for small changes
5. **Push the same file** (Step 4) — no need to push everything again
6. **Screenshot again** (Step 5) and show the before/after if helpful
7. **Ask for approval again** (Step 6)

Keep feedback loops tight — one change at a time is clearer than bundling multiple.

---

## Quick Reference

| Action | Command |
|--------|---------|
| Push single file | `shopify theme push --theme 163039707357 --only <file>` |
| Push all changes | `shopify theme push --theme 163039707357` |
| Open theme preview | `shopify theme open --theme 163039707357` |
| View theme list | `shopify theme list` |
| Git status | `git status` |
| Git add + commit | `git add <files> && git commit -m "message"` |
| Git push | `git push origin main` |

## Dev URLs
- **Home:** `https://honorinclothing.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=163039707357`
- **Collections:** append `/collections/<handle>` to the base store URL with preview params
- **Products:** append `/products/<handle>` to the base store URL with preview params
