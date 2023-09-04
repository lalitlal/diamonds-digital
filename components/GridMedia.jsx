import React from "react";

const GridMedia = ({ feedData }) => {
  return (
    feedData &&
    feedData.data && (
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {feedData.data.map(
          (data, index) =>
            data.media_type === "CAROUSEL_ALBUM" && (
              <div key={index} className="w-full flex-shrink-0">
                <img class="h-auto max-w-full" src={data.media_url} alt="" />
              </div>
            )
        )}
      </div>
    )
  );
};

export default GridMedia;
