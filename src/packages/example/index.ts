/**
 * Public entry point for the `example` package.
 *
 * This is the only thing outside the package may import. The behaviour lives
 * in `lib/`, which is hidden from callers.
 */
import { titleCase } from "./lib/impl";

/**
 * Normalise a project title for display.
 *
 * @example projectTitle("  lord of the rinse  ") // "Lord Of The Rinse"
 */
export function projectTitle(raw: string): string {
  return titleCase(raw.trim());
}
