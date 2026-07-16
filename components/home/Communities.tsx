"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { communities, type Community } from "@/lib/communities";

/**
 * "Community" drop-boxes — one expandable card per Akan sub-group
 * (Akyem Abuakwa · Asante · Bono), each revealing History, Cultural
 * Practices, Traditional Games, Notable Landmarks and Location.
 */
export function Communities() {
  const [openId, setOpenId] = useState<string | null>(communities[0].id);

  return (
    <section
      id="community"
      className="relative overflow-hidden border-y border-ink/10 bg-surface-2 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Community
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            The Akan sub-groups
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            The tradition lives across three great Akan communities. Open each
            drop-box to explore its history, culture, games and landmarks.
          </p>
        </div>

        <div className="space-y-4">
          {communities.map((c) => (
            <CommunityCard
              key={c.id}
              community={c}
              isOpen={openId === c.id}
              onToggle={() => setOpenId((prev) => (prev === c.id ? null : c.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCard({
  community: c,
  isOpen,
  onToggle,
}: {
  community: Community;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={c.id}
      className={`scroll-mt-24 overflow-hidden rounded-2xl border bg-surface transition-colors ${
        isOpen ? "border-gold-deep/30 shadow-sm" : "border-ink/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
        aria-expanded={isOpen}
      >
        <span
          className="hidden h-12 w-1.5 shrink-0 rounded-full sm:block"
          style={{ backgroundColor: c.accent }}
        />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-display text-2xl font-semibold text-ink">{c.name}</span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: `${c.accent}22`, color: c.accent }}
            >
              {c.town}
            </span>
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-ink/60">{c.intro}</span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-2xl text-ink/40"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink/10 px-5 py-6 sm:px-7">
              <div className="grid gap-8 sm:grid-cols-2">
                <Block accent={c.accent} title="History">
                  <p className="text-[15px] leading-relaxed text-ink/75">{c.history}</p>
                </Block>

                <Block accent={c.accent} title="Cultural Practices">
                  <List items={c.culturalPractices} accent={c.accent} />
                </Block>

                <Block accent={c.accent} title="Traditional Games">
                  <List items={c.traditionalGames} accent={c.accent} />
                </Block>

                <Block accent={c.accent} title="Notable Landmarks">
                  <List items={c.notableLandmarks} accent={c.accent} />
                </Block>
              </div>

              <div className="mt-8">
                <Block accent={c.accent} title="Location">
                  <p className="text-[15px] leading-relaxed text-ink/75">{c.location}</p>
                </Block>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Block({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4
        className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: accent }}
      >
        <span className="h-px w-6" style={{ backgroundColor: accent }} />
        {title}
      </h4>
      {children}
    </div>
  );
}

function List({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-2 text-[15px] leading-relaxed text-ink/75">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
