import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex  justify-center  items-start w-full gap-10 max-lg:flex-col max-container">
      <div className="flex flex-1 flex-col mt-8">
        <h1 className="font-palanquin text-4xl capitalize  font-bold">
          <span className="relative pr-10 z-10 xl:bg-white xl:whitespace-nowrap">
            We provide you
          </span>
          <br />
          <span className="text-coral-red inline-block  mr-5 mt-2">Super</span>
          <span className="text-coral-red inline-block  mr-5 mt-2">
            Quality
          </span>
          Shoes
        </h1>
        <p className="font-montserrat text-lg mt-8 mb-10 text-slate-gray sm:max-w-sm">
          Today, Nike continues to push boundaries with advancements like React
          foam, Flyknit technology for lightweight uppers. These innovations
          enhance performance and elevate the wearer's experience.
        </p>
        <div className="mt-8">
          <Button label="View Details"  iconUrl={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} width={570} height={520}/> 
      </div>
    </section>
  );
};

export default SuperQuality;
