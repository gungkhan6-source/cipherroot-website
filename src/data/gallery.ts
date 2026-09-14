export interface GalleryItem {
  /** Path under public/, e.g. "/gallery/office.webp". */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

/**
 * Images shown in the homepage gallery. Intended gallery or project imagery
 * only — not product icons or blog covers. While this list is empty the
 * section does not render. CipherRoot has none yet.
 */
export const galleryItems: GalleryItem[] = [];
