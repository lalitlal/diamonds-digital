import { useEffect, useRef } from "react";

function NewModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleCloseModal(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          {/* fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50 */}
          <div className="modal" ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default NewModal;
