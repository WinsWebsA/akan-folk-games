/**
 * Drains locally-queued feedback to a backend.
 *
 * No backend is wired up yet, so `flushFeedback()` is a no-op and everything
 * stays in localStorage. Once Firebase exists, register an uploader once at
 * startup (e.g. from a client component mounted in `app/layout.tsx`) and the
 * queue — including everything collected before Firebase existed — drains on
 * the next flush:
 *
 *   registerFeedbackUploader(async (entries) => {
 *     const db = getFirestore(app);
 *     await Promise.all(
 *       entries.map((e) => setDoc(doc(db, "feedback", e.id), e)),
 *     );
 *   });
 *
 * Use the entry's `id` as the document id so a retry after a partial failure
 * overwrites rather than duplicates.
 */

import {
  getPendingFeedback,
  markFeedbackSynced,
  type Feedback,
} from "./feedback";

/** Must reject if the upload failed, so entries stay queued for a later retry. */
export type FeedbackUploader = (entries: Feedback[]) => Promise<void>;

let uploader: FeedbackUploader | null = null;
let inFlight: Promise<number> | null = null;

export function registerFeedbackUploader(fn: FeedbackUploader): void {
  uploader = fn;
  void flushFeedback();
}

export function isFeedbackSyncEnabled(): boolean {
  return uploader !== null;
}

/**
 * Uploads every pending entry and marks it synced. Resolves with the number of
 * entries sent — 0 when there is no uploader, nothing pending, or the upload
 * failed. Entries are only stamped after the uploader resolves, so a failure
 * leaves them queued.
 */
export async function flushFeedback(): Promise<number> {
  if (!uploader || typeof window === "undefined") return 0;
  if (inFlight) return inFlight;

  const run = async (): Promise<number> => {
    const pending = getPendingFeedback();
    if (pending.length === 0) return 0;
    try {
      await uploader!(pending);
      markFeedbackSynced(pending.map((entry) => entry.id));
      return pending.length;
    } catch {
      // Stay queued; the next flush retries.
      return 0;
    }
  };

  inFlight = run().finally(() => {
    inFlight = null;
  });
  return inFlight;
}
