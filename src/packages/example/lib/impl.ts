/**
 * Implementation detail. Nothing outside `src/packages/example/` may import
 * this file — it lives in a subfolder, so it is private by construction.
 */
export function titleCase(raw: string): string {
  return raw
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
