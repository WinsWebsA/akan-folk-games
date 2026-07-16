/**
 * Local (browser) store for visitor feedback.
 *
 * Feedback is queued in localStorage and kept there permanently. Each entry
 * carries a `syncedAt` stamp so a later Firebase backend can pick up only the
 * entries it has never seen — see `lib/feedbackSync.ts`.
 */

const STORAGE_KEY = "afrist.feedback.v1";

export interface Feedback {
  id: string;
  name: string;
  /** Optional — visitors may leave feedback anonymously. */
  email: string;
  /** 1–5. */
  rating: number;
  message: string;
  createdAt: string;
  /** ISO stamp of when the entry reached Firebase; null while queued locally. */
  syncedAt: string | null;
}

export type NewFeedback = Omit<Feedback, "id" | "createdAt" | "syncedAt">;

type Listener = () => void;

const listeners = new Set<Listener>();
let cachedPendingCount: number | null = null;

function invalidate(): void {
  cachedPendingCount = null;
  for (const listener of listeners) listener();
}

function readAll(): Feedback[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as Feedback[]) : [];
  } catch {
    // Unreadable payload or storage denied (private mode) — treat as empty
    // rather than breaking the page.
    return [];
  }
}

/** Throws if storage is unavailable or full, so callers can surface the failure. */
function writeAll(entries: Feedback[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  invalidate();
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `fb_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Appends an entry to the local queue and returns it. Throws if the write fails. */
export function addFeedback(input: NewFeedback): Feedback {
  const entry: Feedback = {
    ...input,
    id: newId(),
    createdAt: new Date().toISOString(),
    syncedAt: null,
  };
  writeAll([...readAll(), entry]);
  return entry;
}

export function getAllFeedback(): Feedback[] {
  return readAll();
}

/** Entries that have not yet been written to Firebase, oldest first. */
export function getPendingFeedback(): Feedback[] {
  return readAll().filter((entry) => !entry.syncedAt);
}

/** Stamps the given entries as synced. Ignores ids that are no longer present. */
export function markFeedbackSynced(ids: string[]): void {
  const syncedAt = new Date().toISOString();
  const idSet = new Set(ids);
  writeAll(
    readAll().map((entry) =>
      idSet.has(entry.id) ? { ...entry, syncedAt } : entry,
    ),
  );
}

/* -------------------------------------------------------------------- *
 *  useSyncExternalStore bindings
 * -------------------------------------------------------------------- */

/** Notifies on local writes and on writes from other tabs. */
export function subscribeToFeedback(listener: Listener): () => void {
  listeners.add(listener);

  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) invalidate();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Cached so repeated snapshot reads don't re-parse storage on every render. */
export function getPendingFeedbackCount(): number {
  cachedPendingCount ??= getPendingFeedback().length;
  return cachedPendingCount;
}

/** Nothing is queued on the server; the real count arrives after hydration. */
export function getPendingFeedbackCountOnServer(): number {
  return 0;
}
