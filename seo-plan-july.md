━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 1: **TECHNICAL** **SEO** — broadindia.com — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### T1 — CRAWLABILITY & INDEXATION

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| robots.txt exists and is valid | ⚠ LIMITED | P0 | Could not fetch this session | Paste contents or confirm live |
| robots.txt does not block CSS/JS | ⚠ LIMITED | P0 | Unverified | Confirm via paste |
| GPTBot not blocked | ⚠ LIMITED | P1 | Unverified | Confirm via paste |
| PerplexityBot not blocked | ⚠ LIMITED | P1 | Unverified | Confirm via paste |
| ClaudeBot not blocked | ⚠ LIMITED | P1 | Unverified | Confirm via paste |
| XML sitemap exists | ⚠ LIMITED | P0 | Unverified | Confirm via paste or GSC |
| Sitemap submitted to GSC | ⚠ LIMITED | P1 | No GSC access this session | Check GSC Sitemaps tab |
| No noindex on key pages | ✓ PASS | P0 | Homepage, about, blogs all show `index, follow` | None needed |
| Canonical present — homepage | ✓ PASS | P1 | Correct self-canonical | None needed |
| Canonical present — /about | ✓ PASS | P1 | Correct self-canonical | None needed |
| Canonical present — /contact-us | ⚠ PARTIAL | P1 | Canonical present, but no title/meta on this page | Add title + meta description |
| Canonical present — blog posts | ✗ FAIL | P0 | Zero canonical on all blog posts checked | Add self-canonical to blog template |
| No conflicting canonical signals | ✓ PASS | P1 | No conflicts found on fetched pages | None needed |
| Crawl depth ≤ 3 clicks | ✓ PASS | P1 | Blog posts reachable in 2 clicks from home | None needed |
| No crawl traps | ✓ PASS | P1 | No infinite pagination/facets observed | None needed |
| 4xx errors on key pages | ⚠ PARTIAL | P0 | One blog URL has literal spaces in slug (`real - cost - absorption...`), likely broken/soft-404 | Fix slug, 301 to clean URL |
| 5xx errors present | — N/A | P0 | Not observed on fetched pages | — |
| Redirect chains ≤ 1 hop | ⚠ LIMITED | P2 | Needs crawler tool (Screaming Frog/Ubersuggest) | Run and check |
| No redirect loops | ⚠ LIMITED | P0 | Unverified | Run crawler tool |

`⚠ **LIMITED**: Log file analysis and full crawl unavailable without server/crawler access`

---

### T2 — CORE WEB VITALS & PERFORMANCE

All checks ⚠ **LIMITED** — no Lighthouse report or PageSpeed Insights data available this session.

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| LCP / INP / CLS / TTFB / FCP thresholds | ⚠ LIMITED | P1/P2 | No Lighthouse data | Run PageSpeed Insights on 3 key URLs, paste results |
| Images in next-gen format | ⚠ PARTIAL | P2 | Site uses `.webp`/`.avif` in places, but several blog images still `.jpg`/`.jpeg`/`.png` | Convert remaining raster images to WebP |
| Images lazy-loaded / CDN / compression | ⚠ LIMITED | P2 | Can't confirm from markdown extraction | Confirm via view-source or Lighthouse |

