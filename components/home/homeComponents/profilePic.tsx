"use client";

import Image from "next/image";
import profilePic from "@/public/portfolio_profile_pic.png";
import profilePicDark from "@/public/portfolio_profile_pic_dark.png";

export default function ProfilePic() {
  return (
    <Image
      src={profilePicDark}
      alt="Logo of digital programmer website"
      width={64}
      height={64}
      priority
      style={{ objectFit: "contain" }}
      className="rounded-[50%]"
    />
  );
}
