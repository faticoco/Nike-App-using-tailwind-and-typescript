import React from "react";
import PopularProdcuctCard from "../Components/PopularProdcuctCard";
import { products } from "../constants";

const PopularProdcucts = () => {
  return (
    <section className="max-sm:mt-12 max-container">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> products{" "}
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          {" "}
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProdcuctCard key={product.name} imgurl={product.imgURL} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  );
};

export default PopularProdcucts;
