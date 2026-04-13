import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "nr2w4b6y",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});