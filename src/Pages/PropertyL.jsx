import PropertyCard from "../Components/PropertyCard";
import one from "../assets/Image/Property/one.png";
import two from "../assets/Image/Property/two.jpg";
import three from "../assets/Image/Property/three.png";
import four from "../assets/Image/Property/four.png";
import five from "../assets/Image/Property/five.png";
import six from "../assets/Image/Property/six.png";
import seven from "../assets/Image/Property/seven.jpg";
import eight from "../assets/Image/Property/eight.png";
import nine from "../assets/Image/Property/nine.jpg";
import ten from "../assets/Image/Property/ten.jpg";
import eleven from "../assets/Image/Property/eleven.jpg";
import twelve from "../assets/Image/Property/twelve.jpg";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { MdSquareFoot } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Pagination from "../Global Components/Pagination.jsx";
import { useState } from "react";
const PropertyL = () => {
   
  const property = [
    {
      image: one,
      title: "2 BHK flat on Rent",
      rating: 4.5,
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features2: ["RS 20,000"],
      owner: <CgProfile />,
      ownerName: "istekhar arkam",
      features: [
        "3 BHK ",
        "2 Bathrooms",
        "2000 sqft",
        "Appliances - Washing Machine",
      ],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: two,
      title: "4 BHK Villa in Mumbai",
      rating: 4.5,
      features2: ["RS 100,000"],
      owner: <CgProfile />,
      ownerName: "virat kohli",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: three,
      title: "5 BHK Luxury Villa",
      rating: 4.5,
      features2: ["RS 150,000"],
      owner: <CgProfile />,
      ownerName: "shahrukh khan",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: four,
      title: "2 BHK flat in Mumbai On Rent",
      rating: 4.5,
      features2: ["Rs 125,000"],
      owner: <CgProfile />,
      ownerName: "salman khan",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: five,
      title: "2 Bhk House On Rent",
      rating: 4.5,
      features2: ["RS 200000"],
      owner: <CgProfile />,
      ownerName: "khabib nurmagomedov",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: six,
      title: "6 BHK Villa in Mumbai",
      rating: 4.5,
      features2: ["RS 300000"],
      owner: <CgProfile />,
      ownerName: "ab de villers",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: seven,
      title: "4 BHK Villa in Mumbai",
      rating: 4.5,
      features2: [" RS 600000"],
      owner: <CgProfile />,
      ownerName: "dale steyn",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: eight,
      title: "3 BHK House in Mumbai",
      rating: 4.5,
      features2: ["RS 500000"],
      owner: <CgProfile />,
      ownerName: "shoib akhtar",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: nine,
      title: "4 BHK House in Mumbai",
      rating: 4.5,
      features2: ["RS 500000"],
      owner: <CgProfile />,
      ownerName: "babar azam",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: ten,
      title: "4 BHK Modern Villa in Mumbai",
      rating: 4.5,
      features2: ["RS 500000"],
      owner: <CgProfile />,
      ownerName: "ms dhoni",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: eleven,
      title: "3 BHK House in Mumbai",
      rating: 4.5,
      features2: ["RS 500000"],
      owner: <CgProfile />,
      ownerName: "cristiano ronaldo",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: twelve,
      title: "5 BHK Luxury Villa in Mumbai",
      rating: 4.5,
      features2: ["RS 1000000"],
      owner: <CgProfile />,
      ownerName: "zalatan ibrahimovic",
      icon: [<LiaBedSolid />, <MdOutlineBathroom />, <MdSquareFoot />],
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
     
  ];
 
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-wrap justify-center items-start gap-6">
      {property.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    
       <Pagination/>
    </div>
  );
};

export default PropertyL;
