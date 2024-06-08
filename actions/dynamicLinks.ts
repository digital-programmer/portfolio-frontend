import client from "@/config/sanity.client";

export default async function fetchDynamicLinks() {
  try {
    const links = await client.fetch<any[]>(`*[_type == "dynamicLink"]`);
    return links;
  } catch (err) {
    console.error(err);
  }
  return [];
}

export const fetchResumeLink = async (): Promise<string | null> => {
  try {
    const res = await client.fetch<{ url: string }>(
      `*[_type == "dynamicLink" && title == "Resume Link"][0]{url}`
    );
    return res.url;
  } catch (err) {
    console.error(err);
  }
  return null;
};
