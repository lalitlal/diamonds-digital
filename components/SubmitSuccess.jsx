import React from "react";

const SubmitSucess = ({ name, visible, message, status }) => {
  return (
    <div
      className={`rounded-lg py-5 px-6 mb-4 mx-5 text-lg text-center  ${
        !visible ? "hidden" : ""
      } ${
        status >= 400
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default SubmitSucess;
