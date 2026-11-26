/**
 * Page rendering.
 *
 * Private: the site package reaches the project list only through the
 * `projects` package's entry point.
 */
import { PROJECTS, PROFILE, type Project } from "../../projects/index.ts";

const STATUS_LABEL: Record<Project["status"], string> = {
  shipped: "shipped",
  live: "live",
  "in development": "in development",
};

const escape = (value: string): string =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const layout = (title: string, description: string, body: string): string => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(description)}">
<meta property="og:type" content="website">
<link rel="stylesheet" href="/styles.css">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
</head>
<body>
<div class="wrap">
<nav class="top">
  <a href="/">Nathan Nazareth</a>
  <a href="/#projects">Projects</a>
  <a href="/#about">About</a>
  <a href="${PROFILE.github}">GitHub</a>
</nav>
</div>
${body}
<footer>
<div class="wrap">
  <div class="row">
    <span>${escape(PROFILE.name)} — ${escape(PROFILE.handle)}</span>
    <span>Built with TypeScript, deployed on Cloudflare</span>
  </div>
</div>
</footer>
</body>
</html>
`;

const metaLine = (project: Project): string => {
  const parts = [`${project.year}`, ...project.stack];
  return parts.join('<span class="sep">/</span>');
};

const linkRow = (project: Project): string => {
  const links = [...project.links];
  if (project.source) {
    links.push({ label: "Source", href: project.source });
  }
  if (links.length === 0) {
    return "";
  }
  return `<div class="links">${links
    .map((l) => `<a href="${escape(l.href)}" rel="noopener">${escape(l.label)}</a>`)
    .join("")}</div>`;
};

export const renderIndex = (): string => {
  const items = PROJECTS.map(
    (p, i) => `<li>
<div class="num">${String(i + 1).padStart(2, "0")}</div>
<div class="project-title">
  <h3><a href="/projects/${p.slug}">${escape(p.name)}</a></h3>
  <span class="status">${STATUS_LABEL[p.status]}</span>
</div>
<p class="tagline">${escape(p.tagline)}</p>
<div class="meta">${metaLine(p)}</div>
${linkRow(p)}
</li>`,
  ).join("\n");

  const body = `<div class="wrap">
<header class="masthead">
<p class="eyebrow">Portfolio</p>
<h1>Games, tools and the <span class="accent">plumbing</span> in between.</h1>
<p class="lede">${escape(PROFILE.intro)}</p>
</header>

<section id="projects">
<h2>Selected work</h2>
<ol class="projects">
${items}
</ol>
</section>

<section id="about">
<h2>About</h2>
<div class="prose">
<p>${escape(PROFILE.note)}</p>
<p>Source for the open ones lives on <a href="${PROFILE.github}" rel="noopener">GitHub</a>.</p>
</div>
</section>
</div>`;

  return layout(
    `${PROFILE.name} — portfolio`,
    `${PROFILE.tagline} Selected work: ${PROJECTS.map((p) => p.name).join(", ")}.`,
    body,
  );
};

export const renderProject = (project: Project): string => {
  const paragraphs = project.detail.map((d) => `<p>${escape(d)}</p>`).join("\n");
  const stack = project.stack.map((s) => `<li>${escape(s)}</li>`).join("");

  const body = `<div class="wrap">
<header class="masthead">
<p class="eyebrow"><a href="/#projects">Projects</a> / ${String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}</p>
<h1>${escape(project.name)}</h1>
<p class="lede">${escape(project.tagline)}</p>
<div class="meta">${metaLine(project)}</div>
${linkRow(project)}
</header>

<section>
<h2>What it is</h2>
<div class="prose">
<p>${escape(project.summary)}</p>
${paragraphs}
</div>
</section>

<section>
<h2>How it is built</h2>
<ul class="stack-list">${stack}</ul>
</section>
</div>`;

  return layout(
    `${project.name} — ${PROFILE.name}`,
    project.tagline,
    body,
  );
};

export const renderNotFound = (): string => {
  const body = `<div class="wrap">
<header class="masthead">
<p class="eyebrow">404</p>
<h1>Nothing here.</h1>
<p class="lede">That page does not exist — the ones that do are in the <a href="/#projects">project list</a>.</p>
</header>
</div>`;
  return layout(`Not found — ${PROFILE.name}`, "That page does not exist.", body);
};

export const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0c0b09"/><path d="M8 23 L16 7 L24 23" fill="none" stroke="#c9a35c" stroke-width="2.4" stroke-linejoin="round"/><path d="M11.5 18.5 H20.5" stroke="#c9a35c" stroke-width="2.4"/></svg>
`;

export const ROBOTS = `User-agent: *
Allow: /
`;
