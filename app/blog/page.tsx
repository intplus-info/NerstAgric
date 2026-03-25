import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogList } from "@/components/sections/blog/BlogList";
import { getPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <BlogHero />
      <BlogList posts={posts} />
    </main>
  );
}
