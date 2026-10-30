// Generated Portfolio Source of Truth with all 35 authentic projects
export const EMAIL = "232311005@vu.edu.bd";

export const SOCIALS = {
  github: "https://github.com/mominofficial1",
  behance: "https://www.behance.net/mominofficial",
  drive: "https://drive.google.com/drive/folders/1kCXA5lbp44P2t90yDaLO5-8eJDEYx3F3?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-momin-ali-3913b6351?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/momin141016?igsh=amkxd29iNnZjNGk1",
  facebook: "https://www.facebook.com/share/197nfLBTN9/",
  whatsapp: "https://wa.me/8801792872188",
};

export type ProjectCategory = "app" | "shopify" | "web" | "gmc" | "branding" | "growth" | "social";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  link?: string;
  githubUrl?: string;
  apkUrl?: string;
  status: string;
  statusTone: "live" | "dev";
  accent: "indigo" | "emerald";
  note?: string;
  category: ProjectCategory;
  categoryLabel?: string;
  image: string;
  year?: string;
  role?: string;
  overview?: string;
  stack?: string[];
  highlights?: string[];
  deliverables?: string[];
  problem?: string;
  strategy?: string;
  result?: string;
  featured?: boolean;
};

export const PROJECT_CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "app", label: "MOBILE & AI APPS" },
  { id: "shopify", label: "SHOPIFY STOREFRONTS" },
  { id: "web", label: "WEB PLATFORMS" },
  { id: "gmc", label: "GOOGLE MERCHANT & SHOPPING" },
  { id: "branding", label: "CREATIVE & VIDEO / NASA" },
  { id: "growth", label: "GROWTH DATA & LEADS" },
  { id: "social", label: "SOCIAL MEDIA MANAGEMENT" },
];

export type Service = {
  number?: string;
  title: string;
  body: string;
  shortDesc?: string;
  deliverables: string[];
  clientType?: string;
  cta?: string;
};

export type ServicePackage = {
  id: string;
  name: string;
  kicker: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  accent: "indigo" | "emerald" | "coral";
  popular?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
};

export const REVIEWS: Testimonial[] = [
  {
    quote: "Momin handled our store layout and digital outreach with absolute professionalism. His understanding of product positioning, direct customer messaging, and lead extraction brought real customers straight to our business.",
    author: "Md. Boshirul Islam",
    role: "Owner",
    company: "Royal Hair Wigs",
    project: "E-Commerce & B2B Growth"
  },
  {
    quote: "Our Google Merchant Center was stuck with a Misrepresentation policy flag for weeks. Momin audited every single policy detail, corrected our checkout requirements, and had our entire catalog approved within days.",
    author: "E-Commerce Store Owner",
    role: "Founder",
    company: "Light Keepers Bookstore",
    project: "GMC Suspension Recovery"
  },
  {
    quote: "The speed, clean typography, and warm aesthetic Momin delivered for our storefront exceeded our expectations. Conversion rates improved noticeably after the new layout went live.",
    author: "D2C Brand Founder",
    role: "Brand Director",
    company: "Lifestyle Storefront Client",
    project: "Custom Shopify Theme"
  }
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Shopify Store Setup & Theme Development",
    body: "Complete custom Shopify store design, theme customization (Liquid), collection architecture, and high-converting product pages.",
    shortDesc: "Complete custom Shopify store design, theme customization (Liquid), collection architecture, and high-converting product pages.",
    deliverables: [
      "Custom Shopify theme setup & branding",
      "Product collection architecture & filtering",
      "Cart drawer & conversion trust badges",
      "Mobile-first responsive optimization"
    ],
    clientType: "D2C brands, e-commerce founders & retailers",
    cta: "Launch My Store"
  },
  {
    number: "02",
    title: "Full-Stack Web Development",
    body: "Bespoke web applications, modern responsive static sites, and dynamic user interfaces using clean JavaScript, React, HTML5, and modern CSS.",
    shortDesc: "Bespoke web applications, modern responsive static sites, and dynamic user interfaces using clean JavaScript, React, HTML5, and modern CSS.",
    deliverables: [
      "Custom frontend web interfaces",
      "Interactive product showcases & portals",
      "Clean semantic code & zero bloat",
      "Static hosting on GitHub Pages / Vercel"
    ],
    clientType: "Businesses, startups & personal brands",
    cta: "Build My Website"
  },
  {
    number: "03",
    title: "Landing Pages & Conversion Design",
    body: "High-impact, editorial landing pages built to maximize ad campaign return on investment and drive direct customer actions.",
    shortDesc: "High-impact, editorial landing pages built to maximize ad campaign return on investment and drive direct customer actions.",
    deliverables: [
      "Conversion-focused visual hierarchy",
      "Speed-optimized layout & hero storytelling",
      "Clear call-to-actions & social proof modules",
      "A/B testing-ready layout structure"
    ],
    clientType: "Product launches, ad campaigns & agencies",
    cta: "Design My Landing Page"
  },
  {
    number: "04",
    title: "Speed, SEO & Core Web Vitals",
    body: "Technical website audit, asset minification, image compression, script cleanup, and structured schema to boost Google search rankings.",
    shortDesc: "Technical website audit, asset minification, image compression, script cleanup, and structured schema to boost Google search rankings.",
    deliverables: [
      "Core Web Vitals diagnostic & remediation",
      "On-page SEO, meta tags & OpenGraph setup",
      "Render-blocking resource removal",
      "Mobile speed score improvement"
    ],
    clientType: "Stores experiencing slow load times or low SEO visibility",
    cta: "Optimize My Speed"
  },
  {
    number: "05",
    title: "Paid Ads & Google Merchant Center",
    body: "End-to-end Google Merchant Center suspension recovery (Misrepresentation, policy fixes), Google Shopping feed setup, and Google Ads management.",
    shortDesc: "End-to-end Google Merchant Center suspension recovery (Misrepresentation, policy fixes), Google Shopping feed setup, and Google Ads management.",
    deliverables: [
      "GMC Misrepresentation suspension diagnosis & fix",
      "Product feed attributes (GTIN, MPN, Brand) sync",
      "Google Shopping campaign creation & bidding",
      "Merchant policy compliance certification"
    ],
    clientType: "Shopify merchants with GMC suspensions or launching Shopping Ads",
    cta: "Fix My GMC Feed"
  },
  {
    number: "06",
    title: "Lead Generation & WhatsApp Marketing",
    body: "Data-driven B2B lead extraction, verified prospect lists, and targeted WhatsApp API campaigns for direct client acquisition.",
    shortDesc: "Data-driven B2B lead extraction, verified prospect lists, and targeted WhatsApp API campaigns for direct client acquisition.",
    deliverables: [
      "Niche-targeted verified lead data mining",
      "WhatsApp outreach funnel & automated scripts",
      "Local business data intelligence & analytics",
      "Direct pipeline conversion setup"
    ],
    clientType: "B2B suppliers, service agencies & exporters",
    cta: "Generate Leads"
  },
  {
    number: "07",
    title: "AI & Mobile App Prototyping",
    body: "Architecting intelligent mobile tools and cross-platform applications integrating Gemini API, real-time datasets, and native Flutter or React Native experiences.",
    shortDesc: "Architecting intelligent mobile tools and cross-platform applications integrating Gemini API, real-time datasets, and native Flutter or React Native experiences.",
    deliverables: [
      "Flutter & React Native mobile builds",
      "Gemini AI API & LLM reasoning integrations",
      "Live government & benchmark price API synchronizations",
      "Standalone Android APK compilation & distribution"
    ],
    clientType: "Civic tech founders, consumer startups & smart apps",
    cta: "Build Mobile App"
  },
  {
    number: "08",
    title: "Motion Graphics, Commercial Video & Short Ads",
    body: "High-retention motion graphics in Adobe After Effects, commercial video editing in Premiere Pro & CapCut Pro, kinetic typography, and viral short-form UGC ads.",
    shortDesc: "High-retention motion graphics in Adobe After Effects, commercial video editing in Premiere Pro & CapCut Pro, kinetic typography, and viral short-form UGC ads.",
    deliverables: [
      "After Effects motion graphics & keyframe animation",
      "Commercial video editing for YouTube, Meta & TikTok",
      "Kinetic typography, creative hooks & sound design",
      "Social media promotional posters & visual ad variations"
    ],
    clientType: "E-commerce brands, YouTube creators, marketing agencies & advertisers",
    cta: "Produce Videos"
  },
  {
    number: "09",
    title: "E-Commerce Product Research & Market Analysis",
    body: "Data-driven winning product discovery, competitor ad intelligence, profit margin modeling, supplier vetting, and trend forecasting.",
    shortDesc: "Data-driven winning product discovery, competitor ad intelligence, profit margin modeling, supplier vetting, and trend forecasting.",
    deliverables: [
      "Winning product validation with competitor ad analytics",
      "Profit margin forecasting & cost-per-acquisition analysis",
      "Supplier reliability vetting & shipping speed validation",
      "Niche saturation & search demand trend intelligence"
    ],
    clientType: "Shopify store owners, dropshippers & new product launches",
    cta: "Research Products"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter Audit",
    kicker: "Quick wins",
    price: "$199",
    period: "one-time",
    description: "For businesses that need an expert audit and a clear, actionable improvement roadmap.",
    features: [
      "Full Shopify / Website Technical Audit",
      "Google Merchant Center Compliance Check",
      "Social Media Profile & Content Health Diagnostic",
      "Conversion & UX Breakdown Report",
      "Speed & Core Web Vitals Assessment",
      "Actionable 7-Day Fix Checklist",
      "Direct 1-on-1 Strategy Review"
    ],
    cta: "Book Starter Audit",
    accent: "indigo"
  },
  {
    id: "growth",
    name: "Growth Build",
    kicker: "Most popular",
    price: "$499+",
    period: "custom scope",
    description: "For businesses that need a stronger Shopify / web presence, GMC approval, and high-converting creative assets.",
    features: [
      "Complete Shopify Store Setup or Custom Rebuild",
      "100% GMC-Approved Product Architecture & Policy Clearance",
      "High-Converting Hero & Collection Page Design",
      "5x Custom Social Media Creatives & AI Product Videos",
      "Mobile Performance & Speed Optimization",
      "Trust Badges & Social Proof Integrations",
      "14 Days Post-Launch Support"
    ],
    cta: "Get Growth Build",
    accent: "emerald",
    popular: true
  },
  {
    id: "scale",
    name: "Scale Package",
    kicker: "Full-stack",
    price: "$999+",
    period: "complete solution",
    description: "For businesses looking for a complete, end-to-end growth-focused digital solution.",
    features: [
      "Full Custom Theme & Store Architecture",
      "Complete Google Merchant Center Setup & Policy Clearance",
      "Google Shopping & Ads Campaign Launch",
      "Dedicated Monthly Social Media Management (Content & SEO)",
      "10x High-Converting AI Video Commercials & UGC Ads",
      "In-Depth Winning Product Research & Competitor Intel",
      "B2B Lead Generation & WhatsApp Funnel",
      "Advanced SEO & Structured Data Schemas",
      "30 Days Priority Technical Support"
    ],
    cta: "Start Scale Project",
    accent: "coral"
  }
];

