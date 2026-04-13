// import Link from "next/link";
// import Image from "next/image";
// import { Post } from "@/lib/blog";

// export const BlogList = ({ posts }: { posts: any[] }) => {
//   const [featured, ...rest] = posts;
//   const gridPosts = rest.slice(0, 3);
//   const alternatePosts = rest.slice(3);

//   return (
//     <section className="w-full px-4 sm:px-14 md:px-20 lg:px-25.75 py-10 md:py-14 flex flex-col gap-11.75">
//       {/* Featured post — horizontal card */}
//       <article className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-10.25">
//         <div className="flex flex-col justify-between p-11.25 gap-6">
//           <div className="flex flex-col gap-3">
//             <h2 className="text-[#2D3748] text-[1.9rem] md:text-[2.083125rem] font-bold leading-[100%]">
//               {featured.title}
//             </h2>
//             <p className="text-[#718096] text-[0.8rem] md:text-[0.9275rem] leading-[100%]">
//               {featured.excerpt}
//             </p>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-[#718096] text-[0.8rem] md:text-[0.9275rem] leading-[100%]">
//               {featured.date}
//             </span>
//             <Link
//               href={`/blog/${featured.slug}`}
//               className="text-[#2D3748] text-[0.8rem] md:text-[0.9275rem] leading-[100%] hover:text-primary transition-colors"
//             >
//               Read more
//             </Link>
//           </div>
//         </div>
//         <div className="relative w-full min-h-67.5">
//           <Image
//             src={featured.image}
//             alt={featured.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </div>
//       </article>

//       {/* Three column grid */}
//       {gridPosts.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {gridPosts.map((post) => (
//             <article
//               key={post.slug}
//               className="overflow-hidden flex flex-col"
//             >
//               <div className="relative w-full aspect-video">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex flex-col gap-3 p-4.5 flex-1 justify-between">
//                 <div className="flex flex-col gap-4">
//                   <h2 className="text-[#2D3748] text-[1.1rem] md:text-[1.38875rem] font-bold leading-[100%]">
//                     {post.title}
//                   </h2>
//                   <p className="text-[#718096] text-[0.8rem] md:text-[0.9725rem] leading-[100%]">
//                     {post.excerpt}
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#718096] text-[0.8rem] md:text-[0.9275rem] leading-[100%]">
//                     {post.date}
//                   </span>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-[#2D3748] text-[0.8rem] md:text-[0.9275rem] leading-[100%] hover:text-primary transition-colors"
//                   >
//                     Read more
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}

//       {/* Alternate featured posts — horizontal, image right */}
//       {alternatePosts.length > 0 && (
//         <div className="flex flex-col gap-12">
//           {alternatePosts.map((post) => (
//             <article
//               key={post.slug}
//               className="grid grid-cols-1 md:grid-cols-2 items-center"
//             >
//               <div className="flex flex-col gap-4 px-8 md:px-16 lg:px-19 py-12 md:py-22 lg:py-27">
//                 <h2 className="text-black text-[2.5rem] md:text-[2.7775rem] leading-[100%] font-bold">
//                   {post.title}
//                 </h2>
//                 <p className="text-[#718096] text-[1rem] md:text-[1.11125rem] leading-[100%]">
//                   {post.excerpt}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#718096] text-[1rem] md:text-[1.11125rem] leading-[100%]">
//                     {post.date}
//                   </span>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-black text-[1rem] md:text-[1.11125rem] leading-[100%] hover:text-primary transition-colors"
//                   >
//                     Read more
//                   </Link>
//                 </div>
//               </div>
//               <div className="relative w-full aspect-[583.94/555.56] overflow-hidden">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-cover"
//                 />
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogListProps {
  posts: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image: string;
  }[];
}

const BlogList = ({ posts }: BlogListProps) => {
  if (!posts || posts.length === 0) return null;

  const [featured, ...rest] = posts;
  const gridPosts = rest.slice(0, 3);
  const alternatePosts = rest.slice(3);

  return (
    <section className="w-full px-4 sm:px-14 md:px-20 lg:px-25.75 py-10 md:py-14 flex flex-col gap-11.75">

      {/* Featured Post */}
      {featured && (
        <article className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
          <div className="flex flex-col justify-between p-10 gap-6">
            <div>
              <h2 className="text-2xl font-bold">{featured.title}</h2>
              <p className="text-gray-500 mt-2">{featured.excerpt}</p>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>{featured.date}</span>

              <Link href={`/blog/${featured.slug}`}>
                Read more
              </Link>
            </div>
          </div>

          <div className="relative w-full min-h-64">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
          </div>
        </article>
      )}

      {/* Grid Posts */}
      {gridPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.excerpt}</p>

              <Link href={`/blog/${post.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      )}

    </section>
  );
};

export default BlogList;