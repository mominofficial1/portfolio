import chez from "@/assets/chez-mockup.png.asset.json";
import saltline from "@/assets/saltline-mockup.png.asset.json";
import glow from "@/assets/glow-mockup.png.asset.json";
import devconf from "@/assets/devconf-mockup.png.asset.json";
import thames from "@/assets/thames-mockup.png.asset.json";
import leadlux from "@/assets/leadlux-mockup.png.asset.json";
import leadgen from "@/assets/leadgen-mockup.png.asset.json";

export const EMAIL = "232311005@vu.edu.bd";

export const SOCIALS = {
  github: "https://github.com/mominofficial",
  linkedin:
    "https://www.linkedin.com/in/md-momin-ali-3913b6351?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/momin141016?igsh=amkxd29iNnZjNGk1",
  facebook: "https://www.facebook.com/share/197nfLBTN9/",
  whatsapp: "https://wa.me/8801792872188",
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  link?: string;
  status: string;
  statusTone: "live" | "dev";
  accent: "indigo" | "emerald";
  note?: string;
  category: "shopify" | "web" | "growth";
  image: string;
  year?: string;
  role?: string;
  overview?: string;
  stack?: string[];
  highlights?: string[];
};

export type Service = {
  title: string;
  body: string;
  deliverables: string[];
};

