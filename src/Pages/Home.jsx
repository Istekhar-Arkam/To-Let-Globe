import React from "react";
import BigCard from "../Global Components/BigCard";

// const blogCard = [
//   {
//     heading: "Product Development",
//     image: our1,
//     paragraph:
//       "Transform your innovative ideas into fully realized software solutions. Our end-to-end product development approach combines technical excellence with creative problem-solving, delivering custom solutions precisely tailored to your unique business requirements",
//     route: "/services/product-development",
//   }];

const Home = () => {
  return <>
  <center className="bg-[#000000] capitalize py-10">
    <h1 className="text-xl">our insights and stories</h1>
    <p className="text-[#3CBDB1] text-sm">Lorem ipsum dolor sit amet consectetur.</p>
    
  </center>
  <BigCard/>
  </>;
};

export default Home;
