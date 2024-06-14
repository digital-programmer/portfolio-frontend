"use client";
import { useContext } from "react";
import { ThemeContext } from "@/utils/themeContext";
import { CldImage } from "next-cloudinary";

const LIGHT_THEME_URL = "portfolio/wxowi4whcvtffq43aqwq";
const DARK_THEME_URL = "portfolio/nvgqybylvnlcmjjepqll";

export default function ProfilePic() {
  const {theme} = useContext(ThemeContext);
  const selectedPic = theme === 'light' ? LIGHT_THEME_URL: DARK_THEME_URL;
  return (
    <CldImage
      src={selectedPic}
      alt="Logo of digital programmer website"
      width={64}
      height={64}
      style={{ objectFit: "contain" }}
      className="rounded-[50%]"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
