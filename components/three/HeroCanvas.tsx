"use client";

import dynamic from "next/dynamic";

/**
 * Client-only wrapper for the R3F scene. `ssr: false` is permitted here
 * because this file is itself a Client Component (Next.js 16 rule).
 * WebGL never runs on the server, avoiding "window is not defined".
 */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <FallbackGlow />,
});

function FallbackGlow() {
  return (
    <div className="absolute inset-0 animate-pulse">
      <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-forest/20 blur-3xl" />
    </div>
  );
}

export default function HeroCanvas() {
  return <HeroScene />;
}
