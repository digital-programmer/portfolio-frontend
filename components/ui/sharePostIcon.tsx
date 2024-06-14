"use client";

import { useEffect, useState } from "react";
import {
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { InstapaperIcon, LinkedinIcon, WhatsappIcon, XIcon } from "react-share";

export default function SharePostIcons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-normal">
          Liked what you read? Give it a share.
        </div>
        <div className="w-max flex gap-2 md:gap-4 items-center">
          <div>
            <WhatsappShareButton
              url={url}
              title={title}
              className="hover:opacity-80"
            >
              <WhatsappIcon size={32} className="rounded-md" />
            </WhatsappShareButton>
          </div>
          <div>
            <LinkedinShareButton
              url={url}
              title={title}
              className="hover:opacity-80"
            >
              <LinkedinIcon size={32} className="rounded-md" />
            </LinkedinShareButton>
          </div>
          <div>
            <TwitterShareButton
              url={url}
              title={title}
              className="hover:opacity-80"
            >
              <XIcon size={32} className="rounded-md" />
            </TwitterShareButton>
          </div>
          <div>
            <InstapaperShareButton
              url={url}
              title={title}
              className="hover:opacity-80"
            >
              <InstapaperIcon size={32} className="rounded-md" />
            </InstapaperShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
