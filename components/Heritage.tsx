"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";

const values = [
  {
    icon: "◎",
    title: "Vigilance & Alertness",
    body: "From Antoakyire’s sanitary inspector to Dua oo Dua’s roll-call, children learned to watch, listen and react.",
  },
  {
    icon: "◈",
    title: "Sharing & Honour",
    body: "Kyem-pɛ turned the farming custom of nnɔboa into play — keep your word, and share with a friend in need.",
  },
  {
    icon: "⬡",
    title: "Unity & Cooperation",
    body: "Twe-ma-mentwe and the stone-passing games taught that we stand, pull and win together or not at all.",
  },
  {
    icon: "△",
    title: "Numeracy & Shapes",
    body: "Circles, lines, counting and measurement hide inside Kuropɛ, Ampe and Krodom — a classroom in disguise.",
  },
];

export function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative pattern edge */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.08]">
        <Image src="/textures/pattern-dark.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
                The Heritage
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Play that carried a whole culture
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>
                  Among the Akan people of Ghana — the Akyem, Asante and Bono — childhood
                  was a school of its own. Games born from hunting, farming, sanitation and
                  war were handed down through generations by nothing but memory, rhythm and
                  the shade of a mango tree.
                </p>
                <p>
                  Each one is more than fun. A squatting circle teaches cleanliness; a
                  see-saw of interlocked arms tests strength; a passed stone teaches timing
                  and togetherness. Sung in call-and-response, played in circles and lines,
                  these games nurtured alert, fair and law-abiding children — and they still
                  do, wherever they are remembered.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image card */}
          <Reveal delay={0.15}>
            <div className="ring-glow relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10">
              <Image
                src="/textures/dancers.png"
                alt="Illustration of Ghanaian dancers in traditional dress against Adinkra-inspired patterns"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg italic text-cream">
                  “Agorɔ berɛ aduro ooo!” — it’s time to play.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Value cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm transition-colors hover:border-gold-deep/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-xl text-gold-deep transition-colors group-hover:bg-gold/30">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
