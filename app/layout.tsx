import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Display serif — cultural warmth for headings.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Clean body sans. latin-ext covers most of the Twi diacritics.
const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akan Folk Games — Digitisation of Ghana's Cultural Heritage",
    template: "%s · Akan Folk Games",
  },
  description:
    "A preservation tool for Ghana's cultural heritage — the stories, songs and play of the Akan people. Ampe, Antoakyire, Mpeewa, Kuropɛ and more.",
  keywords: [
    "Ghana games",
    "Akan games",
    "traditional African games",
    "Ampe",
    "Antoakyire",
    "Mpeewa",
    "Ghanaian culture",
    "folk games",
  ],
  authors: [{ name: "Ghana African Games" }],
  openGraph: {
    title: "Ghana African Games",
    description:
      "The stories, songs and play behind Ghana's traditional Akan childhood games.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="min-h-full bg-bg text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
