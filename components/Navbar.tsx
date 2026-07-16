"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { communities } from "@/lib/communities";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setCommunityOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-cocoa text-sm font-black text-cream shadow-md">
            AF
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Akan <span className="text-gold-deep">Folk</span> Games
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative text-sm font-medium transition-colors hover:text-ink ${
                isActive(l.href) ? "text-ink" : "text-ink/70"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-gold-deep transition-all duration-300 ${
                  isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Community dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCommunityOpen(true)}
            onMouseLeave={() => setCommunityOpen(false)}
          >
            <button
              onClick={() => setCommunityOpen((o) => !o)}
              className="group relative flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              aria-expanded={communityOpen}
            >
              Community
              <span className={`text-[10px] transition-transform ${communityOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            <AnimatePresence>
              {communityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-64 pt-3"
                >
                  <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface shadow-[0_20px_50px_-24px_rgba(36,26,15,0.5)]">
                    {communities.map((c) => (
                      <Link
                        key={c.id}
                        href={`/#${c.id}`}
                        className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-surface-2"
                      >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
                        <span className="font-medium text-ink">{c.name}</span>
                        <span className="ml-auto text-xs text-ink/45">{c.town}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#feedback"
            className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
          >
            Feedback
          </Link>

          <Link
            href="/games"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink shadow-[0_8px_26px_-10px_rgba(179,134,15,0.9)] transition-transform hover:-translate-y-0.5"
          >
            Explore
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/10 bg-bg/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-3 transition-colors hover:bg-gold/15 hover:text-ink ${
                    isActive(l.href) ? "text-ink" : "text-ink/80"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                Community
              </p>
              {communities.map((c) => (
                <Link
                  key={c.id}
                  href={`/#${c.id}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink/80 transition-colors hover:bg-gold/15 hover:text-ink"
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
                  {c.name}
                </Link>
              ))}
              <Link
                href="/#feedback"
                className="rounded-lg px-3 py-3 text-ink/80 transition-colors hover:bg-gold/15 hover:text-ink"
              >
                Feedback
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
