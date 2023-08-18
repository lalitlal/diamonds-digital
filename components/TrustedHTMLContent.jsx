// components/TrustedHtmlContent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Script from "next/script";
import Link from "next/link";

const TrustedHtmlContent = ({ url }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [usedBP, setUsedBP] = useState(500);
  const [usedURL, setUsedURL] = useState(url);
  // const baseUrl = url.replace("/500/500", "");
  // Define tailwind breakpoints and corresponding integer values

  useEffect(() => {
    // Get the current screen width
    const screenWidth = window.innerWidth;
    const breakpoints = {
      sm: 320,
      md: 500,
      // lg: 1024,
      // xl: 1280,
      // "2xl": 1536,
    };
    // Find the appropriate breakpoint based on screen width
    let breakpoint = "sm";
    for (const bp in breakpoints) {
      if (screenWidth >= breakpoints[bp]) {
        setUsedBP(breakpoints[bp]);
      } else {
        break;
      }
    }
    const newUrl = url.replace("500/500", `${usedBP}/${usedBP}`);
    setUsedURL(newUrl);
  }, [usedURL, url, usedBP]);

  return (
    <iframe
      className=""
      src={usedURL}
      width={`${usedBP}px`}
      height={`${usedBP}px`}
      title="External Content"
      frameborder="0"
    />
  );
};

export default TrustedHtmlContent;
