import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import clientConfig from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder(clientConfig);

function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max");
}

export default urlFor;
