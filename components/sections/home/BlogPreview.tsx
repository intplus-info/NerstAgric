

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Post } from "@/lib/blog";
// import { ArrowUpRight } from "@/components/ui/Icons";

// export const BlogPreview = ({ posts }: { posts: Post[] }) => {
//   const [index, setIndex] = useState(0);

//   // safety check
//   if (!posts || posts.length === 0) return null;

//   const maxIndex = Math.max(0, posts.length - 3);
//   const safeIndex = Math.min(index, maxIndex);

//   const visible = posts.slice(safeIndex, safeIndex + 3);

//   if (visible.length === 0) return null;

//   const [featured, ...rest] = visible;

//   if (!featured) return null;

//   return (
//     <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16">
      
//       {/* Header */}
//       <div className="flex items-center justify-between mb-11.5 font-urbanist">
//         <h2 className="text-[1.6rem] md:text-[2.01875rem] leading-[43.71px] font-medium">
//           Blog
//         </h2>

//         <Link
//           href="/blog"
//           className="flex items-center gap-3.5 bg-[#E8E8E8] px-3.25 py-2.25 rounded-[37.21px] hover:bg-[#E8E8E8]/40 transition-colors"
//         >
//           <ArrowUpRight size={18} />
//           See all blog
//         </Link>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3 min-h-[286.5px] md:min-h-[412.67px]">

//         {/* Featured */}
//         <div className="group md:col-span-1 flex flex-col">
//           <div className="relative w-full aspect-489/275 mb-3.5 overflow-hidden">
//             <Image
//               src={featured.image || "/placeholder.jpg"}
//               alt={featured.title || "Blog post"}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
//               priority
//               className="object-cover"
//             />
//           </div>

//           <span className="text-[0.665rem] leading-[14.3px] mb-[12.6px]">
//             {featured.date}
//           </span>

//           <h3 className="text-[0.8rem] md:text-[0.91625rem] leading-[18.57px] font-medium mb-3 max-w-[40ch] line-clamp-2 min-h-9.5">
//             {featured.title}
//           </h3>

//           <Link
//             href={`/blog/${featured.slug}`}
//             className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#0DB04A] flex justify-between items-center pl-3 pr-5 py-2 md:py-3"
//           >
//             <span className="text-white text-[1rem] md:text-[1.125rem] leading-[28.75px] font-medium font-urbanist">
//               Read More...
//             </span>
//             <span className="p-1 lg:w-[26.19px] max-sm:scale-90 aspect-square rounded-full bg-white flex justify-center items-center">
//               <ArrowUpRight />
//             </span>
//           </Link>
//         </div>

//         {/* Rest */}
//         <div className="grid grid-cols-2 gap-3">
//           {rest.map((post) => (
//             <Link
//               key={post.slug}
//               href={`/blog/${post.slug}`}
//               className="group flex flex-col min-h-50.75 md:min-h-[412.67px]"
//             >
//               <div className="relative w-full aspect-video md:aspect-318.5/232 mb-3.5 overflow-hidden">
//                 <Image
//                   src={post.image || "/placeholder.jpg"}
//                   alt={post.title || "Blog post"}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
//                   className="object-cover"
//                 />
//               </div>

//               <span className="text-[0.665rem] leading-[14.3px] mb-[12.6px]">
//                 {post.date}
//               </span>

//               <h3 className="text-[0.8rem] md:text-[0.91625rem] leading-[18.57px] font-medium line-clamp-2 min-h-9.5 group-hover:text-primary transition-colors">
//                 {post.title}
//               </h3>
//             </Link>
//           ))}
//         </div>

//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end">
//         <div className="inline-flex items-center gap-2 mt-8 rounded-[37.21px] p-1 overflow-hidden bg-black/5">

//           <button
//             onClick={() => setIndex((i) => Math.max(0, i - 1))}
//             disabled={index === 0}
//             className="flex items-center justify-center p-3 hover:bg-black/8 transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-[37.21px]"
//           >
//             ←
//           </button>

//           <div className="w-0.5 h-6 bg-gray-300 mx-1" />

//           <button
//             onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
//             disabled={index >= maxIndex}
//             className="flex items-center justify-center p-3 hover:bg-black/8 transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-[37.21px]"
//           >
//             →
//           </button>

//         </div>
//       </div>

//     </section>
//   );
// };

"use client";

import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";
import { ArrowUpRight } from "@/components/ui/Icons";

export const BlogPreview = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length === 0) return null;

  const visiblePosts = posts.slice(0, 3);

  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16">

      {/* Header */}
      <div className="flex items-center justify-between mb-11.5">
        <h2 className="text-[1.6rem] md:text-[2.01875rem] font-medium">
          Blog
        </h2>

        <Link
          href="/blog"
          className="flex items-center gap-3.5 bg-[#E8E8E8] px-4 py-2 rounded-full"
        >
          See all blog
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="relative w-full aspect-video mb-4 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-sm text-gray-500">
              {post.date}
            </span>

            <h3 className="text-lg font-medium group-hover:text-primary">
              {post.title}
            </h3>

          </Link>
        ))}

      </div>

    </section>
  );
};