import React from "react";
import cardone from '../images/resources-card1.png';
import cardtwo from '../images/resources-card2.png';

const resources = [
  {
    id: 1,
    title: "Gas Management Tips",
    description:
      "Ordering gas is made easy with just a few taps. Schedule deliveries for convenience and manage your gas usage effortlessly.",
    image: cardone,
  },
  {
    id: 2,
    title: "Gas Management Tips",
    description:
      "Stay updated with the latest gas management trends, safety tips, and innovations to ensure your home is safe and efficient.",
    image: cardtwo,
  },
];

function Resources() {
  return (
    <div className="px-14 pt-6 mb-36 text-center bg-gray-100">
      <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl mb-8 text-start">
        Insights, Tips, and News
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-3xl text-start">
        Stay informed with the latest gas management trends, safety tips, and
        product updates.
      </p>

      <div className="flex justify-around flex-wrap gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="w-72 h-72 p-6 m-2 rounded-lg text-center shadow-lg flex flex-col justify-end"
            style={{
              backgroundImage: `url(${resource.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-opacity-80 p-3 rounded-lg">
              <h3 className="text-lg mb-3">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-8 text-end">
        <button className="mt-6 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          View More Resources
        </button>
      </div>
    </div>
  );
}

export default Resources;
