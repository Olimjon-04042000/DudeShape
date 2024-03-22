import React from "react";

const Info = () => {
  return (
    <div className="flex mb-[140px] ">
      <img src="img-1.svg" alt="" />
      <div className="bg-[#154444] text-white pt-[90px] pb-[113px] pl-[100px] pr-5  w-full">
        <h1 className="text-[56px] font-bold mb-5">
          We Help You Make Modern Furniture
        </h1>
        <p className="text-xl leading-[25px] mb-[35px] w-[448px] ">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials{" "}
        </p>
        <div className=" text-xl py-[15.5px] text-center  text-[#154444] bg-white w-[173px] ">
          Explore More
        </div>
      </div>
    </div>
  );
};

export default Info;
