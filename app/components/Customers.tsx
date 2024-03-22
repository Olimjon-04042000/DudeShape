import React from "react";

const Customers = () => {
  return (
    <div className="flex gap-[180px] items-center mb-[140px]">
      <div>
        <div className=" relative rounded-full bg-[#244D4D] w-[492px] h-[492px]">
          <img
            className=" absolute -top-[0.5px] left-[105px] h-[492px]"
            src="img5.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-[#242424] font-bold text-[32px] mb-5 ">
          Our customers are verry importan to us
        </h2>
        <p className="text-[#383738] text-xl mb-[44.67px]">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
        <div className="flex gap-[10px]">
          <img src="person.svg" alt="" />
          <div>
            <p className="font-medium mb-[6.16px]">Mh Jibon</p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g clip-path="url(#clip0_2196_693)">
                  <path
                    d="M16.8919 6.18216C16.7871 5.85817 16.4998 5.62806 16.1598 5.59742L11.5418 5.1781L9.71568 0.903944C9.58103 0.590703 9.27438 0.387939 8.93368 0.387939C8.59297 0.387939 8.28632 0.590703 8.15167 0.904676L6.32558 5.1781L1.7068 5.59742C1.36744 5.6288 1.08081 5.85817 0.975463 6.18216C0.870114 6.50614 0.967406 6.86149 1.22413 7.0855L4.71482 10.1469L3.68549 14.681C3.61017 15.0144 3.73957 15.359 4.01619 15.559C4.16488 15.6664 4.33883 15.7211 4.51425 15.7211C4.6655 15.7211 4.81553 15.6803 4.95017 15.5998L8.93368 13.219L12.9157 15.5998C13.2071 15.7751 13.5744 15.7591 13.8504 15.559C14.1272 15.3584 14.2564 15.0137 14.1811 14.681L13.1518 10.1469L16.6425 7.08611C16.8992 6.86149 16.9972 6.50675 16.8919 6.18216Z"
                    fill="#FFB624"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2196_693">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.933594 0.0446777)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium ">4.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
