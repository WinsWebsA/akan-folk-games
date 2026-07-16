import Link from "next/link";

/**
 * Home-page hero. Static (no motion) per the project's design direction —
 * a single strong photograph behind the mission statement.
 */
export function HomeHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Photo layer */}
      <img
        src="/hero.png"
        alt="Young people playing Twe-ma-mentwe, a traditional Akan tug-of-peace game, in a forest clearing"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Atmospheric gradients for text contrast */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,185,35,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-bg via-bg/85 to-transparent lg:via-bg/70 lg:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-deep/30 bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold-deep backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
          Akan Heritage · Ghana
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          Digitisation of{" "}
          <span className="text-gradient-gold italic normal-case">Akan</span> Folk
          Games
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium uppercase tracking-[0.18em] text-ink/70 sm:text-xl">
          A preservation tool for Ghana&apos;s cultural heritage
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          The stories, songs and play of the Akan people — Akyem, Asante and Bono —
          gathered into one living archive so the games of a Ghanaian childhood are
          never forgotten.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/games"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
          >
            Explore the games
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold-deep/60 hover:text-gold-deep"
          >
            Our heritage
          </a>
        </div>
      </div>
    </section>
  );
}