export const SKILL_GROUPS = [
  {
    title: "Mobile & AI",
    items: ["Flutter & Dart", "Google Gemini AI", "DAM Live Sync", "React Native", "Cross-Platform UI", "REST APIs"]
  },
  {
    title: "Shopify & Liquid",
    items: ["Custom Liquid", "Theme Customization", "Custom Sections", "Product Page Builds", "Metafields", "Cart Drawers"]
  },
  {
    title: "Front-End Engineering",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "TanStack Router", "Semantic HTML5", "Responsive UI"]
  },
  {
    title: "Back-End & Data",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL / DAM Sync", "Git & GitHub"]
  },
  {
    title: "Marketing & GMC",
    items: ["Google Merchant Center", "GMC Misrepresentation Fixes", "Google Shopping Ads", "B2B Lead Generation", "WhatsApp API Funnels"]
  },
  {
    title: "Creative & Motion",
    items: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut Pro", "Kinetic Typography", "UGC Video Ads", "DaVinci Resolve"]
  }
];

export const COLLECTIONS = [
  { slug: "shopify", name: "Shopify Storefronts", count: 8 },
  { slug: "app", name: "Mobile & AI Applications", count: 2 },
  { slug: "web", name: "Web Platforms", count: 9 },
  { slug: "gmc", name: "Google Merchant Center", count: 5 },
  { slug: "branding", name: "Creative & NASA Space Apps", count: 3 },
  { slug: "growth", name: "Growth & B2B Leads", count: 1 },
  { slug: "social", name: "Social Media Management", count: 7 },
];

