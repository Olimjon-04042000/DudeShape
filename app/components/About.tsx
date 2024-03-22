import React from "react";

const About = () => {
  return (
    <div className=" flex gap-[100px] items-center mb-[140px]">
      <img src="img-2.png" alt="" />
      <div className="">
        <h3 className=" text-[#244D4D] font-bold text-[32px] leading-10 mb-5">
          About Us
        </h3>
        <p className="text-[#444] text-xl leading-[25px] mb-10">
          All of our furniture uses the best materials and choices for our
          customers. All of our furniture uses the best materials
        </p>
        <div className="flex gap-[50px] mb-[30px]">
          <div className="w-[64px]">
            <img width={50} height={50}  src="quality.svg" alt="" />
          </div>
          <div className="flex flex-col gap-[14px]">
            <h4 className="text-[#244D4D] font-bold text-xl leading-[26px]">
              Best Quality
            </h4>
            <p className="text-[#383738] text-lg leading-[26px] max-w-[306px]">
              All of our furniture uses the best materials and choices
            </p>
          </div>
        </div>
        <div className="flex gap-[50px] mb-[30px]">
          <div className="w-[64px]">
            <img width={50} height={50}  src="guarantee.svg" alt="" />
          </div>
          <div className="flex flex-col gap-[14px]">
            <h4 className="text-[#244D4D] font-bold text-xl leading-[26px]">
            100% Secure
            </h4>
            <p className="text-[#383738] text-lg leading-[26px] max-w-[306px]">
              All of our furniture uses the best materials and choices
            </p>
          </div>
        </div>
        <div className="flex gap-[50px] ">
          <div className="w-[64px]">
            <img width={50} height={50}  src="free-delivery.svg" alt="" />
          </div>
          <div className="flex flex-col gap-[14px]">
            <h4 className="text-[#244D4D] font-bold text-xl leading-[26px]">
            Free Shopping           
            </h4>
            <p className="text-[#383738] text-lg leading-[26px] max-w-[306px]">
              All of our furniture uses the best materials and choices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
