"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/youtube";

interface Props {
  url: string;
  title: string;
  accent: string;
  /** Local fallback poster (a game still) when there is no video yet. */
  poster?: string;
}

/**
 * Renders a YouTube video inside a browser-style mockup frame.
 * Uses a click-to-load facade so the iframe only mounts on demand.
 * If `url` is empty/invalid, shows an elegant "coming soon" state.
 *
 * While a video is playing, scrolling it out of view shrinks it into a
 * floating mini-player pinned to the corner — so you can keep watching
 * while you read the story and songs below. The iframe is never
 * remounted when it floats, so playback continues uninterrupted.
 */
export function YouTubeEmbed({ url, title, accent, poster }: Props) {
  const embedUrl = getYouTubeEmbedUrl(url);
  const thumb = getYouTubeThumbnail(url);
  const [active, setActive] = useState(false);

  const holderRef = useRef<HTMLDivElement>(null);
  const [floating, setFloating] = useState(false);
  const [reservedH, setReservedH] = useState<number>();
  const activeRef = useRef(active);
  activeRef.current = active;

  // Reset the facade whenever we switch to a different video.
  useEffect(() => {
    setActive(false);
  }, [url]);

  // A stopped/closed video should never stay floating.
  useEffect(() => {
    if (!active) setFloating(false);
  }, [active]);

  // Float the player once it is mostly scrolled off the top of the screen.
  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const scrolledAbove = entry.boundingClientRect.top < 0;
        const shouldFloat =
          activeRef.current && scrolledAbove && entry.intersectionRatio < 0.4;
        if (shouldFloat) setReservedH(entry.boundingClientRect.height);
        setFloating(shouldFloat);
      },
      { threshold: [0, 0.4, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const returnToVideo = () =>
    holderRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div
      ref={holderRef}
      className="relative"
      style={floating ? { height: reservedH } : undefined}
    >
      {/* Placeholder left behind in the layout while the player floats */}
      {floating && (
        <button
          onClick={returnToVideo}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/20 bg-surface-2/60 text-center transition-colors hover:border-gold-deep/50"
          aria-label="Scroll back to the video"
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            <span className="ml-0.5 border-y-[8px] border-l-[13px] border-y-transparent border-l-current" />
          </span>
          <span className="text-sm font-medium text-ink/70">
            Playing in mini-player
          </span>
          <span className="text-xs text-ink/45">Scroll up or tap to expand</span>
        </button>
      )}

      <figure
        className={
          floating
            ? "fixed bottom-4 right-4 z-50 w-[min(88vw,380px)] overflow-hidden rounded-xl border border-ink/10 bg-surface shadow-[0_28px_70px_-18px_rgba(36,26,15,0.6)] ring-1 ring-ink/5"
            : "overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-[0_20px_50px_-24px_rgba(36,26,15,0.4)]"
        }
      >
        {/* Mockup title bar */}
        <div className="flex items-center gap-2 border-b border-ink/10 bg-surface-2 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-crimson/80" />
          <span className="h-3 w-3 rounded-full bg-gold/90" />
          <span className="h-3 w-3 rounded-full bg-forest/80" />
          <div className="ml-3 flex-1 truncate rounded-md bg-ink/5 px-3 py-1 text-center text-[11px] text-ink/50">
            {floating
              ? title
              : embedUrl
              ? "youtube.com · watch"
              : "Ghana African Games · media"}
          </div>
          {floating && (
            <div className="flex items-center gap-1">
              <button
                onClick={returnToVideo}
                title="Expand"
                aria-label="Expand video"
                className="flex h-6 w-6 items-center justify-center rounded-md text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <span className="text-sm">⤢</span>
              </button>
              <button
                onClick={() => setActive(false)}
                title="Close"
                aria-label="Close video"
                className="flex h-6 w-6 items-center justify-center rounded-md text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>
          )}
        </div>

        {/* 16:9 stage */}
        <div className="relative aspect-video w-full bg-ink">
          {embedUrl && active ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`${embedUrl}&autoplay=1`}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : embedUrl ? (
            // Click-to-load facade
            <button
              onClick={() => setActive(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Play video: ${title}`}
            >
              {thumb && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumb}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <span
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: accent }}
              >
                <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-cream" />
              </span>
            </button>
          ) : (
            // Coming-soon state (light)
            <div className="absolute inset-0 bg-surface-2">
              {poster && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={poster}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
              )}
              <div className="bg-dots absolute inset-0 opacity-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2"
                  style={{ borderColor: accent, color: accent }}
                >
                  <span className="ml-0.5 border-y-[9px] border-l-[14px] border-y-transparent border-l-current" />
                </span>
                <p className="font-display text-lg text-ink">Video coming soon</p>
                <p className="max-w-xs text-sm text-ink/60">
                  Footage of <span className="text-ink/80">{title}</span> is being
                  prepared. A YouTube link can be dropped in and it will appear here
                  instantly.
                </p>
              </div>
            </div>
          )}
        </div>
      </figure>
    </div>
  );
}
