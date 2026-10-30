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
} from "lucide-react";
import { useState, useEffect } from "react";
import { PROJECTS, REVIEWS, SERVICES, EMAIL, SOCIALS } from "@/lib/portfolio";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SocialRow } from "@/components/site/Socials";
import { Reveal, Stagger, TiltCard, Blob, staggerChild } from "@/components/site/motion-primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Momin Ali — Shopify Developer & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of MD Momin Ali — Shopify Developer, Full-Stack Engineer, and Digital Marketer based in Rajshahi, Bangladesh.",
      },
      { property: "og:title", content: "MD Momin Ali — Shopify Developer & Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Custom Shopify storefronts, React web apps, Gemini AI integrations, and high-conversion systems.",
      },
      { property: "og:url", content: "https://mominofficial.me" },
    ],
  }),
  component: Home,
});

// All Skills with category tagging for the interactive 3D capabilities section
const CAPABILITIES = [
  { name: "SHOPIFY LIQUID", category: "shopify", level: "CORE EXPERTISE", size: "huge" },
  { name: "REACT.JS", category: "frontend", level: "PRODUCTION", size: "large" },
  { name: "TAILWIND CSS", category: "frontend", level: "DAILY", size: "medium" },
  { name: "NODE.JS", category: "fullstack", level: "API & BACKEND", size: "large" },
  { name: "TYPESCRIPT", category: "frontend", level: "TYPE-SAFE", size: "medium" },
  { name: "GEMINI AI API", category: "fullstack", level: "INTELLIGENCE", size: "huge" },
  { name: "DIGITAL MARKETING", category: "marketing", level: "2+ YEARS EXP", size: "large" },
  { name: "GOOGLE MERCHANT", category: "marketing", level: "COMPLIANCE", size: "medium" },
  { name: "MOTION & EDITING", category: "marketing", level: "AE & PREMIERE", size: "large" },
  { name: "MONGODB / SQL", category: "fullstack", level: "DATABASE", size: "medium" },
  { name: "CUSTOM SECTIONS", category: "shopify", level: "THEMING", size: "huge" },
  { name: "WHATSAPP API", category: "marketing", level: "AUTOMATION", size: "medium" },
];

const CHAPTERS = [
  {
    id: "01",
    tag: "EDUCATION & CS ROOTS",
    title: "VARENDRA UNIVERSITY",
    role: "Computer Science & Engineering Student",
    period: "2024 — PRESENT",
    location: "Rajshahi, Bangladesh",
    description:
      "Pursuing a BSc in CSE with deep focus on algorithms, software architecture, modern web stacks, and artificial intelligence, while concurrently shipping production code for international brands.",
    highlights: [
      "2nd Runner Up at NASA Space Apps Challenge 2025",
      "Full-stack student projects, AI assistants, and open-source contributions",
      "Specialization in fast web platforms and accessible software design",
    ],
  },
  {
    id: "02",
    tag: "CLIENT & CREATIVE SYSTEMS",
    title: "ROYAL HAIR WIGS",
    role: "Social Media, Video & Growth Engineer",
    period: "OCT 2024 — PRESENT",
    location: "Dubai • USA • Italy",
    description:
      "Directing full-funnel digital client acquisition, high-impact commercial video editing, brand aesthetics, and WhatsApp Business API outreach systems across three global continents.",
    highlights: [
      "Custom social media marketing strategy reaching global buyers",
      "Commercial video editing and motion graphics with CapCut & Premiere",
      "Automated lead management and international client conversion workflows",
    ],
  },
  {
    id: "03",
    tag: "INDEPENDENT ENGINEERING",
    title: "FREELANCE SHOPIFY DEV",
    role: "Lead Liquid Theme & Storefront Specialist",
    period: "2025 — PRESENT",
    location: "Global Remote",
    description:
      "Engineering bespoke Shopify Liquid storefronts, headless web apps, and conversion funnels for décor, beauty, footwear, and consumer lifestyle brands worldwide.",
    highlights: [
      "Zero-latency custom Liquid sections and theme customization",
      "Google Merchant Center compliance and speed performance optimization",
      "Trust-building design systems, custom FAQ accordions, and checkout hooks",
    ],
  },
];

