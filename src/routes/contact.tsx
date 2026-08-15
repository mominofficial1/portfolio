import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Send, Check, Loader2, MapPin, Mail, Phone } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";
import { EMAIL } from "@/lib/portfolio";
import { SocialRow } from "@/components/site/Socials";
import { Reveal, GlowButton, Blob } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MD Momin Ali — Shopify Developer" },
      {
        name: "description",
        content:
          "Start a Shopify or front-end project with MD Momin Ali. Send a message or reach out on WhatsApp, LinkedIn or email.",
      },
      { property: "og:title", content: "Contact MD Momin Ali — Shopify Developer" },
      {
        property: "og:description",
        content: "Available for Shopify storefronts and front-end builds.",
      },
    ],
  }),
  component: ContactPage,
});

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Shopify storefront build" },
] as const;

function ContactPage() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          subject: String(fd.get("subject") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  }

  return (
    <div className="relative mx-auto max-w-6xl px-5 pt-32">
      <Blob className="left-1/3 top-16 size-72 bg-coral/15 breathe-glow" />
      <Reveal>
        <span className="badge-pill">Contact</span>
        <h1 className="mt-4 text-4xl font-bold uppercase sm:text-5xl">Let&apos;s build something</h1>
        <p className="mt-3 max-w-xl text-body">
          Tell me about your store or project. I usually reply within a day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal from="left" delay={0.05}>
          <form onSubmit={onSubmit} className="surface-card space-y-4 p-6">
            {FIELDS.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="font-mono text-[11px] tracking-widest text-body">
                  {f.label.toUpperCase()}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="mt-1.5 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm text-ink outline-none transition-all focus:border-indigo focus:ring-4 focus:ring-indigo/15"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="font-mono text-[11px] tracking-widest text-body">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What are you building?"
                className="mt-1.5 w-full resize-none rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm text-ink outline-none transition-all focus:border-indigo focus:ring-4 focus:ring-indigo/15"
              />
            </div>

            <GlowButton type="submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Sending
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </GlowButton>

            <AnimatePresence>
              {status === "sent" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-emerald/12 px-4 py-3 text-sm text-emerald"
                >
                  <Check size={16} /> Message received — I&apos;ll get back to you soon.
                </motion.p>
              ) : null}
              {status === "error" ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {error}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal from="right" delay={0.12} className="space-y-5">
          <div className="surface-card p-6">
            <h2 className="text-lg font-bold">Direct</h2>
            <ul className="mt-4 space-y-3 text-sm text-body">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo" />
                <a href={`mailto:${EMAIL}`} className="hover:text-indigo">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo" />
                <a href="https://wa.me/8801792872188" className="hover:text-indigo">
                  +880 1792 872188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-indigo" /> Rajshahi, Bangladesh
              </li>
            </ul>
          </div>
          <div className="surface-card p-6">
            <h2 className="text-lg font-bold">Elsewhere</h2>
            <div className="mt-4">
              <SocialRow />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
