# Honor In Clothing — Development To-Do List

> **Workflow:** HTML mockup (Claude Design) → review → implement as Shopify Liquid
> **Last updated:** 2026-07-24

---

## Phase 1 — Foundation

- [x] Configure Dawn color scheme to brand palette (Obsidian / Linen / Sage / Sand / Navy / Gold)
- [x] Set up global typography (Oswald headings + Hanken Grotesk body)
- [x] Configure announcement bar (`hi-announcement-bar.liquid`)
- [x] Update header navigation (`hi-header.liquid`)
- [x] Update footer (`hi-footer.liquid`)
- [x] Upload and configure brand logo (primary, secondary, icon/badge variants)
- [x] Configure favicon

---

## Phase 2 — Page Design & Build

> Each item: HTML mockup first → approve → implement as Liquid section

### Home Page
- [x] Hero banner (`hi-hero.liquid`)
- [x] Featured collection (`hi-featured-collection.liquid`)
- [x] About / brand story strip (`hi-brand-story.liquid`)
- [x] Shop by activity (`hi-shop-by-activity.liquid`)
- [x] Values strip (`hi-values-strip.liquid`)
- [x] Veteran support section (`hi-veteran-support.liquid`)
- [x] Customer testimonials (`hi-testimonials.liquid`)
- [x] Email signup (`hi-email-signup.liquid`)
- [x] Instagram feed placeholder (`hi-instagram.liquid`)
- [ ] Best sellers section (separate from featured collection)

### Collection Pages
- [x] Collection banner (`hi-collection-banner.liquid`)
- [x] Product grid with filtering + sorting (`hi-collection-product-grid.liquid`, `hi-facets.liquid`)
- [ ] Set up collection handles in Shopify admin (Men's, Women's, Youth, Activity, Accessories, New Arrivals, Best Sellers)

### Product Pages
- [x] Product image carousel + swatches (`hi-product-main.liquid`)
- [x] Product features strip (`hi-product-features.liquid`)
- [x] Product highlights section (`hi-product-highlights.liquid`)
- [x] Product lifestyle banner (`hi-product-lifestyle.liquid`)
- [x] Product FAQ accordion (`hi-product-faq.liquid`)
- [x] Related products (`hi-product-related.liquid`)
- [x] Cart drawer (`hi-cart-drawer.liquid`)
- [x] Reviews widget (Judge.me installed and embedded on product page)

### About Us Page ✅
- [x] Hero (`hi-about-hero.liquid`)
- [x] Mission statement (`hi-about-mission.liquid`)
- [x] Brand story (`hi-about-story.liquid`)
- [x] Values grid (`hi-about-values.liquid`)
- [x] Promise section (`hi-about-promise.liquid`)
- [x] Commitment / stats (`hi-about-commitment.liquid`)
- [x] Pull quote (`hi-about-quote.liquid`)
- [x] CTA banner (`hi-about-cta.liquid`)

### Contact Page ✅
- [x] Hero (`hi-contact-hero.liquid`)
- [x] Contact methods — email, phone, chat (`hi-contact-methods.liquid`)
- [x] Contact form with hours + HQ info (`hi-contact-form.liquid`)
- [x] Mini FAQ (`hi-contact-faq.liquid`)

### FAQ Page ✅
- [x] Hero with image (`hi-faq-hero.liquid`)
- [x] Sidebar nav + accordion groups (Orders, Shipping, Returns, Sizing, Mission) (`hi-faq-body.liquid`)
- [x] Still Need Help CTA → Contact page

### Static Pages
- [ ] Shipping & Returns
- [ ] Privacy Policy
- [ ] Terms & Conditions

---

## Phase 3 — Integrations & Launch

### Email
- [x] Klaviyo: install and connect store
- [x] Klaviyo: configure email signup form / popup
- [ ] Klaviyo: set up abandoned cart flow
- [ ] Klaviyo: set up welcome email flow

### Payments
- [ ] Shopify Payments configuration
- [ ] PayPal integration
- [ ] Apple Pay enablement
- [ ] Google Pay enablement

### Reviews
- [x] Install Judge.me or Loox
- [ ] Configure review request emails
- [ ] Add review widget to product pages

### Analytics
- [ ] Google Analytics 4 setup
- [ ] Meta Pixel setup
- [ ] Verify Shopify Analytics dashboard

### Social
- [ ] Instagram feed app install and configure
- [ ] Facebook shop integration

### SEO
- [ ] Audit and set URL handles for all pages
- [ ] Write meta titles for all pages
- [ ] Write meta descriptions for all pages
- [ ] Add alt tags to all product and lifestyle images
- [ ] Submit sitemap to Google Search Console

### QA & Launch
- [ ] Mobile QA pass (iOS Safari, Android Chrome)
- [ ] Tablet QA pass
- [ ] Desktop QA pass (Chrome, Firefox, Safari)
- [ ] Performance audit (aim for 90+ Lighthouse score)
- [ ] Cross-browser QA
- [ ] Final client review and approval
- [ ] Go live (publish dev theme to live)
- [ ] Post-launch smoke test
