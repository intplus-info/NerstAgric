import { BlogHero } from "@/components/sections/blog/BlogHero";
import { getPost, getPosts } from "@/lib/blog";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import Image from "next/image";
import { notFound } from "next/navigation";

// generate static params for all posts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main className="relative">
      <BlogHero />
      {/* Post content */}
      <article className="w-full px-8 md:px-20 lg:px-24.75 py-14">
        <div className="relative w-full aspect-video md:aspect-[1081.11/422.64]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="px-4 md:px-24 lg:px-28.25 pt-8 md:pt-11.5 pb-16.75">
          <h1 className="text-[#2D3748] text-[2.2rem] md:text-[2.8rem] lg:text-[3.125rem] leading-[100%] font-bold mb-4 md:mb-5.25">
            {post.title}
          </h1>
          <p className="text-[#718096] text-[1.125rem] md:-text-[1.25rem] leading-[100%] mb-14 md:mb-19">{post.date}</p>

          <div className="flex flex-col gap-6">
            {post.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-text-main text-xl md:text-2xl font-bold mt-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={index}
                  className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
}
