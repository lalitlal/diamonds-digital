import React, { useState, useEffect, useRef } from "react";

const TrustedHtmlContent = ({ url }) => {
  const [usedBP, setUsedBP] = useState(500);
  const [usedURL, setUsedURL] = useState(url);

  const iframeRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const breakpoints = {
      sm: [320, 320],
      md: [500, 500],
      lg: [1024, 320],
    };

    let breakpoint = "sm";
    for (const bp in breakpoints) {
      if (screenWidth >= breakpoints[bp][0]) {
        setUsedBP(breakpoints[bp][1]);
      } else {
        break;
      }
    }
    const newUrl = url.replace("500/500", `${usedBP}/${usedBP}`);
    setUsedURL(newUrl);
  }, [usedURL, url, usedBP]);

  return (
    <iframe
      ref={iframeRef}
      src={usedURL}
      rel="preconnect"
      width={`${usedBP}px`}
      height={`${usedBP}px`}
      title="External Content"
    />
  );
};

export default TrustedHtmlContent;
