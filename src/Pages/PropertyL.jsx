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

const PropertyL = () => {
  const property = [
    {
      image: one,
      title: "Villa in Mumbai",
      rating: 4.5,
      features: ["3 BHK", "2 Bathrooms", "2000 sqft"],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      reviews: [
        { name: "Amit", text: "Beautiful place, had a great experience!" },
        { name: "Priya", text: "Very clean and peaceful." },
      ],
      location: "Andheri West, Mumbai, Maharashtra",
    },
    {
      image: two,
      title: "Modern Villa in Delhi",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Delhi",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
      title: "Modern Villa in Mumbai",
      rating: 4.5,
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
    </div>
  );
};

export default PropertyL;
