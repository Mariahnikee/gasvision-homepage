import React from "react";

const products = [
  {
    id: 1,
    name: "Gas Hose for Regulators - 3 meters",
    price: "NGN 5,000",
    image: "path/to/hose-image.png",
  },
  {
    id: 2,
    name: "Gas Burner Stainless Cooking",
    price: "NGN 10,000",
    image: "path/to/burner-image.png",
  },
  {
    id: 3,
    name: "Gas Stove with 2 Burners",
    price: "NGN 7,000",
    image: "path/to/stove-image.png",
  },
  {
    id: 4,
    name: "Gas Cylinder With Burner - 3kg",
    price: "NGN 9,000",
    image: "path/to/cylinder-image.png",
  },
  {
    id: 5,
    name: "Stainless Steel Gas Burner Without Stand",
    price: "NGN 12,000",
    image: "path/to/steel-burner-image.png",
  },
  {
    id: 6,
    name: "Refill Gas",
    price: "NGN 800",
    image: "path/to/refill-image.png",
  },
];

function Product() {
  return (
    <div className=" px-14 text-center">
      <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl mb-8 text-start">
        Everything You Need for Safe and Simple Gas Management
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-3xl text-start">
        From advanced burners to dependable gas cylinders, we offer a complete
        range of products to ensure your gas usage is safe, efficient, and easy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-48 bg-white p-2 m-0 rounded-lg text-center shadow-lg mx-auto"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-lg mb-3">{product.name}</h3>
            <p className="text-green-600">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="py-8 text-end">
        <button className="mt-6 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 ">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Product;
