import { gamesData } from "@/lib/games";

const stats = [
  { value: `${gamesData.length}`, label: "Traditional games" },
  { value: "20+", label: "Chants & songs" },
  { value: "3", label: "Akan sub-groups" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Photo layer */}
      <img
        src="/hero.png"
        alt="Young people playing Twe-ma-mentwe, a traditional Akan tug-of-peace game, in a forest clearing"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Atmospheric gradients */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,185,35,0.16),transparent_55%)]" />
      {/* Left scrim guarantees text contrast while keeping the photo visible on the right */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-bg via-bg/85 to-transparent lg:via-bg/70 lg:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-deep/30 bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold-deep backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
          Akan Heritage · Ghana
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          The Games of a<br />
          <span className="text-gradient-gold italic">Ghanaian</span> Childhood
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
          Squatting circles, palm-slapping rhythms, stones passed hand to hand under
          the moonlight. Explore the stories, songs and play of the Akan people —
          traditional games that taught children to be alert, fair and brave.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#games"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
          >
            Explore the games
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#heritage"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold-deep/60 hover:text-gold-deep"
          >
            The heritage
          </a>
        </div>

        <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-semibold text-gold-deep">{s.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-ink/55">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
