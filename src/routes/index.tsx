import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Quote,
  Check,
  Copy,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ExternalLink,
  Award,
  Layers,
  GraduationCap,
  Briefcase,
  Code2,
  ShoppingBag,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { PROJECTS, REVIEWS, SERVICES, EMAIL, SOCIALS, SKILL_GROUPS, PROJECT_CATEGORIES } from "@/lib/portfolio";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SocialRow } from "@/components/site/Socials";
import { Reveal, Stagger, TiltCard, Blob } from "@/components/site/motion-primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Momin Ali — Shopify Developer & AI Content Specialist" },
      {
        name: "description",
        content:
          "Portfolio of MD Momin Ali — Shopify Developer, AI Content Specialist, and Creative Director based in Rajshahi, Bangladesh.",
      },
      { property: "og:title", content: "MD Momin Ali — Shopify Developer & AI Content Specialist" },
      {
        property: "og:description",
        content: "Custom Shopify storefronts, AI content workflows, React web apps, and high-conversion systems.",
      },
      { property: "og:url", content: "https://mominofficial.me" },
    ],
  }),
  component: Home,
});

// Curated capability items for kinetic showcase with faster cycling and targeted expertise terms
const CAPABILITIES = [
  { name: "SHOPIFY", category: "shopify", level: "CORE STOREFRONTS", size: "huge" },
  { name: "GMC / GOOGLE MERCHANT", category: "marketing", level: "100% COMPLIANCE", size: "huge" },
  { name: "AI CONTENT", category: "fullstack", level: "GENERATIVE & LLMs", size: "huge" },
  { name: "UGC CONTENT", category: "creative", level: "HIGH ROAS ADS", size: "large" },
  { name: "AI WORKFLOWS", category: "fullstack", level: "AUTOMATION & AGENTS", size: "large" },
  { name: "MOTION CONTENT", category: "creative", level: "3D & AFTER EFFECTS", size: "huge" },
  { name: "FULL STACK WEB DEVELOPMENT", category: "frontend", level: "REACT & NEXT.JS", size: "large" },
  { name: "APP DEVELOPMENT", category: "fullstack", level: "FLUTTER & DART", size: "large" },
  { name: "SHOPIFY LIQUID", category: "shopify", level: "BESPOKE ARCHITECTURE", size: "huge" },
  { name: "REACT.JS & NEXT.JS", category: "frontend", level: "PRODUCTION SYSTEMS", size: "large" },
  { name: "NODE.JS & REST APIS", category: "fullstack", level: "BACKEND INFRA", size: "medium" },
  { name: "PERFORMANCE TUNING", category: "shopify", level: "95+ SPEED SCORES", size: "large" },
];

const CHAPTERS = [
  {
    id: "01",
    tag: "CORE FOCUS 01",
    title: "SHOPIFY & GMC SPECIALIST",
    role: "Bespoke Liquid Storefronts & Merchant Center Recovery",
    period: "2024 — PRESENT",
    location: "Global Remote",
    description:
      "Engineering bespoke Shopify storefronts, custom Liquid sections, high-conversion product pages, and 100% Google Merchant Center account recovery and shopping ad setup.",
    highlights: [
      "35+ verified production storefronts and commercial systems shipped",
      "Google Merchant Center policy compliance, feed optimization & suspension recovery",
      "Zero-latency Liquid sections, custom cart drawers, and speed tuning",
    ],
  },
  {
    id: "02",
    tag: "CORE FOCUS 02",
    title: "AI CONTENT & MOTION SPECIALIST",
    role: "AI Video Pipelines, 3D HUDs & Motion Direction",
    period: "2023 — PRESENT",
    location: "Global Remote",
    description:
      "Directing AI-driven visual content, 3D space telemetry animations, and high-retention commercial video ad campaigns engineered for maximum ROAS on paid media.",
    highlights: [
      "Orbital telemetry & space HUD graphics for NASA award project (2nd Runner Up)",
      "Luxury branding and editorial catalog design for RoyLux & D2C lifestyle brands",
      "Commercial UGC video ads and kinetic typography producing high paid conversions",
    ],
  },
  {
    id: "03",
    tag: "CORE FOCUS 03",
    title: "FULL STACK DEVELOPER — WEB & APP",
    role: "Full-Stack Web Architect & Cross-Platform Mobile Engineer",
    period: "2024 — PRESENT",
    location: "Global Remote",
    description:
      "Architecting end-to-end web applications and cross-platform mobile citizen tools using React, TanStack Start, Next.js, Node.js, and Flutter with Gemini AI integration.",
    highlights: [
      "Modern web platforms: custom invoice portals, SaaS web apps & API webhooks",
      "Cross-platform mobile citizen apps built with Flutter & Dart (Fair Prices, Astrovia)",
      "Type-safe APIs, authentication systems, database architecture & cloud deployments",
    ],
  },
  {
    id: "04",
    tag: "ACADEMIC FOUNDATION",
    title: "VARENDRA UNIVERSITY",
    role: "B.Sc. in Computer Science & Engineering",
    period: "2022 — 2026",
    location: "Rajshahi, Bangladesh",
    description:
      "Rigorous foundations in algorithms, software architecture, distributed web systems, and applied artificial intelligence workflows.",
    highlights: [
      "NASA Space Apps 2025: 2nd Runner Up & Global Nominee (Team AstroVenture)",
      "Thesis on applied AI workflows & citizen software architectures",
      "Lead developer for university hackathons & software project showcases",
    ],
  },
];

