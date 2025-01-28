import React from "react";
import ProductCard from "./ProductCard";

const products = [
      {
            id: 1,
            title: "Up to 75% off | Electronics & accessories",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg",
            link: "#",
      },
      {
            id: 2,
            title: "Up to 70% off | International brands",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/des/1x._SY304_CB552717445_.jpg",
            link: "#",
      },
      {
            id: 3,
            title: "Starting ₹349 | Bestselling headphones",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/headphones/DEC_audio/PC_CC_379x304_llll._SY304_CB552721245_.jpg",
            link: "#",
      },

      {
            id: 4,
            title: "Up to 75% off | Electronics & accessories",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg",
            link: "#",
      },
      {
            id: 5,
            title: "Up to 70% off | International brands",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/des/1x._SY304_CB552717445_.jpg",
            link: "#",
      },
      {
            id: 6,
            title: "Starting ₹349 | Bestselling headphones",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/headphones/DEC_audio/PC_CC_379x304_llll._SY304_CB552721245_.jpg",
            link: "#",
      },
      {
            id: 7,
            title: "Up to 70% off | International brands",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/des/1x._SY304_CB552717445_.jpg",
            link: "#",
      },
      {
            id: 8,
            title: "Starting ₹349 | Bestselling headphones",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/headphones/DEC_audio/PC_CC_379x304_llll._SY304_CB552721245_.jpg",
            link: "",
      },


];

const CardSelection = () => {
      return (
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 p-6">
                  {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.imageUrl}
                        link={product.link}
                  />
                  ))}
            </div>
      );
};

export default CardSelection;





