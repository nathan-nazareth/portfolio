/**
 * Public entry point for the `site` package.
 *
 * Import this from outside the package. The renderer lives in `lib/`.
 */
export {
  renderIndex,
  renderProject,
  renderNotFound,
  FAVICON,
  ROBOTS,
} from "./lib/render.ts";
export { STYLES } from "./lib/styles.ts";
