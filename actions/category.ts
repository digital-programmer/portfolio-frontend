import client from "@/config/sanity.client";

export default async function fetchCategories() {
  try {
    // const categories = await client.fetch<any[]>(`*[_type == "category"]`);
    // return categories;
  } catch (err) {
    console.error(err);
  }
  return [];
}
