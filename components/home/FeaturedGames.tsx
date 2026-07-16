import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../ui/Reveal";

interface Featured {
  id: string;
  title: string;
  accent: string;
  image?: string;
  blurb: string;
}

/** Four highlighted games with the brief's short descriptions. */
const featured: Featured[] = [
  {
    id: "ampe",
    title: "Ampe",
    accent: "#E8B923",
    image: "/games/ampe.png",
    blurb:
      "A folk game of two or more teams. Each side chooses Ohyiwa or Opare, then jumps, claps and sings — the winner declared when more of the chosen outcomes occur. Simple in song, but demanding sharp observation.",
  },
  {
    id: "karikokoo",
    title: "Karikokoo",
    accent: "#7B3F00",
    image: "/games/karikokoo.jpeg",
    blurb:
      "A fitness game once used to test the strength of men loading cocoa beans, Karikokoo is now a fun back-to-back see-saw competition for children and adults alike.",
  },
  {
    id: "antoakyire",
    title: "Antoakyire",
    accent: "#C4551D",
    image: "/games/antoakyire.png",
    blurb:
      "Meaning “don't look back,” Antoakyire teaches that a community's sanitation is a shared responsibility. Players squat alert in a circle to songs and clapping, governed by rhythm.",
  },
  {
    id: "mpeewa",
    title: "Mpeewa",
    accent: "#C43D2E",
    image: "/games/mpeewa.png",
    blurb:
      "A game played to entertain and educate, Mpeewa is built on slapping and clapping hands to the singers' rhythm — performed in the evening, at school and by day, with defaulters stepping out until the game is done.",
  },
];

export function FeaturedGames() {
  return (
    <section id="games" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
              The Games
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              The Home of Fun and Learning
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              The Akan folk games are not just pastimes; they are a celebration of
              life and togetherness. Played under moonlight, at community gatherings,
              in schools and at festivals, these games unveil the Akan identity, values
              and cultural practices.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.08}>
              <Link
                href="/games"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-sm transition-all hover:-translate-y-1 hover:border-gold-deep/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {g.image ? (
                    <Image
                      src={g.image}
                      alt={g.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-kente absolute inset-0" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ backgroundColor: g.accent }} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{g.blurb}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: g.accent }}
                  >
                    Watch &amp; read
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
            >
              Discover more games
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
