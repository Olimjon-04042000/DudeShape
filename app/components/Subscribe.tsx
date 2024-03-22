import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#F4F6F6] pt-[68px] pb-[55px] flex justify-center">
      <div className="w-[600px]">
        <h2 className="text-center  text-[#222222] font-bold text-[32px] mb-5 ">
          Subscribe to get the latest news about us
        </h2>
        <p className="text-[#222222] mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore at dolore.
        </p>
        <div className="pr-[19px] pl-[17.5px] pt-[7px] pb-2 bg-white flex justify-between">
          <div className="flex gap-3">
            <img src="email.svg" alt="" />
            <input className=" " placeholder="Enter your email" type="text" />
          </div>
          <button className="bg-[#305F64] text-white  py-[15px] px-[32px]">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
