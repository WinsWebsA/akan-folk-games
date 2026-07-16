import { Reveal } from "../ui/Reveal";

/** "Preserving our Cultural Heritage — Akan Folk Games". */
export function Preserving() {
  return (
    <section
      id="preserving"
      className="relative overflow-hidden border-y border-ink/10 bg-surface-2 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Preservation
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Preserving our Cultural Heritage
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-ink/70">
            <p>
              Akan folk games are more than simple pastimes; they are deeply woven
              into the socio-cultural and economic fabric of the Akan people of Ghana.
              These games are not only a source of entertainment but also a tool for
              teaching life skills, strengthening community bonds, and celebrating
              important rites of passage. From games like Ampe, which foster agility
              and coordination, to Karikokoo and Mpeewa symbolising teamwork and
              endurance, each game carries its own unique cultural significance.
            </p>
            <p>
              In the past, Akan games often played a pivotal role in recruitment,
              rituals and ceremonies, serving as a means of storytelling and
              preserving oral histories. Children learned the values of cooperation,
              empathy, leadership, and patience through playful competition. The Akan
              folk games are embedded with aesthetics which shape the quality of
              people&apos;s lives, demonstrating critical thinking to solve problems
              that emanate in society. These folk games are essential aspects of Akan
              identity, celebrated at festivals, schools, and homes across Ghana and
              beyond.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
