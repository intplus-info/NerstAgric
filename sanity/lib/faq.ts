import { client } from "@/sanity/client";

export type FAQ = {
  question: string;
  answer: string;
};

export async function getFAQs(): Promise<FAQ[]> {
  const query = `*[_type == "faq"] | order(order asc) {
    question,
    answer
  }`;

  const data = await client.fetch(query);

  return data ?? [];
}