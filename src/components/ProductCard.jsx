import React from "react";
const ProductCard = ({ title, imageUrl, link }) => {
  return (
    <div className="max-w-[280px] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>

        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover rounded-lg py-4"
        />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Product
        </a>

      </div>

    </div>
  );
};

export default ProductCard;
