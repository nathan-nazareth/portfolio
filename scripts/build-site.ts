/**
 * Build the static site into `dist/`.
 *
 * Imports only package entry points — the boundary rules in
 * `.dependency-cruiser.cjs` enforce that.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { PROJECTS } from "../src/packages/projects/index.ts";
import {
  FAVICON,
  ROBOTS,
  STYLES,
  renderIndex,
  renderNotFound,
  renderProject,
} from "../src/packages/site/index.ts";

const OUT = join(import.meta.dirname, "..", "dist");

const write = async (relative: string, contents: string): Promise<void> => {
  const target = join(OUT, relative);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
};

await write("index.html", renderIndex());
await write("styles.css", STYLES);
await write("favicon.svg", FAVICON);
await write("robots.txt", ROBOTS);
await write("404.html", renderNotFound());

for (const project of PROJECTS) {
  await write(`projects/${project.slug}.html`, renderProject(project));
}

console.log(`built ${PROJECTS.length + 4} pages into ${OUT}`);
