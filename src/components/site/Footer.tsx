import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { SocialRow, SOCIAL_LINKS } from "./Socials";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-32 border-t border-ink/10 bg-card/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg border border-ink/15 bg-card font-monumental text-lg text-ink shadow-sm">
                M<span className="text-indigo">.</span>
              </div>
              <span className="font-display text-base font-bold tracking-tight text-ink">
                MD MOMIN ALI
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
              Shopify Developer, Full-Stack Engineer and Digital Marketer based in Rajshahi, Bangladesh. Crafting high-converting storefronts and bespoke web applications.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
              DIRECTORY
            </p>
            <ul className="mt-4 space-y-2.5 font-mono text-xs tracking-wider text-body">
              <li>
                <Link to="/" className="transition-colors hover:text-ink">
                  / 01 HOME
                </Link>
              </li>
              <li>
                <Link to="/works" className="transition-colors hover:text-ink">
                  / 02 SELECTED WORKS
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-ink">
                  / 03 PROFILE &amp; JOURNEY
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-ink">
                  / 04 PACKAGES &amp; PRICING
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-ink">
                  / 05 CONTACT CHANNELS
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-widest text-indigo uppercase">
                COMMUNICATIONS
              </p>
              <div className="mt-4">
                <SocialRow items={SOCIAL_LINKS.filter((s) => s.label !== "Email")} />
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-body transition-colors hover:text-indigo"
            >
              <span className="flex size-7 items-center justify-center rounded-full border border-ink/15 bg-card shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowUp size={13} />
              </span>
              BACK TO TOP
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-body">
            © 2026 MD MOMIN ALI — ALL RIGHTS RESERVED • MOMINOFFICIAL.ME
          </p>
          <div className="flex gap-6 font-mono text-[11px] tracking-wider text-body">
            <Link to="/privacy" className="transition-colors hover:text-indigo">
              PRIVACY POLICY
            </Link>
            <Link to="/terms" className="transition-colors hover:text-indigo">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
