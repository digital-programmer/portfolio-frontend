"use client";

import Image from "next/image";
import profilePic from "@/public/portfolio_profile_pic.png";
import profilePicDark from "@/public/portfolio_profile_pic_dark.png";
import { useContext } from "react";
import { ThemeContext } from "@/utils/themeContext";

export default function ProfilePic() {
  const {theme} = useContext(ThemeContext);
  const selectedPic = theme === 'light' ? profilePic: profilePicDark;
  return (
    <Image
      src={selectedPic}
      alt="Logo of digital programmer website"
      width={64}
      height={64}
      priority
      style={{ objectFit: "contain" }}
      className="rounded-[50%]"
    />
  );
}
