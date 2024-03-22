import React from "react";

const Companies = () => {
  return (
    <div className=" mb-[140px]">
      <h3 className="text-[#244D4D] text-[32px] font-bold mb-10 text-center">
        Trusted by 20,000+ companies
      </h3>
      <ul className=" flex justify-between items-center">
        <li className=" flex flex-col gap-[2.5px] items-center">
          <img src="mastercard.svg" alt="" />
          <img width={60} src="mastercard2.svg" alt="" />
        </li>
        <li>
          <img src="airbnb.svg" alt="" />
        </li>
        <li>
          <img src="uber.svg" alt="" />
        </li>
        <li>
          <img src="paypal.svg" alt="" />
        </li>
        <li>
          <img src="visa.svg" alt="" />
        </li>
        <li>
          <img src="stripe.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Companies;
