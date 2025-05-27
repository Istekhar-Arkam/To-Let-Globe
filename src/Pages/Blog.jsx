import React from "react";
import BigCard from "../Global Components/BigCard";
import one from "../assets/Image/Blog/one.svg";
import two from "../assets/Image/Blog/two.svg";
import three from "../assets/Image/Blog/three.svg";
import Pagination from "../Global Components/Pagination";

const blogCard = [
  {
    image: one,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: two,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: three,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: two,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: three,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: one,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: one,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: two,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
  {
    image: three,
    paragraph: "2 nov, 2023 | life at to-let",
    heading: "collaboration and partnership update!",
    paragraph2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est labore perspiciatis ad eaque in vel laudantium quibusdam assumenda, nam commodi sapiente.",
  },
];
const Blog = () => {
  return (
    <>
      <center className="bg-[#000000] capitalize ">
        <h1 className="text-xl mt-8">our insights and stories</h1>
        <p className="text-[#3CBDB1] text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <label className="relative inline-flex items-center cursor-pointer my-6">
          <input className="sr-only peer" value="" type="checkbox" />
          <div className="peer rounded-xl outline-none duration-100 after:duration-500 w-48 h-12 bg-[#232323]  after:content-['Trending'] after:absolute after:outline-none after:rounded-lg after:h-10 after:w-20 after:bg-[#000000] after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-[#3CBDB1]  peer-checked:after:translate-x-26 peer-checked:after:content-['Latest'] peer-checked:after:border-white"></div>
        </label>
      </center>
      <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-x-4 lg:gap-x-10 md:gap-x-8 xl:gap-x-14">
        {blogCard.map((item, index) => (
          <BigCard
            key={index}
            image={item.image}
            paragraph={item.paragraph}
            heading={item.heading}
            paragraph2={item.paragraph2}
          />
        ))}
      </div>
      <center>
        <Pagination />
      </center>
    </>
  );
};

export default Blog;
