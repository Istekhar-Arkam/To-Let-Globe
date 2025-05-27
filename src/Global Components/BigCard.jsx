import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
const BigCard = ({ image, paragraph, heading, paragraph2, paragraph3 }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] px-3 my-4 border-b-7 border-b-[#232323] rounded-bl-md rounded-br-md rounded-2xl w-[300px] h-[420px] sm:w-[350px] ">
        <img src={image} alt="" className="w-full" />
        <p className="capitalize py-3 text-sm">{paragraph}</p>
        <h1 className="text-xl capitalize font-bold text-[#3CBDB1]">
          {heading}
        </h1>
        <p className="text-sm capitalize pt-2 pb-8">{paragraph2}</p>
        {/* <p className='capitalize text-[#3CBDB1] relative'>{paragraph3} <span className='inline-block absolute top-1 ml-2 mt-0.5'><FaLongArrowAltRight /></span></p> */}
      </div>
    </div>
  );
};

export default BigCard;
