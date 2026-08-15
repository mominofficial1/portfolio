# Momin's Digital Canvas (58)

Build a Personal Portfolio Website — MD Momin Ali

Build a personal portfolio website for a Shopify developer, front-end web engineer, and digital marketer named MD Momin Ali.

Stack: React + Tailwind CSS, React Router for pages, Node.js/Express backend only for the contact form submission endpoint. Animation library: Framer Motion (framer-motion) for all transitions, reveals, and micro-interactions described below.

Global Design System
Light theme, consistent across all pages (no light/dark toggle needed) — clean, bright, premium-editorial feel rather than a flat plain-white look
Background: 
#FAF7F1 (warm off-white / cream, not stark white) with a very subtle soft radial indigo/emerald glow behind the hero and section breaks for depth; content sits in cards with 
#FFFFFF background, rounded-2xl, soft diffused shadow (shadow-lg shadow-black/5), a hairline border (rgba(11,29,38,0.08)), generous padding
Primary accent: indigo 
#5B4FE0 (deepened slightly for contrast on light backgrounds) · Secondary accents: emerald 
#1F9D74, coral 
#E85C3F · Text/ink: deep navy 
#0B1D26 for headings, warm charcoal 
#3A3F42 for body copy
Buttons: solid indigo pill-shaped primary buttons (cream text), navy outline pill secondary buttons, rounded-full, all with soft drop shadow so they lift off the white background
Badges: small pill labels on a soft indigo-tinted background (rgba(91,79,224,0.10)) with indigo text and a hairline indigo border (e.g. "OPEN TO WORK", "PROJECTS", "SERVICES")
Fonts: Space Grotesk (bold, uppercase, tight tracking) for headlines, JetBrains Mono for labels/badges/tags, Inter for body text — load all three from Google Fonts
Cards sit on the cream background with a soft shadow + hairline border, and gain a hover lift + gentle colored glow (indigo or emerald depending on context) so they still feel dimensional against white — never flat or contrast-less
Section backgrounds alternate very subtly between the cream base and a slightly whiter/warmer tint, plus occasional soft blurred color blobs (indigo/emerald, low opacity) positioned behind section headings, to keep the white theme from feeling sterile
Dividers between sections use a thin gradient line (transparent → indigo/emerald → transparent) instead of a hard border
Global Animation Language (bold & eye-catching)
Page transitions: dramatic fade + slide + slight scale (opacity 0→1, y: 40→0, scale: 0.97→1, ~450ms with a springy ease) on route change via Framer Motion AnimatePresence, with the outgoing page sliding out in the opposite direction so the transition feels directional, not just a fade
Scroll reveals: sections don't just fade — they slide in from alternating directions (left/right/up) with a slight overshoot spring, plus a staggered cascade for lists of cards/items (~80–120ms stagger, larger stagger delay than a subtle site would use) so content visibly "arrives" in sequence
Card hover (desktop): noticeable lift translateY(-8px to -10px) with a subtle 3D tilt following the cursor (rotateX/rotateY via Framer Motion, capped to a few degrees), a vivid glow shadow in the card's accent color, and border color animating in — all on a springy ~250ms transition
Buttons: confident scale-up (~1.06–1.08) with an animated glow "pulse" ring that expands and fades outward on hover, plus a satisfying scale-down + slight rotation on click/tap
Hero name/heading: animated gradient text (indigo → emerald → coral sweep, slow looping shimmer) in addition to the type-in effect, so the headline itself feels alive
Social icons: fill indigo with a bounce-and-rotate micro-interaction on hover (icon overshoots then settles), plus a ripple effect emanating from the icon on click
Stats counters: numbers count up with an elastic/overshoot easing (not linear) so they "bounce" slightly as they land on the final value
Sticky navbar: starts transparent over the hero, then animates in a frosted white/cream backdrop-blur background with a soft shadow as the user scrolls past the hero; the active nav link's underline animates with a springy slide-and-stretch between links
Badges/pills: the "OPEN TO WORK" badge has a visible glowing pulse ring animation (like a live status indicator) to draw the eye
Cursor-aware background: in the hero and section headers, the soft indigo/emerald glow blobs subtly follow scroll position/parallax as the user scrolls, adding depth and movement to the page
Project card grid: cards animate in with a bold staggered "cascade" entrance (scale + fade + slide), and on hover the accent-colored glow border animates around the card's edge rather than appearing instantly
Navbar (sticky, all pages)
Logo left: "MOMIN" in cream + ".DEV" in indigo (wordmark style)
Center/left nav links with icons: Home, About, Works, Contact
Right side: indigo "Let's Talk" pill button with icon
Active nav link gets an animated indigo underline/indicator that slides between links on navigation
Page 1: Home
Hero Section
Green "OPEN TO WORK" pill badge (gentle pulse animation)
Large heading: "I'm Md Momin Ali" (name in indigo, animated type-in effect)
Subheading: "Shopify Developer & Web Engineer"
Paragraph: "Final-year CSE student and Shopify Liquid developer. I build custom storefronts and front-end websites, backed by two years of hands-on digital marketing experience — so what I build is designed to convert, not just to load."
Two buttons: "Book A Call" (indigo, phone icon), "Copy Email" (outline, copy icon) — email to copy: 232311005@vu.edu.bd. "Copy Email" shows a brief animated checkmark/"Copied!" confirmation on click.
Circular profile photo, right side, with soft indigo/emerald glow ring behind it (slow pulsing/breathing glow animation)
Row of clickable social icons below the subheading (use lucide-react or react-icons), circular outline buttons in cream that fill indigo on hover:
Email: mailto:232311005@vu.edu.bd
GitHub: https://github.com/mominofficial
LinkedIn: https://www.linkedin.com/in/md-momin-ali-3913b6351?utm_source=share_via&utm_content=profile&utm_medium=member_android
Instagram: https://www.instagram.com/momin141016?igsh=amkxd29iNnZjNGk1
Facebook: https://www.facebook.com/share/197nfLBTN9/
WhatsApp: https://wa.me/8801792872188
Stats Row (3 cards)

