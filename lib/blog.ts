export type Block = {
  type: "heading" | "paragraph";
  text: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: Block[];
};

// Replace only this function's body when Sanity is ready
export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: "nerstagric-agir-ensemble",
      title:
        'NerstAgric Produces Video for the "AGIR ENSEMBLE" Campaign in Ondo State.',
      date: "06.03.2026",
      image: "/images/blog/post1.jpg",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      body: [
        {
          type: "paragraph",
          text: "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        { type: "heading", text: "Section" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        { type: "heading", text: "Section 1.10.33" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
      ],
    },
    {
      slug: "nigeria-agribusiness-investment",
      title: "Nigeria is Open for Agribusiness Investment",
      date: "27.02.2026",
      image: "/images/blog/post2.jpg",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      body: [
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        { type: "heading", text: "Section" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
      ],
    },
    {
      slug: "strengthening-eu-green-partnership",
      title: "Strengthening the EU-Green Partnership",
      date: "17.02.2026",
      image: "/images/blog/post3.jpg",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      body: [
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        { type: "heading", text: "Section" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
      ],
    },
    {
      slug: "what-is-lorem-ipsum",
      title: "What is Lorem Ipsum?",
      date: "20.05.2026",
      image: "/images/blog/post4.jpg",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
      body: [
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        { type: "heading", text: "Section" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
      ],
    },
    {
      slug: "what-is-lorem-ipsum",
      title: "What is Lorem Ipsum?",
      date: "May 20",
      image: "/images/blog/post5.jpg",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...",
      body: [
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        { type: "heading", text: "Section" },
        {
          type: "paragraph",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
      ],
    },
  ];
}

// Also add this helper for single post pages
export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}
