import React, { useContext } from "react";
import { AppContext } from "../../context";

const SearchDropdown = ({ children, visible, onClose }) => {
  // const { loading } = useContext(AppContext);
  if (!visible) return null;
  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdropEle") onClose && onClose();
  };
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center h-100 w-100 bg-transparent"
        id="backdropEle"
        onClick={handleOnBackDropClick}
      ></div>
    <div className="absolute w-[300px] bg-white shadow-md top-12 min-h-[60px] max-h-[400px] overflow-scroll p-2 -right-4">
      {children}
    </div>
    </>
  );
};

export default SearchDropdown;