// Display categories for the homepage category-based project section
const HOMEPAGE_CATEGORIES = [
  { id: "shopify", label: "SHOPIFY STOREFRONTS", subtitle: "Bespoke Liquid themes, custom sections & high-conversion D2C stores" },
  { id: "app", label: "MOBILE & AI APPS", subtitle: "Gemini AI integrations, Flutter apps & citizen tools" },
  { id: "web", label: "WEB PLATFORMS", subtitle: "Full-stack React, Next.js portals & web applications" },
  { id: "gmc", label: "GOOGLE MERCHANT & SHOPPING", subtitle: "Feed optimization, suspension recovery & shopping ads" },
  { id: "branding", label: "CREATIVE & NASA / VIDEO", subtitle: "NASA Space Apps 2025, luxury branding & commercial video" },
  { id: "growth", label: "GROWTH DATA & LEADS", subtitle: "B2B prospecting, data scraping & verified decision-maker pipelines" },
  { id: "social", label: "SOCIAL MEDIA MANAGEMENT", subtitle: "YouTube channel direction, Facebook/Instagram growth & viral reach" },
];

// Creative work cards with verified, direct destination links
const CREATIVE_WORK_CARDS = [
  {
    title: "NASA Space Apps 2025",
    tag: "VIDEO EDITING & 3D MOTION",
    desc: "Orbital telemetry HUD graphics & space agricultural showcase.",
    badge: "2nd Runner Up",
    link: "/works/terra-farm-nasa",
    isExternal: false,
    ctaText: "VIEW CASE STUDY",
  },
  {
    title: "RoyLux Fashion Branding",
    tag: "BRAND IDENTITY & CONTENT",
    desc: "High-end luxury aesthetic, editorial typography, and catalog design.",
    badge: "Creative Direction",
    link: "/works/roylux-branding",
    isExternal: false,
    ctaText: "EXPLORE WORK",
  },
  {
    title: "Shopify D2C Storefronts",
    tag: "E-COMMERCE UI/UX",
    desc: "Conversion-optimized Liquid themes & bespoke product pages.",
    badge: "8+ Storefronts",
    link: "/works?category=shopify",
    isExternal: false,
    ctaText: "SEE STOREFRONTS",
  },
  {
    title: "Commercial UGC & Ads",
    tag: "AFTER EFFECTS & PREMIERE",
    desc: "High-retention social ads, kinetic typography, and sound design.",
    badge: "Commercial Ads",
    link: "https://www.behance.net/mominofficial",
    isExternal: true,
    ctaText: "VIEW ON BEHANCE",
  },
];

