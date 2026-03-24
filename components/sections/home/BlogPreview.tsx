"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Post } from "@/lib/blog";

const POSTS_PER_PAGE = 3;

export const BlogPreview = ({ posts }: { posts: Post[] }) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = page * POSTS_PER_PAGE;
  const visible = posts.slice(start, start + POSTS_PER_PAGE);
  const [featured, ...rest] = visible;

  return (
    <section className="w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-16 md:py-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-text-main text-2xl md:text-3xl font-semibold">
          Blog
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-text-muted border border-gray-200 px-4 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          See all blog
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group md:col-span-1 flex flex-col gap-3"
        >
          <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="text-text-muted text-xs">{featured.date}</span>
          <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">
            {featured.title}
          </h3>
        </Link>

        {/* Rest */}
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-3"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-text-muted text-xs">{post.date}</span>
            <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous posts"
          className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          aria-label="Next posts"
          className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
