import React from "react";

const Smallcase = () => {
  return (
    <div className="max-w-sm lg:max-w-lg m-auto p-4 flex flex-col lg:flex-row">
      <div className="p-4 bg-[#006c77] mb-6 lg:mr-6 lg:mb-0 shadow-sm flex text-[white] rounded-md">
        <div className=" lg:max-w-[50%] flex flex-col">
          <h1 className="text-[20px] font-semibold mb-2">Horizon Smallcase</h1>
          <p className="mb-2">
            Goal-based investments for all your dreams that have a pre-defined
            target year
          </p>
          <button className="w-1/3 lg:w-1/2 text-blue-500 p-2 bg-white rounded-md shadow-sm">Learn More</button>
        </div>
      </div>
      <div className="p-4 bg-[#a9bbbd] shadow-sm flex rounded-md">
        <div className="lg:max-w-[50%] flex flex-col justify-start text-[black]">
          <h1 className="text-[20px] font-semibold mb-2">Horizon Smallcase</h1>
          <p className="mb-2">
            Goal-based investments for all your dreams that have a pre-defined
            target year
          </p>
          <button className=" w-1/3 lg:w-1/2 text-white p-2 bg-blue-500 rounded-md shadow-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Smallcase;
