/**
 * The portfolio's project data.
 *
 * Private: nothing outside this package may import this file. Consumers
 * reach it through `src/packages/projects/index.ts`.
 */

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  detail: string[];
  stack: string[];
  year: string;
  status: "shipped" | "live" | "in development";
  /** Public source URL, when the repository is public. */
  source?: string;
  links: ProjectLink[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "westmarch",
    name: "Westmarch",
    tagline: "A duel resolver with a canon-checked Middle-earth roster",
    summary:
      "Pick two Middle-earth fighters, press Resolve, and get the same verdict every time — a deterministic combat engine checked against the books, with a session arena, a living guide and a SQLite duel archive behind it.",
    detail: [
      "The hard part was never the arithmetic. It was making the roster defensible: every fighter carries an age effect, an effective-power rating and a set of canon notes, and every verdict is checked against the outcome the books actually describe.",
      "Around that sits a site that has grown into a habit: a night-shift arena that runs matches on a timer, a guide with entries, places and articles, and a duel archive that remembers what happened.",
      "Runs on Bun with a SQLite database in the browser and a Cloudflare Worker in front of it. The whole history was rewritten to keep the source of the material out of the repository, so the books are quoted in the prose and nowhere else.",
    ],
    stack: ["TypeScript", "Bun", "Cloudflare Workers", "SQLite"],
    year: "2026",
    status: "shipped",
    links: [
      { label: "Live site", href: "https://westmarch.n8-nazareth.workers.dev" },
    ],
    featured: true,
  },
  {
    slug: "star-wars",
    name: "Star Wars: Galactic Battlefront",
    tagline: "A browser-native Star Wars game, no shipped assets",
    summary:
      "Fly between planets, fight through a film-order campaign, and cut droids apart with a real-geometry lightsaber — one Vite app, with every sound synthesized at runtime and no shipped audio or imagery beyond fonts and icons.",
    detail: [
      "The constraint that shaped it: no downloaded assets. Audio is synthesized, the lightsaber is geometry rather than a sprite sheet, and the whole thing ships as a single app you can open in a browser.",
      "The campaign follows the films in order, so the missions arrive in the sequence they were released.",
      "Built with React and Three.js on top of Vite. The source stays private while the trademark does.",
    ],
    stack: ["TypeScript", "React", "Three.js", "Vite"],
    year: "2026",
    status: "in development",
    links: [],
    featured: true,
  },
  {
    slug: "super-gemini-bros",
    name: "Super Gemini Bros",
    tagline: "A canvas game where Gemini draws the sprites and writes the sound",
    summary:
      "A side-scrolling canvas game whose art and audio are generated rather than shipped: Gemini produces the game assets on demand and carries the conversation while you play.",
    detail: [
      "Instead of a sprite sheet, the game asks the model for the assets it needs, at the size it needs them, and drops them straight onto the canvas.",
      "The AI is not bolted on afterwards — it is the asset pipeline, and the overlay is where you talk to it while the game runs.",
      "React and Vite on the front, the Gemini API behind it.",
    ],
    stack: ["TypeScript", "React", "Vite", "Gemini API"],
    year: "2026",
    status: "live",
    source: "https://github.com/nathan-nazareth/Super-Gemini-Bros",
    links: [
      { label: "Live site", href: "https://super-gemini-bros.vercel.app" },
    ],
    featured: true,
  },
  {
    slug: "lord-of-the-rinse",
    name: "Lord of the Rinse",
    tagline: "A soap business that takes orders, tracks revenue and settles payments",
    summary:
      "The unglamorous one: a working shop. Orders come in, revenue is tracked per period, payments settle over UPI, and an admin API sits behind the counter for everything else.",
    detail: [
      "Small, specific and complete — the sort of thing that has to be right rather than impressive. Order intake, revenue reporting, payment settlement and an admin surface for the rest.",
      "It replaced a spreadsheet, which is the highest praise a shop tool can get.",
      "The source is public; the name still needs its final shape.",
    ],
    stack: ["TypeScript", "Vite", "Vercel"],
    year: "2026",
    status: "live",
    source: "https://github.com/nathan-nazareth/lord-of-the-rinse-old",
    links: [
      { label: "Live site", href: "https://lord-of-the-rinse.vercel.app" },
    ],
    featured: true,
  },
  {
    slug: "middle-earth-merriment",
    name: "Shadows of Middle-earth",
    tagline: "A Lord of the Rings action game — bow, sword, Rohirrim and trolls",
    summary:
      "A fast action game on a canvas: Aragorn, Legolas and Gimli against the wild places of Middle-earth, with a cycle of night and day running underneath it.",
    detail: [
      "Three heroes with real differences — Legolas is fast and fragile, Gimli is slow and hits like a hammer, Aragorn sits between them — fighting through a world that changes colour and light as the day turns.",
      "TanStack Start for the routing and server, React for the game itself, Radix and shadcn for the parts around it.",
    ],
    stack: ["TypeScript", "TanStack Start", "React", "Vite"],
    year: "2026",
    status: "live",
    links: [
      { label: "Live site", href: "https://middle-earth-merriment.vercel.app" },
    ],
    featured: true,
  },
];

export const PROFILE = {
  name: "Nathan Nazareth",
  handle: "nathan-nazareth",
  github: "https://github.com/nathan-nazareth",
  tagline: "Games, tools and the plumbing in between.",
  intro:
    "I build things that run in a browser: game engines with a spine of canon behind them, small business tools that have to be right rather than impressive, and the deploys and data layers that keep them honest.",
  note: "These five are the ones worth showing. Everything else is either private, or not finished enough to put a name on.",
};
