// ;

// "use client";

// import Link from "next/link";
// import Image from "next/image";

// interface BlogListProps {
//   posts: {
//     title: string;
//     excerpt: string;
//     date: string;
//     slug: string;
//     image: string;
//   }[];
// }

// const BlogList = ({ posts }: BlogListProps) => {
//   if (!posts || posts.length === 0) return null;

//   const [featured, ...rest] = posts;
//   const gridPosts = rest.slice(0, 3);
//   const alternatePosts = rest.slice(3);

//   return (
//     <section className="w-full px-4 sm:px-14 md:px-20 lg:px-25.75 py-10 md:py-14 flex flex-col gap-11.75">

//       {/* Featured Post */}
//       {featured && (
//         <article className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
//           <div className="flex flex-col justify-between p-10 gap-6">
//             <div>
//               <h2 className="text-2xl font-bold">{featured.title}</h2>
//               <p className="text-gray-500 mt-2">{featured.excerpt}</p>
//             </div>

//             <div className="flex justify-between text-sm text-gray-500">
//               <span>{featured.date}</span>

//               <Link href={`/blog/${featured.slug}`}>
//                 Read more
//               </Link>
//             </div>
//           </div>

//           <div className="relative w-full min-h-64">
//             <Image
//               src={featured.image}
//               alt={featured.title}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </article>
//       )}

//       {/* Grid Posts */}
//       {gridPosts.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {gridPosts.map((post) => (
//             <article key={post.slug} className="flex flex-col gap-3">
//               <div className="relative w-full aspect-video">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h2 className="font-semibold">{post.title}</h2>
//               <p className="text-sm text-gray-500">{post.excerpt}</p>

//               <Link href={`/blog/${post.slug}`}>
//                 Read more
//               </Link>
//             </article>
//           ))}
//         </div>
//       )}

//     </section>
//   );
// };

// export default BlogList;

"use client";

import Link from "next/link";
import Image from "next/image";
// import { Post } from "@/lib/blog";
import { Post } from "@/sanity/lib/blog";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function BlogList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="relative w-full aspect-video mb-4 overflow-hidden">
              <Image
                src={post.image || "/placeholder.jpg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-sm text-gray-500 mb-2">
              {post.date}
            </span>

            <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 mt-4 text-primary">
              Read More
              <ArrowUpRight size={16} />
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}