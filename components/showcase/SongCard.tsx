import type { Song } from "@/lib/games";

interface Props {
  song: Song;
  accent: string;
}

/** Renders a chant either as a call-and-response ledger or as free verse. */
export function SongCard({ song, accent }: Props) {
  const isCallResponse = song.lines.some((l) => l.call || l.response);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-surface">
      {(song.title || song.variant) && (
        <div className="flex items-center gap-3 border-b border-ink/10 bg-surface-2/60 px-5 py-3">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          <span className="font-display text-sm font-semibold text-ink">
            {song.title ?? "Chant"}
          </span>
          {song.variant && (
            <span className="ml-auto rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-ink/55">
              {song.variant}
            </span>
          )}
        </div>
      )}

      <div className="p-5">
        {isCallResponse ? (
          <div className="space-y-2.5">
            {song.lines.map((line, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 sm:grid-cols-2 sm:gap-x-6">
                <p className="flex items-baseline gap-2 text-ink">
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-gold-deep">
                    Call
                  </span>
                  <span className="font-medium">{line.call}</span>
                </p>
                <p className="flex items-baseline gap-2 text-ink/75">
                  <span
                    className="shrink-0 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    Resp
                  </span>
                  <span className="italic">{line.response}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-1.5">
            {song.lines.map((line, i) => (
              <p key={i} className="font-display text-[17px] italic leading-relaxed text-ink/90">
                {line.text}
              </p>
            ))}
          </div>
        )}

        {song.meaning && (
          <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink/60">
            <span className="font-semibold text-gold-deep">Meaning · </span>
            {song.meaning}
          </p>
        )}
      </div>
    </div>
  );
}
