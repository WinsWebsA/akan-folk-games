import Link from "next/link";
import { communities } from "@/lib/communities";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-cocoa text-sm font-black text-cream">
                AF
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                Akan <span className="text-gold-soft">Folk</span> Games
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Digitising the traditional folk games of the Akan people of Ghana — a
              preservation tool for the stories, songs and play of a nation&apos;s
              cultural heritage.
            </p>
            <p className="mt-6 font-display text-sm italic text-gold-soft">
              “Nkyerɛkyerɛ fie; abofra sua de ne ho.”
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><Link href="/" className="transition-colors hover:text-cream">Home</Link></li>
              <li><Link href="/games" className="transition-colors hover:text-cream">Games</Link></li>
              <li><Link href="/#gallery" className="transition-colors hover:text-cream">Gallery</Link></li>
              <li><Link href="/#community" className="transition-colors hover:text-cream">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Connect with Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>
                <a href="mailto:info@akanfolkgames.com" className="transition-colors hover:text-cream">
                  info@akanfolkgames.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Communities</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              {communities.map((c) => (
                <li key={c.id}>
                  <Link href={`/#${c.id}`} className="transition-colors hover:text-cream">
                    {c.name} · {c.town}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-gold my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Akan Folk Games. A digitisation of Ghana&apos;s cultural heritage.</p>
          <p>Home of Learning · Twi call-and-response preserved as recorded.</p>
        </div>
      </div>
    </footer>
  );
}
