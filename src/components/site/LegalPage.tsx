import { Reveal, Blob } from "./motion-primitives";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <div className="relative mx-auto max-w-3xl px-5 pt-32">
      <Blob className="left-1/4 top-16 size-64 bg-indigo/12 breathe-glow" />
      <Reveal>
        <span className="badge-pill">Legal</span>
        <h1 className="mt-4 text-4xl font-bold uppercase">{title}</h1>
      </Reveal>
      <div className="mt-8 space-y-5">
        {sections.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.06}>
            <div className="surface-card p-6">
              <h2 className="text-lg font-bold">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
