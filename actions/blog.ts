import client from "@/config/sanity.client";

export default async function fetchBlogs() {
  try {
    const blogs = await client.fetch<any[]>(`*[_type == "blog"]`);
    return blogs;
  } catch (err) {
    console.error(err);
  }
  return [];
}
