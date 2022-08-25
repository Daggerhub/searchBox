import React from "react";
import Button from "../button";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-[#e1e6e2]">
      <div className="h-[55px] flex justify-between items-center max-w-sm lg:max-w-lg m-auto p-4">
        <div className="flex justify-center">
          <img
            src="https://www.smallcase.com/static/svgs/logo-mark.svg"
            className="lg:hidden h-[26px] w-auto my-auto"
          />
          <img
            src="https://www.smallcase.com/static/svgs/logo-full.svg"
            className="hidden lg:flex h-[29px] w-auto my-auto"
          />
          <p className=" ml-5">Discover</p>
          <p className=" ml-5">Watchlist</p>
        </div>
        <Button text={"login"} />
      </div>
    </div>
  );
};

export default Navbar;
