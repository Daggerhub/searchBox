import React, { useContext } from "react";
import { motion, Variants } from "framer-motion";

const SearchDropdown = ({ children, visible, onClose }) => {

  const cardVariants = {
    offscreen: {
      y: 20
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

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
    <motion.div className="absolute w-[300px] bg-white shadow-md top-12 min-h-[60px] max-h-[400px] overflow-scroll p-2 -right-4" variants={cardVariants} 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}>
      {children}
    </motion.div>
    </>
  );
};

export default SearchDropdown;
