import { decodeHtmlEntities } from "./sanitize";

/** Strip HTML tags and collapse whitespace for meta tags / previews. */
export function stripHtml(html: string): string {
  if (!html) return "";
  const stripped = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return decodeHtmlEntities(stripped);
}

/** Short plain-text snippet suitable for meta description. */
export function truncateForMeta(text: string, maxLen = 155): string {
  const t = stripHtml(text);
  if (t.length <= maxLen) return t;
  const slice = t.slice(0, maxLen);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 40 ? slice.slice(0, lastSpace) : slice).trim() + "…";
}
