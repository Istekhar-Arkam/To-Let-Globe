import React from "react";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const CompareC = () => {
  return (
    <div className="">
      <div className="flex w-md justify-between items-center p-3 m-3 rounded-lg ">
        <h1 className="text-black capitalize text-xl">request a visit</h1>
        <div className="flex gap-3">
          <p className=" border text-xl text-[#5AA7A0]">
            <CiShare2 />
          </p>
          <p className="text-red-500 border text-xl">
            <CiHeart />
          </p>
        </div>
      </div>
      <div className="flex p-7 gap-4">
        <div>
          <CgProfile className="text-red-400 text-4xl ml-2" />
        </div>
        <div className=" text-black">
          <p className="text-black text-xl">Istekhar Arkam</p>
          <p>9876543210</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[rgb(90,167,160)] p-3 w-md rounded-xl capitalize text-xl">
          {" "}
          add to visit
        </button>
      </div>
    </div>
  );
};

export default CompareC;
