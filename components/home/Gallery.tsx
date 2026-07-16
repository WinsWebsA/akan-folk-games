import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const shots = [
  { src: "/gallery/children-playing.png", label: "Twe-ma-mentwe · tug-of-peace" },
  { src: "/games/twe-ma-mentwe.png", label: "Twe-ma-mentwe · the pull" },
  { src: "/games/ampe.png", label: "Ampe · clap and jump" },
  { src: "/games/mpeewa.png", label: "Mpeewa · palm rhythm" },
  { src: "/games/aso-teele.png", label: "Asɔ · throw and catch" },
  { src: "/games/dua-oo-dua.png", label: "Dua oo Dua · the roll-call" },
];

/** "A Community of Fun and Learning" — the photo gallery. */
export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Gallery
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              A Community of Fun and Learning
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Explore a vivid collection of moments that capture the essence of Akan
              folk games. From the swift movements of Ampe to the strategic play of
              Kuropɛ and Kurodom, each frame tells a story of cultural pride, community
              connection and joyful expression — the vibrant colours, energetic
              rhythms and timeless cultures that inspire across generations.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 3) * 0.06}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold-deep/60 hover:text-gold-deep"
            >
              View more
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
