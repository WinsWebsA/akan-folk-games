"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gamesData, type GameItem } from "@/lib/games";
import { SongCard } from "./SongCard";
import { YouTubeEmbed } from "./YouTubeEmbed";

type Section = "story" | "songs";

const energyDot: Record<GameItem["energy"], string> = {
  Low: "#2e9e5b",
  Moderate: "#b3860f",
  High: "#c4551d",
};

const defaultOpen: Record<Section, boolean> = { story: true, songs: false };

export function GamesShowcase() {
  const [activeId, setActiveId] = useState(gamesData[0].id);
  const [open, setOpen] = useState<Record<Section, boolean>>(defaultOpen);
  const active = gamesData.find((g) => g.id === activeId) ?? gamesData[0];

  const selectGame = (id: string) => {
    setActiveId(id);
    setOpen(defaultOpen);
  };

  const toggle = (s: Section) => setOpen((prev) => ({ ...prev, [s]: !prev[s] }));

  return (
    <section id="games" className="relative pb-24 pt-12 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* ---- Side-tab switcher ---- */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex gap-2 overflow-x-auto pb-3 lg:max-h-[75vh] lg:flex-col lg:overflow-y-auto lg:overflow-x-visible lg:pb-0 lg:pr-1">
              {gamesData.map((game, i) => {
                const isActive = game.id === activeId;
                return (
                  <button
                    key={game.id}
                    onClick={() => selectGame(game.id)}
                    className={`group relative shrink-0 rounded-xl border px-4 py-3 text-left transition-all lg:w-full ${
                      isActive
                        ? "border-transparent shadow-sm"
                        : "border-ink/10 bg-surface hover:border-gold-deep/40 hover:bg-surface-2"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: `${game.accent}1f`, boxShadow: `inset 3px 0 0 ${game.accent}` }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="font-display text-xs font-bold tabular-nums"
                        style={{ color: isActive ? game.accent : "var(--color-gold-deep)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-sm font-semibold ${
                          isActive ? "text-ink" : "text-ink/80 group-hover:text-ink"
                        }`}
                      >
                        {game.title}
                      </span>
                    </div>
                    <p className="mt-1 hidden max-w-[240px] text-xs leading-snug text-ink/55 lg:block">
                      {game.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ---- Detail panel ---- */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GamePanel game={active} open={open} toggle={toggle} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GamePanel({
  game,
  open,
  toggle,
}: {
  game: GameItem;
  open: Record<Section, boolean>;
  toggle: (s: Section) => void;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-surface shadow-[0_24px_60px_-32px_rgba(36,26,15,0.35)]">
      {/* Accent strip */}
      <div className="h-1.5 w-full" style={{ backgroundColor: game.accent }} />

      {/* Header */}
      <div className="px-5 pt-6 sm:px-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Chip>{game.origin}</Chip>
          <Chip>
            <span
              className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
              style={{ backgroundColor: energyDot[game.energy] }}
            />
            {game.energy} energy
          </Chip>
          <Chip>{game.players}</Chip>
        </div>
        <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {game.title}
        </h3>
        {game.altNames && game.altNames.length > 0 && (
          <p className="mt-1 text-sm text-ink/55">also known as {game.altNames.join(", ")}</p>
        )}
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/70">{game.tagline}</p>
      </div>

      {/* Pinned video — always visible so you can watch while reading */}
      <div className="px-5 pt-5 sm:px-7">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: game.accent }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: game.accent }} />
          Watch
        </div>
        <YouTubeEmbed
          url={game.youtubeUrl}
          title={game.title}
          accent={game.accent}
          poster={game.image}
        />
      </div>

      {/* Read-along: independent collapsibles that never hide the video */}
      <div className="space-y-3 p-5 sm:p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Read along</p>

        <Collapsible
          label="The Story"
          icon="❖"
          accent={game.accent}
          isOpen={open.story}
          onToggle={() => toggle("story")}
        >
          <StoryContent game={game} />
        </Collapsible>

        <Collapsible
          label="The Songs"
          icon="♪"
          accent={game.accent}
          isOpen={open.songs}
          onToggle={() => toggle("songs")}
        >
          <SongsContent game={game} />
        </Collapsible>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-ink/15 bg-surface-2 px-3 py-1 text-xs font-medium text-ink/75">
      {children}
    </span>
  );
}

function Collapsible({
  label,
  icon,
  accent,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  icon: string;
  accent: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        isOpen ? "border-gold-deep/30 bg-surface-2/50" : "border-ink/10 bg-surface"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            {icon}
          </span>
          <span className="font-display text-lg font-semibold text-ink">{label}</span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl text-ink/40"
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
            <div className="px-5 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
      <span className="h-px w-6" style={{ backgroundColor: accent }} />
      {children}
    </h4>
  );
}

function StoryContent({ game }: { game: GameItem }) {
  return (
    <div className="space-y-7">
      <div>
        <SubHeading accent={game.accent}>Origin & meaning</SubHeading>
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
          {game.context.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div>
        <SubHeading accent={game.accent}>How it&apos;s played</SubHeading>
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
          {game.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div>
        <SubHeading accent={game.accent}>Aesthetics & lessons</SubHeading>
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
          {game.aesthetics.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function SongsContent({ game }: { game: GameItem }) {
  if (game.songs.length === 0) {
    return (
      <blockquote
        className="rounded-2xl border-l-2 bg-surface-2/60 px-5 py-4 text-[15px] italic leading-relaxed text-ink/70"
        style={{ borderColor: game.accent }}
      >
        {game.songNote ??
          "This game is played to rhythm and calls rather than a fixed set of lyrics."}
      </blockquote>
    );
  }
  return (
    <div className="space-y-4">
      {game.songNote && <p className="text-sm leading-relaxed text-ink/60">{game.songNote}</p>}
      {game.songs.map((song, i) => (
        <SongCard key={i} song={song} accent={game.accent} />
      ))}
    </div>
  );
}
