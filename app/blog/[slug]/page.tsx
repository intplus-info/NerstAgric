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
      {/* Post content */}
      <article className="w-full px-12 md:px-20 lg:px-24.75 py-14">
        <div className="relative w-full aspect-[1081.11/422.64]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div>
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
    <div className="">
      <Link
        href="#"
        aria-label="Scroll to top"
        className="w-10 h-10 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1482 46.2963C35.9259 46.2963 46.2963 35.9259 46.2963 23.1482C46.2963 10.3704 35.9259 7.62939e-06 23.1482 7.62939e-06C10.3704 7.62939e-06 0 10.3704 0 23.1482C0 35.9259 10.3704 46.2963 23.1482 46.2963ZM25.463 23.1482V32.4074H20.8333V23.1482H13.8889L23.1482 13.8889L32.4074 23.1482H25.463Z"
            fill="#0DB04A"
          />
        </svg>
      </Link>
    </div>
  );
}