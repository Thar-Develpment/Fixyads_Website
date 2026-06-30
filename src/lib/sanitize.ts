import DOMPurify from "isomorphic-dompurify";

const POST_CONTENT_CONFIG = {
  ALLOWED_TAGS: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "br", "hr",
    "ul", "ol", "li",
    "a", "strong", "em", "b", "i", "u", "s", "del", "ins",
    "blockquote", "pre", "code",
    "img", "figure", "figcaption",
    "table", "thead", "tbody", "tr", "th", "td",
    "span", "div", "sub", "sup",
  ],
  ALLOWED_ATTR: [
    "href", "target", "rel", "title", "alt", "src", "width", "height",
    "class", "id", "colspan", "rowspan",
  ],
  ALLOW_DATA_ATTR: false,
};

/** Sanitize WordPress post body HTML before rendering. */
export function sanitizePostHtml(html: string): string {
  if (!html) return "";
  return DOMPurify.sanitize(html, POST_CONTENT_CONFIG);
}

/** Strip all HTML — safe for titles, breadcrumbs, and plain-text previews. */
export function sanitizePlainText(html: string): string {
  if (!html) return "";
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}
