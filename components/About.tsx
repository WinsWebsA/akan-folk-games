"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-ink/10 bg-surface-2 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <Image src="/textures/pattern-dark.png" alt="" fill className="object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-2 via-surface-2/85 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
              The Project
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              A digital home for games that were never written down
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Ghana African Games is a living archive of traditional Akan childhood play —
              built to keep the stories, songs and movement alive for the next generation.
              The written heritage sits alongside video footage of the games in action, so
              that a squatting circle or a palm-slapping rhythm can be watched, not just read.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Story", v: "The origin, meaning and play of each game, preserved in full." },
                { k: "Song", v: "Call-and-response chants transcribed in Twi, with their meanings." },
                { k: "Screen", v: "Footage embedded from YouTube — added as each recording is ready." },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-ink/10 bg-surface p-5 shadow-sm">
                  <p className="font-display text-lg font-semibold text-gold-deep">{c.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#games"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
            >
              Start exploring →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
