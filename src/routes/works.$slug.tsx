import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Lock, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio";
import { Reveal, Blob } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — MD Momin Ali" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Project by MD Momin Ali`;
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
  const { project } = Route.useLoaderData();

  return (
    <article className="relative mx-auto max-w-5xl px-5 pt-32 pb-24">
      <Blob className="right-0 top-24 size-72 bg-indigo/18 breathe-glow" />

      <Link
        to="/works"
        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-body hover:text-indigo"
      >
        <ArrowLeft size={14} /> BACK TO WORKS
      </Link>

      <Reveal className="mt-6">
        <p className="font-mono text-[11px] tracking-widest text-indigo">{project.tag}</p>
        <h1 className="mt-2 text-4xl font-bold uppercase leading-[1.05] sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-body">{project.overview ?? project.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span
            className={
              "rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-cream " +
              (project.statusTone === "live" ? "bg-emerald" : "bg-coral")
            }
          >
            {project.status}
          </span>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo px-5 py-2 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
            >
              Visit live site <ArrowUpRight size={15} />
            </a>
          ) : null}
          {project.note ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-body">
              <Lock size={12} /> {project.note}
            </span>
          ) : null}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="surface-card overflow-hidden p-3">
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <dl className="space-y-5">
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-body">ROLE</dt>
              <dd className="mt-1 font-semibold">{project.role ?? "Developer"}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-body">YEAR</dt>
              <dd className="mt-1 font-semibold">{project.year ?? "—"}</dd>
            </div>
            {project.stack?.length ? (
              <div>
                <dt className="font-mono text-[10px] tracking-widest text-body">STACK</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-2xl font-bold uppercase">What I built</h2>
          <ul className="mt-4 space-y-3">
            {(project.highlights ?? []).map((h) => (
              <li key={h} className="flex items-start gap-3 text-body">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald" size={18} />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="surface-card p-8 text-center">
          <h2 className="text-2xl font-bold uppercase">Want something like this?</h2>
          <p className="mx-auto mt-2 max-w-md text-body">
            Tell me about your store and I&apos;ll map out the build.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
          >
            Start a project
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