export type ServicePackage = {
  id: string;
  name: string;
  kicker: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  accent: "indigo" | "emerald" | "coral";
  popular?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "chez-provence",
    category: "shopify",
    title: "Chez Provence",
    tag: "E-COMMERCE / SHOPIFY",
    description:
      "Home décor & lifestyle Shopify storefront — faux florals, wreaths, and decorative pieces, built with custom sections including trust badges, testimonials, and an accordion FAQ.",
    link: "https://chez-provence.co.uk/",
    status: "LIVE",
    statusTone: "live",
    accent: "indigo",
    image: chez.url,
    year: "2026",
    role: "Shopify Developer",
    overview:
      "A warm, editorial home décor storefront for a UK brand. I built the theme around a full-bleed hero, an announcement carousel and custom Liquid sections so the client can restyle seasonal collections without touching code.",
    stack: ["Shopify Liquid", "Custom Sections", "JavaScript", "CSS"],
    highlights: [
      "Custom hero + seasonal announcement bar",
      "Trust badges, testimonials and accordion FAQ sections",
      "Speed-tuned image loading and mobile-first layout",
    ],
  },
  {
    slug: "saltline-footwear",
    category: "shopify",
    title: "Footwear Storefront (Shoe Store)",
    tag: "E-COMMERCE / SHOPIFY",
    description:
      "Custom Shopify Liquid storefront for a footwear brand — product pages, trust badges, and accordion FAQ blocks, localized for regional checkout rules.",
    link: "https://mitech14.myshopify.com/",
    status: "DEV STORE — PASSWORD PROTECTED",
    statusTone: "dev",
    accent: "indigo",
    note: "Store password: 123",
    image: saltline.url,
    year: "2026",
    role: "Shopify Developer",
    overview:
      "SALTLINE is a footwear storefront built for the Bangladeshi market — cash-on-delivery friendly checkout copy, BDT pricing and a dark editorial look inspired by premium sneaker retail.",
    stack: ["Shopify Liquid", "Metafields", "JavaScript", "CSS"],
    highlights: [
      "Localized shipping & COD messaging",
      "Custom product page with size guidance",
      "Order tracking page and FAQ accordions",
    ],
  },
  {
    slug: "glow-beauty",
    category: "web",
    title: "Glow Beauty",
    tag: "WEB APP / E-COMMERCE",
    description:
      "Latest Shopify build for a beauty brand — clean product presentation and conversion-focused layout.",
    status: "DEV STORE — PASSWORD PROTECTED",
    statusTone: "dev",
    accent: "indigo",
    note: "Contact for access",
    image: glow.url,
    year: "2026",
    role: "Full-Stack Developer",
    overview:
      "A cosmetics store with a bold gradient identity, featured product grid, cart flow and an admin view for managing catalogue items.",
    stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    highlights: [
      "Featured products grid with category chips",
      "Cart, login and admin dashboard flows",
      "Conversion-focused product cards",
    ],
  },
  {
    slug: "thames-glow-beauty",
    category: "shopify",
    title: "Thames Glow Beauty",
    tag: "E-COMMERCE / SHOPIFY",
    description:
      "Minimal clean-beauty Shopify storefront — serif branding, soft editorial imagery and a trust-badge row that lifts add-to-cart confidence.",
    link: "https://a9v3sr-qf.myshopify.com/",
    status: "LIVE",
    statusTone: "live",
    accent: "indigo",
    image: thames.url,
    year: "2026",
    role: "Shopify Developer",
    overview:
      "A quiet, premium skincare storefront: black-and-cream palette, serif wordmark and a favourites carousel with sale badges. Built to feel like a boutique rather than a marketplace.",
    stack: ["Shopify Liquid", "Custom Sections", "CSS"],
    highlights: [
      "Secure checkout / free shipping / returns badge row",
      "Editorial hero with restrained typography",
      "Sale-tagged favourites collection carousel",
    ],
  },
  {
    slug: "leadlux",
    category: "web",
    title: "LeadLux — Digital Services",
    tag: "WEB APP / SERVICE MARKETPLACE",
    description:
      "Service catalogue site for a remote digital agency — filterable categories, per-service pricing, cart and login.",
    status: "LIVE",
    statusTone: "live",
    accent: "emerald",
    image: leadlux.url,
    year: "2026",
    role: "Front-End Developer",
    overview:
      "LeadLux sells digital services the way a store sells products. I built the catalogue with category filter chips, price-per-unit cards and a cart so clients can check out a bundle of services in one go.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    highlights: [
      "Category filtering across 8 service groups",
      "Deep teal + cream brand system",
      "Cart and account flows",
    ],
  },
  {
    slug: "lead-generation",
    category: "growth",
    title: "Lead Generation & Data Research",
    tag: "DIGITAL MARKETING / DATA",
    description:
      "Verified B2B lead lists — business name, phone, category, rating, review count and address, cleaned and structured for outreach campaigns.",
    status: "ONGOING SERVICE",
    statusTone: "dev",
    accent: "emerald",
    image: leadgen.url,
    year: "2025 — present",
    role: "Lead Researcher",
    overview:
      "Manual and semi-automated research into local business niches (salons, clinics, studios) delivered as clean spreadsheets ready for cold calling, WhatsApp or email outreach.",
    stack: ["Google Sheets", "Google Maps Research", "Data Cleaning"],
    highlights: [
      "Deduplicated, verified phone numbers",
      "Category + rating + review-count enrichment",
      "Delivered in CSV / Sheets for any CRM",
    ],
  },
  {
    slug: "devconf-2026",
    category: "web",
    title: "Programming Hero — Assignment 1 (Batch 14)",
    tag: "WEB DEVELOPMENT / COURSEWORK",
    description:
      "Front-end assignment built during Programming Hero's Batch 14 — HTML, CSS & JavaScript fundamentals.",
    link: "https://mominofficial.github.io/assignment1/",
    status: "LIVE",
    statusTone: "live",
    accent: "emerald",
    image: devconf.url,
    year: "2025",
    role: "Front-End Developer",
    overview:
      "A developer-conference landing page built during Programming Hero Batch 14 — dark cinematic hero, speaker grid and schedule section, written with vanilla HTML, CSS and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Full-bleed hero with layered typography",
      "Responsive speaker and schedule grids",
      "Pure vanilla implementation, no framework",
    ],
  },
];

