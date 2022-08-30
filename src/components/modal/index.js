import React from "react";
import { motion, Variants } from "framer-motion";
const Modal = ({ children, visible, onClose }) => {
  if (!visible) return null;
  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop") onClose();
  };

  const cardVariants = {
    offscreen: {
      y: 150
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };
  
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center h-100 w-100 bg-white"
        id="backdrop"
        onClick={handleOnBackDropClick}
      ></div>
      <motion.div className=" max-w-sm lg:max-w-lg mx-auto fixed inset-0 flex w-100 bg-white shadow-md px-6 py-4 flex-col overflow-scroll
      " variants={cardVariants} 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Modal;