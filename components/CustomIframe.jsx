import React, { useState } from "react";
import { xIcon } from "./constants";
import LoadingSkeleton from "./LoadingSkeleton";

const CustomIframe = ({ url }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const iframeContent = (
    <iframe
      src={url}
      title="Embedded Content"
      className={`w-full h-fit lg:h-3/4 ${iframeLoading ? "hidden" : ""}`}
      onLoad={() => setIframeLoading(false)}
    ></iframe>
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="relative">
      <div className="w-full h-full absolute inset-0" onClick={toggleModal}>
        {iframeLoading && (
          <div className="w-full h-full bg-gray-200 animate-pulse absolute inset-0"></div>
        )}
      </div>
      {iframeLoading && (
        <LoadingSkeleton
          header={"HIRA"}
          footer={"Loading Report"}
        ></LoadingSkeleton>
      )}
      {iframeContent}
      {modalVisible && iframeContent && (
        <div className="fixed w-full h-full inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="modal bg-white p-4 shadow-md w-4/5 h-fit lg:w-1/2 lg:h-3/4 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 text-gray-600 cursor-pointer"
              onClick={toggleModal}
            >
              {xIcon}
            </div>
            {iframeLoading ? <div></div> : iframeContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomIframe;
