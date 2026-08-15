import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Lock, Mail, ArrowLeft } from "lucide-react";
import { GlowButton, Blob } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — MD Momin Ali" },
      { name: "description", content: "Client area login for MD Momin Ali's portfolio." },
      { property: "og:title", content: "Login — MD Momin Ali" },
      { property: "og:description", content: "Client area login." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [note, setNote] = useState("");

  return (
    <div className="relative grid min-h-screen place-items-center px-5 py-32">
      <Blob className="size-96 bg-indigo/15 breathe-glow" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 14 }}
        className="surface-card w-full max-w-md p-8"
      >
        <span className="badge-pill">Client Area</span>
        <h1 className="mt-4 text-3xl font-bold uppercase">Welcome back</h1>
        <p className="mt-2 text-sm text-body">Sign in to view project updates and deliverables.</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setNote("Accounts aren't enabled yet — reach out via the contact page for access.");
          }}
        >
          <div>
            <label htmlFor="email" className="font-mono text-[11px] tracking-widest text-body">
              EMAIL
            </label>
            <div className="relative mt-1.5">
              <Mail size={15} className="absolute left-4 top-3.5 text-body" />
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl border border-ink/15 bg-background py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-indigo focus:ring-4 focus:ring-indigo/15"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="font-mono text-[11px] tracking-widest text-body">
              PASSWORD
            </label>
            <div className="relative mt-1.5">
              <Lock size={15} className="absolute left-4 top-3.5 text-body" />
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-ink/15 bg-background py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-indigo focus:ring-4 focus:ring-indigo/15"
              />
            </div>
          </div>
          <GlowButton type="submit" className="w-full">
            Sign in
          </GlowButton>
        </form>

        {note ? <p className="mt-4 text-center text-sm text-body">{note}</p> : null}

        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-2 text-sm text-body hover:text-indigo"
        >
          <ArrowLeft size={14} /> Back to site
        </Link>
      </motion.div>
    </div>
  );
}
