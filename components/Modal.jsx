import React, { useRef } from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    showModal && (
      <div ref={modalRef} onClick={closeModal}>
        {children}
      </div>
    )
  );
};

export default Modal;
