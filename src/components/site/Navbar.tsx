import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Home, User, Briefcase, FolderGit2, Mail, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/works", label: "Works", icon: FolderGit2 },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-cream/95 text-ink shadow-lg shadow-black/5 backdrop-blur-xl py-2"
          : "bg-transparent text-ink py-3",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Brand Monogram + Title */}
        <Link to="/" className="group flex items-center gap-3">
          <div
            className="flex size-9 items-center justify-center rounded-lg border border-ink/15 bg-card font-monumental text-xl text-ink shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-indigo/50"
          >
            M<span className="text-indigo">.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-ink">
              MD MOMIN ALI
            </span>
            <span className="font-mono text-[10px] tracking-widest text-body">
              PORTFOLIO • EST. 2026
            </span>
          </div>
        </Link>

        {/* Center Editorial Nav Links */}
        <div
          className="hidden items-center gap-1 rounded-full border border-ink/10 bg-card/80 px-3 py-1.5 shadow-sm backdrop-blur-md md:flex text-ink"
        >
          {LINKS.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "relative px-4 py-1.5 font-mono text-xs font-medium tracking-wider uppercase transition-colors",
                  active
                    ? "text-ink font-bold"
                    : "text-body hover:text-ink",
                )}
              >
                <span>{label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute inset-0 -z-10 rounded-full border bg-indigo/10 border-indigo/20"
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald/30 bg-emerald/15 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-emerald uppercase lg:flex">
            <span className="pulse-ring size-1.5 rounded-full bg-emerald" />
            Open to work
          </div>

          <Link
            to="/contact"
            className="group hidden items-center gap-1.5 rounded-full border border-ink/20 bg-ink px-5 py-2 font-mono text-xs font-bold tracking-wider text-cream shadow-sm transition-all duration-300 hover:border-indigo hover:bg-indigo sm:inline-flex"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-ink/15 bg-card text-ink p-2 shadow-sm md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-ink/10 bg-cream/95 px-6 py-4 shadow-xl backdrop-blur-2xl md:hidden"
        >
          <div className="space-y-1">
            {LINKS.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors",
                    active ? "bg-indigo/10 text-indigo font-bold" : "text-body hover:bg-ink/5 hover:text-ink",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} />
                    {label}
                  </span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-ink/10">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo py-3 font-mono text-xs font-bold tracking-widest text-cream uppercase shadow-md"
            >
              LET&apos;S CONNECT <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
