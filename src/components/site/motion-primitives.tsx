import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const spring = { type: "spring", stiffness: 90, damping: 14, mass: 0.9 } as const;

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const offset =
    from === "left" ? { x: -60, y: 0 } : from === "right" ? { x: 60, y: 0 } : { x: 0, y: 48 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: spring },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className,
  accent = "indigo",
  as: _as,
}: {
  children: ReactNode;
  className?: string;
  accent?: "indigo" | "emerald" | "coral";
  as?: never;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const glow =
    accent === "emerald"
      ? "0 18px 40px -14px color-mix(in oklab, var(--brand-emerald) 55%, transparent)"
      : accent === "coral"
        ? "0 18px 40px -14px color-mix(in oklab, var(--brand-coral) 55%, transparent)"
        : "0 18px 40px -14px color-mix(in oklab, var(--brand-indigo) 55%, transparent)";

  return (
    <motion.div
      ref={ref}
      variants={staggerChild}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ rx: -py * 6, ry: px * 6 });
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      whileHover={{ y: -9, boxShadow: glow }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ transformPerspective: 900 }}
      className={cn("surface-card p-6", className)}
    >
      {children}
    </motion.div>
  );
}

type GlowButtonProps = Omit<React.ComponentProps<typeof motion.button>, "ref"> & {
  variant?: "primary" | "outline";
};

export function GlowButton({ children, variant = "primary", className, ...props }: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95, rotate: -1.5 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-black/5 transition-colors",
        variant === "primary"
          ? "bg-indigo text-cream hover:bg-indigo/90"
          : "border border-ink/25 bg-card text-ink hover:border-indigo/50",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("relative", align === "center" && "text-center")}>
      <span className="badge-pill">{badge}</span>
      <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 max-w-2xl text-body",
            align === "center" && "mx-auto text-center",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Blob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 rounded-full blur-3xl", className)}
    />
  );
}