"2+ Years Experience" | "3.93 CGPA" (Final-year CSE, Varendra University) | "Clients in Dubai · USA · Italy" — big bold text in indigo/emerald gradient. Numbers animate with a count-up effect as the row scrolls into view.

Two-Column Section

Left card — "FOCUS AREAS" badge, heading "What I Do", subtext "From custom Shopify builds to the marketing campaigns that drive traffic to them." List items each with icon, name, description, tag badge (items stagger in on scroll):

Shopify Development — Custom Liquid theme & section builds · Founder, LeadLux (tag: SHOPIFY)
Front-End Web Development — HTML, CSS, JavaScript, responsive builds (tag: WEB DEV)
Digital Marketing — Social media, paid ads & lead generation · Royal Hair Wigs (tag: MARKETING)
LeadLux — Freelance solutions brand I operate, connecting clients with development & marketing services (tag: BRAND)

Right card — "PROJECTS" badge, heading "My Works", subtext "Custom Shopify storefronts and front-end builds, made for real brands." Uses the Project Cards defined in the shared "Projects / Works Content" section below (thumbnail, title, category tag, arrow icon, staggered reveal on scroll).

Both cards have a "View All →" button top right (arrow nudges right on hover).

Clients & Collaborators

"CLIENTS" badge, heading "Who I've Worked With", subtext "Currently working remotely with international brands." Simple text/logo-style entry: Royal Hair Wigs — Remote, Oct 2024–Present (clients across Dubai, USA & Italy)

Services Section

