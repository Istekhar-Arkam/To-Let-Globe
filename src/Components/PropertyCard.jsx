import React, { useState } from "react";

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="my-5">
        <div className=" rounded overflow-hidden shadow-lg cursor-pointer sm:w-[430px] sm:h-[450px]">
          <img
            className="w-full h-56 object-cover"
            src={property.image}
            alt="House"
          />
          <div className="px-4 py-4">
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
            <div className="bg-white w-full rounded-lg p-6 overflow-y-auto m-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black">
                  {property.title}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-red-500 text-xl font-bold"
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
            <div className="bg-white w-full rounded-lg p-6 m-4 ">
              <p className="mb-2">
                <strong className="text-black">Rating:</strong> ⭐{" "}
                {property.rating}
              </p>
            </div>
            <div className="bg-white w-full rounded-lg p-6 m-4 ">
              <div className="mb-2">
                <strong>Features:</strong>
                <ul className="list-disc ml-6 text-gray-700">
                  {property.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white w-full rounded-lg p-6 m-4 ">
              <div className="mb-2">
                <strong>Amenities:</strong>
                <ul className="list-disc ml-6 text-gray-700">
                  {property.amenities.map((amenity, i) => (
                    <li key={i}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white w-full rounded-lg p-6 m-4 ">
              <div className="mb-2">
                <strong>Reviews:</strong>
                <ul className="ml-6 text-gray-700">
                  {property.reviews.map((review, i) => (
                    <li key={i} className="mb-1">
                      <strong>{review.name}:</strong> "{review.text}"
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white w-full rounded-lg p-6 m-4 ">
              <p className="text-black">
                <strong>Location:</strong> {property.location}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyCard;
