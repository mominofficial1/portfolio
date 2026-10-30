import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Lock, ExternalLink, Sparkles } from "lucide-react";
import { TiltCard } from "./motion-primitives";
import type { Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  total,
  className,
}: {
  project: Project;
  index?: number;
  total?: number;
  className?: string;
}) {
  const indexStr = index !== undefined ? String(index + 1).padStart(2, "0") : undefined;
  const totalStr = total !== undefined ? String(total).padStart(2, "0") : undefined;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-card p-5 shadow-md transition-all duration-500 hover:border-indigo/40 hover:shadow-2xl hover:shadow-indigo/10",
        className,
      )}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between border-b border-ink/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
            {project.tag}
          </span>
          <span className="text-ink/20">•</span>
          <span className="font-mono text-[10px] text-body">{project.year ?? "2026"}</span>
        </div>
        {indexStr && (
          <span className="font-mono text-[11px] font-semibold text-body">
            {indexStr} {totalStr ? `/ ${totalStr}` : ""}
          </span>
        )}
      </div>

      {/* Image Preview with Hover Zoom */}
      <div className="relative mt-4 overflow-hidden rounded-xl border border-ink/10 bg-muted/40 aspect-16/10">
        <motion.img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Status Badge */}
        <div className="absolute left-3 top-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm",
              project.statusTone === "live"
                ? "bg-emerald/90 text-cream"
                : "bg-coral/90 text-cream",
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                project.statusTone === "live" ? "bg-cream animate-pulse" : "bg-cream",
              )}
            />
            {project.status}
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-5">
        <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-indigo sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body line-clamp-3">
          {project.description}
        </p>

        {project.note ? (
          <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-body">
            <Lock size={12} className="text-coral" /> {project.note}
          </p>
        ) : null}

        {/* Tech Stack Chips */}
        {project.stack && project.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink/10 bg-cream/80 px-2 py-0.5 font-mono text-[10px] tracking-wider text-body"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-md border border-ink/5 bg-cream/40 px-1.5 py-0.5 font-mono text-[10px] text-body">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Links */}
      <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-4">
        <Link
          to="/works/$slug"
          params={{ slug: project.slug }}
          className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-indigo uppercase transition-all hover:gap-2.5"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-medium text-body transition-colors hover:text-ink"
          >
            <span>LIVE</span>
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
