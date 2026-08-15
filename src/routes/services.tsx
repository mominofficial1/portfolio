import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  ShoppingBag,
  Code2,
  LayoutTemplate,
  Gauge,
  Megaphone,
  Users,
  Zap,
} from "lucide-react";
import { SERVICES, SERVICE_PACKAGES } from "@/lib/portfolio";
import {
  Reveal,
  Stagger,
  TiltCard,
  SectionHeading,
  Blob,
  staggerChild,
} from "@/components/site/motion-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MD Momin Ali" },
      {
        name: "description",
        content:
          "Shopify development, full-stack web apps, landing pages, SEO, paid ads and lead generation services by MD Momin Ali.",
      },
      { property: "og:title", content: "Services — MD Momin Ali" },
      {
        property: "og:description",
        content:
          "Clear packages and deliverables for Shopify stores, React apps and digital marketing.",
      },
    ],
  }),
  component: ServicesPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "Shopify Store Setup & Theme Development": ShoppingBag,
  "Full-Stack Web Development": Code2,
  "Landing Pages & Conversion Design": LayoutTemplate,
  "Speed & SEO Optimisation": Gauge,
  "Paid Ads & Social Media": Megaphone,
  "Lead Generation & WhatsApp API": Users,
};

const ACCENT_BG: Record<string, string> = {
  indigo: "bg-indigo/10 text-indigo border-indigo/20",
  emerald: "bg-emerald/10 text-emerald border-emerald/20",
  coral: "bg-coral/10 text-coral border-coral/20",
};

const ACCENT_TEXT: Record<string, string> = {
  indigo: "text-indigo",
  emerald: "text-emerald",
  coral: "text-coral",
};

const ACCENT_BUTTON: Record<string, string> = {
  indigo: "bg-indigo shadow-indigo/25 hover:bg-indigo/90",
  emerald: "bg-emerald shadow-emerald/25 hover:bg-emerald/90",
  coral: "bg-coral shadow-coral/25 hover:bg-coral/90",
};

function ServicesPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 pt-32">
      <Blob className="left-0 top-16 size-80 bg-indigo/15 breathe-glow" />
      <Blob className="right-0 top-40 size-72 bg-emerald/12 breathe-glow" />

      <section className="relative">
        <Reveal>
          <span className="badge-pill">Services</span>
          <h1 className="mt-4 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            What I do for clients
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
            I help brands launch, convert and scale — from a custom Shopify storefront to a
            full-stack web app, and from SEO tune-ups to paid campaigns and verified lead lists.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.title];
            return (
              <TiltCard key={service.title} accent="indigo">
                {Icon ? <Icon className="text-indigo" size={24} /> : null}
                <h3 className="mt-3 text-base font-bold leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{service.body}</p>
                <ul className="mt-4 space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-body">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            );
          })}
        </Stagger>
      </section>

      <section className="mt-24">
        <SectionHeading
          badge="Packages"
          title="Pick a starting point"
          subtitle="Transparent packages. Every tier includes a clear scope, revisions and delivery timeline."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICE_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`
                  relative flex h-full flex-col overflow-hidden rounded-2xl border p-6
                  ${pkg.popular ? "border-indigo/30 bg-card shadow-xl shadow-indigo/10" : "surface-card"}
                `}
              >
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${ACCENT_BG[pkg.accent]}`}
                >
                  {pkg.kicker}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{pkg.name}</h3>
                <p className={`mt-1 text-3xl font-bold ${ACCENT_TEXT[pkg.accent]}`}>{pkg.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{pkg.description}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-body">
                      <Check size={16} className={`mt-0.5 shrink-0 ${ACCENT_TEXT[pkg.accent]}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`
                    mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-cream shadow-lg transition-transform hover:scale-105
                    ${ACCENT_BUTTON[pkg.accent]}
                  `}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading
          badge="Process"
          title="How we work together"
          subtitle="A simple 4-step workflow so you know exactly where the project stands."
          align="center"
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MessageCircleIcon,
              step: "01",
              title: "Discovery",
              body: "You share your goals, audience and any existing designs or store links.",
            },
            {
              icon: Zap,
              step: "02",
              title: "Scope & Quote",
              body: "I map out the deliverables, timeline and a fixed starting price for approval.",
            },
            {
              icon: Code2,
              step: "03",
              title: "Build",
              body: "I design and develop in stages, with preview links and regular updates.",
            },
            {
              icon: Check,
              step: "04",
              title: "Launch",
              body: "We test, revise, hand over assets and go live with documentation.",
            },
          ].map(({ icon: Icon, step, title, body }) => (
            <motion.div
              key={step}
              variants={staggerChild}
              className="surface-card relative p-6 text-center"
            >
              <span className="font-mono text-4xl font-bold text-indigo/20">{step}</span>
              <Icon className="mx-auto mt-3 text-indigo" size={22} />
              <h3 className="mt-3 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="mt-24">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-10 text-center">
            <Blob className="left-1/2 top-0 size-72 -translate-x-1/2 bg-coral/20 breathe-glow" />
            <h2 className="text-3xl font-bold uppercase sm:text-4xl">Not sure which fits?</h2>
            <p className="mx-auto mt-3 max-w-xl text-body">
              Tell me what you&apos;re building and I&apos;ll recommend the right package — or build a custom one around your budget.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function MessageCircleIcon(props: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
