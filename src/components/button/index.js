import React from "react";

const Button = ({text, setModal}) => {
  return (
    <div>
      <div className="my-5">
        <button className="py-[9px] px-[13px] text-[#1f7ae0] border-[1px] text-[13px] shadow" onClick={setModal}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
