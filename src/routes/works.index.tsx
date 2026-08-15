import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS, COLLECTIONS } from "@/lib/portfolio";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading, Stagger, Blob, Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Works — Shopify Builds by MD Momin Ali" },
      {
        name: "description",
        content:
          "Selected Shopify storefronts and front-end builds by MD Momin Ali: Chez Provence, Glow Beauty, footwear storefronts and more.",
      },
      { property: "og:title", content: "Works — Shopify Builds by MD Momin Ali" },
      {
        property: "og:description",
        content: "Custom Shopify Liquid storefronts and conversion-focused front-end builds.",
      },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-32">
      <Blob className="right-0 top-24 size-72 bg-emerald/20 breathe-glow" />
      <SectionHeading
        badge="Portfolio"
        title="Selected Works"
        subtitle="Storefronts and interfaces built with Shopify Liquid, React and a fixation on detail."
      />

      {COLLECTIONS.map((collection) => {
        const items = PROJECTS.filter((p) => p.category === collection.id);
        if (!items.length) return null;
        return (
          <div key={collection.id} className="mt-16">
            <Reveal from="left">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink/10 pb-4">
                <div>
                  <p className="font-mono text-[11px] tracking-widest text-indigo">
                    {collection.kicker.toUpperCase()}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold uppercase sm:text-3xl">
                    {collection.name}
                  </h2>
                </div>
                <span className="font-mono text-[11px] tracking-widest text-body">
                  {String(items.length).padStart(2, "0")} PROJECTS
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
                {collection.blurb}
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-6 md:grid-cols-2">
              {items.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </Stagger>
          </div>
        );
      })}
    </section>
  );
}