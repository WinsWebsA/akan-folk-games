import type { Metadata } from "next";
import Link from "next/link";
import { GamesShowcase } from "@/components/showcase/GamesShowcase";
import { gamesData } from "@/lib/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Watch and read every traditional Akan folk game — its story, its call-and-response songs and its footage. Ampe, Antoakyire, Twe-ma-mentwe, Mpeewa and more.",
};

export default function GamesPage() {
  return (
    <>
      {/* Page header (padded to clear the fixed navbar) */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface-2 pb-14 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          {/* decorative — inline style keeps it self-contained */}
          <div className="bg-dots absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-ink/50">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink/70">Games</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            The Games Showcase
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">
            {gamesData.length} games, one living tradition
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Choose a game, watch it play out, and read along — the video shrinks into a
            mini-player and keeps playing while you open its story and songs. Each was a
            lesson in disguise.
          </p>
        </div>
      </section>

      <GamesShowcase />
    </>
  );
}
