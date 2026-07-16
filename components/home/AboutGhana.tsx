import Image from "next/image";
import { Reveal } from "../ui/Reveal";

/** "Ghana: The Heart of Africa's Rich Heritage" — the welcome / about block. */
export function AboutGhana() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.07]">
        <Image src="/textures/pattern-warm.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
                About
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Ghana: The Heart of Africa&apos;s Rich Heritage
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-display text-xl italic text-gold-deep">
                A land of diverse cultures, vibrant traditions, and timeless stories
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Welcome to Ghana, a nation rich in history and culture, where diverse
                tribes and traditions thrive. At the core of this vibrant land is the
                Akan people, whose dynamic folk games are a joyful expression of
                identity and unity. These games are more than just play — they carry
                the heartbeat of Akan culture, connecting generations through music
                and dance.
              </p>
            </Reveal>
          </div>

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
                  Connecting generations through music and dance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
