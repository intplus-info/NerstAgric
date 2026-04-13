import { client } from "@/sanity/client";

export default async function TestPage() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return (
    <div>
      <h1>Sanity Test</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}