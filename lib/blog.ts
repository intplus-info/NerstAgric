// export type Block = {
//   type: "heading" | "paragraph";
//   text: string;
// };

// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   image: string;
//   excerpt: string;
//   body: Block[];
// };

// // Replace only this function's body when Sanity is ready
// export async function getPosts(): Promise<Post[]> {
//   return [
//     {
//       slug: "nerstagric-agir-ensemble",
//       title:
//         'NerstAgric Produces Video for the "AGIR ENSEMBLE" Campaign in Ondo State.',
//       date: "06.03.2026",
//       image: "/images/blog/post1.jpg",
//       excerpt:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//       body: [
//         {
//           type: "paragraph",
//           text: "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
//         },
//         { type: "heading", text: "Section" },
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//         { type: "heading", text: "Section 1.10.33" },
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//       ],
//     },
//     {
//       slug: "nigeria-agribusiness-investment",
//       title: "Nigeria is Open for Agribusiness Investment",
//       date: "27.02.2026",
//       image: "/images/blog/post2.jpg",
//       excerpt:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//       body: [
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//         { type: "heading", text: "Section" },
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//       ],
//     },
//     {
//       slug: "strengthening-eu-green-partnership",
//       title: "Strengthening the EU-Green Partnership",
//       date: "17.02.2026",
//       image: "/images/blog/post3.jpg",
//       excerpt:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//       body: [
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//         { type: "heading", text: "Section" },
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//       ],
//     },
//     {
//       slug: "what-is-lorem-ipsum",
//       title: "What is Lorem Ipsum?",
//       date: "20.05.2026",
//       image: "/images/blog/post4.jpg",
//       excerpt:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
//       body: [
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//         { type: "heading", text: "Section" },
//         {
//           type: "paragraph",
//           text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
//         },
//       ],
//     },
//     {
//       slug: "climate-smart-agriculture-nigeria",
//       title: "Climate-Smart Agriculture: How Nigerian Farmers Are Adapting",
//       date: "10.03.2026",
//       image: "/images/blog/post5.jpg",
//       excerpt:
//         "As climate patterns shift unpredictably across sub-Saharan Africa, Nigerian farmers are turning to data-driven techniques and drought-resistant crop varieties to protect their yields.",
//       body: [
//         {
//           type: "paragraph",
//           text: "The effects of climate change are no longer abstract projections for Nigerian farmers — they are lived realities. Erratic rainfall, prolonged dry seasons, and soil degradation are reshaping how agriculture is practiced across the country.",
//         },
//         { type: "heading", text: "Drought-Resistant Varieties" },
//         {
//           type: "paragraph",
//           text: "Research institutions across Nigeria have been developing and distributing improved seed varieties capable of thriving under reduced rainfall conditions, with early adoption showing promising yield stability.",
//         },
//         { type: "heading", text: "The Role of Technology" },
//         {
//           type: "paragraph",
//           text: "From satellite soil monitoring to mobile weather alerts, agritech tools are giving smallholder farmers access to information that was previously only available to large commercial operations.",
//         },
//       ],
//     },
//   ];
// }

// // Also add this helper for single post pages
// export async function getPost(slug: string): Promise<Post | undefined> {
//   const posts = await getPosts();
//   return posts.find((p) => p.slug === slug);
// }