function Home() {
  const [copied, setCopied] = useState(false);
  const [skillCategory, setSkillCategory] = useState<string>("all");
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isSkillPaused, setIsSkillPaused] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [isDeckPaused, setIsDeckPaused] = useState(false);
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

  // Auto rotate capabilities if not paused
  useEffect(() => {
    if (isSkillPaused || filteredSkills.length === 0) return;
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % filteredSkills.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isSkillPaused, filteredSkills.length]);

  // Filter projects
  const filteredProjects =
    projectFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter);

  // Featured Project for the spotlight section
  const spotlightProject =
    PROJECTS.find((p) => p.slug === "fair-prices") ?? PROJECTS[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* ========================================================================
          1. CINEMATIC HERO SECTION (Directly inspired by Reference Recording)
          ======================================================================== */}
      <section className="relative flex min-h-[96vh] w-full flex-col justify-between overflow-hidden pt-28 pb-10">
        {/* Ambient Dark Atmospheric Vignette & Glowing Halo */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-ink/90 via-ink/95 to-ink" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-indigo/40 via-indigo/15 to-transparent blur-3xl opacity-80" />
        <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 size-[500px] rounded-full bg-gradient-radial from-emerald/25 via-emerald/5 to-transparent blur-3xl opacity-50" />

        {/* Top Status Bar Inside Hero */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 font-mono text-[11px] tracking-widest text-cream/70 uppercase">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald animate-ping" />
            PERSONAL PORTFOLIO • EST. 2026
          </span>
          <span className="hidden sm:inline">RAFI / MOMIN CINEMATIC SYSTEM</span>
          <span>AVAILABLE FOR NEW WORK</span>
        </div>

        {/* Massive Monumental Backdrop Typography */}
        <div className="pointer-events-none absolute inset-x-0 top-[22%] -z-10 flex flex-col items-center justify-center select-none">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-monumental text-3xl tracking-[0.25em] text-cream/80 sm:text-5xl lg:text-6xl"
          >
            SHOPIFY &amp; FULL-STACK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center font-monumental leading-[0.82] text-cream drop-shadow-2xl"
            style={{ fontSize: "clamp(5rem, 17vw, 16.5rem)" }}
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* Center Focal Point: Momin's Real Portrait + Overlaid Signature Monogram */}
        <div className="relative mx-auto mt-8 flex flex-col items-center justify-center">
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]">
            {/* Cutout Image */}
            <motion.img
              src="/momin-cutout.png"
              alt="MD Momin Ali — Portrait"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-105"
            />

            {/* Overlaid Monogram / Title on Torso (as seen in reference video) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center text-center"
            >
              <div className="rounded-2xl border border-cream/15 bg-ink/75 px-6 py-3 shadow-2xl backdrop-blur-md">
                <p className="font-mono text-[10px] tracking-[0.3em] text-cream/70 uppercase">
                  MD • MOMIN
                </p>
                <h2 className="font-monumental text-3xl tracking-tight text-cream sm:text-4xl">
                  ALI
                </h2>
                <p className="font-mono text-[9px] tracking-widest text-indigo-300 uppercase">
                  SHOPIFY LIQUID • FULL-STACK • CREATIVE SYSTEMS
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Side Story Elements & Metadata (Left & Right Bottom Overlays) */}
        <div className="mx-auto grid w-full max-w-7xl items-end gap-6 px-6 sm:grid-cols-2">
          {/* Left Column: Ideas Made Real */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col space-y-2 text-cream"
          >
            <p className="font-mono text-[10px] tracking-widest text-cream/60 uppercase">
              01 / A DIFFERENT KIND OF CRAFT
            </p>
            <div className="font-monumental text-4xl leading-[0.9] sm:text-6xl">
              IDEAS{" "}
              <span className="font-editorial-italic text-indigo-400 font-normal">MADE</span>{" "}
              REAL<span className="text-emerald">.</span>
            </div>
            <p className="font-mono text-[11px] tracking-wider text-cream/70">
              ENGINEERING WITH INTENTION • RAJSHAHI, BANGLADESH
            </p>
          </motion.div>

          {/* Right Column: Currently Writing My Next Chapter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col space-y-2 font-mono text-[11px] text-cream sm:text-right"
          >
            <p className="tracking-widest text-cream/60 uppercase">
              CURRENTLY WRITING MY NEXT CHAPTER
            </p>
            <div className="space-y-1 text-cream/80">
              <p>
                <span className="text-indigo-400 font-bold">01 /</span> FINAL-YEAR CSE • VARENDRA UNIVERSITY
              </p>
              <p>
                <span className="text-emerald font-bold">02 /</span> SHOPIFY LIQUID &amp; WEB ENGINEER
              </p>
              <p>
                <span className="text-coral font-bold">03 /</span> 2ND RUNNER UP • NASA SPACE APPS 2025
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Control Bar */}
        <div className="mx-auto mt-8 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-6 pt-5 font-mono text-xs text-cream/80">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald" />
            <span>001 / INTRODUCTION</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/works"
              className="group inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 font-mono text-[11px] tracking-wider text-cream uppercase backdrop-blur transition-all hover:border-indigo-400 hover:bg-indigo"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 font-mono text-[11px] tracking-wider text-cream uppercase backdrop-blur transition-all hover:border-emerald hover:bg-emerald"
            >
              {copied ? <CheckCheck size={13} className="text-cream" /> : <Copy size={13} />}
              <span>{copied ? "EMAIL COPIED!" : "COPY EMAIL"}</span>
            </button>
          </div>

          <div className="hidden items-center gap-2 tracking-widest text-cream/60 uppercase lg:flex">
            <span>↓ THE STORY CONTINUES</span>
          </div>
        </div>
      </section>

      {/* ========================================================================
          2. CAPABILITIES / SKILLS TYPOGRAPHY SECTION (Inspired by Frame 004)
          ======================================================================== */}
      <section className="relative border-y border-ink/10 bg-ink px-6 py-24 text-cream">
        {/* Subtle background matrix streaming lines */}
        <div className="pointer-events-none absolute inset-0 opacity-15 overflow-hidden font-mono text-[9px] text-cream/40 leading-tight select-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <p key={i} className="whitespace-nowrap">
              std::vector&lt;LiquidStorefront&gt; components; void render(Shopify::Theme &amp;theme) &#123; gemini.optimize(); return conversion_rate &gt; 3.8; &#125; /* RAFI/MOMIN ARCHITECTURE 2026 */
            </p>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Top Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/10 pb-6">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
                • LIVE TECHNOLOGY TRANSMISSION
              </p>
              <h2 className="mt-2 font-monumental text-4xl tracking-tight text-cream sm:text-6xl">
                CAPABILITIES &amp;{" "}
                <span className="font-editorial-italic text-indigo-300 font-normal">
                  STACK
                </span>
              </h2>
            </div>

            <div className="font-mono text-xs text-cream/60 text-right">
              <p>MULTI-DEPTH / Z-AXIS</p>
              <p className="text-emerald">EST. 2026 • ALWAYS EVOLVING</p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "all", label: "ALL DISCIPLINES", count: "12" },
              { id: "shopify", label: "SHOPIFY & LIQUID", count: "03" },
              { id: "frontend", label: "FRONTEND & REACT", count: "03" },
              { id: "fullstack", label: "BACKEND & AI", count: "03" },
              { id: "marketing", label: "GROWTH & CREATIVE", count: "03" },
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
                    ? "border-indigo-400 bg-indigo text-cream shadow-md shadow-indigo/30"
                    : "border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/40 hover:text-cream",
                )}
              >
                {cat.label} <span className="opacity-60">[{cat.count}]</span>
              </button>
            ))}
          </div>

          {/* Giant Floating Typography Cloud Display */}
          <div className="relative mt-12 flex min-h-[360px] flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 text-center backdrop-blur-sm sm:min-h-[440px]">
            {filteredSkills.map((skill, idx) => {
              const isHighlight = idx === activeSkillIndex;
              return (
                <motion.div
                  key={skill.name}
                  animate={{
                    scale: isHighlight ? 1.08 : 0.98,
                    opacity: isHighlight ? 1 : 0.65,
                    y: isHighlight ? -6 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative cursor-pointer"
                  onClick={() => setActiveSkillIndex(idx)}
                >
                  <p
                    className={cn(
                      "font-monumental tracking-tight transition-all duration-300",
                      skill.size === "huge" && "text-4xl sm:text-7xl lg:text-8xl",
                      skill.size === "large" && "text-3xl sm:text-5xl lg:text-6xl",
                      skill.size === "medium" && "text-2xl sm:text-4xl lg:text-5xl",
                      isHighlight
                        ? "text-cream drop-shadow-[0_0_35px_rgba(91,79,224,0.7)]"
                        : "text-cream/50 group-hover:text-cream/80",
                    )}
                  >
                    {skill.name}
                  </p>
                  <span className="font-mono text-[10px] tracking-widest text-indigo-400 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Skill Controls & Subtitle Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-indigo-400">THE TECHNOLOGIES</span>
              <span className="text-cream/40">•</span>
              <span className="text-cream/70 italic font-editorial">
                Many skills. One direction. Always moving forward.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveSkillIndex(
                    (prev) => (prev - 1 + filteredSkills.length) % filteredSkills.length,
                  )
                }
                className="rounded-lg border border-cream/20 bg-cream/5 p-2 transition-colors hover:bg-cream/15"
                title="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setIsSkillPaused((p) => !p)}
                className="flex items-center gap-1.5 rounded-lg border border-cream/20 bg-cream/5 px-3 py-2 transition-colors hover:bg-cream/15"
              >
                {isSkillPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{isSkillPaused ? "PLAY" : "PAUSE"}</span>
              </button>
              <button
                onClick={() =>
                  setActiveSkillIndex((prev) => (prev + 1) % filteredSkills.length)
                }
                className="rounded-lg border border-cream/20 bg-cream/5 p-2 transition-colors hover:bg-cream/15"
                title="Next"
              >
                <ChevronRight size={16} />
              </button>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-400/40 bg-indigo/20 px-4 py-2 font-bold text-cream transition-colors hover:bg-indigo"
              >
                <span>EXPLORE ALL</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          3. MAIN PROJECT SHOWCASE: 3D STACKED PERSPECTIVE DECK (Frames 006 & 008)
          ======================================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        {/* Giant Architectural Background Watermark */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center opacity-[0.035] select-none">
          <p className="font-monumental text-[18vw] leading-none text-ink">
            ARCHIVE
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              • 04 / SELECTED PROJECTS
            </p>
            <h2 className="mt-2 font-monumental text-4xl tracking-tight text-ink sm:text-6xl">
              CURATED{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                WORKS
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs leading-relaxed text-body sm:text-right">
            Storefronts, AI consumer apps, and marketing architectures engineered for scale and speed.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "ALL PROJECTS", count: PROJECTS.length },
              { id: "app", label: "MOBILE & AI", count: PROJECTS.filter((p) => p.category === "app").length },
              { id: "shopify", label: "SHOPIFY STOREFRONTS", count: PROJECTS.filter((p) => p.category === "shopify").length },
              { id: "web", label: "WEB PLATFORMS", count: PROJECTS.filter((p) => p.category === "web").length },
              { id: "growth", label: "GROWTH & DATA", count: PROJECTS.filter((p) => p.category === "growth").length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                  projectFilter === tab.id
                    ? "border-indigo bg-indigo text-cream shadow-md shadow-indigo/25"
                    : "border-ink/10 bg-card text-body hover:border-ink/30 hover:text-ink",
                )}
              >
                {tab.label}{" "}
                <span className="text-[10px] opacity-70">
                  [{String(tab.count).padStart(2, "0")}]
                </span>
              </button>
            ))}
          </div>

          <Link
            to="/works"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-indigo uppercase hover:underline"
          >
            <span>VIEW FULL ARCHIVE ({PROJECTS.length})</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Staggered Grid of Real Projects */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              total={filteredProjects.length}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================
          4. FEATURED CLIENT WORK SPOTLIGHT + MARQUEE TICKER (Frame 013)
          ======================================================================== */}
      <section className="relative overflow-hidden border-y border-ink/10 bg-gradient-to-b from-ink via-ink/95 to-ink py-24 text-cream">
        {/* Continuous Marquee Ticker */}
        <div className="border-b border-cream/10 bg-cream/5 py-3 font-mono text-xs tracking-widest text-cream/70 uppercase overflow-hidden">
          <div className="marquee-scroll flex gap-8">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap">
                <span>✦ BESPOKE SHOPIFY LIQUID</span>
                <span>✦ 100% LIGHTHOUSE PERFORMANCE</span>
                <span>✦ ZERO-LATENCY USER EXPERIENCE</span>
                <span>✦ GEMINI AI CITIZEN APP</span>
                <span>✦ 2ND RUNNER UP NASA SPACE APPS 2025</span>
                <span>✦ CLIENT ARCHIVE 001</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Device Mockup Presentation */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo/30 via-emerald/20 to-transparent blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-cream/20 bg-ink/80 p-3 shadow-2xl backdrop-blur-xl">
                {/* Header status on frame */}
                <div className="flex items-center justify-between border-b border-cream/10 pb-2 px-2 font-mono text-[10px] text-cream/60">
                  <span>FEATURED CASE STUDY • {spotlightProject.slug.toUpperCase()}</span>
                  <span className="flex items-center gap-1.5 text-emerald">
                    <span className="size-1.5 rounded-full bg-emerald animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                </div>
                <img
                  src={spotlightProject.image}
                  alt={spotlightProject.title}
                  className="mt-3 aspect-16/10 w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Badge Stamp */}
              <div className="absolute -bottom-5 -right-4 rounded-full border border-cream/20 bg-ink/90 px-4 py-2 font-mono text-[10px] font-bold tracking-wider text-cream uppercase shadow-xl backdrop-blur-md">
                IN THE WILD • LIVE / 001
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo/15 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo-300 uppercase">
                SPOTLIGHT CHAPTER • {spotlightProject.tag}
              </div>

              <h2 className="font-monumental text-4xl tracking-tight text-cream sm:text-6xl">
                BUILT FOR{" "}
                <span className="font-editorial-italic text-indigo-300 font-normal">
                  REAL IMPACT.
                </span>
              </h2>

              <h3 className="font-display text-2xl font-bold text-cream">
                {spotlightProject.title}
              </h3>

              <p className="text-base leading-relaxed text-cream/70">
                {spotlightProject.overview ?? spotlightProject.description}
              </p>

              {spotlightProject.highlights && (
                <ul className="space-y-2.5 font-mono text-xs text-cream/80">
                  {spotlightProject.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 size-1.5 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/works/$slug"
                  params={{ slug: spotlightProject.slug }}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-lg shadow-indigo/30 transition-transform hover:scale-105"
                >
                  <span>VIEW FULL CASE STUDY</span>
                  <ArrowRight size={14} />
                </Link>

                {spotlightProject.link && (
                  <a
                    href={spotlightProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-cream uppercase backdrop-blur transition-colors hover:border-cream/50 hover:bg-cream/15"
                  >
                    <span>OPEN APPLICATION</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          5. PROFESSIONAL CHAPTERS & JOURNEY (Frame 011)
          ======================================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              • 05 / CAREER TIMELINE &amp; MILESTONES
            </p>
            <h2 className="mt-2 font-monumental text-4xl tracking-tight text-ink sm:text-6xl">
              PROFESSIONAL{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                CHAPTERS
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-body sm:text-right">
            Dual track engineering: Academic computer science rigor paired with commercial freelance execution.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
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

          {/* Active Chapter In-Depth View */}
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-ink/10 bg-card p-8 shadow-xl sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-5 font-mono text-xs">
              <span className="rounded-full bg-indigo/10 px-3 py-1 font-bold text-indigo">
                {CHAPTERS[activeChapter].tag}
              </span>
              <span className="text-body">{CHAPTERS[activeChapter].location}</span>
            </div>

            <h3 className="mt-6 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
              {CHAPTERS[activeChapter].title}
            </h3>

            <p className="mt-2 font-editorial-italic text-lg text-indigo">
              {CHAPTERS[activeChapter].role} • {CHAPTERS[activeChapter].period}
            </p>

            <p className="mt-6 text-base leading-relaxed text-body">
              {CHAPTERS[activeChapter].description}
            </p>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="font-mono text-xs font-bold tracking-widest text-ink uppercase">
                KEY CONTRIBUTIONS &amp; DELIVERABLES
              </p>
              <ul className="mt-4 space-y-3 font-mono text-xs text-body">
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
          6. CLOSING "LET'S MAKE IT REAL." CONTACT CTA & DIRECTORY (Frame 015)
          ======================================================================== */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-ink px-6 py-28 text-cream">
        <div className="pointer-events-none absolute left-0 bottom-0 size-[500px] rounded-full bg-indigo/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-emerald/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Monumental Statement */}
            <div className="space-y-6">
              <p className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
                • GOT A PROJECT IN MIND?
              </p>

              <div className="font-monumental leading-[0.88] text-cream" style={{ fontSize: "clamp(4.5rem, 11vw, 10rem)" }}>
                LET&apos;S <br />
                <span className="font-editorial-italic font-normal text-indigo-300">make it</span> <br />
                REAL<span className="text-emerald">.</span>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                From high-converting Shopify storefronts to AI-powered web applications, I turn ambitious ideas into digital experiences that actually ship. Tell me what you&apos;re building.
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-indigo px-8 py-4 font-mono text-sm font-bold tracking-wider text-cream uppercase shadow-2xl shadow-indigo/50 transition-all hover:scale-105 hover:bg-indigo-600"
                >
                  <span>YOUR NEXT PROJECT / LET&apos;S TALK</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Channel Directory */}
            <div className="rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="flex items-center justify-between border-b border-cream/10 pb-4 font-mono text-xs">
                <span className="text-cream/60">ALL LINES ARE OPEN</span>
                <span className="text-emerald">05 CHANNELS ↗</span>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[10px] tracking-widest text-indigo-300 uppercase">
                  THE DIRECT DIRECTORY
                </p>
                <h3 className="font-monumental text-3xl tracking-tight text-cream sm:text-4xl">
                  FIND ME{" "}
                  <span className="font-editorial-italic text-cream/70 font-normal">
                    anywhere.
                  </span>
                </h3>
                <p className="mt-2 text-sm text-cream/60">
                  Business enquiries, collaborations, or Shopify consultations. Pick your channel:
                </p>
              </div>

              {/* Channels List */}
              <div className="mt-8 space-y-3 font-mono text-xs">
                {/* Channel 1: Primary Email with 1-click Copy */}
                <div className="rounded-2xl border border-indigo-400/40 bg-indigo/10 p-4 transition-all hover:bg-indigo/20">
                  <div className="flex items-center justify-between text-[10px] text-indigo-300">
                    <span>01 / PRIMARY CHANNEL</span>
                    <span>RECOMMENDED</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-cream break-all">{EMAIL}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-cream/20 bg-cream/10 px-3 py-1.5 text-[10px] text-cream transition-colors hover:bg-cream/20"
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
                  className="flex items-center justify-between rounded-xl border border-cream/10 bg-cream/5 p-4 transition-all hover:border-emerald hover:bg-emerald/10"
                >
                  <div>
                    <span className="text-[10px] text-cream/50">02 / LIVE CHAT</span>
                    <p className="font-bold text-cream">WHATSAPP</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald">
                    +880 1792 872188 <ArrowUpRight size={13} />
                  </span>
                </a>

                {/* Channel 3: LinkedIn */}
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/10 bg-cream/5 p-4 transition-all hover:border-indigo-400 hover:bg-indigo/10"
                >
                  <div>
                    <span className="text-[10px] text-cream/50">03 / NETWORK</span>
                    <p className="font-bold text-cream">LINKEDIN</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cream/70">
                    MD MOMIN ALI <ArrowUpRight size={13} />
                  </span>
                </a>

                {/* Channel 4: GitHub & Projects */}
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/10 bg-cream/5 p-4 transition-all hover:border-cream/30 hover:bg-cream/10"
                >
                  <div>
                    <span className="text-[10px] text-cream/50">04 / CODE &amp; APKs</span>
                    <p className="font-bold text-cream">GITHUB &amp; ARCHIVE</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cream/70">
                    @MOMINOFFICIAL <ArrowUpRight size={13} />
                  </span>
                </a>

                {/* Channel 5: Facebook / Instagram */}
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/10 bg-cream/5 p-4 transition-all hover:border-coral hover:bg-coral/10"
                >
                  <div>
                    <span className="text-[10px] text-cream/50">05 / SOCIALS</span>
                    <p className="font-bold text-cream">FACEBOOK &amp; INSTAGRAM</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cream/70">
                    CONNECT &amp; CONVERSE <ArrowUpRight size={13} />
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
