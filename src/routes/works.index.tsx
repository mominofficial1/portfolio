import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS, COLLECTIONS } from "@/lib/portfolio";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ArrowLeft, ArrowUpRight, Sparkles, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Selected Works & Storefront Archive — MD Momin Ali" },
      {
        name: "description",
        content:
          "Selected Shopify storefronts, AI mobile applications, and front-end builds by MD Momin Ali: Fair Prices, Chez Provence, Glow Beauty, and more.",
      },
      { property: "og:title", content: "Selected Works & Storefront Archive — MD Momin Ali" },
      {
        property: "og:description",
        content: "Custom Shopify Liquid storefronts, Gemini AI apps, and conversion systems.",
      },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL PROJECTS", count: PROJECTS.length },
    { id: "app", label: "MOBILE & AI APPS", count: PROJECTS.filter((p) => p.category === "app").length },
    { id: "shopify", label: "SHOPIFY STOREFRONTS", count: PROJECTS.filter((p) => p.category === "shopify").length },
    { id: "web", label: "WEB PLATFORMS", count: PROJECTS.filter((p) => p.category === "web").length },
    { id: "gmc", label: "GOOGLE MERCHANT & SHOPPING", count: PROJECTS.filter((p) => p.category === "gmc").length },
    { id: "branding", label: "CREATIVE & VIDEO / NASA", count: PROJECTS.filter((p) => p.category === "branding").length },
    { id: "growth", label: "B2B LEADS & DATA", count: PROJECTS.filter((p) => p.category === "growth").length },
    { id: "social", label: "SOCIAL MEDIA MANAGEMENT", count: PROJECTS.filter((p) => p.category === "social").length },
  ];

  const displayedProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen px-6 pt-36 pb-28">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center opacity-[0.03] select-none">
        <p className="font-monumental text-[22vw] leading-none text-ink">
          PROJECTS
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-body uppercase transition-colors hover:text-indigo"
        >
          <ArrowLeft size={14} /> BACK TO HOME
        </Link>

        {/* Header Block */}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
          <div>
            <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
              • COMPLETE REPOSITORY ARCHIVE
            </p>
            <h1 className="mt-3 font-monumental text-5xl tracking-tight text-ink sm:text-7xl lg:text-8xl">
              SELECTED{" "}
              <span className="font-editorial-italic text-indigo font-normal">
                WORKS
              </span>
            </h1>
          </div>

          <div className="max-w-md font-mono text-xs text-body sm:text-right">
            <p className="font-bold text-ink">
              {PROJECTS.length} PRODUCTION SHIPS • EST. 2024–2026
            </p>
            <p className="mt-1">
              Storefronts, citizen mobile apps, and growth systems engineered with precision.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                selectedCategory === cat.id
                  ? "border-indigo bg-indigo text-cream shadow-md shadow-indigo/25"
                  : "border-ink/10 bg-card text-body hover:border-ink/30 hover:text-ink",
              )}
            >
              {cat.label}{" "}
              <span className="text-[10px] opacity-70">
                [{String(cat.count).padStart(2, "0")}]
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              total={displayedProjects.length}
            />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-24 rounded-3xl border border-ink/10 bg-card p-10 text-center shadow-xl sm:p-14">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo uppercase">
            HAVE A PROJECT IN MIND?
          </p>
          <h2 className="mt-3 font-monumental text-3xl tracking-tight text-ink sm:text-5xl">
            LET&apos;S ENGINEER YOUR NEXT STOREFRONT
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-body">
            Custom Liquid architecture, conversion-focused design, or complete full-stack web applications.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo px-8 py-3.5 font-mono text-xs font-bold tracking-wider text-cream uppercase shadow-lg shadow-indigo/25 transition-transform hover:scale-105"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
