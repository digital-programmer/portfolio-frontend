"use server";

import client from "@/config/sanity.client";

export default async function fetchProjects() {
  try {
    const projects = await client.fetch<any[]>(`*[_type == "project"]`);
    return projects;
  } catch (err) {
    console.error(err);
  }
  return [];
}
