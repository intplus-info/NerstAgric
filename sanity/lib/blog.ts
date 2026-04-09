import { sanityClient } from "@/sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

export interface Post {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  body: { type: string; text: string }[];
  image: string;
}

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    "slug": slug.current,
    "image": mainImage.asset->_ref,
    excerpt,
    body,
    _createdAt
  }`;

  const data = await sanityClient.fetch(query, {}, { next: { revalidate: 60 } });

  return data.map((post: any) => ({
    ...post,
    image: urlFor(post.image).width(1200).url(),
    date: new Date(post._createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }));
}

// Fetch single post by slug
export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "image": mainImage.asset->_ref,
    excerpt,
    body,
    _createdAt
  }`;

  const post = await sanityClient.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );

  if (!post) return null;

  return {
    ...post,
    image: urlFor(post.image).width(1200).url(),
    date: new Date(post._createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}