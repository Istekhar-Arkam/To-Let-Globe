import React, { useState } from "react";

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            className="w-full h-56 object-cover"
            src={property.image}
            alt="House"
          />
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              {property.title}
            </div>
            <p className="text-gray-700 text-base">
              Rating: ⭐ {property.rating}
            </p>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white max-w-3xl w-full rounded-lg p-5 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{property.title}</h2>
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

              <p className="mb-2">
                <strong>Rating:</strong> ⭐ {property.rating}
              </p>

              <div className="mb-2">
                <strong>Features:</strong>
                <ul className="list-disc ml-6 text-gray-700">
                  {property.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <strong>Amenities:</strong>
                <ul className="list-disc ml-6 text-gray-700">
                  {property.amenities.map((amenity, i) => (
                    <li key={i}>{amenity}</li>
                  ))}
                </ul>
              </div>

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
              <p>
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
