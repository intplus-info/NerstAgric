import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// ─── Image URL builder ────────────────────────────────────────────────────────

const builder = createImageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type BodyBlock = {
  type: "paragraph" | "heading";
  text: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  body: BodyBlock[];
};

// ─── GROQ query ───────────────────────────────────────────────────────────────

// const POST_FIELDS = `
//   _id,
//   title,
//   "slug": slug.current,
//   "excerpt": pt::text(body[0..0]),
//  mainImage,
//   publishedAt,
//   body
// `;

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(raw: string): string {
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function portableTextToBlocks(body: any[]): BodyBlock[] {
  if (!Array.isArray(body)) return [];

  return body
    .filter((block) => block._type === "block")
    .map((block) => {
      const text: string = (block.children ?? [])
        .filter((child: any) => child._type === "span")
        .map((child: any) => child.text ?? "")
        .join("");

      const isHeading =
        typeof block.style === "string" && /^h[1-6]$/.test(block.style);

      return {
        type: isHeading ? "heading" : "paragraph",
        text,
      } as BodyBlock;
    })
    .filter((block) => block.text.trim() !== "");
}

// function extractExcerpt(raw: any): string {
//   if (raw.excerpt && raw.excerpt.trim()) return raw.excerpt.trim();

//   if (Array.isArray(raw.body)) {
//     for (const block of raw.body) {
//       if (block._type !== "block") continue;
//       const text = (block.children ?? [])
//         .filter((c: any) => c._type === "span")
//         .map((c: any) => c.text ?? "")
//         .join("")
//         .trim();
//       if (text) return text.slice(0, 160);
//     }
//   }
//   return "";
// }

function extractExcerpt(raw: any): string {
  if (!Array.isArray(raw.body)) return "";

  const firstBlock = raw.body.find((b: any) => b._type === "block");

  if (!firstBlock?.children) return "";

  return firstBlock.children
    .map((c: any) => c.text || "")
    .join("")
    .slice(0, 160);
}

// function mapPost(raw: any): Post {
//   return {
//     _id: raw._id,
//     title: raw.title ?? "",
//     slug: raw.slug ?? "",
//     excerpt: extractExcerpt(raw),
//     image: raw.mainImage
//       ? urlFor(raw.mainImage).width(1200).url()
//       : "",
//     date: formatDate(raw.publishedAt),
//     body: portableTextToBlocks(raw.body),
//   };
// }

function mapPost(raw: any): Post {
  return {
    _id: raw._id,
    title: raw.title ?? "",
    slug: raw.slug ?? "",
    excerpt: extractExcerpt(raw),
    image: raw.mainImage
      ? urlFor(raw.mainImage).width(1200).url()
      : "/placeholder.jpg",
    date: raw.publishedAt ? formatDate(raw.publishedAt) : "",
    body: portableTextToBlocks(raw.body),
  };
}
// ─── Public API ───────────────────────────────────────────────────────────────

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`;
  const raw = await client.fetch(query);
  return (raw ?? []).map(mapPost);
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`;
  const raw = await client.fetch(query, { slug });
  if (!raw) return null;
  return mapPost(raw);
}