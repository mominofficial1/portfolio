import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Code2,
  Palette,
  ShoppingBag,
  LineChart,
  GraduationCap,
  Briefcase,
  Server,
  Check,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Award,
  Sparkles,
} from "lucide-react";
import { SERVICES, SKILL_GROUPS } from "@/lib/portfolio";
import { Reveal, SectionHeading, Stagger, TiltCard, Blob } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Profile & Journey — MD Momin Ali" },
      {
        name: "description",
        content:
          "MD Momin Ali is a Shopify developer, full-stack engineer and digital marketer building high-conversion storefronts and apps in Rajshahi, Bangladesh.",
      },
      { property: "og:title", content: "Profile & Journey — MD Momin Ali" },
      {
        property: "og:description",
        content: "Shopify developer, front-end engineer and digital marketer.",
      },
    ],
  }),
  component: AboutPage,
});

const SKILLS = [
  { icon: ShoppingBag, title: "Shopify Liquid Theming", body: "Bespoke storefronts, custom sections, cart optimizations, and Google Merchant Center compliance." },
  { icon: Code2, title: "Front-End Engineering", body: "React, TypeScript, Tailwind CSS, high-performance web apps, and accessible interfaces." },
  { icon: Server, title: "Back-End & Full-Stack", body: "Node.js, Express, REST APIs, MongoDB, authentication, and admin dashboard systems." },
  { icon: Palette, title: "UI & Conversion Design", body: "Editorial layouts, trust-building UI components, and high-converting checkout UX." },
  { icon: LineChart, title: "Digital Growth & Video", body: "Meta & Google Ads, Premiere Pro commercial video editing, and automated WhatsApp API outreach." },
];

const TIMELINE = [
  { icon: GraduationCap, when: "2024 — PRESENT", title: "CSE Student, Varendra University", body: "Pursuing BSc in Computer Science & Engineering in Rajshahi, balancing software architecture and production client shipping." },
  { icon: Trophy, when: "2025", title: "NASA Space Apps Challenge — 2nd Runner Up", body: "Recognized nationally for innovative engineering, scientific data integration, and collaborative problem solving." },
  { icon: Briefcase, when: "OCT 2024 — PRESENT", title: "Royal Hair Wigs — Social Media & Creative Lead", body: "Managing multi-channel digital client acquisition, high-impact commercial video editing, and WhatsApp API lead systems across Dubai, the USA and Italy." },
  { icon: Briefcase, when: "2025 — PRESENT", title: "Freelance Shopify & Web Developer", body: "Engineering custom Liquid storefronts for brands across the UK, Europe, and Asia." },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen px-6 pt-36 pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-body uppercase transition-colors hover:text-indigo"
        >
          <ArrowLeft size={14} /> BACK TO HOME
        </Link>

        {/* Section Hero Split */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl bg-indigo/15 blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-card p-3 shadow-2xl">
              <img
                src="/momin.jpg"
                alt="Portrait of MD Momin Ali"
                className="aspect-square w-full rounded-2xl object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />
              <div className="mt-4 flex items-center justify-between px-2 font-mono text-[11px] text-body">
                <span>MD MOMIN ALI</span>
                <span className="text-emerald font-bold">• RAJSHAHI, BD</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-indigo/10 px-3.5 py-1 font-mono text-xs font-bold tracking-widest text-indigo uppercase">
              • PROFILE &amp; PHILOSOPHY
            </div>

            <h1 className="font-monumental text-5xl tracking-tight text-ink sm:text-7xl">
              ENGINEERING{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                THAT SELLS.
              </span>
            </h1>

            <p className="font-mono text-xs font-semibold tracking-wider text-indigo uppercase">
              SHOPIFY DEVELOPER • FULL-STACK ENGINEER • AI CONTENT SPECIALIST
            </p>

            <p className="text-base leading-relaxed text-body sm:text-lg">
              I architect high-converting Shopify storefronts and modern web applications. Combining computer science rigor with AI content workflows, I build fast, conversion-driven digital systems that scale without bloat.
            </p>

            <p className="text-sm font-mono text-body">
              Based in Rajshahi, Bangladesh — shipping production storefronts and platforms worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/works"
                className="inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
              >
                <span>EXPLORE WORKS</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3 font-mono text-xs font-bold tracking-wider text-ink uppercase transition-colors hover:border-indigo"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mt-28 border-t border-ink/10 pt-16">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            • CORE CAPABILITIES
          </p>
          <h2 className="mt-2 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
            WHAT I DELIVER FOR CLIENTS
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all hover:border-indigo/40 hover:shadow-lg"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Groups */}
        <div className="mt-28 border-t border-ink/10 pt-16">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            • DAILY TOOLKIT
          </p>
          <h2 className="mt-2 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
            TECHNICAL ARSENAL
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-ink">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-ink/10 bg-cream/70 px-3 py-1 font-mono text-xs text-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <div className="mt-28 border-t border-ink/10 pt-16">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            • JOURNEY &amp; CREDENTIALS
          </p>
          <h2 className="mt-2 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
            CHRONOLOGY &amp; ACHIEVEMENTS
          </h2>

          <div className="mt-10 space-y-6">
            {TIMELINE.map(({ icon: Icon, when, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all hover:border-indigo/40 sm:flex-row sm:items-start"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                  <Icon size={20} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="font-bold text-indigo">{when}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
