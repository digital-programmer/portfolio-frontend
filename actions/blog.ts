"use server";

import client from "@/config/sanity.client";

export default async function fetchBlogs() {
  try {
    const blogs = await client.fetch<any[]>(
      `*[_type == "blog"] | order(created asc) {title, excerpt, slug, coverImage, created, "categories": *[_type == "category" && references(^._id)].name}`
    );
    return blogs;
  } catch (err) {
    console.error(err);
  }
  return [];
}

export async function fetchBlogBySlug(params: { slug: string }) {
  try {
    const blog = await client.fetch<any>(
      `*[_type == "blog" && slug.current == $slug]{title, excerpt, coverImage, created, content, "categories": *[_type == "category" && references(^._id)].name}[0]`,
      params
    );
    return blog;
  } catch (err) {
    console.error(err);
  }
  return null;
}
