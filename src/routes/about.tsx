import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Code2, Palette, ShoppingBag, LineChart, GraduationCap, Briefcase, Server, Check, ArrowRight } from "lucide-react";
import momin from "@/assets/momin.png.asset.json";
import { SERVICES, SKILL_GROUPS } from "@/lib/portfolio";
import { Reveal, SectionHeading, Stagger, TiltCard, Blob } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MD Momin Ali — Shopify Developer" },
      {
        name: "description",
        content:
          "MD Momin Ali is a Shopify developer, front-end engineer and digital marketer building fast, conversion-focused storefronts.",
      },
      { property: "og:title", content: "About MD Momin Ali — Shopify Developer" },
      {
        property: "og:description",
        content: "Shopify developer, front-end engineer and digital marketer.",
      },
    ],
  }),
  component: AboutPage,
});

const SKILLS = [
  { icon: ShoppingBag, title: "Shopify Development", body: "Liquid theming, custom sections, app integrations and speed tuning." },
  { icon: Code2, title: "Front-End Engineering", body: "React, Tailwind CSS, JavaScript, semantic HTML and accessible markup." },
  { icon: Server, title: "Back-End & Full-Stack", body: "Node.js, Express, REST APIs, MongoDB, authentication and admin dashboards." },
  { icon: Palette, title: "UI & Conversion Design", body: "Editorial layouts, trust-building components and clean product storytelling." },
  { icon: LineChart, title: "Digital Marketing", body: "Meta, Google and TikTok ads, SEO fundamentals, lead generation and WhatsApp API outreach." },
];

const TIMELINE = [
  { icon: GraduationCap, when: "2024 — Present", title: "CSE Student, Varendra University", body: "Studying computer science while shipping client work in parallel." },
  { icon: GraduationCap, when: "2024", title: "Programming Hero — Batch 14", body: "Completed intensive web development training in HTML, CSS and JavaScript." },
  { icon: Briefcase, when: "Oct 2024 — Present", title: "Royal Hair Wigs — Social Media & Creative", body: "Managing social accounts, Canva ad design, CapCut video edits and WhatsApp API lead generation for clients in Dubai, the USA and Italy." },
  { icon: Briefcase, when: "2025 — Present", title: "Freelance Shopify Developer", body: "Building storefronts for décor, beauty and footwear brands worldwide." },
];

function AboutPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 pt-32">
      <Blob className="left-0 top-20 size-80 bg-indigo/15 breathe-glow" />
      <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal from="left">
          <motion.div
            whileHover={{ rotate: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="surface-card overflow-hidden p-3"
          >
            <img
              src={momin.url}
              alt="Portrait of MD Momin Ali"
              className="w-full rounded-xl object-cover"
            />
          </motion.div>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <span className="badge-pill">About Me</span>
          <h1 className="mt-4 text-4xl font-bold uppercase sm:text-5xl">MD Momin Ali</h1>
          <p className="mt-2 font-mono text-sm tracking-wider text-indigo">
            Shopify Developer • Full-Stack Engineer • Digital Marketer
          </p>
          <p className="mt-5 leading-relaxed text-body">
            I build Shopify storefronts and full-stack web apps that feel considered — fast,
            clean and made to convert. Front-end in React and Tailwind, back-end in Node,
            Express and MongoDB, plus custom Liquid sections and layouts built around how
            people actually shop.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            I&apos;m currently a Computer Science &amp; Engineering student at Varendra University
            in Rajshahi, Bangladesh, working with brands across décor, beauty and footwear.
          </p>
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading badge="Capabilities" title="What I Do" />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
          {SKILLS.map(({ icon: Icon, title, body }) => (
            <TiltCard key={title} accent="indigo">
              <Icon className="text-indigo" size={22} />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-body">{body}</p>
            </TiltCard>
          ))}
        </Stagger>
      </div>

      <div className="mt-20">
        <SectionHeading
          badge="Tech Stack"
          title="Skills"
          subtitle="Tools I use daily across storefronts, apps and campaigns."
        />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <TiltCard key={group.title} accent="emerald">
              <h3 className="text-lg font-bold">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </Stagger>
      </div>

      <div className="mt-20">
        <SectionHeading
          badge="Services"
          title="What I Can Do For You"
          subtitle="From a first storefront to ads, leads and the back-end behind them."
        />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <TiltCard key={service.title} accent="indigo">
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
            See packages & pricing <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading badge="Journey" title="Education & Experience" />
        <div className="relative mt-8 space-y-5 border-l border-ink/15 pl-6">
          {TIMELINE.map(({ icon: Icon, when, title, body }, i) => (
            <Reveal key={title} from="left" delay={i * 0.08}>
              <div className="surface-card relative p-5">
                <span className="absolute -left-[2.15rem] top-6 grid size-5 place-items-center rounded-full bg-indigo text-cream">
                  <Icon size={12} />
                </span>
                <p className="font-mono text-[11px] tracking-widest text-indigo">{when}</p>
                <h3 className="mt-1 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-sm text-body">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}