/**
 * Extract a YouTube video ID from any common link format, so that whoever
 * fills in `youtubeUrl` later can paste whatever YouTube gives them:
 *
 *   https://www.youtube.com/watch?v=X-4dAlSBw3Q
 *   https://youtu.be/X-4dAlSBw3Q
 *   https://www.youtube.com/embed/X-4dAlSBw3Q
 *   https://www.youtube.com/shorts/X-4dAlSBw3Q
 *   X-4dAlSBw3Q            (a bare 11-character id)
 *
 * Returns null when the string is empty or unrecognised.
 */
export function getYouTubeId(input: string | undefined | null): string | null {
  if (!input) return null;
  const value = input.trim();
  if (!value) return null;

  // A bare 11-character id.
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

/** Privacy-friendly embed URL for an id, or null if there is no valid id. */
export function getYouTubeEmbedUrl(input: string | undefined | null): string | null {
  const id = getYouTubeId(input);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}

/** Thumbnail URL for an id (used as a lightweight poster). */
export function getYouTubeThumbnail(input: string | undefined | null): string | null {
  const id = getYouTubeId(input);
  if (!id) return null;
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
