import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { EMAIL, SOCIALS } from "@/lib/portfolio";

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
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