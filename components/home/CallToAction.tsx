import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../ui/Reveal";

/** "Rediscover the Heart of Akan Culture" — closing call to action. */
export function CallToAction() {
  return (
    <section id="join" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="absolute inset-0 -z-0 opacity-[0.14]">
        <Image src="/textures/pattern-warm.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
            Rediscover the Heart of Akan Culture
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Join us in preserving and celebrating the rich cultural legacy of Akan
            folk games. Dive into the stories, movements and timeless joy these games
            bring to your community.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
            >
              Explore the games
              <span>→</span>
            </Link>
            <a
              href="#community"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Join community
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mx-auto mt-12 max-w-2xl font-display text-lg italic text-gold-soft">
            “Nkyerɛkyerɛ fie; abofra sua de ne ho.”
            <span className="mt-1 block text-sm not-italic text-cream/55">
              Home of Learning; a child learns to be independent.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