**Note:** Given this is a Next.js site, images are served through `/_next/image` — that's a good sign for automatic optimisation, but I can't confirm actual **LCP**/**INP** without Lighthouse.

---

### T3 — MOBILE & USABILITY

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Viewport meta tag present | ✓ PASS | P0 | `width=device-width, initial-scale=1` on all pages checked | None needed |
| Mobile-first indexing compatible | ✓ PASS | P0 | Responsive Next.js build | None needed |
| Mobile usability errors = 0 (GSC) | ⚠ LIMITED | P1 | No GSC access | Check GSC Mobile Usability report |
| No intrusive interstitials | ✓ PASS | P1 | None observed | None needed |

---

### T4 — HTTPS & SECURITY

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| HTTPS enforced site-wide | ✓ PASS | P0 | All fetched URLs served over HTTPS | None needed |
| No mixed content | ✓ PASS | P1 | No HTTP assets found on HTTPS pages | None needed |
| HSTS header present | ⚠ LIMITED | P2 | Can't confirm headers from markdown extraction | Check via securityheaders.com |

---

### T5 — JAVASCRIPT RENDERING

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Key content not JS-rendered only | ✓ PASS | P0 | Content fully present in fetched HTML on homepage/about/blogs | None needed |
| Meta tags in initial HTML, not JS-injected | ✗ FAIL | P1 | Blog post pages show no `<title>`/meta in the fetched head at all — suggests these tags are either missing or client-side injected and not present at fetch time | Verify via GSC URL Inspection *View Crawled Page*; ensure Next.js `generateMetadata` runs for blog template |
| SSR/SSG in use | ✓ PASS | P1 | Next.js `_next/image` + server-rendered content confirms SSR/SSG | None needed |

---

### T6 — STRUCTURED DATA / SCHEMA

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Organization schema on homepage | ⚠ LIMITED | P1 | Not visible in markdown extraction — needs Rich Results Test | Run test, confirm |
| Article/BlogPosting schema on posts | ✗ FAIL (carried from baseline) | P1 | No schema markup evident; matches June baseline *zero schema site-wide* | Implement Article schema in blog template |
| Author as Person entity in schema | ✗ FAIL | P1 | Byline shows generic *BROAD India Engineering Team,* not a Person entity | Add named author + Person schema |
| datePublished/dateModified in schema | ✗ FAIL | P1 | Dates shown in visible text only, several are impossible future dates (see flag below) | Fix date field bug; add schema dates |
| FAQ schema on FAQ sections | ✗ FAIL | P1 | Recent posts have visible FAQ content (great!) but no FAQPage schema detected | Add FAQPage schema to FAQ sections — quick win, content already exists |
| LocalBusiness schema | ✗ FAIL | P2 | No schema for Surat/Gurugram offices found | Add LocalBusiness schema with both addresses |

🔴 **Data-integrity bug found:** Several blog posts are dated in the future relative to today (July 14, **2026**) — e.g. *Dec 26, **2026**,* *Dec 24, **2026**,* *Dec 15, **2026**,* *Dec 12, **2025*** mixed among posts dated April–June **2026**. This isn't just cosmetic: AI systems and Google both weight `datePublished`/`dateModified` as a freshness and trust signal. Future-dated or inconsistently-formatted dates (I count at least 6 different date formats across the archive — *22 June **2026**,* *02 March, **2026**,* *Sept 29, **2025**,* *Feb 22, **2025*** appears twice for different posts) undermine exactly the credibility signal **GEO** depends on. **P0 — flagging above severity because it's a **CMS**/data bug, not a missing feature.**

---

### T7 — SITE ARCHITECTURE & INTERNAL LINKING

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Flat architecture (≤3 clicks) | ✓ PASS | P1 | Home → Blogs → Post = 2 clicks | None needed |
| Topic clusters / pillar-spoke structure | ⚠ PARTIAL | P1 | Category tags exist (Waste Heat Recovery, CCHP, etc.) but no visible pillar page linking spokes together | Build pillar pages per category, link spokes to pillar |
| No orphan pages | ⚠ LIMITED | P1 | Needs full crawl | Run Screaming Frog/Ubersuggest |
| Homepage links to all major sections | ✓ PASS | P1 | Nav covers Products, Installations, About, BROAD Group, Blogs, Articles, Careers, Contact | None needed |
| Descriptive anchor text | ✓ PASS | P2 | *Read More* links use descriptive surrounding H2/title context | Minor: *Read More* itself is generic, consider keyword-rich anchors |
| Content duplication/cannibalisation risk | ✗ FAIL | P1 | 15+ near-identical posts from Feb–Oct 2025 on the same narrow topics (e.g. 5 separate posts essentially explaining *what is a vapor absorption chiller*) | Consolidate/merge into fewer authoritative pillar posts, 301 redirect the thin duplicates |

---

