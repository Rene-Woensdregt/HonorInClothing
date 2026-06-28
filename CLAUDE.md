# Honor In Clothing — Shopify Theme Development

## Project
- **Store:** Honor In Clothing (`https://honorinclothing.com`)
- **Theme:** Shopify Dawn v15.4.1
- **Dev Theme ID:** 163039707357
- **Dev Preview URL:** `https://honorinclothing.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=163039707357`
- **Reference Site:** Vuori Clothing (`https://vuoriclothing.com`) — premium active lifestyle benchmark
- **Developer:** Rene

## Brand
- **Tagline:** Honor in everything you do.
- **Industry:** Premium Active Lifestyle Apparel
- **Personality:** Strong, authentic, purpose-driven, rugged yet refined, American heritage inspired
- **Mission:** Built around honor, character, integrity, hard work, personal responsibility, service, and legacy

## Design System

### Color Palette
| Token | Name | Hex | Role |
|-------|------|-----|------|
| `--color-obsidian` | Obsidian | `#16150F` | Primary dark / near-black |
| `--color-linen` | Linen | `#FBF9F5` | Primary light / off-white |
| `--color-cream` | Cream | `#F3EFE6` | Warm white / hero text bg |
| `--color-sand` | Sand | `#E7E2D7` | Warm neutral surface |
| `--color-sage` | Sage | `#5C6B47` | Military green / primary accent |
| `--color-sage-light` | Light Sage | `#9AA585` | Secondary sage accent |
| `--color-navy` | Navy | `#26384C` | Deep navy accent |
| `--color-gold` | Gold | `#C9A227` | Amber / highlight accent |
| `--color-tan` | Tan | `#8A6F4B` | Warm brown accent |
| `--color-stone` | Stone | `#8A8479` | Warm gray |
| `--color-dark-stone` | Dark Stone | `#54504A` | Dark warm gray |
| `--color-dark-olive` | Dark Olive | `#3A372F` | Shadow / dark warm |

### Dawn Color Schemes (set in settings_data.json)
| Scheme | Name | Background | Text | Button |
|--------|------|-----------|------|--------|
| scheme-1 | Linen (default) | `#FBF9F5` | `#16150F` | `#16150F` |
| scheme-2 | Sand | `#E7E2D7` | `#16150F` | `#5C6B47` |
| scheme-3 | Sage | `#5C6B47` | `#FBF9F5` | `#16150F` |
| scheme-4 | Obsidian | `#16150F` | `#FBF9F5` | `#5C6B47` |
| scheme-5 | Cream | `#F3EFE6` | `#16150F` | `#5C6B47` |

### Typography
| Role | Font | Weight | Use |
|------|------|--------|-----|
| Heading | Oswald | 700 Bold | All headings, display, hero |
| Body | Inter | 400 Regular | Body copy, labels, UI text |
| Shopify handle (heading) | `oswald_n7` | — | Set in settings_data.json |
| Shopify handle (body) | `inter_n4` | — | Set in settings_data.json |

### Type Scale
| Level | Size | Font | Transform |
|-------|------|------|-----------|
| Hero / Display | 72px | Oswald 700 | Uppercase + tracked |
| H1 | 64px | Oswald 700 | Uppercase |
| H2 | 48px | Oswald 600 | Uppercase |
| H3 | 36px | Oswald 600 | Uppercase |
| H4 | 24–28px | Oswald 500 | Uppercase |
| Body LG | 18px | Inter 400 | — |
| Body | 16px | Inter 400 | — |
| Label | 14px | Inter 500 | Uppercase + tracked |
| Caption | 12px | Inter 400 | — |

## Workflow
1. **Design phase:** Build HTML mockup with Claude Design (full page or section)
2. **Review phase:** Approve design in browser
3. **Implementation phase:** Convert approved HTML to Shopify Liquid section/snippet in this repo
4. **Verify:** Push to dev theme, check preview URL

## Architecture (Dawn Theme)
```
sections/     ← Full-width page components (hero, collections, testimonials, etc.)
snippets/     ← Reusable fragments (card-product.liquid, price.liquid, etc.)
blocks/       ← Currently empty — add custom blocks here as needed
assets/       ← CSS, JS, SVG icons (185+ files)
layout/       ← theme.liquid (master layout, CSS vars, font loading)
config/       ← settings_schema.json (editable), settings_data.json (DO NOT manually edit)
templates/    ← JSON templates mapping sections to page types
locales/      ← en.default.json (update with new translation keys)
```

## Key Files
- `layout/theme.liquid` — HTML head, CSS variables, font loading, cart init
- `config/settings_schema.json` — color schemes and global theme settings
- `sections/header.liquid` + `sections/header-group.json` — main navigation
- `sections/footer.liquid` + `sections/footer-group.json` — footer
- `sections/image-banner.liquid` — hero banner base component
- `sections/featured-collection.liquid` — collection showcase base
- `sections/newsletter.liquid` — email capture
- `sections/email-signup-banner.liquid` — full-width email banner
- `snippets/card-product.liquid` — product card used in grids
- `snippets/social-icons.liquid` — social media icons

## Pages Required
- Home, Shop, About Us, Contact, FAQ, Shipping & Returns, Privacy Policy, Terms & Conditions
- Collections: Men's Apparel, Women's Apparel, Youth Apparel, Shop By Activity, Accessories, New Arrivals, Best Sellers

## Integrations (Phase 3)
- **Email:** Klaviyo (email capture, abandoned cart, flows)
- **Reviews:** Judge.me or Loox
- **Payments:** Shopify Payments, PayPal, Apple Pay, Google Pay
- **Analytics:** Google Analytics, Meta Pixel, Shopify Analytics
- **Social:** Instagram feed, Facebook

## Rules
- `config/settings_data.json` — edit intentionally during initial setup only; after launch Shopify admin manages it
- Always add new translation keys to `locales/en.default.json`
- Use `{% stylesheet %}` and `{% javascript %}` tags within sections/snippets — not standalone asset files — for component styles/scripts
- CSS variables pattern for single-property settings; CSS classes for multi-property settings
- All user-facing text must use `{{ 'key' | t }}` translation filter
- Test every change on the dev preview URL before committing
