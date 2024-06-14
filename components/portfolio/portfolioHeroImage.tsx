"use client";

import { CldImage } from "next-cloudinary";

export function PortfolioHeroImage() {
  return (
    <CldImage
      src="portfolio/jyvuvygxbufhiser6abt"
      alt={"cover page of portfolio"}
      unoptimized={false}
      className="rounded-tr-md rounded-t-md md:rounded-tl-none md:rounded-br-md"
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
