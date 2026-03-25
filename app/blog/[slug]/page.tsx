import { BlogHero } from "@/components/sections/blog/BlogHero";
import { getPost, getPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
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
    <main>
      <BlogHero />
      <section className="relative w-full min-h-[50vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </section>

      {/* Post content */}
      <article className="w-full max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-text-main text-3xl md:text-4xl font-bold leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-text-muted text-sm mb-10">{post.date}</p>

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
                className="text-text-muted text-sm leading-relaxed"
              >
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
}

// scroll to top — needs to be client
function ScrollToTop() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        href="#"
        aria-label="Scroll to top"
        className="w-10 h-10 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}