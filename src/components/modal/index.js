import React from "react";
const Modal = ({ children, visible, onClose }) => {
  if (!visible) return null;
  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop") onClose();
  };
  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center h-100 w-100 bg-white"
        id="backdrop"
        onClick={handleOnBackDropClick}
      ></div>
      <div className="max-w-sm lg:max-w-lg mx-auto fixed inset-0 flex h-100 w-100 bg-white shadow-md px-6 py-4 flex-col h-full mt-48 transform -translate-y-48 transition duration-700">
        {children}
      </div>
    </div>
  );
};

export default Modal;
