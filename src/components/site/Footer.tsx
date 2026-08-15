import { Link } from "@tanstack/react-router";
import { SocialRow, SOCIAL_LINKS } from "./Socials";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-card/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
        <p className="font-mono text-xs tracking-wider text-body">© 2026 MD MOMIN ALI</p>
        <div className="flex gap-6 text-sm text-body">
          <Link to="/privacy" className="hover:text-indigo">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-indigo">
            Terms &amp; Conditions
          </Link>
        </div>
        <SocialRow items={SOCIAL_LINKS.filter((s) => s.label !== "Email")} />
      </div>
    </footer>
  );
}