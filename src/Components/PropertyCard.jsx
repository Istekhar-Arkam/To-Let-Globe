import React, { useState } from "react";
import CompareC from "./CompareC";

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="my-5">
        <div className=" rounded-xl overflow-hidden shadow-lg cursor-pointer sm:w-[430px] sm:h-[450px]">
          <img
            className="w-full h-56 object-cover"
            src={property.image}
            alt="House"
          />

          <div className="px-3 py-4">
            <div className="font-bold text-2xl mb-2 text-black">
              {property.title}
            </div>
            <p className="text-black mt-3">{property.features2}</p>
            <p className="text-gray-700 text-base my-3">
              Rating: ⭐ {property.rating}
            </p>
            <p className="flex mr-2 text-black gap-x-3 text-2xl mb-4 ">
              {property.icon}
            </p>
            <div className="flex justify-between items-center border-t-3 border-gray-400">
              <div className="  flex gap-x-3">
                <p className="text-black  text-2xl my-3 ">{property.owner}</p>
                <p className="text-black my-3 capitalize">
                  {property.ownerName}
                </p>
              </div>
              <div>
                {" "}
                <button
                  className="bg-black w-30 capitalize h-9 rounded"
                  onClick={() => setShowModal(true)}
                >
                  show more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5 ">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black">
                  {property.title}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-red-500 text-3xl font-bold"
                >
                  &times;
                </button>
              </div>
              <img
                src={property.image}
                alt="Full View"
                className="w-full h-64 object-cover rounded mb-4"
              />
            </div>
            <div className="flex justify-between rounded-lg p-3 m-3 ">
              <div className="w-xl">
                <div className="rounded-lg p-5 overflow-y-auto m-3 max-w-xl">
                  <p className="">
                    <strong className="text-2xl"></strong> {property.location}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 overflow-y-auto m-3 ">
                  <div className="mb-2 text-black">
                    <strong className="text-xl">Features:</strong>
                    <ul className="my-4 text-gray-700 gap-3 flex flex-wrap">
                      {property.features.map((feature, i) => (
                        <li
                          key={i}
                          className="border-2 inline-block p-2 rounded-lg "
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white">
                <CompareC />
              </div>
            </div>
            <div className=" flex justify-between items-center p-4 m-4 rounded-lg text-xl font-semibold text-white mt-10 mb-3">
              <button className="capitalize">Feature</button>
              <button className="capitalize">about</button>
              <button className="capitalize">amenities</button>
              <button className="capitalize">reguation</button>
              <button className="capitalize">location</button>
              <button className="capitalize">reviews</button>
            </div>
            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5">
              <p className="mb-2 text-black">
                <strong className="text-xl">Rating:</strong> ⭐{" "}
                {property.rating}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5 ">
              <div className="mb-2 text-black">
                <strong className="text-xl">Features:</strong>
                <ul className="my-4 text-gray-700 gap-3 flex flex-wrap">
                  {property.features.map((feature, i) => (
                    <li
                      key={i}
                      className="border-2 inline-block p-2 rounded-lg"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5">
              <div className="mb-2 text-black">
                <strong className="text-xl">Amenities:</strong>
                <ul className="flex my-4 gap-3  text-gray-700 flex-wrap">
                  {property.amenities.map((amenity, i) => (
                    <li
                      key={i}
                      className="border-2 inline-block p-2 rounded-lg"
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5">
              <p className="text-black">
                <strong className="text-xl">Location:</strong>{" "}
                {property.location}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 overflow-y-auto m-5">
              <div className="mb-2 text-black">
                <strong className="text-xl">Reviews:</strong>
                <ul className=" text-gray-700 my-4">
                  {property.reviews.map((review, i) => (
                    <li
                      key={i}
                      className="text-xl mb-1 border-2 block max-w-4xl p-6 rounded-lg my-5"
                    >
                      <strong className="text-black">{review.name}:</strong>{" "}
                      {review.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyCard;
