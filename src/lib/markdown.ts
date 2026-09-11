export type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

/**
 * Minimal markdown parser.
 *
 * The blog content only uses ATX headings, plain paragraphs and simple
 * unordered lists — no links, emphasis or code fences — so a full markdown
 * library would be unnecessary weight. If richer syntax is ever needed,
 * replace this file.
 *
 * Heading levels are shifted down one step so the page <h1> stays unique.
 */
export function parseMarkdown(source: string): Block[] {
  const blocks: Block[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length === 0) return;
    blocks.push({ type: "paragraph", text: buffer.join(" ") });
    buffer = [];
  };

  for (const rawLine of source.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trim();

    if (line === "") {
      flush();
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);

    if (heading) {
      flush();
      blocks.push({
        type: "heading",
        level: heading[1].length <= 2 ? 2 : 3,
        text: heading[2].trim(),
      });
      continue;
    }

    const listItem = /^[-*]\s+(.*)$/.exec(line);

    if (listItem) {
      flush();

      const previous = blocks[blocks.length - 1];

      // Consecutive items join the same list even when a blank line separates
      // them, so one run of "- " lines always renders as a single <ul>.
      if (previous?.type === "list") {
        previous.items.push(listItem[1].trim());
      } else {
        blocks.push({ type: "list", items: [listItem[1].trim()] });
      }

      continue;
    }

    buffer.push(line);
  }

  flush();

  return blocks;
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
