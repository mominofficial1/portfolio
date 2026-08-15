import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Home, User, Briefcase, FolderGit2, Mail, MessageCircle, Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-cream/80 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">
          MOMIN<span className="text-indigo">.DEV</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="relative px-4 py-2 text-sm font-medium text-body transition-colors hover:text-ink"
              >
                <span className="flex items-center gap-2">
                  <Icon size={15} />
                  {label}
                </span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-indigo"
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-indigo px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105 sm:inline-flex"
          >
            <MessageCircle size={15} /> Let&apos;s Talk
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-ink/15 bg-card p-2 text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-ink/10 bg-cream/95 px-5 py-3 backdrop-blur-xl md:hidden"
        >
          {LINKS.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 py-2.5 text-sm font-medium text-body"
            >
              <Icon size={15} /> {label}
            </Link>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}