export const PROJECTS: Project[] = [
  {
    "slug": "terra-farm-nasa",
    "title": "TERRA FARM — NASA SPACE APPS CHALLENGE 2025",
    "tag": "2ND RUNNER UP & GLOBAL NOMINEE • SPACE AGRICULTURE & CLOSED-LOOP EARTH BIO-FARMING",
    "description": "NASA International Space Apps Challenge 2025 award-winning submission. As Video Editor and Technical Researcher, I synthesized complex NASA Earth Observation data into a cinematic 4-minute visual showcase that earned 2nd Runner Up and Global Nominee status.",
    "link": "https://youtu.be/fQgrHd1F4a4?si=HouRaVhOMJ5AkJf0",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "branding",
    "categoryLabel": "Video Editing & Research",
    "image": "/nasa-space-apps-runnerup.jpg",
    "year": "2025",
    "role": "Lead Video Editor & Technical / Scientific Researcher (Team Terra Farm)",
    "overview": "Terra Farm is an advanced space-agriculture and sustainable earth bio-farming ecosystem developed for the NASA International Space Apps Challenge 2025. Winning 2nd Runner Up (Rajshahi Regional Event) and selected as Global Nominee, the project integrates satellite telemetry with closed-loop vertical farming to address planetary food security.",
    "stack": [
      "Cinematic Video Editing (Premiere Pro & DaVinci Resolve)",
      "Motion Graphics & Data HUDs (Adobe After Effects)",
      "NASA Earth & Space Telemetry Research",
      "Narrative Storyboarding & Pitch Scriptwriting",
      "Multi-Track Sound Design & Audio Pacing",
      "Cinematic Color Grading (Cosmic & Bio-Palettes)"
    ],
    "highlights": [
      "Cinematic Video Editing (Premiere Pro & DaVinci Resolve)",
      "Motion Graphics & Data HUDs (Adobe After Effects)",
      "NASA Earth & Space Telemetry Research",
      "Narrative Storyboarding & Pitch Scriptwriting",
      "Multi-Track Sound Design & Audio Pacing",
      "Cinematic Color Grading (Cosmic & Bio-Palettes)"
    ],
    "deliverables": [
      "Cinematic Video Editing (Premiere Pro & DaVinci Resolve)",
      "Motion Graphics & Data HUDs (Adobe After Effects)",
      "NASA Earth & Space Telemetry Research",
      "Narrative Storyboarding & Pitch Scriptwriting",
      "Multi-Track Sound Design & Audio Pacing",
      "Cinematic Color Grading (Cosmic & Bio-Palettes)"
    ],
    "problem": "NASA Space Apps evaluators review hundreds of global entries in high-stakes judging sessions. Communicating dense agricultural robotics, orbital environmental controls, and closed-loop biochemical cycles in a short presentation without losing scientific rigour or emotional captivation was an enormous challenge.",
    "strategy": "Crafted a compelling 3-act narrative arc: 'The Crisis' (global agricultural degradation and climate challenges), 'The Innovation' (Terra Farm closed-loop modular biosphere), and 'The Galactic Frontier' (space agriculture telemetry informing Earth farming). Designed animated telemetry HUDs, orbital motion paths, synchronized cosmic sound design, and sharp typography to keep retention at peak levels.",
    "result": "Awarded 2nd Runner Up at the NASA International Space Apps Challenge 2025 and officially nominated as Global Nominee. The presentation received exceptional praise from judges for narrative clarity, cinematic visual execution, and rigorous scientific research.",
    "featured": true
  },
  {
    "slug": "fair-prices",
    "title": "FAIR PRICES (ন্যায্য মূল্য) — AI MARKET & GROCERY BUDGETING APP",
    "tag": "AI-POWERED CITIZEN MARKET PRICE MONITOR & GROCERY OPTIMIZER FOR BANGLADESH",
    "description": "AI-driven citizen grocery budgeting and market surveillance mobile application designed for Bangladesh. Combines real-time DAM (Department of Agricultural Marketing) government benchmark price sync with crowdsourced citizen market verification and Google Gemini AI smart grocery budgeting.",
    "link": "https://fair-price-app-murex.vercel.app/",
    "githubUrl": "https://github.com/mominofficial1/fair-price-app",
    "apkUrl": "https://github.com/mominofficial1/fair-price-app/releases/download/v1.0.0/nejjo-mullo.apk",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "app",
    "categoryLabel": "AI & Mobile App",
    "image": "/fair-prices.jpg",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "AI-driven citizen grocery budgeting and market surveillance mobile application designed for Bangladesh. Combines real-time DAM (Department of Agricultural Marketing) government benchmark price sync with crowdsourced citizen market verification and Google Gemini AI smart grocery budgeting.",
    "stack": [
      "Flutter Native Mobile App & Web App",
      "Google Gemini AI Smart Budgeting Engine",
      "DAM Auto-Live Government Price Benchmark Sync",
      "Citizen Market Monitoring Feed (নাগরিক ফোরাম)",
      "Standalone Android APK Binary (v1.0.0 Release)",
      "Bilingual (Bangla & English) + Dark/Light Mode"
    ],
    "highlights": [
      "Flutter Native Mobile App & Web App",
      "Google Gemini AI Smart Budgeting Engine",
      "DAM Auto-Live Government Price Benchmark Sync",
      "Citizen Market Monitoring Feed (নাগরিক ফোরাম)",
      "Standalone Android APK Binary (v1.0.0 Release)",
      "Bilingual (Bangla & English) + Dark/Light Mode"
    ],
    "deliverables": [
      "Flutter Native Mobile App & Web App",
      "Google Gemini AI Smart Budgeting Engine",
      "DAM Auto-Live Government Price Benchmark Sync",
      "Citizen Market Monitoring Feed (নাগরিক ফোরাম)",
      "Standalone Android APK Binary (v1.0.0 Release)",
      "Bilingual (Bangla & English) + Dark/Light Mode"
    ],
    "problem": "Shoppers and families in Bangladesh struggle with volatile commodity prices, syndicate price gouging, lack of transparent local bazaar rates, and budgeting challenges.",
    "strategy": "Engineered an intelligent cross-platform application that ingests official DAM price benchmarks, enables verified shoppers to report live prices with photo receipts, and harnesses Google Gemini API to auto-generate healthy, balanced grocery lists tailored to specific budgets and family sizes.",
    "result": "Full transparency across essential commodities (rice, onion, oil, vegetables, poultry), real-time price trend alerts, crowdsourced community protection against overpricing, and automated AI meal & budget planning.",
    "featured": true
  },
  {
    "slug": "astrovia",
    "title": "ASTROVIA — THE JOURNEY THROUGH SPACE",
    "tag": "REAL NASA MISSIONS. REAL EXPLORATION. YOUR COSMIC JOURNEY.",
    "description": "A cosmic journey mobile application integrating NASA open mission datasets, planetary exploration telemetry, and interactive celestial navigation into a high-performance native Flutter app.",
    "link": "https://github.com/mominofficial1/astrovia/releases/download/v1.0.0/ASTROVIA.apk",
    "githubUrl": "https://github.com/mominofficial1/astrovia",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "app",
    "categoryLabel": "Mobile App / Space Exploration & NASA Data",
    "image": "/astrovia-showcase.jpg",
    "year": "2025–2026",
    "role": "Lead Flutter Developer & Celestial UI/UX Designer",
    "overview": "Astrovia is an interactive mobile space journey application built with Flutter that brings real NASA mission data, planetary exploration, and cosmic discovery to users' fingertips with high-performance native Android rendering.",
    "stack": [
      "Flutter",
      "Dart",
      "NASA API",
      "Android SDK",
      "GitHub Releases"
    ],
    "highlights": [
      "Real NASA Mission Data & Active Space Objective Trackers",
      "Interactive Planetary Profiles & Telemetry Cards",
      "High-Performance Native Flutter 60+ FPS Rendering",
      "Offline-Friendly Exploration Cache & Lightweight State",
      "Direct Downloadable Android APK Binary (v1.0.0 Release)"
    ],
    "deliverables": [
      "Flutter & Dart Cross-Platform Mobile Engine",
      "NASA Open API & Planetary Dataset Connectors",
      "Custom Celestial Vector & Shader Visual Pipeline",
      "Optimized Android APK Build & GitHub Release Pipeline",
      "Intuitive Touch Gestures for Cosmic Exploration"
    ],
    "problem": "Space enthusiasts and students often lack an accessible, cinematic, and interactive mobile platform to explore active NASA missions, planetary bodies, and cosmic timelines without encountering cumbersome academic databases.",
    "strategy": "Engineered with modular Flutter state management, decoupled API layers for NASA missions, and asset-compressed cosmic graphics.",
    "result": "Successfully built and packaged with standalone release v1.0.0 on GitHub, providing instantaneous APK installation and smooth celestial exploration.",
    "featured": true
  },
  {
    "slug": "modeflo",
    "title": "MODEFLO",
    "tag": "MONOCHROME HANDBAG & TOTE STOREFRONT",
    "description": "Monochrome handbag and tote storefront — bold editorial hero, FAQ, order tracking, and clean collection architecture built for high-ticket conversions.",
    "link": "https://modeflo.store/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/modeflo.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Monochrome handbag and tote storefront — bold editorial hero, FAQ, order tracking, and clean collection architecture built for high-ticket conversions.",
    "stack": [
      "Custom Shopify Theme",
      "Editorial Hero Architecture",
      "Order Tracking Integration",
      "GMC Compliance Setup",
      "Speed Optimization"
    ],
    "highlights": [
      "Custom Shopify Theme",
      "Editorial Hero Architecture",
      "Order Tracking Integration",
      "GMC Compliance Setup",
      "Speed Optimization"
    ],
    "deliverables": [
      "Custom Shopify Theme",
      "Editorial Hero Architecture",
      "Order Tracking Integration",
      "GMC Compliance Setup",
      "Speed Optimization"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "caspier",
    "title": "CASPIER",
    "tag": "PREMIUM LIGHTING STOREFRONT",
    "description": "Premium architectural lighting storefront — shop-by-room navigation, warm cinematic imagery, and conversion-focused product storytelling.",
    "link": "https://caspier.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/caspier.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Premium architectural lighting storefront — shop-by-room navigation, warm cinematic imagery, and conversion-focused product storytelling.",
    "stack": [
      "Shop-by-Room Experience",
      "Cinematic Product Pages",
      "Custom Collection Merchandising",
      "Mobile Viewport Optimization"
    ],
    "highlights": [
      "Shop-by-Room Experience",
      "Cinematic Product Pages",
      "Custom Collection Merchandising",
      "Mobile Viewport Optimization"
    ],
    "deliverables": [
      "Shop-by-Room Experience",
      "Cinematic Product Pages",
      "Custom Collection Merchandising",
      "Mobile Viewport Optimization"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "zalivia",
    "title": "ZALIVIA",
    "tag": "WOMEN'S FASHION & SWIMWEAR STOREFRONT",
    "description": "Women's fashion storefront — curated dresses, sets, and swimwear with seasonal sale campaigns and rich collection merchandising.",
    "link": "https://zalivia.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/zalivia.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Women's fashion storefront — curated dresses, sets, and swimwear with seasonal sale campaigns and rich collection merchandising.",
    "stack": [
      "Fashion Collection Merchandising",
      "Seasonal Sale Banners",
      "Size Guide Modals",
      "Streamlined Checkout"
    ],
    "highlights": [
      "Fashion Collection Merchandising",
      "Seasonal Sale Banners",
      "Size Guide Modals",
      "Streamlined Checkout"
    ],
    "deliverables": [
      "Fashion Collection Merchandising",
      "Seasonal Sale Banners",
      "Size Guide Modals",
      "Streamlined Checkout"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "reviveberry",
    "title": "REVIVEBERRY",
    "tag": "SUPPLEMENTS & WELLNESS STOREFRONT",
    "description": "Supplements and wellness storefront — trust-led hero, verified review stars, guarantee badges, and free-shipping thresholds.",
    "link": "https://reviveberry.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/reviveberry.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Supplements and wellness storefront — trust-led hero, verified review stars, guarantee badges, and free-shipping thresholds.",
    "stack": [
      "Trust Signals & Badges",
      "Subscription Options",
      "Free Shipping Threshold Bar",
      "Ingredient Transparency Sections"
    ],
    "highlights": [
      "Trust Signals & Badges",
      "Subscription Options",
      "Free Shipping Threshold Bar",
      "Ingredient Transparency Sections"
    ],
    "deliverables": [
      "Trust Signals & Badges",
      "Subscription Options",
      "Free Shipping Threshold Bar",
      "Ingredient Transparency Sections"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "de-bellas",
    "title": "DE_BELLAS",
    "tag": "BANGLADESHI BEAUTY & COSMETICS STOREFRONT",
    "description": "Bangladeshi cosmetics storefront — skincare, haircare, and makeup categories with clear Cash-on-Delivery (COD) messaging and local trust signals.",
    "link": "https://www.debellasbd.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/de-bellas.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Bangladeshi cosmetics storefront — skincare, haircare, and makeup categories with clear Cash-on-Delivery (COD) messaging and local trust signals.",
    "stack": [
      "Local Currency & COD Setup",
      "Skincare Category Merchandising",
      "Fast Mobile Load Times",
      "Direct WhatsApp Order Button"
    ],
    "highlights": [
      "Local Currency & COD Setup",
      "Skincare Category Merchandising",
      "Fast Mobile Load Times",
      "Direct WhatsApp Order Button"
    ],
    "deliverables": [
      "Local Currency & COD Setup",
      "Skincare Category Merchandising",
      "Fast Mobile Load Times",
      "Direct WhatsApp Order Button"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "chez-provence",
    "title": "CHEZ PROVENCE",
    "tag": "HOME DÉCOR & FAUX-FLORAL STOREFRONT",
    "description": "Home décor and faux-floral storefront — warm editorial hero, seasonal collections, trust badges, and comprehensive FAQ.",
    "link": "https://chez-provence.co.uk/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/chez-provence.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Home décor and faux-floral storefront — warm editorial hero, seasonal collections, trust badges, and comprehensive FAQ.",
    "stack": [
      "Warm Editorial Aesthetic",
      "Wreath & Floral Collections",
      "UK Shipping Rules",
      "Trust & Guarantee Badges"
    ],
    "highlights": [
      "Warm Editorial Aesthetic",
      "Wreath & Floral Collections",
      "UK Shipping Rules",
      "Trust & Guarantee Badges"
    ],
    "deliverables": [
      "Warm Editorial Aesthetic",
      "Wreath & Floral Collections",
      "UK Shipping Rules",
      "Trust & Guarantee Badges"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "saltline",
    "title": "SALTLINE",
    "tag": "PREMIUM FOOTWEAR STOREFRONT",
    "description": "Premium footwear storefront — gallery-style product pages, trust badges, and localized checkout rules (Password: 123).",
    "link": "https://mitech14.myshopify.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/saltline.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Premium footwear storefront — gallery-style product pages, trust badges, and localized checkout rules (Password: 123).",
    "stack": [
      "Custom Dark Teal / Cream Branding",
      "Dynamic Product Gallery",
      "Size Selection Interface",
      "Trust & Guarantee Architecture"
    ],
    "highlights": [
      "Custom Dark Teal / Cream Branding",
      "Dynamic Product Gallery",
      "Size Selection Interface",
      "Trust & Guarantee Architecture"
    ],
    "deliverables": [
      "Custom Dark Teal / Cream Branding",
      "Dynamic Product Gallery",
      "Size Selection Interface",
      "Trust & Guarantee Architecture"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "thames-glow-beauty",
    "title": "THAMES GLOW BEAUTY",
    "tag": "CLEAN BEAUTY & SKINCARE STOREFRONT",
    "description": "Skincare storefront — editorial product storytelling, before/after social proof, and streamlined cart flow.",
    "link": "https://a9v3sr-qf.myshopify.com/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "shopify",
    "categoryLabel": "Shopify Storefront",
    "image": "/thames-glow.png",
    "year": "2025–2026",
    "role": "Shopify Theme & Conversion Specialist",
    "overview": "Skincare storefront — editorial product storytelling, before/after social proof, and streamlined cart flow.",
    "stack": [
      "Clean Beauty Storytelling",
      "Social Proof Modules",
      "Quick-Add Cart Drawer",
      "Clean Policy Pages"
    ],
    "highlights": [
      "Clean Beauty Storytelling",
      "Social Proof Modules",
      "Quick-Add Cart Drawer",
      "Clean Policy Pages"
    ],
    "deliverables": [
      "Clean Beauty Storytelling",
      "Social Proof Modules",
      "Quick-Add Cart Drawer",
      "Clean Policy Pages"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "gmc-misrepresentation-fix",
    "title": "GMC Misrepresentation Fix — Light Keepers Bookstore",
    "tag": "GMC CASE STUDY",
    "description": "Recovered a Google Merchant Center account from a severe Misrepresentation suspension and successfully cleared the issue with Google's trust and safety team.",
    "status": "100% APPROVED",
    "statusTone": "live",
    "accent": "emerald",
    "category": "gmc",
    "categoryLabel": "GMC Case Study",
    "image": "/gmc-approval.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Recovered a Google Merchant Center account from a severe Misrepresentation suspension and successfully cleared the issue with Google's trust and safety team.",
    "stack": [],
    "highlights": [
      "Received official confirmation: 'The requested review of Misrepresentation has been completed and the issue no longer appears in your Merchant Center account.' 100% active feed restored."
    ],
    "deliverables": [],
    "problem": "The Merchant Center account (ID: 5835431664) was completely suspended under Google's 'Misrepresentation' policy, halting all shopping ads and free product listings.",
    "strategy": "Conducted an exhaustive policy audit: reconciled website contact details, added physical address verification, updated refund/return terms, eliminated inaccurate checkout rates, and structured product identifiers.",
    "result": "Received official confirmation: 'The requested review of Misrepresentation has been completed and the issue no longer appears in your Merchant Center account.' 100% active feed restored.",
    "featured": true
  },
  {
    "slug": "gmc-seveck-wellness",
    "title": "GMC Misrepresentation Fix — Seveck Wellness",
    "tag": "GMC CASE STUDY",
    "description": "Successfully resolved a complex Misrepresentation suspension for health & wellness brand Seveck Wellness, restoring Google Shopping ads and active catalog listings.",
    "status": "100% APPROVED",
    "statusTone": "live",
    "accent": "indigo",
    "category": "gmc",
    "categoryLabel": "GMC Case Study",
    "image": "/gmc-seveck-wellness.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Successfully resolved a complex Misrepresentation suspension for health & wellness brand Seveck Wellness, restoring Google Shopping ads and active catalog listings.",
    "stack": [],
    "highlights": [
      "Official clearance letter received: 'The requested review of Misrepresentation for Seveck Wellness is complete and the issue no longer appears in your Merchant Center account.' 100% active account restoration."
    ],
    "deliverables": [],
    "problem": "The Merchant Center account for Seveck Wellness was suspended due to Google's strict Misrepresentation and health/supplement claim compliance policies.",
    "strategy": "Performed an in-depth audit of supplement claims, aligned privacy and return policies, corrected merchant contact disclosures, and restructured product feed attributes to meet full Google Merchant Center compliance.",
    "result": "Official clearance letter received: 'The requested review of Misrepresentation for Seveck Wellness is complete and the issue no longer appears in your Merchant Center account.' 100% active account restoration.",
    "featured": true
  },
  {
    "slug": "gmc-southern-luxe",
    "title": "GMC Misrepresentation Fix — Southern Luxe Savon",
    "tag": "GMC CASE STUDY",
    "description": "Cleared Google Merchant Center Misrepresentation policy violation for Southern Luxe Savon (MC ID: 5782690120), regaining full organic and paid Google Shopping eligibility.",
    "status": "100% APPROVED",
    "statusTone": "live",
    "accent": "emerald",
    "category": "gmc",
    "categoryLabel": "GMC Case Study",
    "image": "/gmc-southern-luxe.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Cleared Google Merchant Center Misrepresentation policy violation for Southern Luxe Savon (MC ID: 5782690120), regaining full organic and paid Google Shopping eligibility.",
    "stack": [],
    "highlights": [
      "Issue resolved and confirmed by Google Merchant Center team: 'Review of Misrepresentation for Southern Luxe Savon is complete.' Account fully in good standing."
    ],
    "deliverables": [],
    "problem": "Merchant Center Account (ID: 5782690120) was hit with a misrepresentation policy flag, causing all luxury soap and bath product feeds to be disapproved.",
    "strategy": "Rebuilt checkout policy compliance, verified legal entity branding, standardized GTINs/MPNs, and aligned shipping rate calculation with the live storefront.",
    "result": "Issue resolved and confirmed by Google Merchant Center team: 'Review of Misrepresentation for Southern Luxe Savon is complete.' Account fully in good standing.",
    "featured": true
  },
  {
    "slug": "shopping-campaign",
    "title": "Google Shopping Campaign — Light Keepers Bookstore",
    "tag": "PAID ADVERTISING",
    "description": "Built and managed a high-efficiency Google Shopping campaign with optimized product feeds and real-time performance tracking.",
    "status": "100% APPROVED",
    "statusTone": "live",
    "accent": "indigo",
    "category": "gmc",
    "categoryLabel": "Paid Advertising",
    "image": "/shopping-campaign-lightkeepers.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Built and managed a high-efficiency Google Shopping campaign with optimized product feeds and real-time performance tracking.",
    "stack": [],
    "highlights": [
      "Delivered 1.04k clicks, 2.61k impressions at an average CPC of $0.15 over the campaign period."
    ],
    "deliverables": [],
    "problem": "Needed a scalable customer acquisition channel for niche book titles with low cost-per-click and high search intent.",
    "strategy": "Cleaned product titles with keyword-rich attributes, negative keyword lists, custom label bidding buckets, and conversion pixel tracking.",
    "result": "Delivered 1.04k clicks, 2.61k impressions at an average CPC of $0.15 over the campaign period.",
    "featured": false
  },
  {
    "slug": "merchant-feed-optimization",
    "title": "Merchant Feed & Campaign Optimization",
    "tag": "FEED MANAGEMENT",
    "description": "Ongoing feed auditing, product attribute cleanup, and Shopping campaign optimization maintaining high optimization score (89.9%).",
    "status": "100% APPROVED",
    "statusTone": "live",
    "accent": "emerald",
    "category": "gmc",
    "categoryLabel": "Feed Management",
    "image": "/shopping-campaign-opt.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Ongoing feed auditing, product attribute cleanup, and Shopping campaign optimization maintaining high optimization score (89.9%).",
    "stack": [],
    "highlights": [
      "Maintained 89.9% Google Ads optimization score and steady low-cost traffic generation."
    ],
    "deliverables": [],
    "problem": "Feed attribute errors, missing GTINs/MPNs, and inefficient ad spend on non-converting SKU variations.",
    "strategy": "Standardized feed taxonomy, resolved item-level warnings in Merchant Center, and implemented automated rule-based bid strategies.",
    "result": "Maintained 89.9% Google Ads optimization score and steady low-cost traffic generation.",
    "featured": false
  },
  {
    "slug": "fitlog",
    "title": "FITLOG — WORKOUT TRACKER & TRAINING PLANNER",
    "tag": "TRAIN WITH INTENT. LOG EVERY SET.",
    "description": "A fitness-focused web experience featuring a workout library and training-planning interface designed around consistency, clarity, and performance.",
    "link": "https://fitlog-gamma-rust.vercel.app/",
    "githubUrl": "https://github.com/mominofficial1/fitlog",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "web",
    "categoryLabel": "Web Application / Fitness Tracker",
    "image": "/fitlog-showcase.png",
    "year": "2025–2026",
    "role": "Full-Stack Web Engineer & UI Designer",
    "overview": "FitLog is a modern fitness web application designed to help users explore workouts, organize training plans, and maintain a consistent workout routine through a focused, dark-themed interface.",
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Lucide React",
      "Vercel"
    ],
    "highlights": [
      "12+ Curated Lifts Covering Major Muscle Groups (Chest, Arms, Core, Legs, Back)",
      "Dynamic Sorting by Duration, Difficulty, and Target Intensity",
      "Interactive 'My Plan' Training Routine Organizer",
      "Metric Cards for Sets, Planned Duration, and Volume",
      "Saved Workouts & Routine Persistence",
      "Fully Responsive Interface (Desktop, Tablet & Mobile)"
    ],
    "deliverables": [
      "Next.js 16 (App Router) Architecture",
      "React 19 & TypeScript 5 Strict Typing",
      "Tailwind CSS 4 Utility Styling",
      "Lucide React Icon System",
      "Interactive Sort & Filter State",
      "Vercel Edge Network Deployment"
    ],
    "problem": "Athletes and fitness enthusiasts often struggle with bloated, ad-cluttered mobile apps that require complex account setups just to organize a simple gym routine. There was a clear need for a lightning-fast, distraction-free training planner that works seamlessly on gym floors.",
    "strategy": "Implemented Next.js 16 App Router with React 19 client components, modular state management for routine building, and an aggressive mobile-first dark UI.",
    "result": "Deployed to production on Vercel with sub-second page loads, responsive layout across all device viewports, and an intuitive workout planning workflow.",
    "featured": true
  },
  {
    "slug": "royal-hair-wigs-invoice",
    "title": "ROYAL HAIR WIGS — INVOICE MAKER & BILLING SYSTEM",
    "tag": "CREATE PROFESSIONAL HAIR & WIG INVOICES IN SECONDS.",
    "description": "An enterprise-grade invoicing web software streamlining custom hair system billing, multi-currency conversion, automatic tax calculations, and instant downloadable PDF invoice creation.",
    "link": "https://royal-hair-wigs-invoice-16j4sq8fv-mominofficial1.vercel.app",
    "githubUrl": "https://github.com/mominofficial1/royal-hair-wigs-invoice",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "web",
    "categoryLabel": "Web Application / Enterprise Billing Platform",
    "image": "/royal-hair-wigs-invoice-showcase.png",
    "year": "2025–2026",
    "role": "Full-Stack Web Engineer & UI Designer",
    "overview": "A dedicated enterprise billing and invoice generation workspace engineered for Royal Hair Wigs (Processed Hair & Wig Manufacturer). Built to streamline order calculation, product itemization, instant PDF invoice generation, and secure authenticated workspace access.",
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    "highlights": [
      "Protected Authentication Workspace with HTTP-only Session Security",
      "Dynamic Product & Hair System Specification Itemizer",
      "Automated Subtotal, Custom Discounts, Shipping & Tax Computation",
      "Pixel-Perfect Printable & Downloadable PDF Invoice Generator",
      "Instant Client Search & Saved Billing Address Directory",
      "Fully Responsive Dashboard Accessible on Laptops, Tablets, and Mobile"
    ],
    "deliverables": [
      "Next.js 16 App Router Architecture",
      "React 19 & TypeScript Strict Type Safety",
      "Tailwind CSS Enterprise Component Design",
      "Client-Side & Server-Side Invoice PDF Renderer",
      "Vercel Production Edge Deployment"
    ],
    "problem": "Processing custom hair systems, varied hair densities, bases, lengths, and international shipping rates using manual spreadsheets caused billing discrepancies, delayed order fulfillment, and inconsistent invoice formatting.",
    "strategy": "Implemented Next.js modular form architecture with dynamic calculation hooks and robust client-side validation.",
    "result": "Deployed to production on Vercel, reducing billing preparation time from 15 minutes to under 30 seconds per custom manufacturing order.",
    "featured": true
  },
  {
    "slug": "leadlux-platform",
    "title": "LEADLUX — REMOTE GROWTH PARTNERS WEB PLATFORM",
    "tag": "TURN YOUR DIGITAL PRESENCE INTO REAL GROWTH.",
    "description": "A luxury digital presence and lead generation portal for a global remote growth agency, combining bespoke corporate aesthetics with rapid consultation funnels.",
    "link": "https://leadlux.vercel.app",
    "githubUrl": "https://github.com/mominofficial1/leadlux",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "web",
    "categoryLabel": "Web Platform / Agency & Growth Portal",
    "image": "/leadlux-platform-showcase.jpg",
    "year": "2025–2026",
    "role": "Frontend Web Architect & UI/UX Designer",
    "overview": "LeadLux is a modern high-ticket growth agency web platform tailored for ambitious international brands. Combines a prestigious deep forest green and gold aesthetic with interactive service breakdowns, direct conversion funnels, and seamless mobile responsiveness.",
    "stack": [
      "Vite",
      "React",
      "JavaScript",
      "Modern CSS",
      "Vercel"
    ],
    "highlights": [
      "Interactive Multi-Pillar Service Catalog (Strategy, Marketing, Tech)",
      "B2B Client Funnels with One-Click Direct WhatsApp Consultation Bridge",
      "Dynamic Case Study Previews & Conversion Metric Highlights",
      "Ultra-Fast Sub-Second Page Transitions via Vite Bundling",
      "Mobile-Optimized Touch Navigation & Adaptive Typography"
    ],
    "deliverables": [
      "Vite & React Modern Component Architecture",
      "Custom CSS Variable-Driven Luxury Design System",
      "Responsive Dual-Device Layouts (Desktop & Mobile)",
      "Interactive Modal Workflows & Lead Funnels",
      "Global Production Edge Deployment on Vercel"
    ],
    "problem": "Traditional agency websites often suffer from generic corporate templates that fail to convey high-ticket authority, bespoke strategy, or measurable growth expertise.",
    "strategy": "Engineered with modular React components, CSS custom properties for effortless theme harmony, and zero-runtime overhead.",
    "result": "Live on Vercel with perfect Lighthouse performance metrics, presenting a cohesive high-ticket agency identity that converts visitors into consultations.",
    "featured": true
  },
  {
    "slug": "adflow-studio",
    "title": "ADFLOW STUDIO — AI-POWERED AD CREATION WORKFLOW",
    "tag": "TRANSFORM PRODUCT IMAGES INTO HIGH-CONVERTING VIDEO PROMOS.",
    "description": "An AI-powered creative workflow application that guides brand owners and marketers from raw product photo uploads to multi-scene storyboards and ready-to-render commercial video generation prompts.",
    "link": "https://adflow-studio-ten.vercel.app",
    "githubUrl": "https://github.com/mominofficial1/adflow-studio",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "web",
    "categoryLabel": "AI Web App / Automated Ad Creation Studio",
    "image": "/adflow-studio-showcase.jpg",
    "year": "2025–2026",
    "role": "AI Workflow Architect & Frontend Developer",
    "overview": "AdFlow Studio is an AI-powered advertising production workflow tool designed to turn static e-commerce product photos into commercial video storyboards and video generation prompts (ChatGPT & Google Flow / Runway ready) in three streamlined stages.",
    "stack": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Gemini API",
      "AI Video Pipeline",
      "Vercel"
    ],
    "highlights": [
      "Stage 01: Brand Asset & Product Visual Ingestion",
      "Stage 02: Multi-Frame ChatGPT Commercial Storyboard Generator",
      "Stage 03: Google Flow / Runway Video Generation Prompt Synthesizer",
      "Preset Moods: Cinematic Luxury, High-Energy Cyberpunk, Clean Minimalist",
      "Instant Preset Demo Mode for Instant Testing Without API Keys",
      "Responsive Cross-Device Layout with Clean Clipboard Copy Triggers"
    ],
    "deliverables": [
      "Vanilla JS & Modern CSS Zero-Dependency Fast Engine",
      "Structured Multi-Stage Pipeline Architecture",
      "Preset Demonstration System & Gemini AI Integration",
      "Prompt Optimization Templates for Commercial Video Gen",
      "Production Deployment on Vercel"
    ],
    "problem": "Creating professional video advertisements requires expensive production crews, complex storyboarding, and deep knowledge of generative AI prompting syntax.",
    "strategy": "Constructed with lightweight vanilla client-side state, reactive DOM pipelines, and comprehensive copy-paste convenience for generative video models.",
    "result": "Live and deployed on Vercel, enabling instant commercial prompt generation and eliminating hours of manual copywriting and prompt engineering.",
    "featured": true
  },
  {
    "slug": "teaverse",
    "title": "TEAVERSE — GLOBAL BOTANICAL TEA ENCYCLOPEDIA & CATALOG",
    "tag": "A WORLD OF TEA, ONE LEAF AT A TIME.",
    "description": "A botanical digital encyclopedia and curated tea catalog offering comprehensive tea varieties, brewing science, regional terroirs, and personalized tea suggestions.",
    "link": "https://teaverse.vercel.app",
    "githubUrl": "https://github.com/mominofficial1/teaverse",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "web",
    "categoryLabel": "E-Commerce Showcase / Botanical Encyclopedia",
    "image": "/teaverse-showcase.jpg",
    "year": "2025–2026",
    "role": "Frontend Web Engineer & Botanical UI Designer",
    "overview": "TeaVerse is a serene, botanical-themed digital encyclopedia and artisanal tea showcase featuring over 150 authentic teas, regional Bangladesh tea varieties, brewing science, and an interactive tea recommendation finder.",
    "stack": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Botanical UI",
      "Vercel"
    ],
    "highlights": [
      "Extensive Botanical Catalog of 150+ Authentic Teas & 60+ Bangladesh Varieties",
      "Precise Steeping Time, Water Temperature & Leaf Ratio Brewing Guide",
      "Curated Health, Botanical & Terroir Classification System",
      "Interactive 'Surprise Me' Tea Discovery & Match-My-Palate Feature",
      "Dual Search & Filtering by Tea Family (Green, Black, Oolong, Herbal, White)",
      "High-Performance Responsive Layout for Mobile, Tablet, and Desktop"
    ],
    "deliverables": [
      "Semantic HTML5 & Modern CSS Grid/Flexbox Layouts",
      "Dynamic Botanical Filtering & Search JavaScript Engine",
      "Interactive Brewing Temperature & Timer Companion",
      "Handcrafted Organic Aesthetic & Typography",
      "Vercel Edge Global Production Deployment"
    ],
    "problem": "Tea lovers, baristas, and health-conscious consumers often face confusing tea classifications, incorrect steeping guidance, and lack of information on regional artisanal leaves.",
    "strategy": "Crafted with lightweight client-side architecture, organic color theory, and responsive mobile-first typography.",
    "result": "Deployed to production on Vercel with instant sub-second response times, rich visual storytelling, and comprehensive tea guidance.",
    "featured": true
  },
  {
    "slug": "bazardor",
    "title": "বাজার দর (BAZARDOR) — GROCERY PRICE TRACKER",
    "tag": "EVERYDAY MARKET PRICES AT A GLANCE.",
    "description": "A localized grocery price-browsing experience that organizes everyday essentials, product categories, and price-change indicators in one convenient interface.",
    "link": "https://bazardor-lime.vercel.app/",
    "githubUrl": "https://github.com/mominofficial1/bazardor",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "web",
    "categoryLabel": "Web Application / Price Tracker",
    "image": "/bazardor-showcase.png",
    "year": "2025–2026",
    "role": "Full-Stack Web Engineer & Localized UI Architect",
    "overview": "BazarDor is a Bengali-language grocery price-tracking website designed to help users explore everyday grocery categories, browse listed prices, and identify displayed price increases and decreases through a clean, localized interface.",
    "stack": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better-Auth",
      "Zod",
      "Vercel"
    ],
    "highlights": [
      "Live Commodity Price Ticker across Everyday Essentials",
      "Color-Coded Price Fluctuation Indicators (Green Increase / Red Decrease)",
      "Categorized Browsing (সবজি, মাছ ও মাংস, মসলা, চাল ও ডাল, ফলমূল, নিত্যপ্রয়োজনীয়)",
      "Detailed Product Cards with Price-Per-Unit & Update Timestamps",
      "Instant Bangla Search Bar & Category Filtering",
      "User Authentication (Better-Auth) & Watchlist Profiles"
    ],
    "deliverables": [
      "Next.js 15 (App Router) Full-Stack System",
      "React 19 & TypeScript 5.7 Architecture",
      "Tailwind CSS 3.4 & DaisyUI 4.12 Components",
      "Better-Auth Authentication System",
      "React Hook Form & Zod Schema Validation",
      "libSQL / PostgreSQL Database Integration",
      "Vercel Cloud Production Hosting"
    ],
    "problem": "Consumers in Bangladesh face daily volatility in essential commodity prices across local bazaars, with fragmented information, lack of transparency, and no centralized platform offering readable Bangla-language price comparisons.",
    "strategy": "Architected with Next.js 15 server and client components, combining DaisyUI card utilities with robust Zod data validation and native Bangla typography support.",
    "result": "Live and deployed on Vercel, offering rapid grocery price lookup with complete Bangla localization, intuitive navigation, and transparent market insights.",
    "featured": true
  },
  {
    "slug": "deshbrief",
    "title": "DESHBRIEF — BANGLADESH NEWS AGGREGATOR",
    "tag": "100% STATIC REAL-TIME NEWS AGGREGATION PORTAL",
    "description": "Modern, responsive Bangladesh news aggregator collecting live headlines from official RSS/Atom feeds (Prothom Alo, Daily Star, Jago News, Dhaka Tribune, Dhaka Post, RisingBD) with zero database and automated GitHub Actions sync.",
    "link": "https://deshbrief.vercel.app",
    "githubUrl": "https://github.com/mominofficial1/deshbrief",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "web",
    "categoryLabel": "Full-Stack Web App",
    "image": "/deshbrief-mockup.jpg",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Modern, responsive Bangladesh news aggregator collecting live headlines from official RSS/Atom feeds (Prothom Alo, Daily Star, Jago News, Dhaka Tribune, Dhaka Post, RisingBD) with zero database and automated GitHub Actions sync.",
    "stack": [
      "React + Vite Single Page App",
      "Automated Node.js RSS/Atom Parser",
      "GitHub Actions 30-Min Cron Sync",
      "Live Search Modal (⌘K)",
      "Dark & Light Mode",
      "Bengali Relative Date Engine"
    ],
    "highlights": [
      "React + Vite Single Page App",
      "Automated Node.js RSS/Atom Parser",
      "GitHub Actions 30-Min Cron Sync",
      "Live Search Modal (⌘K)",
      "Dark & Light Mode",
      "Bengali Relative Date Engine"
    ],
    "deliverables": [
      "React + Vite Single Page App",
      "Automated Node.js RSS/Atom Parser",
      "GitHub Actions 30-Min Cron Sync",
      "Live Search Modal (⌘K)",
      "Dark & Light Mode",
      "Bengali Relative Date Engine"
    ],
    "problem": "News readers in Bangladesh face fragmented sources, slow bloated websites, and intrusive ads just to read daily headlines.",
    "strategy": "Engineered a database-free static pipeline ingesting official publisher feeds, normalizing timestamps to Asia/Dhaka, extracting media thumbnails, and deploying continuously via GitHub Actions to GitHub Pages.",
    "result": "Instant sub-second loading, 250+ continuously updated stories, responsive mobile layout, and 100% ethical publisher attribution.",
    "featured": true
  },
  {
    "slug": "programming-hero-assignment",
    "title": "Programming Hero — Assignment 1",
    "tag": "FRONTEND WEB DEV",
    "description": "Front-end development project created during Programming Hero Batch 14 using HTML, CSS, and JavaScript fundamentals.",
    "link": "https://mominofficial1.github.io/assignment1/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "web",
    "categoryLabel": "Frontend Web Dev",
    "image": "/devconf.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Front-end development project created during Programming Hero Batch 14 using HTML, CSS, and JavaScript fundamentals.",
    "stack": [
      "Semantic HTML5 Structure",
      "Responsive CSS Grid/Flexbox",
      "Clean Interactive UI",
      "GitHub Pages Deployment"
    ],
    "highlights": [
      "Semantic HTML5 Structure",
      "Responsive CSS Grid/Flexbox",
      "Clean Interactive UI",
      "GitHub Pages Deployment"
    ],
    "deliverables": [
      "Semantic HTML5 Structure",
      "Responsive CSS Grid/Flexbox",
      "Clean Interactive UI",
      "GitHub Pages Deployment"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "glow-beauty-platform",
    "title": "Glow Beauty E-Commerce Interface",
    "tag": "WEB DEVELOPMENT",
    "description": "Interactive cosmetic catalog web application with product filter, cart calculation, and clean product details.",
    "status": "VERIFIED CASE STUDY",
    "statusTone": "live",
    "accent": "indigo",
    "category": "web",
    "categoryLabel": "Web Development",
    "image": "/glow-beauty.png",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Interactive cosmetic catalog web application with product filter, cart calculation, and clean product details.",
    "stack": [
      "Custom JS Product Filter",
      "Cart State Management",
      "Clean UI Components",
      "Responsive Design"
    ],
    "highlights": [
      "Custom JS Product Filter",
      "Cart State Management",
      "Clean UI Components",
      "Responsive Design"
    ],
    "deliverables": [
      "Custom JS Product Filter",
      "Cart State Management",
      "Clean UI Components",
      "Responsive Design"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "lead-generation-royal-wigs",
    "title": "B2B Lead Generation & Outreach Data",
    "tag": "GROWTH & MARKETING",
    "description": "Targeted lead generation, data mining, and outreach campaigns for beauty salons, hair wig clinics, and regional B2B clients.",
    "status": "VERIFIED CASE STUDY",
    "statusTone": "live",
    "accent": "emerald",
    "category": "growth",
    "categoryLabel": "Growth & Marketing",
    "image": "/leadgen-data.jpg",
    "year": "2025–2026",
    "role": "Lead Engineer & Designer",
    "overview": "Targeted lead generation, data mining, and outreach campaigns for beauty salons, hair wig clinics, and regional B2B clients.",
    "stack": [
      "Verified Contact Data Extraction",
      "WhatsApp API Outreach Pipeline",
      "Review & Rating Analytics",
      "Direct Client Booking Pipeline"
    ],
    "highlights": [
      "Verified Contact Data Extraction",
      "WhatsApp API Outreach Pipeline",
      "Review & Rating Analytics",
      "Direct Client Booking Pipeline"
    ],
    "deliverables": [
      "Verified Contact Data Extraction",
      "WhatsApp API Outreach Pipeline",
      "Review & Rating Analytics",
      "Direct Client Booking Pipeline"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "roylux-fashion-branding",
    "title": "RoyLux — Fashion Brand Content",
    "tag": "FASHION BRAND CONTENT & AI PRODUCT PROMOTIONAL VIDEO ASSETS",
    "description": "Created lifestyle-focused promotional content and AI-assisted social media videos for RoyLux, a fashion brand featuring women’s clothing, shoes, bags, jeans, and winter wear.",
    "link": "https://drive.google.com/drive/folders/1fY4bOC58ymySwdzXF2aSjFkJvnM11teP?usp=drive_link",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "branding",
    "categoryLabel": "Branding • AI Video & Creative Content",
    "image": "/roylux-branding.jpg",
    "year": "2025–2026",
    "role": "Creative Content Specialist & Brand Strategist",
    "overview": "Created lifestyle-focused promotional content and AI-assisted social media videos for RoyLux, a fashion brand featuring women’s clothing, shoes, bags, jeans, and winter wear.",
    "stack": [
      "Brand Content",
      "Social Media Creative",
      "AI Product Videos",
      "Fashion Marketing"
    ],
    "highlights": [
      "Brand Content",
      "Social Media Creative",
      "AI Product Videos",
      "Fashion Marketing"
    ],
    "deliverables": [
      "Brand Content",
      "Social Media Creative",
      "AI Product Videos",
      "Fashion Marketing"
    ],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "ugc-product-videos",
    "title": "UGC — Product Promotion Videos",
    "tag": "HIGH-CONVERTING UGC-STYLE VIDEO CREATIVES & SOCIAL PROMOTIONS",
    "description": "Created engaging UGC-style short videos designed to showcase products naturally and attractively across social media platforms.",
    "link": "https://drive.google.com/drive/folders/1JRN59K87096YAHE8qs-YvEWarHIGC4Qc?usp=sharing",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "branding",
    "categoryLabel": "UGC • Short-Form Video • Product Marketing",
    "image": "/ugc-promotion.jpg",
    "year": "2025–2026",
    "role": "UGC Video Creator & Content Strategist",
    "overview": "Created engaging UGC-style short videos designed to showcase products naturally and attractively across social media platforms.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": true
  },
  {
    "slug": "smm-cocobeans",
    "title": "Coco Beans — YouTube Channel Management & Content Production",
    "tag": "YOUTUBE CONTENT STRATEGY, VISUAL STORYTELLING & CHANNEL OPERATIONS",
    "description": "Coco Beans is a YouTube content project focused on building and managing a recognizable video content presence through creative planning, research, visual development, video generation, and channel content management.",
    "link": "https://www.youtube.com/@cocbeans",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "social",
    "categoryLabel": "Social Media Management • YouTube",
    "image": "/smm-cocobeans.jpg",
    "year": "2025–2026",
    "role": "YouTube Content Manager, Video Producer & Visual Strategist",
    "overview": "Coco Beans is a YouTube content project focused on building and managing a recognizable video content presence through creative planning, research, visual development, video generation, and channel content management.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-royal-facebook",
    "title": "Royal Hair Wigs — Facebook Page Management",
    "tag": "PRODUCT-FOCUSED SOCIAL PRESENCE, CREATIVE POSTS & FACEBOOK OPERATIONS",
    "description": "Royal Hair Wigs is a product-focused social media project where the goal was to present hair and wig-related content through attractive visuals, consistent branding, researched captions, and regular Facebook page management.",
    "link": "https://www.facebook.com/profile.php?id=61566429023079",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "social",
    "categoryLabel": "Social Media Management • Facebook",
    "image": "/smm-royal-facebook.jpg",
    "year": "2025–2026",
    "role": "Facebook Page Manager & Product Content Creator",
    "overview": "Royal Hair Wigs is a product-focused social media project where the goal was to present hair and wig-related content through attractive visuals, consistent branding, researched captions, and regular Facebook page management.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-leadlux-facebook",
    "title": "LeadLux — Facebook Page Management",
    "tag": "B2B MARKETING CONTENT, STRATEGIC MESSAGING & PAGE OPERATIONS",
    "description": "LeadLux is a marketing-focused Facebook project involving researched content planning, creative post design, audience-oriented messaging, video generation, and complete page management.",
    "link": "https://www.facebook.com/profile.php?id=100091055157800",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "social",
    "categoryLabel": "Social Media Management • Facebook",
    "image": "/smm-leadlux-facebook.jpg",
    "year": "2025–2026",
    "role": "Social Media Manager & Digital Marketing Strategist",
    "overview": "LeadLux is a marketing-focused Facebook project involving researched content planning, creative post design, audience-oriented messaging, video generation, and complete page management.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-roylux-facebook",
    "title": "RoyLux — Facebook Page Management",
    "tag": "FASHION & LIFESTYLE VISUAL STORYTELLING, AI VIDEOS & BRAND PAGE STRATEGY",
    "description": "RoyLux is a fashion and lifestyle-focused Facebook page management project. The work involved developing attractive brand content, researching relevant topics, designing posts, generating videos, and maintaining a consistent social media presence.",
    "link": "https://www.facebook.com/profile.php?id=61573311937684",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "social",
    "categoryLabel": "Social Media Management • Facebook",
    "image": "/smm-roylux-facebook.jpg",
    "year": "2025–2026",
    "role": "Social Media Manager & Fashion Creative Specialist",
    "overview": "RoyLux is a fashion and lifestyle-focused Facebook page management project. The work involved developing attractive brand content, researching relevant topics, designing posts, generating videos, and maintaining a consistent social media presence.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-bouyer-rajjotto",
    "title": "বউয়ের রাজত্ব — Facebook Cartoon Content Management",
    "tag": "BOUYER RAJJOTTO — FACEBOOK CARTOON CONTENT MANAGEMENT",
    "description": "বউয়ের রাজত্ব is a Bangla-language cartoon and entertainment Facebook page focused on humorous everyday married-life situations, character-based storytelling, and short-form cartoon content.",
    "link": "https://www.facebook.com/profile.php?id=61594057897009",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "social",
    "categoryLabel": "Social Media Management • Facebook Cartoon",
    "image": "/smm-bouyer-rajjotto.jpg",
    "year": "2025–2026",
    "role": "Cartoon Content Creator, Story Strategist & Facebook Page Manager",
    "overview": "বউয়ের রাজত্ব is a Bangla-language cartoon and entertainment Facebook page focused on humorous everyday married-life situations, character-based storytelling, and short-form cartoon content.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-leadlux-instagram",
    "title": "LeadLux — Instagram Management",
    "tag": "VISUAL AGENCY BRANDING, CAROUSEL SYSTEMS, REELS & PROFILE GROWTH",
    "description": "LeadLux Instagram is a marketing and brand-content project focused on maintaining a professional Instagram presence through researched content, creative post design, video generation, captions, and consistent profile management.",
    "link": "https://www.instagram.com/leadluxofficial/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "emerald",
    "category": "social",
    "categoryLabel": "Social Media Management • Instagram",
    "image": "/smm-leadlux-instagram.jpg",
    "year": "2025–2026",
    "role": "Instagram Content Strategist, Visual Designer & Profile Manager",
    "overview": "LeadLux Instagram is a marketing and brand-content project focused on maintaining a professional Instagram presence through researched content, creative post design, video generation, captions, and consistent profile management.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  },
  {
    "slug": "smm-royal-instagram",
    "title": "Royal Hair Wigs — Instagram Management",
    "tag": "PRODUCT AESTHETICS, VISUAL TRANSFORMATION REELS & PROFILE CURATION",
    "description": "Royal Hair Wigs Instagram is a product-focused social media project designed to present hair and wig-related content through attractive visuals, researched captions, product-focused creative, video generation, and consistent Instagram management.",
    "link": "https://www.instagram.com/royal_hair_wigs/",
    "status": "LIVE / ACTIVE",
    "statusTone": "live",
    "accent": "indigo",
    "category": "social",
    "categoryLabel": "Social Media Management • Instagram",
    "image": "/smm-royal-instagram.jpg",
    "year": "2025–2026",
    "role": "Instagram Profile Manager, Creative Stylist & Content Strategist",
    "overview": "Royal Hair Wigs Instagram is a product-focused social media project designed to present hair and wig-related content through attractive visuals, researched captions, product-focused creative, video generation, and consistent Instagram management.",
    "stack": [],
    "highlights": [],
    "deliverables": [],
    "problem": "",
    "strategy": "",
    "result": "",
    "featured": false
  }
];