"SERVICES" badge, heading "What I Offer", subtext "End-to-end Shopify and web development, backed by marketing that knows how to convert." Instead of a flat 4-card grid, use an alternating spotlight layout: one large "featured" service card (full-width, icon + title + expanded description + a short 3-bullet list of what's included) followed by the remaining services in a tighter 3-card row below it. Each service icon sits in a rounded square that animates with a bold rotate/bounce on hover, and cards cascade in on scroll with the dramatic staggered entrance described in the Animation Language section.

Featured service (large card):

Shopify Development (storefront icon) — "Custom Liquid theme builds, product pages, and section development — no template shortcuts. I build storefronts that are fast, on-brand, and built to convert from day one."
Includes: Custom Liquid sections & theme customization · Product/collection page builds · Speed & conversion optimization

Supporting services (3-card row):

Front-End Web Development (code icon) — "Responsive, fast-loading websites built in HTML, CSS & JavaScript."
Digital Marketing (megaphone icon) — "Paid ad campaigns and lead generation across Meta, Google & TikTok."
Content & Design (camera icon) — "Ad creative in Canva and video editing in CapCut for brand campaigns."

Each supporting card also gets a small "Learn More →" text link (arrow nudges on hover) that can later link to a dedicated service detail page if one is added.

Skills & Tools

"SKILLS & TOOLS" badge, heading "My Expert Area", grid of tool logos with labels: Shopify Liquid, HTML5/CSS3/JavaScript, Canva, CapCut, Meta Ads, WhatsApp API. Logos subtly scale/glow on hover.

Reviews Section

"REVIEWS" badge, heading "Client Feedback", subtext "What people I've worked with have to say." Placeholder testimonial cards with 5-star rating, italic quote, avatar circle with initials, name, role, source tag badge (Direct Client / Upwork / Fiverr) — clearly marked as placeholder content for Momin to replace with real reviews once received. Cards fade/slide in on scroll, optionally auto-rotate/carousel on mobile:

"[Placeholder — replace with real client feedback]" — [Client Name], [Role] (Direct Client)
"[Placeholder — replace with real client feedback]" — [Client Name], [Role] (Upwork)
"[Placeholder — replace with real client feedback]" — [Client Name], [Role] (Fiverr)
Closing CTA

Centered card, "LET'S WORK TOGETHER" badge, heading "Let's Build Something Great", subtext "Open to Shopify development projects, front-end builds, and freelance collaborations.", indigo "Get In Touch →" button (soft glow pulse to draw attention).

Footer

"© 2026 MD Momin Ali" left, center links: Privacy Policy, Terms & Conditions, right: social icons linking to:

GitHub: https://github.com/mominofficial
LinkedIn: https://www.linkedin.com/in/md-momin-ali-3913b6351?utm_source=share_via&utm_content=profile&utm_medium=member_android
Instagram: https://www.instagram.com/momin141016?igsh=amkxd29iNnZjNGk1
Facebook: https://www.facebook.com/share/197nfLBTN9/
WhatsApp: https://wa.me/8801792872188
Page 2: About

Reuses the Reviews section (all testimonials above) and the closing CTA card + footer. Add an intro section above with a bio: final-year Computer Science & Engineering student at Varendra University, Rajshahi (CGPA 3.93 avg, last 6 semesters), focused on Shopify theme development and front-end engineering, with two years of hands-on digital marketing experience at Royal Hair Wigs. Mission statement: building storefronts and websites that are designed to convert, not just to look good. Bio text and stats fade/slide in on scroll, consistent with Home.

Page 3: Works

"PROJECTS" badge, heading "My Works", subtext "Custom Shopify storefronts and front-end builds." Full grid of Project Cards as defined in the shared "Projects / Works Content" section below — this page shows all project cards in full detail (not the condensed Home-page list).

Page 4: Contact

"GET IN TOUCH" badge, heading "Let's Work Together", subtext "Have a project in mind? Let's discuss how I can help.", list of contact method rows (icon in indigo rounded square, label, description, external link arrow — each row slides in with a slight stagger, arrow nudges on hover):

Email — 232311005@vu.edu.bd
WhatsApp — https://wa.me/8801792872188
GitHub — https://github.com/mominofficial
LinkedIn — https://www.linkedin.com/in/md-momin-ali-3913b6351?utm_source=share_via&utm_content=profile&utm_medium=member_android
Instagram — https://www.instagram.com/momin141016?igsh=amkxd29iNnZjNGk1
Facebook — https://www.facebook.com/share/197nfLBTN9/

"Copy Email" button below the list (animated "Copied!" confirmation on click, matching the Hero behavior).

"BOOK A MEETING" badge, heading "Schedule a Call", subtext "Pick a time that works for you. I'll get back to you within 24 hours.", indigo "Open Calendar" button.

"SEND A MESSAGE" badge, heading "Contact Form", form fields: Name, Email (side by side), Subject (full width), Message (textarea), indigo full-width "Send Message" submit button. Inputs get a subtle indigo focus-ring glow animation. Submit button shows a loading spinner state, then an animated success checkmark/message on successful submission. Wire this to a simple Node/Express POST endpoint that emails or logs the submission.

Page 5: Login

Centered card on a soft cream gradient background with a slow, subtle animated shift between warm cream and faint indigo/emerald glow blobs. Icon in indigo rounded square at top, heading "Welcome Back", subtext "Sign in to manage your portfolio content." Fields: Email Address, Password (with show/hide eye icon — icon cross-fades on toggle, "Forgot?" link), indigo "Login" submit button (loading state on submit), bottom text "Admin access only". Card fades/scales in on page load.

Projects / Works Content (shared — used on Home "My Works" card AND the dedicated Works page)

Replace any placeholder project entries with the following real projects.

Each project card must show: thumbnail/screenshot area, project title, category tag badge, short description, status badge, and a "Visit Site ↗" button.

Clicking the card (or the button) opens the live link in a new browser tab (target="_blank", rel="noopener noreferrer") — only if a link is provided; if no link exists for a project, hide the button/link instead of showing a broken or dead one.
1. Chez Provence
Category tag: E-COMMERCE / SHOPIFY
Description: "Home décor & lifestyle Shopify storefront — faux florals, wreaths, and decorative pieces, built with custom sections including trust badges, testimonials, and an accordion FAQ."
Link: https://chez-provence.co.uk/
Status badge: LIVE
2. Footwear Storefront (Shoe Store)
Category tag: E-COMMERCE / SHOPIFY
Description: "Custom Shopify Liquid storefront for a footwear brand — product pages, trust badges, and accordion FAQ blocks, localized for regional checkout rules."
Link: https://mitech14.myshopify.com/
Status badge: DEV STORE — PASSWORD PROTECTED
Show a small note under the button: Store password: 123 (in muted JetBrains Mono text) so visitors can actually get in.
3. Glow Beauty
Category tag: E-COMMERCE / SHOPIFY
Description: "Latest Shopify build for a beauty brand — clean product presentation and conversion-focused layout."
Link: https://a9v3sr-qf.myshopify.com/
Status badge: DEV STORE — PASSWORD PROTECTED (leave password note out since none was provided — show "Contact for access" instead)
4. Programming Hero — Assignment 1 (Batch 14)
Category tag: WEB DEVELOPMENT / COURSEWORK
Description: "Front-end assignment built during Programming Hero's Batch 14 — HTML, CSS & JavaScript fundamentals."
Link: https://mominofficial.github.io/assignment1/
Status badge: LIVE
Project Grid — Layout & Interaction
Cards arranged in a responsive grid: 2 columns on desktop, 1 column on tablet/mobile — must look clean and fully usable on both full desktop and mobile screen sizes, no horizontal scrolling or cut-off text on small screens
Hover state on desktop: card lifts slightly (translateY(-5px)) with a soft glow border in the category's accent color — indigo for Shopify/e-commerce projects, emerald for web dev/coursework projects — smooth ~200ms transition
On mobile: tap the card to reveal/expand the description and "Visit Site" button (since there's no hover) — smooth height/opacity expand animation (Framer Motion AnimatePresence/layout animation)
Status badges ("LIVE" vs "DEV STORE — PASSWORD PROTECTED") are small, clearly visible pill tags in the top corner of each card so visitors know what to expect before clicking — "LIVE" pill in emerald/green, "DEV STORE" pill in coral/amber for quick visual distinction
The "Visit Site ↗" button is a clearly clickable indigo pill button, separate from the general card click area, so both the card and button reliably open the link — button scales/glows on hover, matching global button animation language
Notes
Make all pages fully responsive (mobile-first)
Use lucide-react icons throughout
Reuse the same navbar and footer components across all pages
This is a portfolio demo project — placeholder testimonial content is fine and clearly marked as such, but every other detail (name, projects, stats, contact info, social links) must reflect the exact content specified above, not invented data
Keep all animations smooth, purposeful, and performant (prefer transform/opacity transitions, avoid layout-thrashing animations) — the site should feel polished and alive, not distracting or gimmicky

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mominofficial.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b75648c5-ca82-4ad4-b66a-97f7ece95411).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
