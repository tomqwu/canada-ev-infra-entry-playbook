/**
 * Build a URL relative to Astro's configured `base` path.
 * Use this everywhere we link internally so the site works under
 * a GitHub Pages project subpath as well as at the root.
 */
export function withBase(path: string, baseInput?: string): string {
  const base = (baseInput ?? import.meta.env.BASE_URL ?? "/").toString();
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!path) return trimmedBase || "/";
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
