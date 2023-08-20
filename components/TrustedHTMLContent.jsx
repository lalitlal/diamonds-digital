import React, { useState, useEffect, useRef } from "react";

const TrustedHtmlContent = ({ url }) => {
  const [usedBP, setUsedBP] = useState(500);
  const [usedURL, setUsedURL] = useState(url);

  const iframeRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const breakpoints = {
      sm: 320,
      md: 500,
    };

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

  useEffect(() => {
    // Programmatically trigger multiple clicks on the iframe element
    if (iframeRef.current) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          iframeRef.current.click();
        }, i * 3000); // Delay each click by 1 second
      }
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={usedURL}
      width={`${usedBP}px`}
      height={`${usedBP}px`}
      title="External Content"
    />
  );
};

export default TrustedHtmlContent;
