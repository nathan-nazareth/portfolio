/**
 * The stylesheet.
 *
 * Private: written to disk as `styles.css` at build time, never imported.
 */
export const STYLES = `
:root {
  --bg: #0c0b09;
  --bg-raised: #14120f;
  --ink: #ece6da;
  --ink-dim: #9d9484;
  --ink-faint: #6b6355;
  --gold: #c9a35c;
  --rule: #2a251d;
  --measure: 62ch;
}

* { box-sizing: border-box; }

html { -webkit-text-size-adjust: 100%; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: ui-serif, Georgia, "Iowan Old Style", "Palatino Linotype", serif;
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201, 163, 92, 0.28); }
a:hover { border-bottom-color: var(--gold); }

code, .mono {
  font-family: ui-monospace, "SFMono-Regular", "JetBrains Mono", Menlo, Consolas, monospace;
  font-size: 0.86em;
  letter-spacing: 0.01em;
}

.wrap { max-width: var(--measure); margin: 0 auto; padding: 0 1.5rem; }
.wrap-wide { max-width: 78ch; margin: 0 auto; padding: 0 1.5rem; }

header.masthead { padding: 5.5rem 0 3rem; }
.eyebrow {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0 0 1.4rem;
}
h1 {
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  line-height: 1.08;
  font-weight: 500;
  letter-spacing: -0.015em;
  margin: 0 0 1rem;
}
h1 .accent { color: var(--gold); font-style: italic; }
.lede { font-size: 1.12rem; color: var(--ink-dim); margin: 0 0 2rem; max-width: 54ch; }

nav.top {
  display: flex;
  gap: 1.4rem;
  align-items: baseline;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
nav.top a { color: var(--ink-faint); border: 0; }
nav.top a:hover { color: var(--gold); }

section { padding: 3.2rem 0; border-top: 1px solid var(--rule); }
section:first-of-type { border-top: 0; }
h2 {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0 0 1.8rem;
}

ol.projects { list-style: none; margin: 0; padding: 0; counter-reset: project; }
ol.projects li { counter-increment: project; padding: 1.5rem 0; border-bottom: 1px solid var(--rule); }
ol.projects li:last-child { border-bottom: 0; }
ol.projects .num {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.72rem;
  color: var(--ink-faint);
  letter-spacing: 0.1em;
}
.project-title { display: flex; align-items: baseline; gap: 0.9rem; flex-wrap: wrap; margin: 0.3rem 0 0.4rem; }
.project-title h3 { font-size: 1.45rem; font-weight: 500; margin: 0; letter-spacing: -0.01em; }
.project-title .status {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  border: 1px solid var(--rule);
  padding: 0.15rem 0.5rem;
  border-radius: 2px;
}
.tagline { color: var(--ink-dim); margin: 0 0 0.7rem; max-width: 58ch; }
.meta { font-family: ui-monospace, Menlo, monospace; font-size: 0.72rem; color: var(--ink-faint); letter-spacing: 0.04em; }
.meta .sep { opacity: 0.45; margin: 0 0.45rem; }
.links { margin-top: 0.7rem; font-family: ui-monospace, Menlo, monospace; font-size: 0.74rem; }
.links a { margin-right: 1.1rem; }

.prose p { margin: 0 0 1.15rem; }
.prose h3 { font-size: 1.1rem; font-weight: 500; margin: 2rem 0 0.6rem; }
.stack-list { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 1rem 0 0; }
.stack-list li {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.72rem;
  color: var(--ink-dim);
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 0.22rem 0.55rem;
}

footer {
  border-top: 1px solid var(--rule);
  padding: 2.6rem 0 4rem;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 0.74rem;
  color: var(--ink-faint);
}
footer .row { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }

.breadcrumb { font-family: ui-monospace, Menlo, monospace; font-size: 0.72rem; color: var(--ink-faint); letter-spacing: 0.1em; }
.breadcrumb a { color: var(--ink-faint); border: 0; }
.breadcrumb a:hover { color: var(--gold); }

@media (max-width: 34rem) {
  body { font-size: 16px; }
  header.masthead { padding: 3.4rem 0 2rem; }
  .project-title h3 { font-size: 1.25rem; }
}
`.trim();
