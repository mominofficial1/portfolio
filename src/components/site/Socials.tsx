import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { EMAIL, SOCIALS } from "@/lib/portfolio";

function BehanceIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7.79 11.23c.86-.23 1.48-.84 1.48-1.87 0-1.63-1.25-2.36-2.92-2.36H1.5v9h5.1c1.88 0 3.23-.88 3.23-2.67 0-1.18-.73-1.87-2.04-2.1zm-3.69-2.5h1.93c.8 0 1.34.33 1.34 1.11 0 .75-.54 1.11-1.34 1.11H4.1V8.73zm2.14 5.5H4.1v-2.45h2.14c.91 0 1.5.38 1.5 1.22 0 .86-.59 1.23-1.5 1.23zM16.48 7.37h4.08v1.17h-4.08V7.37zm2.08 3.44c-2.42 0-3.95 1.63-3.95 3.97 0 2.39 1.58 3.97 4.07 3.97 1.83 0 3.19-.92 3.69-2.42h-1.8c-.3.45-.98.79-1.84.79-1.25 0-2.03-.7-2.14-1.78h5.92c.04-.21.05-.44.05-.68 0-2.28-1.48-3.85-3.99-3.85zm-2.01 3.03c.12-.95.84-1.52 1.95-1.52 1.05 0 1.76.57 1.9 1.52h-3.85z" />
    </svg>
  );
}

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Behance", href: SOCIALS.behance, icon: BehanceIcon },
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "Instagram", href: SOCIALS.instagram, icon: Instagram },
  { label: "Facebook", href: SOCIALS.facebook, icon: Facebook },
  { label: "WhatsApp", href: SOCIALS.whatsapp, icon: MessageCircle },
];

export function SocialRow({ items = SOCIAL_LINKS }: { items?: typeof SOCIAL_LINKS }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ label, href, icon: Icon }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -6, rotate: -8, scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 500, damping: 12 }}
          className="group grid size-11 place-items-center rounded-full border border-ink/15 bg-card text-ink shadow-sm transition-colors hover:border-indigo hover:bg-indigo hover:text-cream"
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}