### T8 — INTERNATIONAL & ADVANCED

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| llms.txt present at root | ✗ FAIL (carried from baseline, unverified this session) | P1 | Absent per June baseline; couldn't re-fetch this session | Confirm and create — you have dev access, this is a same-day fix |
| llms.txt lists priority pages | — N/A | P1 | N/A until file exists | Create with brand, purpose, top 10 pages |
| Preferred domain set (www vs non-www) | ✓ PASS | P2 | Site consistently uses `[www.broadindia.com`](https://www.broadindia.com`) across all internal links and canonicals | None needed |

---

### T — PILLAR SCORE BLOCK

``` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 1: **TECHNICAL** **SEO** — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ T1 Crawlability:       58/**100**  🟡  (heavily **LIMITED** — several checks pending your robots.txt/sitemap confirmation) T2 Core Web Vitals:    N/A     ⚠  (fully **LIMITED** — no Lighthouse data) T3 Mobile:             83/**100**  🟢 T4 Security:           83/**100**  🟢 T5 JS Rendering:       50/**100**  🟡  (blog metadata gap drags this down) T6 Structured Data:    8/**100**   🔴  (essentially unchanged from baseline — still near-zero schema) T7 Architecture:       58/**100**  🟡 T8 International:      50/**100**  🟡  (llms.txt still missing, unverified) ───────────────────────────────── **TECHNICAL** **PILLAR** **SCORE**: 56/**100*** 🟡  (*excludes T2, which is N/A pending Lighthouse data — true score likely lower once **CWV** is factored in) P0 **CRITICAL** **ISSUES**:    4   (blog canonical/meta gap, broken slug, future-dated content, unverified robots.txt/sitemap) P1 **HIGH** **ISSUES**:        9 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 2: ON-**PAGE** **SEO** — broadindia.com — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### O1 — TITLE TAGS & META

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Title tag present — homepage/about/blogs index | ✓ PASS | P0 | All three present and unique | None needed |
| Title tag present — contact-us | ✗ FAIL | P0 | No title tag detected | Add: "Contact BROAD India \| Surat & Gurugram HVAC Offices" |
| Title tag present — blog posts (60+) | ✗ FAIL | P0 | Zero title tags across all posts checked | Fix blog template metadata generation |
| Title 50–60 characters | ⚠ PARTIAL | P1 | Homepage title is ~47 chars — usable but slightly short | Extend with a qualifier, e.g. *...| BROAD India (Est. 2001)* |
| No duplicate titles | ✓ PASS | P1 | Home/about/blogs all unique — [FIXED] since baseline | None needed |
| Meta description present — homepage/about/blogs | ✓ PASS | P1 | All present, on-topic | None needed |
| Meta description present — contact-us, blog posts | ✗ FAIL | P1 | Missing everywhere except main templates | Add unique 150–160 char description per post |
| OG/Twitter tags | ⚠ PARTIAL | P2 | Present on homepage/about, absent on blog posts | Extend OG/Twitter to blog template |

---

### O2 — HEADING STRUCTURE

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Single H1 per page — homepage | ⚠ PARTIAL | P1 | Hero section renders the same heading text twice (carousel slides), risking duplicate/multiple H1s | Confirm in dev tools; keep one true H1, demote repeats to visually-hidden or H2 |
| Single H1 per page — blog posts | ✓ PASS | P1 | One clear H1 per post checked | None needed |
| H2s used for major sections | ✓ PASS | P2 | Recent posts use strong question-based H2s (*How does...*, *What deployments...*) — excellent for GEO | None needed |
| Heading hierarchy (no skips) | ✓ PASS | P2 | Clean H1→H2 structure on recent post | None needed |
| Headings descriptive | ⚠ PARTIAL | P2 | Older 2025 posts likely use generic single-sentence headers (thin content) | Rewrite headers when consolidating old posts (see T7) |

---

### O3 — KEYWORD OPTIMISATION

`⚠ **LIMITED**: Full keyword mapping, cannibalisation, and density analysis require **GSC** + SEMrush/Ubersuggest exports`

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| URL slug contains target keyword | ✓ PASS | P1 | Slugs are consistently descriptive and keyword-rich | None needed |
| URL slugs short and clean | ✗ FAIL | P2 | One slug contains literal spaces: `/blogs/real - cost - absorption - chillers - india - capex - opex - breakdown` | Rename to hyphenated slug, 301 redirect |
| Keyword cannibalisation | ⚠ LIMITED | P1 | Can't confirm ranking overlap without GSC, but ~15 posts target near-identical queries (*what is a vapor absorption chiller*) | Pull GSC query data per URL before consolidating |
| Image alt text contains keyword naturally | ✓ PASS | P2 | Alt text mirrors descriptive post titles | None needed |

---

### O4 — CONTENT QUALITY & E-E-A-T

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Named author with credentials | ✗ FAIL | P1 | Byline is generic *BROAD India Engineering Team,* not an individual, credentialed person | Attribute to a real named engineer (you have credentialed staff — use them) |
| Author bio links to external presence | ✗ FAIL | P1 | No bio, no LinkedIn link | Add author box + LinkedIn |
| Original data/statistics | ✓ PASS (recent posts only) | P1 | Recent posts cite real deployment data (MW recovered, COP values) with source attribution to ScienceDirect | None needed — extend pattern to older posts |
| Outbound links to authoritative sources | ✓ PASS (recent posts only) | P2 | ScienceDirect citation present in checked post | Extend to older posts during rewrite |
| datePublished/dateModified visible | ⚠ PARTIAL | P1 | Dates visible in body text, inconsistent formats, some impossible future dates (flagged in Pillar 1 T6) | Fix CMS date bug; standardize format |
| Content freshness (updated within 90 days) | ⚠ PARTIAL | P1 | Publishing cadence is active (posts every 2-4 days through June 2026) but no evidence of updating older posts | Add *last updated* refresh cycle for evergreen posts |
| No thin content (<300 words) | ✗ FAIL | P1 | Feb–Oct 2025 posts are visibly short (2-3 min reads), generic, template-like | Consolidate/rewrite into fewer authoritative long-form pieces |
| No duplicate/cannibalised content | ✗ FAIL | P1 | 15+ posts cover nearly identical ground | Merge into pillar pages, redirect thin duplicates |
| Content comprehensiveness vs top 3 SERPs | ⚠ LIMITED | P1 | Can't benchmark without SERP tool; recent posts subjectively strong (FAQ, data, sourcing) | Confirm via manual SERP check on 2-3 priority terms |

---

### O5 — INTERNAL LINKING (ON-PAGE LAYER)

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Each page has ≥2 contextual internal links | ✗ FAIL | P1 | Checked post has one CTA link to /contact-us, no in-body links to related posts/products | Add 2-3 contextual links per post (e.g. link *absorption chiller* mentions to product/pillar pages) |
| Descriptive anchor text | ⚠ PARTIAL | P2 | CTA anchor (*Talk to BROAD India's HVAC engineers*) is descriptive; blog list uses generic *Read More* | Vary *Read More* anchors where possible |
| Related content linked at end of articles | ✗ FAIL | P2 | No *related posts* module observed | Add related-posts block by category tag |

---

### O6 — IMAGES & MEDIA

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Descriptive alt text | ✓ PASS | P1 | Alt text mirrors post titles, is descriptive | None needed |
| Descriptive filenames | ✗ FAIL | P3 | Filenames are date-based, not descriptive (`22 June 2026-Blog.png`) | Rename to descriptive-slug.webp going forward |
| No image-only content | ✓ PASS | P1 | All content has full text equivalent | None needed |

---

### O — PILLAR SCORE BLOCK

``` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 2: ON-**PAGE** **SEO** — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ O1 Title/Meta:         42/**100**  🔴  (fixed on 4 template pages, broken on 60+ blog posts + contact-us) O2 Heading Structure:  70/**100**  🟡 O3 Keywords:           58/**100**  🟡  (heavily **LIMITED** — needs **GSC**/SEMrush) O4 Content / E-E-A-T:  45/**100**  🔴  (bimodal: recent posts excellent, majority of archive thin/duplicate) O5 Internal Linking:   35/**100**  🔴 O6 Images / Media:     75/**100**  🟢 ───────────────────────────────── ON-**PAGE** **PILLAR** **SCORE**:  54/**100**  🟡 P0 **CRITICAL** **ISSUES**:    2  (missing title/meta on contact-us + all blog posts) P1 **HIGH** **ISSUES**:        11 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 3: **OFF**-**PAGE** **SEO** — broadindia.com — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`⚠ **LIMITED**: No SEMrush/Ubersuggest export this session — DR, referring domains, and toxic-link % below are qualitative from web research, not tool-verified`

### F1 — BACKLINK PROFILE

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Domain Authority vs competitor median | ⚠ LIMITED | P1 | No SEMrush/Ubersuggest data | Pull a free Ubersuggest or Moz snapshot |
| Referring domain count | ⚠ LIMITED | P1 | Web search surfaced zero independent third-party editorial links — every non-BROAD result was a directory listing (IndiaMART) or personal LinkedIn profile | Same as above — but qualitatively this looks thin |
| Link diversity (blogs, news, directories) | ✗ FAIL | P2 | No news, no guest posts, no .edu/.gov mentions found; only directory listings | Start digital PR (see F3) |
| No toxic/spammy links | — N/A | P0 | Can't assess without a backlink export | Pull toxic-link report |

---

### F2 — E-E-A-T & BRAND AUTHORITY

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| NAP consistency across listings | ✗ FAIL | P0 | **Confirmed and worse than baseline flagged:** found 4 separate IndiaMART profiles for the brand — one under *Broad Air Conditioning* (New Delhi, legacy-looking global profile), and three under *Broad Air Conditioning India Private Limited* (Gurgaon/Gurugram, split across different product categories). **None show the Surat HQ** that's on your own contact page. Business name also varies (*Broad Air Conditioning* vs *...India Private Limited* vs official *...India Pvt. Ltd.*). | This is bigger than one bad listing — it's 4 fragmented, none-matching profiles. Consolidate into one master IndiaMART listing per office (Surat HQ + Gurugram), matching your site's exact name/address/phone format |
| Author entities on external platforms | ✗ FAIL | P1 | No named individual author profile linked from content (matches O4 finding) | Create LinkedIn presence for named technical authors |
| Brand mentioned on 3rd-party authoritative sites | ✗ FAIL | P1 | No independent press, industry publication, or forum mentions found in search | Start with F3 digital PR plan below |
| Google Business Profile / reviews | ⚠ LIMITED | P2 | Not directly checkable via web search this session | Check GBP directly — confirm listing exists for Surat |
| Industry directory listings | ⚠ PARTIAL | P2 | Present on IndiaMART only (fragmented); no ExportersIndia, TradeIndia, Clutch, or Justdial presence found for BROAD India specifically | Claim and standardize 2-3 more relevant B2B directories |

---

### F3 — DIGITAL PR & LINK ACQUISITION

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Links from niche publications | ✗ FAIL | P1 | None found | Pitch trade press (Cooling India, ACREX, HVAC&R magazines) with the deployment-data content you already have (e.g. the absorption heat pump post) |
| Original research/data assets | ✓ PASS (content exists, not yet leveraged) | P1 | Your recent blog content already contains original-feeling data synthesis (MW recovered, COP figures) — this is exactly link-magnet material, it's just never been pitched externally | Repackage 1-2 posts as a *State of Industrial Waste Heat Recovery in India* data page and pitch it |
| Guest posts / press coverage | ✗ FAIL | P2 | None found | Same PR push as above |

---

### F4 — SOCIAL SIGNALS & CROSS-PLATFORM PRESENCE

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Active profiles on 3+ platforms | ✓ PASS | P2 | Facebook, Instagram, YouTube, LinkedIn all linked in footer | None needed — but verify posting activity/recency on each |
| Social profiles link back to site | ✓ PASS | P2 | All footer icons link out correctly | None needed |
| Brand present on platforms AI systems index (Reddit, Quora) | ✗ FAIL | P1 | No presence found | Low-effort GEO win: answer 2-3 relevant Quora/Reddit threads on absorption cooling with genuine expertise, link back |
| YouTube channel present | ✓ PASS | P3 | Channel exists (linked in footer) | Confirm upload activity/subscriber count |

---

### F5 — COMPETITOR BACKLINK BENCHMARKING

| METRIC | BROAD INDIA | Thermax (chiller div.) | Shuangliang India | GAP |
|---|---|---|---|---|
| Domain Authority/Rating | ⚠ Unknown | Likely high (Thermax is a listed, decades-old public company with a full corporate domain) | ⚠ Unknown, but Shuangliang shows up prominently in trade/export directories globally | Likely **Behind** — both competitors have broader digital footprints |
| Referring Domains | ⚠ Unknown | Higher — Thermax has investor relations, press, and a large corporate site generating natural links | ⚠ Unknown | Likely **Behind** |
| Brand Mention Volume | Low (BROAD's own content only) | High (frequent trade press, investor coverage) | Moderate (B2B directory presence) | **Behind** |

`⚠ **LIMITED**: Precise DR/referring-domain numbers require a SEMrush or Ahrefs pull on all three domains — directional gap above is qualitative from search visibility only`

---

### F — PILLAR SCORE BLOCK

``` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 3: **OFF**-**PAGE** **SEO** — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ F1 Backlink Profile:   20/**100**  🔴  (heavily **LIMITED** — no third-party editorial links found) F2 E-E-A-T / Brand:    22/**100**  🔴  (**NAP** fragmentation confirmed and worse than baseline scope) F3 Digital PR:         15/**100**  🔴 F4 Social / Cross-Platform: 55/**100**  🟡 F5 Competitor Gap:     Behind — qualitative ───────────────────────────────── **OFF**-**PAGE** **PILLAR** **SCORE**: 28/**100**  🔴 P0 **CRITICAL** **ISSUES**:    1  (**NAP** fragmentation across 4 directory profiles) P1 **HIGH** **ISSUES**:        5 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 4: **GEO** — **GENERATIVE** **ENGINE** **OPTIMISATION** — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### G1 — CONTENT STRUCTURE FOR AI RETRIEVAL

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Pages open with direct answer/definition | ✓ PASS (recent posts) | P1 | The absorption heat pump post opens with a striking data-led hook, then a direct definition — genuinely strong GEO writing | Apply this pattern retroactively to old posts |
| Quantified data points per section | ✓ PASS (recent posts) | P1 | 2-3+ named figures per section (MW recovered, COP, temperatures) with a comparison table | None needed on new content |
| Statistical claims cite primary sources | ✓ PASS (recent posts) | P1 | ScienceDirect citation present and specific | None needed |
| FAQ sections present | ✓ PASS (recent posts) | P1 | Well-formed FAQ block on recent posts | None needed — but needs schema (see T6) |
| Named, credentialed author | ✗ FAIL | P1 | Generic team byline, not individual | Same fix as O4 — assign to a named engineer |
| Content depth ≥ top-cited competitors | ⚠ PARTIAL | P1 | Recent posts likely competitive; ~40 older posts are clearly thinner than what ranks/gets cited today | Prioritize consolidation of old posts (see T7/O4) |

---

### G2 — ENTITY & BRAND SIGNALS

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Brand entity consistently named | ✗ FAIL | P1 | *BROAD India,* *BROAD Air Conditioning,* *Broad Air Conditioning India Private Limited* all used across different platforms | Standardize to one legal-name format everywhere (site, IndiaMART, LinkedIn, GBP) |
| Organization schema with sameAs links | ✗ FAIL | P1 | No schema detected; even if added, needs sameAs to LinkedIn/YouTube/etc. | Implement alongside T6 schema fix |
| Founder/key person Person schema | ✗ FAIL | P1 | No individual entity surfaced anywhere in your content or profiles | Tied to the named-author fix — same root cause |
| Wikipedia/Wikidata presence | ✗ FAIL | P3 | None found | Low priority — company likely doesn't meet notability bar yet |
| 3rd-party platform presence (Reddit, Quora, G2) | ✗ FAIL | P1 | None found | See F4 fix |
| Cross-platform presence 4+ | ⚠ PARTIAL | P1 | Facebook, Instagram, YouTube, LinkedIn = 4, but no G2/Trustpilot/Reddit/Quora — and IndiaMART itself is fragmented (4 profiles) | Consolidate IndiaMART, add Reddit/Quora presence |
| dateModified freshness (90 days) | ✗ FAIL | P1 | Undermined by the future-dated/inconsistent date bug already flagged | Fix CMS date bug first — this blocks the whole freshness signal |

---

### G3 — AI CRAWLER ACCESS

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| GPTBot / PerplexityBot / ClaudeBot / Google-Extended allowed | ⚠ LIMITED | P1 | Unverified this session — genuinely the single fastest thing for you to check since you have CMS access | Paste your robots.txt content in your next message and I'll score this immediately |
| llms.txt present + correct | ✗ FAIL (carried from baseline) | P1 | Absent per June baseline | Create today — you have the content inventory already (60+ posts, clear categories) |
| Sitemap up to date | ⚠ LIMITED | P0 | Unverified | Confirm via GSC or paste sitemap.xml |
| No JS-only rendering on primary content | ✓ PASS | P0 | Content is server-rendered, fully visible in fetched HTML | None needed |

---

### G4 — PASSAGE-LEVEL OPTIMISATION

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Self-contained H2 sections | ✓ PASS (recent posts) | P1 | Each H2 in the checked post answers one question independently | None needed |
| Definitions stated explicitly | ✓ PASS (recent posts) | P2 | Clear, explicit definitions throughout | None needed |
| Tables for comparative data | ✓ PASS (recent posts) | P2 | Deployment table used effectively | Extend to older content during rewrites |
| Inline citations at statistics | ✓ PASS (recent posts) | P1 | ScienceDirect cited specifically | None needed |
| Who/What/When/Where/Why/How coverage | ✓ PASS (recent posts) | P1 | FAQ block covers most of this naturally | None needed |

**Note:** G1/G4 make clear your April–June **2026** content is already doing the hard part right. The gap isn't writing quality — it's **metadata, schema, entity consistency, and crawler access**, all fixable in days, not months.

---

### G5 — GEO CITATION STATUS (Live Testing)

| CHECK | STATUS | SEVERITY | FINDING | FIX |
|---|---|---|---|---|
| Brand cited for category query (*best vapor absorption chiller company India*) | ⚠ PARTIAL | P1 | BROAD's own homepage, product page, and self-authored *Top 5 VAM Manufacturers* post all surface in search — but no *independent* third-party source ranks BROAD as a top pick. An AI Overview citing this topic would likely cite BROAD's own self-comparison, not neutral validation | Get genuine third-party mentions (trade press, directories with reviews) to earn independent citation, not just self-authored comparison content |
| Competitor displacing brand | ⚠ PARTIAL | P1 | Thermax and Kirloskar appear in broader HVAC directory listings (hvacinformed, ensun) with fuller company profiles than BROAD's fragmented IndiaMART presence | Consolidate directory presence (see F2) |
| Brand content in AI snippet-style sources | ⚠ PARTIAL | P1 | BROAD's own content is well-optimized for this but blocked by the missing meta/schema layer | Fix T6/O1 first — this is the actual blocker |

``` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ # MANUAL GEO TEST INSTRUCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Since you have direct access, run these on ChatGPT, Gemini, and Claude.ai this week:

**PROMPT** 1: *What is **BROAD** India and what do they offer?* **PROMPT** 2: "What are the best vapor absorption chiller companies in India?* **PROMPT** 3: *How do I reduce industrial cooling costs without electricity?* **PROMPT** 4: ***BROAD** India vs Thermax absorption chillers — which is better?* **PROMPT** 5: *What should I know about vapor absorption chiller technology for industrial cooling?"

Report back which platforms cite **BROAD**, and who's cited instead. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ```

---

### G6 — GEO COMPETITOR BENCHMARKING

| METRIC | BROAD INDIA | Thermax | Shuangliang India |
|---|---|---|---|
| llms.txt present | ✗ | ⚠ Unknown | ⚠ Unknown |
| AI bots unblocked | ⚠ Unverified | ⚠ Unknown | ⚠ Unknown |
| FAQ schema on key pages | ✗ (content exists, schema missing) | ⚠ Unknown | ⚠ Unknown |
| Named author with credentials | ✗ | ⚠ Unknown (corporate press has named execs) | ⚠ Unknown |
| 4+ cross-platform presence | ⚠ Partial (fragmented) | ✓ Likely (public company, IR site, press) | ⚠ Unknown |
| Definition-first content structure | ✓ (recent posts only) | ⚠ Unknown | ⚠ Unknown |
| Independent third-party citation | ✗ | ✓ Likely (listed company, trade press) | ⚠ Unknown |

---

### G — PILLAR SCORE BLOCK

``` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **PILLAR** 4: **GEO** — Delta #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ G1 Content Structure:  62/**100**  🟡  (bimodal — excellent recent, weak old) G2 Entity Signals:     22/**100**  🔴 G3 AI Crawler Access:  N/A     ⚠  (pending your robots.txt/llms.txt confirmation) G4 Passage Optimisation: 80/**100** 🟢  (recent posts only — your best-performing area) G5 Citation Status:    30/**100**  🔴  ⚠ **PARTIAL** until manual tests returned G6 Competitor **GEO**:     Behind — qualitative ───────────────────────────────── **GEO** **PILLAR** **SCORE**:      44/**100*** 🔴  (*excludes G3, pending your confirmation) P0 **CRITICAL** **ISSUES**:    1  (unverified sitemap/AI-crawler access) P1 **HIGH** **ISSUES**:        10 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━