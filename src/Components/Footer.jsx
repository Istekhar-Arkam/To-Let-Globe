import React from "react";
import Logo from "../assets/Image/Navbar/Logo.svg";
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <div className="mx-10  sm:flex sm:flex-wrap sm:space-x-10 sm:justify-center xl:space-x-10 lg:space-x-0 lg:justify-start xl:justify-center">
        <div className="flex  justify-center py-6 sm:hidden">
          <img src={Logo} className="h-12 " alt="Logo" />
        </div>

        <div className="sm:flex flex-col item-center mt-10 hidden w-68 ">
          <h1 className="text-xl text-[#3CBDB1] font-bold uppercase">
            reach us
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-lg">
              <IoCall />
            </span>
            <p className=" py-2">+91-8707727347</p>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <span className="text-lg">
              <IoMail />
            </span>
            <p className=" ">hello@toletglobe.in</p>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <span className="pb-6 text-lg">
              <FaLocationDot />
            </span>{" "}
            <p className="capitalize py-2">
              D1/122 Vipulkhand, Gomtinagar Lucknow,Uttar Pradesh
            </p>
          </div>
        </div>
        <center className="capitalize  text-base sm:hidden">
          One-stop solution for all your brokerage-free rental needs
        </center>
        <div className="flex m-4 justify-between sm:hidden">
          <p className="text-2xl">
            <FaLinkedin />
          </p>
          <p className="text-2xl">
            <FaFacebookSquare />
          </p>
          <p className="text-2xl">
            <FaTwitter />
          </p>
          <p className="text-2xl">
            <RiInstagramFill />
          </p>
        </div>

        <div className="flex flex-col item-center mt-10 sm:w-68 items-center sm:items-start xl:ml-8 lg:w-62 lg:ml-10 ">
          <h1 className="text-xl text-[#3CBDB1] font-bold uppercase">
            quick links
          </h1>
          <p className="capitalize py-2">home</p>
          <p className="capitalize ">blog</p>
          <p className="capitalize py-2">property</p>
        </div>
        <div className=" flex flex-col item-center mt-10 sm:w-68 items-center sm:items-start lg:w-62 ">
          <h1 className="text-xl text-[#3CBDB1] font-bold uppercase">
            service
          </h1>
          <p className="capitalize py-2">paying guest</p>
          <p className="capitalize ">flat and house</p>
          <p className="capitalize py-2">shops and godown</p>
        </div>
        <div className="capitalize hidden sm:block sm:w-68 sm:mt-10 ">
          <img src={Logo} className="h-12 mb-4" alt="Logo" />
          <p>one-stop solution for brokerage-free rental needs</p>
        </div>
        <center className=" flex flex-col item-center mt-10 sm:hidden">
          <h1 className="text-xl text-[#3CBDB1] font-bold uppercase">
            reach us
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl">
              <IoCall />
            </span>
            <p className=" py-2">+91-8707727347</p>
          </div>
          <div className="flex items-center gap-4">
            {" "}
            <span className="text-2xl ">
              <IoMail />
            </span>
            <p className=" ">hello@toletglobe.in</p>
          </div>
          <div className="flex items-center  ">
            {" "}
            <span className="pb-12 text-2xl">
              <FaLocationDot />
            </span>{" "}
            <p className="capitalize py-2">
              D1/122 Vipulkhand, Gomtinagar Lucknow,Uttar Pradesh
            </p>
          </div>
        </center>
      </div>
      <div className="bg-[#232323] ">
        <p className="px-6 py-8 text-gray-400">
          © 2023 To-Let Globe -- Lucknow. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
