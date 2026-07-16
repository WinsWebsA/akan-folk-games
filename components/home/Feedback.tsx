"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Reveal } from "../ui/Reveal";
import {
  addFeedback,
  getPendingFeedbackCount,
  getPendingFeedbackCountOnServer,
  subscribeToFeedback,
} from "@/lib/feedback";
import { flushFeedback } from "@/lib/feedbackSync";

type Status = "idle" | "saved" | "error";

const RATINGS = [1, 2, 3, 4, 5];

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold/40";

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold-deep";

/** Visitor feedback form. Saves to the browser, syncs onward once a backend exists. */
export function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const pending = useSyncExternalStore(
    subscribeToFeedback,
    getPendingFeedbackCount,
    getPendingFeedbackCountOnServer,
  );

  // Drain the queue on load and whenever the connection comes back. Both are
  // no-ops until a Firebase uploader is registered.
  useEffect(() => {
    const sync = () => void flushFeedback();
    sync();
    window.addEventListener("online", sync);
    return () => window.removeEventListener("online", sync);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      addFeedback({
        name: name.trim(),
        email: email.trim(),
        rating,
        message: message.trim(),
      });
    } catch {
      setStatus("error");
      return;
    }

    setName("");
    setEmail("");
    setRating(0);
    setMessage("");
    setStatus("saved");
    void flushFeedback();
  }

  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-surface-2 py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-0 bg-dots opacity-40" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep">
            Your voice
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Share your feedback
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Tell us what you loved, what confused you, or which game your
            community still plays. Every note helps us keep these traditions
            alive.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-ink/10 bg-surface p-6 ring-glow sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fb-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="fb-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ama Serwaa"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="fb-email" className={labelClass}>
                  Email <span className="text-ink/40">(optional)</span>
                </label>
                <input
                  id="fb-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className={labelClass}>How was your visit?</legend>
              <div
                className="flex items-center gap-1"
                onMouseLeave={() => setHovered(0)}
              >
                {RATINGS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHovered(value)}
                    aria-label={`${value} out of 5`}
                    aria-pressed={rating === value}
                    className={`text-3xl leading-none transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                      value <= (hovered || rating) ? "text-gold" : "text-ink/20"
                    }`}
                  >
                    ★
                  </button>
                ))}
                {rating > 0 && (
                  <span className="ml-3 text-sm text-ink/55">
                    {rating} / 5
                  </span>
                )}
              </div>
            </fieldset>

            <div className="mt-6">
              <label htmlFor="fb-message" className={labelClass}>
                Your feedback
              </label>
              <textarea
                id="fb-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What should we know?"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-14px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
              >
                Send feedback
                <span>→</span>
              </button>

              <p aria-live="polite" className="text-sm">
                {status === "saved" && (
                  <span className="font-medium text-forest">
                    Thank you — your feedback is saved.
                  </span>
                )}
                {status === "error" && (
                  <span className="font-medium text-crimson">
                    We couldn’t save that in this browser. Check that storage
                    isn’t blocked and try again.
                  </span>
                )}
              </p>
            </div>

            {pending > 0 && (
              <p className="mt-5 border-t border-ink/10 pt-4 text-xs text-ink/45">
                {pending} {pending === 1 ? "response is" : "responses are"} held
                on this device and will upload once the backend is connected.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