export const REVIEWS = [
  {
    quote:
      "Momin rebuilt our wig store from the ground up. Product pages load fast, the design looks premium, and our order rate went up within the first month. He explained everything clearly and delivered ahead of schedule.",
    name: "Md. Boshirul Islam",
    role: "Owner, Royal Hair Wigs",
    source: "Direct Client",
    initials: "BI",
  },
  {
    quote:
      "We needed a Shopify theme customised without breaking anything. He handled the Liquid work, the FAQ sections and the speed issues in a few days. Communication was easy the whole way through.",
    name: "Farhana Rahman",
    role: "Founder, Aurelia Home",
    source: "Direct Client",
    initials: "FR",
  },
  {
    quote:
      "Clean code, clean design, zero drama. Momin took a rough Figma idea and turned it into a working storefront with a checkout flow our customers actually finish.",
    name: "Tanvir Hossain",
    role: "Director, Northline Traders",
    source: "Direct Client",
    initials: "TH",
  },
];
export const COLLECTIONS = [
  {
    id: "shopify",
    name: "Shopify Storefronts",
    kicker: "Custom Liquid builds",
    blurb:
      "Theme development, custom sections and conversion-tuned product pages built directly in Liquid.",
  },
  {
    id: "web",
    name: "Web Apps & Interfaces",
    kicker: "React & front-end engineering",
    blurb:
      "Full-stack builds and front-end interfaces — catalogues, carts, dashboards and landing pages.",
  },
  {
    id: "growth",
    name: "Growth, Data & Marketing",
    kicker: "Leads, ads & research",
    blurb:
      "Verified B2B lead lists, WhatsApp API outreach and paid campaign work that feeds the storefronts.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    title: "Shopify Store Setup & Theme Development",
    body: "Full store build or theme customization in custom Liquid — sections, metafields, product pages and checkout copy.",
    deliverables: [
      "Custom Liquid sections & snippets",
      "Product, collection & cart page tuning",
      "Metafield-driven content blocks",
      "Mobile-first responsive styling",
      "Speed & Core Web Vitals review",
    ],
  },
  {
    title: "Full-Stack Web Development",
    body: "React + Tailwind front-ends backed by Node.js, Express and MongoDB — APIs, auth, admin dashboards and databases.",
    deliverables: [
      "React / Tailwind UI engineering",
      "Node.js & Express REST APIs",
      "MongoDB schema design",
      "Authentication & protected routes",
      "Admin dashboard & CRUD flows",
    ],
  },
  {
    title: "Landing Pages & Conversion Design",
    body: "Fast, editorial landing pages with trust badges, testimonials and FAQ blocks designed to lift add-to-cart and enquiry rates.",
    deliverables: [
      "Hero & above-the-fold design",
      "Trust badges & testimonial blocks",
      "FAQ accordions & feature grids",
      "Form & CTA optimization",
      "A/B-ready component structure",
    ],
  },
  {
    title: "Speed & SEO Optimisation",
    body: "Image and script tuning, semantic markup, meta and schema work so stores load fast and rank.",
    deliverables: [
      "Image compression & lazy loading",
      "Script & third-party audit",
      "Semantic HTML & meta tags",
      "JSON-LD structured data",
      "Core Web Vitals action plan",
    ],
  },
  {
    title: "Paid Ads & Social Media",
    body: "Meta, Google and TikTok ad setup, plus social media management, Canva creatives and CapCut video edits.",
    deliverables: [
      "Campaign strategy & targeting",
      "Canva creative sets",
      "CapCut video ad edits",
      "Pixel & conversion setup",
      "Weekly performance report",
    ],
  },
  {
    title: "Lead Generation & WhatsApp API",
    body: "Verified B2B lead research delivered in CSV/Sheets, plus WhatsApp API outreach campaigns for clients in Dubai, the USA and Italy.",
    deliverables: [
      "Verified B2B lead lists",
      "Phone, email & address enrichment",
      "WhatsApp API template setup",
      "CRM-ready CSV / Sheets export",
      "Campaign follow-up sequence",
    ],
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter Audit",
    kicker: "Quick wins",
    price: "$199",
    description: "A focused review and tune-up for an existing store or page.",
    features: [
      "Store or site audit report",
      "Speed & mobile fixes",
      "SEO meta + schema cleanup",
      "1 round of revisions",
      "3-day turnaround",
    ],
    cta: "Book an audit",
    accent: "indigo",
  },
  {
    id: "growth",
    name: "Growth Build",
    kicker: "Most popular",
    price: "$499+",
    description: "A complete Shopify theme build or landing-page package built to convert.",
    features: [
      "Custom Liquid sections or React UI",
      "Product / collection page builds",
      "Trust badges, FAQs & testimonials",
      "Speed & SEO pass",
      "7–14 day delivery",
    ],
    cta: "Start this build",
    accent: "emerald",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale Package",
    kicker: "Full-stack",
    price: "$999+",
    description: "End-to-end web app, dashboard or multi-service build with ongoing support.",
    features: [
      "React front-end + Node back-end",
      "MongoDB database & auth",
      "Admin dashboard & API design",
      "Ads / lead-gen add-on available",
      "Priority support for 30 days",
    ],
    cta: "Build with me",
    accent: "coral",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Shopify",
    items: ["Custom Liquid", "Custom Sections", "Theme Customization", "Product Page Builds", "Metafields"],
  },
  {
    title: "Front-End",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Back-End",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Authentication", "Git & GitHub"],
  },
  {
    title: "Marketing & Creative",
    items: ["Meta / Google / TikTok Ads", "Lead Generation", "WhatsApp API", "SEO Basics", "Canva", "CapCut"],
  },
];
