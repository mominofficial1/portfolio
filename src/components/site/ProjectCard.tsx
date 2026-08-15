import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import { TiltCard } from "./motion-primitives";
import type { Project } from "@/lib/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard accent={project.accent} className="flex flex-col gap-4 p-5">
      <div className="relative overflow-hidden rounded-xl border border-ink/10">
        <motion.img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          className="aspect-16/10 w-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        />
        <span
          className={
            "absolute left-3 top-3 rounded-full px-3 py-1 font-mono text-[10px] tracking-wider backdrop-blur " +
            (project.statusTone === "live"
              ? "bg-emerald/90 text-cream"
              : "bg-coral/90 text-cream")
          }
        >
          {project.status}
        </span>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-widest text-indigo">{project.tag}</p>
        <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{project.description}</p>
        {project.note ? (
          <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-body">
            <Lock size={12} /> {project.note}
          </p>
        ) : null}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4">
        <Link
          to="/works/$slug"
          params={{ slug: project.slug }}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-indigo hover:gap-3 hover:underline"
        >
          View details <ArrowRight size={16} />
        </Link>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-body hover:gap-3 hover:underline"
          >
            Visit site <ArrowUpRight size={16} />
          </a>
        ) : null}
      </div>
    </TiltCard>
  );
}