function Home() {
  const [copied, setCopied] = useState(false);
  const [skillCategory, setSkillCategory] = useState<string>("all");
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isSkillPaused, setIsSkillPaused] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Filter skills
  const filteredSkills =
    skillCategory === "all"
      ? CAPABILITIES
      : CAPABILITIES.filter((s) => s.category === skillCategory);

  // Faster, fluid auto-rotation for animated capabilities (1600ms rhythm)
  useEffect(() => {
    if (isSkillPaused || filteredSkills.length === 0) return;
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % filteredSkills.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [isSkillPaused, filteredSkills.length]);

  // Featured Project for the spotlight section
  const spotlightProject =
    PROJECTS.find((p) => p.slug === "terra-farm-nasa") ??
    PROJECTS.find((p) => p.slug === "fair-prices") ??
    PROJECTS[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-ink">
      {/* ========================================================================
          1. CINEMATIC HERO SECTION (Layered Editorial PNG Portrait Composition)
          ======================================================================== */}
      <section className="relative flex min-h-[96vh] w-full flex-col justify-between overflow-hidden bg-cream pt-28 pb-8 text-ink">
        {/* Subtle Ambient Halos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/5 blur-3xl" />
          <div className="absolute right-12 top-24 size-[400px] rounded-full bg-emerald/5 blur-3xl" />
        </div>

        {/* Top Status Bar Inside Hero */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 font-mono text-[11px] tracking-widest text-ink/70 uppercase">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald animate-ping" />
            <span className="font-semibold text-emerald">AVAILABLE FOR CONTRACT & FREELANCE</span>
            <span className="text-ink/30">•</span>
            <span className="hidden sm:inline text-body">EST. 2026</span>
          </span>
          <span className="hidden sm:inline tracking-[0.2em] text-body">
            MD MOMIN ALI • PERSONAL PORTFOLIO
          </span>
          <span className="font-semibold text-ink">
            RAJSHAHI, BANGLADESH
          </span>
        </div>

        {/* Layer 1 & 2: Massive Backdrop Typography with Overlapping PNG Portrait */}
        <div className="relative mx-auto mt-6 flex w-full max-w-7xl flex-col items-center justify-center text-center select-none px-4">
          {/* Eyebrow with explicit "Shopify Developer & AI Content Specialist" */}
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 font-mono text-xs font-bold tracking-[0.28em] text-indigo uppercase sm:text-sm lg:text-base"
          >
            ✦ SHOPIFY DEVELOPER &amp; AI CONTENT SPECIALIST ✦
          </motion.p>

          {/* Massive Dominant Typography Layer (Sits behind the portrait) */}
          <div className="relative z-10 mt-1 w-full text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-monumental leading-[0.82] text-ink tracking-tight select-none"
              style={{ fontSize: "clamp(3.8rem, 15vw, 14.5rem)" }}
            >
              DEVELOPER
            </motion.h1>
          </div>

          {/* Layer 3: Foreground Transparent PNG Portrait (Overlaps the typography naturally) */}
          <div className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48 flex justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative flex justify-center"
            >
              <img
                src="/momin-hero-cutout.png"
                alt="MD Momin Ali — Shopify Developer & AI Content Specialist"
                className="h-[380px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[700px] w-auto max-w-[92vw] object-contain select-none filter drop-shadow-[0_20px_30px_rgba(2,52,63,0.12)] [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Layer 4: Supporting Narrative Columns & CTAs */}
        <div className="relative z-30 mx-auto -mt-6 sm:-mt-10 grid w-full max-w-7xl items-end gap-6 px-6 sm:grid-cols-2">
          {/* Left Column: Mission & Craft */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col space-y-2 text-ink"
          >
            <p className="font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
              01 / CRAFT &amp; EXECUTION
            </p>
            <div className="font-monumental text-3xl leading-[0.9] text-ink sm:text-5xl lg:text-6xl">
              IDEAS{" "}
              <span className="font-editorial-italic text-indigo font-normal">MADE</span>{" "}
              REAL<span className="text-emerald">.</span>
            </div>
            <p className="font-mono text-[11px] tracking-wider text-body max-w-md leading-relaxed">
              ENGINEERING WITH RIGOR • BESPOKE SHOPIFY STOREFRONTS, AI CITIZEN PLATFORMS &amp; HIGH-CONVERSION DIGITAL ARCHITECTURE.
            </p>
          </motion.div>

          {/* Right Column: Selected Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col space-y-2 font-mono text-[11px] text-ink sm:text-right"
          >
            <p className="tracking-widest text-indigo font-bold uppercase">
              02 / SELECTED CREDENTIALS
            </p>
            <div className="space-y-1.5 text-body">
              <p>
                <span className="text-indigo font-bold">01 /</span> 35+ PRODUCTION PROJECTS SHIPPED GLOBALLY
              </p>
              <p>
                <span className="text-emerald font-bold">02 /</span> 2ND RUNNER UP &amp; GLOBAL NOMINEE • NASA SPACE APPS 2025
              </p>
              <p>
                <span className="text-coral font-bold">03 /</span> 100% GOOGLE MERCHANT CENTER RECOVERY &amp; ADS RECORD
              </p>
              <p>
                <span className="text-ink font-bold">04 /</span> FINAL-YEAR CSE • VARENDRA UNIVERSITY
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Control Bar */}
        <div className="relative z-30 mx-auto mt-8 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-ink/10 px-6 pt-5 font-mono text-xs text-body">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald" />
            <span className="font-bold text-ink">001 / CREATIVE DIRECTORY</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/works"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-ink px-6 py-2.5 font-mono text-[11px] font-bold tracking-wider text-cream uppercase shadow-md transition-all hover:bg-indigo hover:border-indigo"
            >
              <span>EXPLORE SELECTED WORKS</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-card px-5 py-2.5 font-mono text-[11px] font-bold tracking-wider text-ink uppercase backdrop-blur transition-all hover:border-ink hover:bg-cream"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card/60 px-4 py-2 font-mono text-[11px] font-bold tracking-wider text-body uppercase transition-all hover:border-emerald hover:text-emerald"
            >
              {copied ? <CheckCheck size={13} className="text-emerald" /> : <Copy size={13} />}
              <span>{copied ? "EMAIL COPIED!" : "COPY EMAIL"}</span>
            </button>
          </div>

          <div className="hidden items-center gap-2 tracking-widest text-body uppercase lg:flex">
            <span>↓ SCROLL TO EXPLORE ARCHIVE</span>
          </div>
        </div>
      </section>

      {/* ========================================================================
          2. CONCISE EDITORIAL INTRO (Reduced Text)
          ======================================================================== */}
      <section className="relative border-t border-ink/10 bg-cream px-6 py-16 text-ink">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
            <div>
              <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                • APPROACH &amp; PHILOSOPHY
              </p>
              <h2 className="mt-2 font-monumental text-3xl tracking-tight text-ink sm:text-4xl">
                ENGINEERING{" "}
                <span className="font-editorial-italic text-indigo font-normal">
                  WITH PURPOSE.
                </span>
              </h2>
            </div>
            <div className="space-y-4 font-mono text-sm leading-relaxed text-body sm:text-base">
              <p>
                Bridging computer science rigor with high-conversion e-commerce execution. I architect bespoke Shopify Liquid storefronts, AI content workflows, and compliant Google Merchant integrations designed to drive conversions without app bloat.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-semibold text-ink">
                  <Check size={13} className="text-emerald" /> Custom Liquid Themes
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-semibold text-ink">
                  <Check size={13} className="text-emerald" /> AI Content Workflows
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-semibold text-ink">
                  <Check size={13} className="text-emerald" /> GMC Recovery
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-semibold text-ink">
                  <Check size={13} className="text-emerald" /> Motion &amp; Commercial Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          3. CAPABILITIES / SKILLS TYPOGRAPHY SECTION (Faster, Dynamic & High Contrast)
          ======================================================================== */}
      <section className="relative border-y border-ink/10 bg-ink px-6 py-20 text-cream">
        <div className="relative mx-auto max-w-7xl">
          {/* Top Section Header with 100% Crisp Contrast */}
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/20 pb-6">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-widest text-cream uppercase">
                • 02 / CAPABILITIES &amp; TECHNICAL ARSENAL
              </p>
              <h2 className="mt-2 font-monumental text-4xl tracking-tight text-cream sm:text-6xl">
                CORE{" "}
                <span className="font-editorial-italic text-cream font-normal">
                  STACK
                </span>
              </h2>
            </div>

            <div className="font-mono text-xs text-cream/90 sm:text-right">
              <p className="font-bold text-cream">MULTI-DISCIPLINARY ARCHITECTURE</p>
              <p className="text-emerald font-semibold">EST. 2024–2026 • PRODUCTION TESTED</p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "all", label: "ALL DISCIPLINES", count: "12" },
              { id: "shopify", label: "SHOPIFY & GMC", count: "03" },
              { id: "frontend", label: "WEB DEV & REACT", count: "03" },
              { id: "fullstack", label: "AI & APP DEV", count: "03" },
              { id: "marketing", label: "GMC & CRO", count: "02" },
              { id: "creative", label: "MOTION & UGC", count: "02" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSkillCategory(cat.id);
                  setActiveSkillIndex(0);
                }}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-300",
                  skillCategory === cat.id
                    ? "border-cream bg-cream text-ink font-bold shadow-md"
                    : "border-cream/20 bg-cream/5 text-cream/80 hover:border-cream/40 hover:text-cream",
                )}
              >
                {cat.label} <span className="opacity-70">[{cat.count}]</span>
              </button>
            ))}
          </div>

          {/* Oversized Kinetic Typography Cloud Display (Faster 0.22s snappy transition) */}
          <div className="relative mt-10 flex min-h-[320px] flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 text-center backdrop-blur-sm sm:min-h-[380px]">
            {filteredSkills.map((skill, idx) => {
              const isHighlight = idx === activeSkillIndex;
              return (
                <motion.div
                  key={skill.name}
                  animate={{
                    scale: isHighlight ? 1.07 : 0.98,
                    opacity: isHighlight ? 1 : 0.55,
                    y: isHighlight ? -4 : 0,
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group relative cursor-pointer"
                  onClick={() => setActiveSkillIndex(idx)}
                >
                  <p
                    className={cn(
                      "font-monumental tracking-tight transition-all duration-200",
                      skill.size === "huge" && "text-3xl sm:text-6xl lg:text-7xl",
                      skill.size === "large" && "text-2xl sm:text-4xl lg:text-5xl",
                      skill.size === "medium" && "text-xl sm:text-3xl lg:text-4xl",
                      isHighlight
                        ? "text-cream drop-shadow-[0_0_25px_rgba(240,237,204,0.45)]"
                        : "text-cream/40 group-hover:text-cream/80",
                    )}
                  >
                    {skill.name}
                  </p>
                  <span className="font-mono text-[10px] tracking-widest text-cream uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Skill Controls & Subtitle Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/20 pt-6 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-cream">CURRENT FOCUS</span>
              <span className="text-cream/40">•</span>
              <span className="text-cream">
                {filteredSkills[activeSkillIndex]?.name} —{" "}
                <span className="text-emerald font-semibold">
                  {filteredSkills[activeSkillIndex]?.level}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveSkillIndex(
                    (prev) => (prev - 1 + filteredSkills.length) % filteredSkills.length,
                  )
                }
                className="rounded-lg border border-cream/25 bg-cream/5 p-2 text-cream transition-colors hover:bg-cream/20"
                title="Previous Skill"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setIsSkillPaused((p) => !p)}
                className="flex items-center gap-1.5 rounded-lg border border-cream/25 bg-cream/5 px-3 py-2 text-cream transition-colors hover:bg-cream/20"
              >
                {isSkillPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{isSkillPaused ? "PLAY" : "PAUSE"}</span>
              </button>
              <button
                onClick={() =>
                  setActiveSkillIndex((prev) => (prev + 1) % filteredSkills.length)
                }
                className="rounded-lg border border-cream/25 bg-cream/5 p-2 text-cream transition-colors hover:bg-cream/20"
                title="Next Skill"
              >
                <ChevronRight size={16} />
              </button>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 rounded-lg border border-cream/30 bg-cream px-4 py-2 font-bold text-ink transition-colors hover:bg-cream/90"
              >
                <span>EXPLORE ALL SKILLS</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          4. CINEMATIC PROJECT SHOWCASE (Asymmetric, Floating, Animated)
          ======================================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
        {/* Giant Architectural Watermark Typography */}
        <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 flex justify-center opacity-[0.035] select-none">
          <p className="font-monumental text-[20vw] leading-none text-ink">
            SELECTED
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              • 03 / CINEMATIC WORK REPOSITORY
            </p>
            <h2 className="mt-2 font-monumental text-4xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
              SELECTED{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                WORKS
              </span>
            </h2>
          </div>
          <div className="max-w-md font-mono text-xs text-body sm:text-right">
            <p className="font-bold text-ink">{PROJECTS.length} PRODUCTION SHIPS ACROSS 7 DISCIPLINES</p>
            <p className="mt-1">
              Curated previews in floating editorial perspective. Explore full case studies via dedicated category links.
            </p>
          </div>
        </div>

        {/* Categories Loop with Asymmetric Floating Compositions */}
        <div className="mt-16 space-y-28">
          {HOMEPAGE_CATEGORIES.map((cat, catIdx) => {
            const categoryProjects = PROJECTS.filter((p) => p.category === cat.id);
            // Sort to prioritize featured projects, then take top 2
            const topProjects = [...categoryProjects]
              .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
              .slice(0, 2);

            if (categoryProjects.length === 0) return null;

            return (
              <div key={cat.id} className="border-t border-ink/10 pt-12">
                {/* Category Header Bar */}
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
                      DISCIPLINE {String(catIdx + 1).padStart(2, "0")} / {categoryProjects.length} PROJECTS
                    </span>
                    <h3 className="mt-1 font-monumental text-2xl tracking-tight text-ink sm:text-4xl">
                      {cat.label}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-body max-w-lg">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* See More Link to /works?category={id} */}
                  <Link
                    to="/works"
                    search={{ category: cat.id }}
                    className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-5 py-2 font-mono text-xs font-bold tracking-wider text-ink uppercase shadow-sm transition-all hover:bg-ink hover:text-cream"
                  >
                    <span>SEE ALL {categoryProjects.length} {cat.label}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Asymmetric Floating Project Composition (2 Featured Projects) */}
                <div className="relative mt-8 flex flex-col md:flex-row md:items-start gap-8 lg:gap-12">
                  {/* Primary Asymmetric Panel (Left, subtle negative tilt on desktop) */}
                  {topProjects[0] && (
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full md:w-[58%] transform-gpu transition-all duration-700 md:-rotate-[1.2deg] md:hover:rotate-0 md:hover:scale-[1.015] z-10 hover:z-20"
                    >
                      <ProjectCard
                        project={topProjects[0]}
                        index={0}
                        total={categoryProjects.length}
                        variant="cinematic"
                        className="shadow-xl shadow-black/5"
                      />
                    </motion.div>
                  )}

                  {/* Floating Counterpoint Panel (Right, offset vertically, subtle positive tilt) */}
                  {topProjects[1] && (
                    <motion.div
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                      className="w-full md:w-[48%] md:-ml-[6%] md:mt-16 lg:mt-24 transform-gpu transition-all duration-700 md:rotate-[1.5deg] md:hover:rotate-0 md:hover:scale-[1.015] z-15 hover:z-30"
                    >
                      <ProjectCard
                        project={topProjects[1]}
                        index={1}
                        total={categoryProjects.length}
                        variant="cinematic"
                        className="shadow-2xl shadow-black/10"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA to Full Archive */}
        <div className="mt-24 rounded-3xl border border-ink/15 bg-card p-10 text-center shadow-xl sm:p-14">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            COMPLETE VERIFIED REPOSITORY
          </p>
          <h3 className="mt-3 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
            EXPLORE THE FULL ARCHIVE OF 35+ SHIPS
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base text-body">
            Browse all client storefronts, live web platforms, Google Merchant recoveries, and media campaigns with comprehensive tech stacks and case studies.
          </p>
          <div className="mt-8">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-xl transition-transform hover:scale-105 hover:bg-indigo"
            >
              <span>VIEW ALL 35 PRODUCTION PROJECTS</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================
          5. FEATURED CLIENT WORK SPOTLIGHT (Fixed 100% High Contrast Text Visibility)
          ======================================================================== */}
      <section className="relative overflow-hidden border-y border-ink/10 bg-ink py-20 text-cream">
        {/* Continuous Marquee Ticker with high-contrast text */}
        <div className="border-b border-cream/20 bg-cream/5 py-3 font-mono text-xs tracking-widest text-cream uppercase overflow-hidden">
          <div className="marquee-scroll flex gap-8">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap">
                <span className="text-cream">✦ 2ND RUNNER UP NASA SPACE APPS 2025</span>
                <span className="text-cream">✦ BESPOKE SHOPIFY LIQUID SECTIONS</span>
                <span className="text-cream">✦ 100% GOOGLE MERCHANT CENTER COMPLIANCE</span>
                <span className="text-cream">✦ GEMINI AI CITIZEN BUDGETING APP</span>
                <span className="text-cream">✦ ZERO-LATENCY USER EXPERIENCE</span>
                <span className="text-cream">✦ 35+ VERIFIED DEPLOYMENTS</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Device Mockup Presentation */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-emerald/10 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-cream/30 bg-card p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-cream/20 pb-2 px-2 font-mono text-[10px] text-cream">
                  <span className="font-bold tracking-wider">SPOTLIGHT CASE STUDY • {spotlightProject.slug.toUpperCase()}</span>
                  <span className="flex items-center gap-1.5 text-emerald font-semibold">
                    <span className="size-1.5 rounded-full bg-emerald animate-pulse" />
                    AWARD-WINNING / ACTIVE
                  </span>
                </div>
                <img
                  src={spotlightProject.image}
                  alt={spotlightProject.title}
                  className="mt-3 aspect-16/10 w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 -right-4 rounded-full border border-cream/30 bg-ink px-4 py-2 font-mono text-[10px] font-bold tracking-wider text-cream uppercase shadow-xl">
                NASA GLOBAL NOMINEE • VERIFIED CASE STUDY
              </div>
            </div>

            {/* Right: Editorial Narrative with 100% High Contrast Text Visibility */}
            <div className="space-y-6">
              {/* Badge with high-contrast Warm Cream text on dark teal */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3.5 py-1 font-mono text-[11px] font-bold tracking-widest text-cream uppercase shadow-sm">
                <span>SPOTLIGHT CHAPTER • {spotlightProject.tag}</span>
              </div>

              {/* Main Heading with 100% Crisp Cream Contrast */}
              <h2 className="font-monumental text-4xl tracking-tight text-cream sm:text-6xl">
                BUILT FOR{" "}
                <span className="font-editorial-italic text-cream font-normal underline decoration-emerald/60 underline-offset-8">
                  REAL IMPACT.
                </span>
              </h2>

              <h3 className="font-display text-2xl font-bold text-cream">
                {spotlightProject.title}
              </h3>

              {/* Description in full contrast text-cream/90 */}
              <p className="text-base leading-relaxed text-cream/90 font-medium">
                AI-powered precision agriculture and orbital telemetry platform, recognized globally as 2nd Runner Up and Global Nominee at NASA Space Apps Challenge 2025.
              </p>

              {/* Highlights in crisp text-cream */}
              {spotlightProject.highlights && (
                <ul className="space-y-2.5 font-mono text-xs text-cream font-medium">
                  {spotlightProject.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 size-1.5 rounded-full bg-emerald shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action Buttons with high contrast */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/works/$slug"
                  params={{ slug: spotlightProject.slug }}
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 font-mono text-xs font-bold tracking-wider text-ink uppercase shadow-lg transition-transform hover:scale-105 hover:bg-cream/90"
                >
                  <span>VIEW FULL CASE STUDY</span>
                  <ArrowRight size={14} />
                </Link>

                {spotlightProject.link && (
                  <a
                    href={spotlightProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-cream uppercase backdrop-blur transition-colors hover:border-cream hover:bg-cream/20"
                  >
                    <span>OPEN PROJECT LINK</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          6. MORE CREATIVE WORK (Targeted Destination Links per Card)
          ======================================================================== */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-cream py-20 text-ink">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-indigo/10 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
                <span>PORTFOLIO SHOWCASE &amp; VISUAL DIRECTION</span>
              </div>
              <h2 className="mt-3 font-monumental text-4xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                MORE CREATIVE{" "}
                <span className="font-editorial-italic text-indigo font-normal">
                  WORK
                </span>
              </h2>
            </div>

            <div className="max-w-md font-mono text-xs text-body sm:text-right">
              <p className="font-bold text-ink">VERIFIED CLIENT &amp; AWARD PRODUCTIONS</p>
              <p className="mt-1">
                Explore Motion Graphics, AI Content, 3D Assets &amp; Storefronts across dedicated case studies.
              </p>
            </div>
          </div>

          {/* Feature Grid with Correct Destination Links per Card */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CREATIVE_WORK_CARDS.map((card, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all duration-300 hover:border-indigo/50 hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-indigo/10 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-indigo uppercase">
                    {card.badge}
                  </span>
                  <h3 className="mt-4 font-monumental text-2xl tracking-tight text-ink group-hover:text-indigo transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-widest text-body uppercase">
                    {card.tag}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-body">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  {card.isExternal ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-indigo uppercase hover:underline"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-indigo uppercase hover:underline"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Central Behance Profile CTA Banner */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink/15 bg-card p-8 text-center shadow-lg sm:flex-row sm:text-left">
            <div>
              <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                CREATIVE DIRECTION &amp; VISUAL PORTFOLIO
              </p>
              <h3 className="mt-2 font-monumental text-2xl text-ink sm:text-3xl">
                EXPLORE COMPLETE CASE STUDIES ON BEHANCE
              </h3>
              <p className="mt-1 text-sm text-body">
                Discover visual identity presentations, behind-the-scenes workflows, and motion reels.
              </p>
            </div>
            <a
              href="https://www.behance.net/mominofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo px-8 py-3.5 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-lg shadow-indigo/20 transition-transform hover:scale-105"
            >
              <span>VISIT BEHANCE PROFILE</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================
          7. AUTHENTIC CLIENT REVIEWS (Clean & Focused)
          ======================================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              • 05 / CLIENT VALIDATION
            </p>
            <h2 className="mt-2 font-monumental text-4xl tracking-tight text-ink sm:text-6xl">
              TRUSTED BY{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                FOUNDERS
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-body sm:text-right">
            Verified feedback from store owners, brand directors, and project leads.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-card p-8 shadow-md transition-all hover:border-indigo/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-emerald">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-body italic sm:text-base">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-display text-base font-bold text-ink">
                  {review.author}
                </p>
                <p className="font-mono text-xs text-indigo">
                  {review.role} • {review.company}
                </p>
                <p className="mt-1 font-mono text-[10px] text-body">
                  Project: {review.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          8. PROFESSIONAL CHAPTERS & MILESTONES (All 3 Core Specializations Included)
          ======================================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              • 06 / PROFESSIONAL CHAPTERS &amp; FOCUS
            </p>
            <h2 className="mt-2 font-monumental text-4xl tracking-tight text-ink sm:text-6xl">
              CORE{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                CHAPTERS
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-body sm:text-right">
            Three dedicated specializations: Shopify &amp; GMC, AI Content &amp; Motion, and Full Stack Web &amp; App Development.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Chapter Selector Cards */}
          <div className="space-y-3">
            {CHAPTERS.map((chap, idx) => {
              const active = idx === activeChapter;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(idx)}
                  className={cn(
                    "flex w-full flex-col items-start rounded-2xl border p-5 text-left transition-all duration-300",
                    active
                      ? "border-indigo bg-card shadow-xl shadow-indigo/10 ring-2 ring-indigo/20"
                      : "border-ink/10 bg-card/60 hover:border-ink/25 hover:bg-card",
                  )}
                >
                  <div className="flex w-full items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-indigo">{chap.id} / {chap.tag}</span>
                    <span className="text-body">{chap.period}</span>
                  </div>
                  <h3 className="mt-2 font-monumental text-2xl tracking-tight text-ink sm:text-3xl">
                    {chap.title}
                  </h3>
                  <p className="font-editorial-italic text-sm text-body">
                    {chap.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Chapter View */}
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-ink/10 bg-card p-8 shadow-xl sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-5 font-mono text-xs">
              <span className="rounded-full bg-indigo/10 px-3 py-1 font-bold text-indigo">
                {CHAPTERS[activeChapter].tag}
              </span>
              <span className="text-body">{CHAPTERS[activeChapter].location}</span>
            </div>

            <h3 className="mt-5 font-monumental text-3xl tracking-tight text-ink sm:text-4xl">
              {CHAPTERS[activeChapter].title}
            </h3>

            <p className="mt-2 font-editorial-italic text-base text-indigo">
              {CHAPTERS[activeChapter].role} • {CHAPTERS[activeChapter].period}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
              {CHAPTERS[activeChapter].description}
            </p>

            <div className="mt-6 border-t border-ink/10 pt-5">
              <p className="font-mono text-xs font-bold tracking-widest text-ink uppercase">
                KEY DELIVERABLES &amp; CONTRIBUTIONS
              </p>
              <ul className="mt-3 space-y-2.5 font-mono text-xs text-body">
                {CHAPTERS[activeChapter].highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald/20 text-emerald text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          9. CLOSING CONTACT CTA & DIRECTORY (Deep Teal #02343F Background with High Contrast)
          ======================================================================== */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-ink px-6 py-24 text-cream">
        <div className="pointer-events-none absolute left-0 bottom-0 size-[500px] rounded-full bg-indigo/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-emerald/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Monumental Statement with 100% Crisp Contrast */}
            <div className="space-y-6">
              <p className="font-mono text-[11px] font-bold tracking-widest text-cream uppercase">
                • 07 / GOT AN AMBITIOUS PROJECT IN MIND?
              </p>

              <div className="font-monumental leading-[0.88] text-cream" style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)" }}>
                LET&apos;S <br />
                <span className="font-editorial-italic font-normal text-cream">make it</span> <br />
                REAL<span className="text-emerald">.</span>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-cream/90 font-medium sm:text-lg">
                Available for custom Shopify storefronts, AI content workflows, and full-stack web applications built to scale.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 font-mono text-sm font-bold tracking-wider text-ink uppercase shadow-2xl transition-all hover:scale-105 hover:bg-cream/90"
                >
                  <span>LET&apos;S TALK / CONTACT</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <a
                  href={SOCIALS.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-7 py-4 font-mono text-sm font-bold tracking-wider text-cream uppercase backdrop-blur transition-all hover:bg-cream/20 hover:border-cream/50"
                >
                  <span>BEHANCE PROFILE</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Interactive Channel Directory with High Contrast */}
            <div className="rounded-3xl border border-cream/20 bg-cream/[0.06] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="flex items-center justify-between border-b border-cream/20 pb-4 font-mono text-xs">
                <span className="text-cream/80">ALL DIRECT CHANNELS</span>
                <span className="text-emerald font-semibold">ACTIVE &amp; MONITORED ↗</span>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[10px] tracking-widest text-cream uppercase">
                  DIRECT COMMUNICATIONS
                </p>
                <h3 className="font-monumental text-3xl tracking-tight text-cream sm:text-4xl">
                  CONNECT{" "}
                  <span className="font-editorial-italic text-cream font-normal">
                    directly.
                  </span>
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Business enquiries, collaborations, or Shopify store consultations.
                </p>
              </div>

              {/* Channels List */}
              <div className="mt-8 space-y-3 font-mono text-xs">
                {/* Channel 1: Primary Email with 1-click Copy */}
                <div className="rounded-2xl border border-cream/25 bg-cream/10 p-4 transition-all hover:bg-cream/15">
                  <div className="flex items-center justify-between text-[10px] text-cream">
                    <span>01 / PRIMARY EMAIL</span>
                    <span className="font-bold text-emerald">RECOMMENDED</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-cream break-all">{EMAIL}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-cream/30 bg-cream/15 px-3 py-1.5 text-[10px] text-cream transition-colors hover:bg-cream/25"
                    >
                      {copied ? <CheckCheck size={12} className="text-emerald" /> : <Copy size={12} />}
                      <span>{copied ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                </div>

                {/* Channel 2: WhatsApp */}
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/5 p-4 transition-all hover:border-emerald hover:bg-emerald/10"
                >
                  <div>
                    <span className="text-[10px] text-cream/70">02 / LIVE CHAT</span>
                    <p className="font-bold text-cream">WHATSAPP</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald font-semibold">
                    +880 1792 872188 <ArrowUpRight size={13} />
                  </span>
                </a>

                {/* Channel 3: LinkedIn */}
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/5 p-4 transition-all hover:border-cream/35 hover:bg-cream/15"
                >
                  <div>
                    <span className="text-[10px] text-cream/70">03 / PROFESSIONAL NETWORK</span>
                    <p className="font-bold text-cream">LINKEDIN</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cream font-medium">
                    CONNECT ↗
                  </span>
                </a>

                {/* Channel 4: GitHub */}
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/5 p-4 transition-all hover:border-cream/35 hover:bg-cream/15"
                >
                  <div>
                    <span className="text-[10px] text-cream/70">04 / CODE REPOSITORIES</span>
                    <p className="font-bold text-cream">GITHUB</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cream font-medium">
                    EXPLORE ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}