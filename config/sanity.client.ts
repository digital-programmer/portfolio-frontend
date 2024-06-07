import { createClient } from "next-sanity";
import { format } from "date-fns";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: format(new Date(), "yyyy-MM-dd"),
  useCdn: true,
};

const client = createClient(config);

export default client;
