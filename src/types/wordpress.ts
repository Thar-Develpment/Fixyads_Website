export interface WordPressRenderedField {
  rendered: string;
}

export interface WordPressFeaturedMedia {
  source_url: string;
  alt_text?: string;
}

export interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  content: WordPressRenderedField;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
}
