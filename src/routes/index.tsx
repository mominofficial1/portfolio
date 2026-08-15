import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Quote, Check } from "lucide-react";
import momin from "@/assets/momin.png.asset.json";
import { PROJECTS, REVIEWS, SERVICES } from "@/lib/portfolio";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SocialRow } from "@/components/site/Socials";
import {
  Reveal,
  Stagger,
  TiltCard,
  SectionHeading,
  Blob,
  staggerChild,
} from "@/components/site/motion-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Momin Ali — Shopify Developer & Front-End Engineer" },
      {
        name: "description",
        content:
          "Portfolio of MD Momin Ali — Shopify developer, front-end engineer and digital marketer building fast, conversion-focused storefronts.",
      },
      { property: "og:title", content: "MD Momin Ali — Shopify Developer & Front-End Engineer" },
      {
        property: "og:description",
        content: "Custom Shopify storefronts, React interfaces and conversion-focused design.",
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "10+", label: "Projects Shipped" },
  { value: "4+", label: "Shopify Storefronts" },
  { value: "2+", label: "Years Building" },
  { value: "100%", label: "Client Focus" },
];

const NAME = "MD MOMIN ALI";

function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-5 pt-36 pb-16">
        <Blob className="-left-10 top-24 size-96 bg-indigo/18 breathe-glow" />
        <Blob className="right-0 top-52 size-80 bg-emerald/15 breathe-glow" />
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="badge-pill"
            >
              <span className="pulse-ring size-2 rounded-full bg-emerald" />
              Open to work
            </motion.span>

            <h1 className="mt-5 text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
              {NAME.split("").map((c, i) => (
                <motion.span
                  key={`${c}-${i}`}
                  initial={{ opacity: 0, y: 40, rotate: -8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: 0.2 + i * 0.035,
                  }}
                  className="inline-block"
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 font-mono text-sm tracking-[0.18em] shimmer-text sm:text-base"
            >
              SHOPIFY DEVELOPER • FULL-STACK ENGINEER • DIGITAL MARKETER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-5 max-w-xl leading-relaxed text-body"
            >
              I design and build Shopify storefronts and full-stack web apps that load fast, look
              editorial and sell — front-end in React, back-end in Node. Currently studying CSE at Varendra University and shipping client
              work from Rajshahi, Bangladesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/works"
                className="inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
              >
                View my work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-indigo"
              >
                <Sparkles size={16} /> Start a project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 }}
              className="mt-8"
            >
              <SocialRow />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.35 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="surface-card overflow-hidden p-3"
            >
              <img
                src={momin.url}
                alt="MD Momin Ali, Shopify developer and front-end engineer"
                className="w-full rounded-xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="gradient-rule" />
        <Stagger className="grid grid-cols-2 gap-4 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <motion.div key={s.label} variants={staggerChild} className="text-center">
              <p className="font-display text-4xl font-bold text-indigo">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-widest text-body">
                {s.label.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </Stagger>
        <div className="gradient-rule" />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHeading
          badge="Services"
          title="Client work I deliver"
          subtitle="Shopify builds, full-stack apps, landing pages, SEO and growth campaigns."
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <TiltCard key={service.title} accent="emerald">
              <Check className="text-emerald" size={20} />
              <h3 className="mt-3 text-base font-bold">{service.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">{service.body}</p>
            </TiltCard>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo hover:gap-4"
          >
            View all services & packages <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHeading
          badge="Featured"
          title="Recent Work"
          subtitle="Shopify storefronts and front-end builds shipped for real brands."
        />
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-8">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo hover:gap-4"
          >
            See all works <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <SectionHeading badge="Reviews" title="Client Feedback" align="center" />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <TiltCard key={i} accent={i === 1 ? "emerald" : "indigo"}>
              <Quote className="text-indigo" size={20} />
              <p className="mt-3 text-sm leading-relaxed text-body">{r.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-indigo/12 font-display text-sm font-bold text-indigo">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="font-mono text-[10px] tracking-widest text-body">
                    {r.role} • {r.source.toUpperCase()}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-10 text-center">
            <Blob className="left-1/2 top-0 size-72 -translate-x-1/2 bg-coral/20 breathe-glow" />
            <h2 className="text-3xl font-bold uppercase sm:text-4xl">
              Have a store that deserves better?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body">
              Tell me what you&apos;re building and I&apos;ll tell you exactly how I&apos;d ship it.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
            >
              Let&apos;s talk <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
