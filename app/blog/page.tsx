

// // import { BlogHero } from "@/components/sections/blog/BlogHero";
// // import BlogList from "@/components/sections/blog/BlogList";
// // import { client } from "@/sanity/client";
// // import imageUrlBuilder from "@sanity/image-url";

// // const builder = imageUrlBuilder(client);

// // function urlFor(source: any) {
// //   return builder.image(source);
// // }

// // export const revalidate = 60;

// // export default async function BlogPage() {
// //   const posts = await client.fetch(
// //     `*[_type == "post"] | order(publishedAt desc)`
// //   );

// //   const formattedPosts = posts.map((post: any) => ({
// //     title: post?.title || "Untitled",
// //     excerpt:
// //       post?.body?.[0]?.children?.[0]?.text ||
// //       "Read this article for more insights.",
// //     date: post?.publishedAt
// //       ? new Date(post.publishedAt).toLocaleDateString()
// //       : "",
// //     slug: post?.slug?.current || "",
// //     image: post?.mainImage ? urlFor(post.mainImage).url() : "",
// //   }));

// //   return (
// //     <main>
// //       <BlogHero />
// //       <BlogList posts={formattedPosts} />
// //     </main>
// //   );
// // }


// import { BlogHero } from "@/components/sections/blog/BlogHero";
// import BlogList from "@/components/sections/blog/BlogList";
// import { getPosts } from "@/lib/blog";

// export const revalidate = 60;

// export default async function BlogPage() {
//   const posts = await getPosts();

//   return (
//     <main>
//       <BlogHero />
//       <BlogList posts={posts} />
//     </main>
//   );
// }

import { BlogHero } from "@/components/sections/blog/BlogHero";
import BlogList from "@/components/sections/blog/BlogList";
import { getPosts } from "@/lib/blog";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <BlogHero />
      <BlogList posts={posts} />
    </main>
  );
}