# Ghana African Games

An immersive, interactive showcase of traditional Akan (Ghanaian) childhood games —
their stories, their call-and-response songs, and their footage. Built with the
Next.js App Router, React Three Fiber (3D hero), Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install          # first time only
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
```

Requires Node.js 20.9+.

## ✨ Adding a YouTube video later (the important part)

Every game lives in **`lib/games.ts`** as one object. To add or change a video, find
the game and set its `youtubeUrl`:

```ts
{
  id: "ampe",
  title: "Ampe",
  // ...
  youtubeUrl: "https://youtu.be/YOUR_VIDEO_ID",   // <- paste the link here
}
```

Any standard YouTube link works — a `watch?v=…` URL, a `youtu.be/…` share link, an
`/embed/…` URL, a Shorts link, or even a bare 11-character video id. Save the file and
rebuild; the video appears automatically in that game's **The Media** tab, framed inside
the browser mockup with a click-to-play poster.

Leave `youtubeUrl: ""` and the tab shows an elegant "video coming soon" placeholder
instead — so the site always looks complete.

## Editing content

Everything about a game is data-driven in `lib/games.ts`:

| Field         | What it controls                                              |
| ------------- | ------------------------------------------------------------ |
| `context`     | "Origin & meaning" paragraphs under **The Story**            |
| `description` | "How it's played" paragraphs                                 |
| `aesthetics`  | "Aesthetics & lessons" paragraphs                            |
| `songs`       | Call-and-response chants or free-verse lyrics (**The Songs**)|
| `songNote`    | Shown when a game has no transcribed lyrics                  |
| `image`       | Cover still under `public/games/…` (omit → woven-kente card) |
| `accent`      | The hex colour that themes the game's section                |
| `energy` / `players` / `origin` | The meta chips on the cover                |

Add a whole new game by appending another object to the `gamesData` array — the side-tab
switcher, footer and counts all update themselves.

## Project structure

```
app/
  layout.tsx            fonts (Fraunces + Plus Jakarta Sans) + metadata
  page.tsx              assembles the sections
  globals.css           Tailwind v4 theme (Ghana palette, utilities)
components/
  Navbar / Hero / Heritage / About / Footer
  three/HeroScene.tsx   the R3F floating "game tokens" scene
  three/HeroCanvas.tsx  client-only loader (ssr:false)
  showcase/
    GamesShowcase.tsx   side-tab switcher + Story/Songs/Media accordion
    SongCard.tsx        call-and-response / free-verse lyric card
    YouTubeEmbed.tsx    browser-mockup video frame + facade
  ui/Reveal.tsx         scroll-reveal wrapper
lib/
  games.ts              ← all game content lives here
  youtube.ts            URL → embed-id helper
public/
  games/                game stills used as covers
  textures/             decorative pattern + dancers artwork
```

## Images

`public/games/*.png` are stills of each game being played (used as covers).
`public/textures/*` are the decorative Ghanaian pattern and dancer illustrations used in
the Heritage and Project sections. Drop replacements in with the same filenames to swap them.
