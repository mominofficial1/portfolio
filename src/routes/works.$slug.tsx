import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock, CheckCircle2, ExternalLink, Calendar, Code, User, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
    if (projectIndex === -1) throw notFound();
    const project = PROJECTS[projectIndex];
    const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
    const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
    return { project, nextProject, prevProject, projectIndex, total: PROJECTS.length };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project Not Found — MD Momin Ali" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study by MD Momin Ali`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, nextProject, prevProject, projectIndex, total } = Route.useLoaderData();

  return (
    <article className="relative min-h-screen px-6 pt-36 pb-32">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 flex justify-center opacity-[0.025] select-none">
        <p className="font-monumental text-[20vw] leading-none text-ink">
          CASE STUDY
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 font-mono text-xs">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-body transition-colors hover:text-indigo"
          >
            <ArrowLeft size={14} /> BACK TO ARCHIVE
          </Link>
          <span className="text-body">
            PROJECT {String(projectIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Section A: Project Hero */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
              {project.tag}
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-cream uppercase",
                project.statusTone === "live" ? "bg-emerald" : "bg-coral",
              )}
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 font-monumental text-4xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body sm:text-xl">
            {project.overview ?? project.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
              >
                <span>OPEN LIVE PROJECT</span>
                <ArrowUpRight size={15} />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-mono text-xs font-bold tracking-wider text-ink uppercase transition-colors hover:border-indigo hover:text-indigo"
              >
                <span>SOURCE CODE (GITHUB)</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            {project.apkUrl ? (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-6 py-3 font-mono text-xs font-bold tracking-wider text-emerald uppercase transition-colors hover:bg-emerald hover:text-cream"
              >
                <span>DOWNLOAD ANDROID APK</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            {project.note ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-2.5 font-mono text-xs text-body">
                <Lock size={13} className="text-coral" /> {project.note}
              </span>
            ) : null}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-mono text-xs font-bold tracking-wider text-ink uppercase transition-colors hover:border-indigo hover:text-indigo"
            >
              <span>INQUIRE ABOUT SIMILAR BUILD</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </header>

        {/* Section C: Primary Media Showcase Frame */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-card p-4 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between border-b border-ink/5 pb-3 font-mono text-[11px] text-body">
            <span>PREVIEW CANVAS • 1920 × 1080 MOCKUP</span>
            <span className="text-emerald">VERIFIED WORK</span>
          </div>
          <img
            src={project.image}
            alt={`${project.title} detailed preview`}
            className="mt-4 w-full rounded-2xl object-cover shadow-inner"
          />
        </div>

        {/* Section B & D: Project Architecture & Execution Story */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Metadata Specs Sidebar */}
          <div className="space-y-6 rounded-3xl border border-ink/10 bg-card p-8 shadow-sm">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
                ROLE &amp; CONTRIBUTION
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-ink">
                {project.role ?? "Lead Developer & Architect"}
              </p>
            </div>

            <div className="border-t border-ink/5 pt-5">
              <p className="font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
                YEAR &amp; STATUS
              </p>
              <p className="mt-1.5 font-mono text-sm text-body">
                {project.year ?? "2026"} • {project.status}
              </p>
            </div>

            {project.stack && (
              <div className="border-t border-ink/5 pt-5">
                <p className="font-mono text-[10px] font-bold tracking-widest text-indigo uppercase">
                  TECHNOLOGY STACK
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-ink/10 bg-cream/70 px-2.5 py-1 font-mono text-[11px] text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core Technical Highlights & Story */}
          <div className="space-y-8">
            <div>
              <h2 className="font-monumental text-3xl tracking-tight text-ink sm:text-4xl">
                ENGINEERING{" "}
                <span className="font-editorial-italic text-indigo font-normal">
                  HIGHLIGHTS
                </span>
              </h2>
              <p className="mt-2 text-sm text-body">
                Architectural decisions, features built, and commercial optimizations:
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-card p-5 shadow-sm"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald/20 font-mono text-xs font-bold text-emerald">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-body sm:text-base">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  DELIVERABLES &amp; OUTPUTS
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-body">
                      <span className="size-1.5 rounded-full bg-indigo" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.problem && (
              <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-coral uppercase">
                  THE CHALLENGE &amp; PROBLEM
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.problem}
                </p>
              </div>
            )}

            {project.goals && (
              <div className="rounded-2xl border border-indigo/20 bg-indigo/5 p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  PROJECT GOALS &amp; OBJECTIVES
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.goals}
                </p>
              </div>
            )}

            {project.strategy && (
              <div className="rounded-2xl border border-indigo/20 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  STRATEGY &amp; IMPLEMENTATION
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.strategy}
                </p>
              </div>
            )}

            {project.memberWorkflow && (
              <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-emerald uppercase">
                  MEMBER MANAGEMENT WORKFLOW
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.memberWorkflow}
                </p>
              </div>
            )}

            {project.adminWorkflow && (
              <div className="rounded-2xl border border-indigo/20 bg-indigo/5 p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  ADMIN DASHBOARD &amp; MANAGEMENT
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.adminWorkflow}
                </p>
              </div>
            )}

            {project.backendDetails && (
              <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  DATABASE &amp; BACKEND FUNCTIONALITY
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.backendDetails}
                </p>
              </div>
            )}

            {project.paymentWorkflow && (
              <div className="rounded-2xl border border-coral/20 bg-coral/5 p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-coral uppercase">
                  PAYMENT MANAGEMENT WORKFLOW
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.paymentWorkflow}
                </p>
              </div>
            )}

            {project.designUx && (
              <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  DESIGN &amp; USER EXPERIENCE
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.designUx}
                </p>
              </div>
            )}

            {project.process && (
              <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                  DEVELOPMENT PROCESS
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.process}
                </p>
              </div>
            )}

            {project.challenges && (
              <div className="rounded-2xl border border-coral/20 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-coral uppercase">
                  CHALLENGES &amp; SOLUTIONS
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.result && (
              <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-6 shadow-sm">
                <p className="font-mono text-xs font-bold tracking-widest text-emerald uppercase">
                  VERIFIED RESULTS &amp; IMPACT
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {project.result}
                </p>
              </div>
            )}

            <div className="rounded-2xl border border-indigo/20 bg-indigo/5 p-6">
              <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
                COMMERCIAL VALUE DELIVERED
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {project.value ??
                  "Engineered with high performance metrics, zero-dependency Liquid sections, mobile-first checkout ergonomics, and high conversion copy."}
              </p>
            </div>
          </div>
        </div>

        {/* Section F: Next Project Navigation Block */}
        <div className="mt-24 border-t border-ink/10 pt-12">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            CONTINUE EXPLORING
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* Previous Project */}
            <Link
              to="/works/$slug"
              params={{ slug: prevProject.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all hover:border-indigo/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-body uppercase">
                <ArrowLeft size={12} /> PREVIOUS CHAPTER
              </div>
              <h4 className="mt-3 font-monumental text-2xl text-ink transition-colors group-hover:text-indigo">
                {prevProject.title}
              </h4>
              <p className="mt-1 font-mono text-[11px] text-body">{prevProject.tag}</p>
            </Link>

            {/* Next Project */}
            <Link
              to="/works/$slug"
              params={{ slug: nextProject.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all hover:border-indigo/40 hover:shadow-lg sm:text-right"
            >
              <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-body uppercase">
                NEXT CHAPTER <ArrowRight size={12} />
              </div>
              <h4 className="mt-3 font-monumental text-2xl text-ink transition-colors group-hover:text-indigo">
                {nextProject.title}
              </h4>
              <p className="mt-1 font-mono text-[11px] text-body">{nextProject.tag}</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
