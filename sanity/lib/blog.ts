


// import { client } from "@/sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// // Image builder
// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   return builder.image(source);
// }

// // Types
// export type Block = {
//   type: "heading" | "paragraph";
//   text: string;
// };

// export type Post = {
//   _id: string;
//   slug: string;
//   title: string;
//   date: string;
//   image: string;
//   excerpt: string;
//   body: Block[];
// };

// // Fields
// const POST_FIELDS = `
//   _id,
//   title,
//   "slug": slug.current,
//   mainImage,
//   publishedAt,
//   body
// `;

// // Format date
// function formatDate(raw: string): string {
//   if (!raw) return "";

//   return new Date(raw).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// // Convert body
// function portableTextToBlocks(body: any[]): Block[] {
//   if (!Array.isArray(body)) return [];

//   return body
//     .filter((block) => block._type === "block")
//     .map((block) => {
//       const text = (block.children || [])
//         .map((child: any) => child.text)
//         .join("");

//       const isHeading =
//         block.style && /^h[1-6]$/.test(block.style);

//       return {
//         type: isHeading ? "heading" : "paragraph",
//         text,
//       };
//     });
// }

// // Extract excerpt
// function extractExcerpt(raw: any): string {
//   if (!Array.isArray(raw.body)) return "";

//   const firstBlock = raw.body.find(
//     (b: any) => b._type === "block"
//   );

//   if (!firstBlock?.children) return "";

//   return firstBlock.children
//     .map((c: any) => c.text || "")
//     .join("")
//     .slice(0, 160);
// }

// // Map post
// function mapPost(raw: any): Post {
//   return {
//     _id: raw._id,
//     title: raw.title || "",
//     slug: raw.slug || "",
//     excerpt: extractExcerpt(raw),
//     image: raw.mainImage
//       ? urlFor(raw.mainImage).width(1200).url()
//       : "/placeholder.jpg",
//     date: raw.publishedAt
//       ? formatDate(raw.publishedAt)
//       : "",
//     body: portableTextToBlocks(raw.body),
//   };
// }

// // Get all posts
// export async function getPosts(): Promise<Post[]> {
//   const query = `
//     *[_type == "post"] 
//     | order(publishedAt desc) {
//       ${POST_FIELDS}
//     }
//   `;

//   const raw = await client.fetch(query);

//   return (raw || []).map(mapPost);
// }

// // Get single post
// export async function getPost(
//   slug: string
// ): Promise<Post | null> {
//   const query = `
//     *[_type == "post" && slug.current == $slug][0] {
//       ${POST_FIELDS}
//     }
//   `;

//   const raw = await client.fetch(query, { slug });

//   if (!raw) return null;

//   return mapPost(raw);
// }

import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Types
export type Block = {
  type: "heading" | "paragraph";
  text: string;
};

export type Post = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: Block[];
};

// Fields
const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body
`;

// Format date
function formatDate(raw: string): string {
  if (!raw) return "";

  return new Date(raw).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Convert body
function portableTextToBlocks(body: any[]): Block[] {
  if (!Array.isArray(body)) return [];

  return body
    .filter((block) => block._type === "block")
    .map((block) => {
      const text = (block.children || [])
        .map((child: any) => child.text)
        .join("");

      const isHeading =
        block.style && /^h[1-6]$/.test(block.style);

      return {
        type: isHeading ? "heading" : "paragraph",
        text,
      };
    });
}

// Extract excerpt
function extractExcerpt(raw: any): string {
  if (!Array.isArray(raw.body)) return "";

  const firstBlock = raw.body.find(
    (b: any) => b._type === "block"
  );

  if (!firstBlock?.children) return "";

  return firstBlock.children
    .map((c: any) => c.text || "")
    .join("")
    .slice(0, 160);
}

// Map post
function mapPost(raw: any): Post {
  return {
    _id: raw._id,
    title: raw.title || "",
    slug: raw.slug || "",
    excerpt: extractExcerpt(raw),
    image: raw.mainImage
      ? urlFor(raw.mainImage).width(1200).url()
      : "/placeholder.jpg",
    date: raw.publishedAt
      ? formatDate(raw.publishedAt)
      : "",
    body: portableTextToBlocks(raw.body),
  };
}

// Get all posts (UNLIMITED)
export async function getPosts(): Promise<Post[]> {
  const query = `
    *[_type == "post"] 
    | order(publishedAt desc) {
      ${POST_FIELDS}
    }
  `;

  const raw = await client.fetch(query);

  return (raw || []).map(mapPost);
}

// Get single post
export async function getPost(
  slug: string
): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      ${POST_FIELDS}
    }
  `;

  const raw = await client.fetch(query, { slug });

  if (!raw) return null;

  return mapPost(raw);
}