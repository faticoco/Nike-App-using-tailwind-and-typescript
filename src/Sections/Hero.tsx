import React, { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigshoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center  items-start w-full max-xl:padding-x pt:28 mt-5 ">
        <p className="text-xl font-montserrat text-coral-red mb-10 mt-10">
          Our Summer collection
        </p>
        <h1 className="font-palanquin text-8xl max-sm:text-[72px]   font-bold">
          <span className="relative pr-10 z-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block  mr-5 mt-2">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-lg mt-8 mb-10 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals and wear quality , comfort and style
          for your Active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20 max-xl:px-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="font-bold text-4xl font-palanquin ">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center xl:min-h-screen">
        <img
          src={bigshoeImg}
          alt="big shoe"
          className="width={500} height={600} z-10  relative  object-contain"
        />
        <div className="flex sm:gap-6  gap-4 absolute max-sm:px-6  -bottom-[5%]  sm:left-[10%]">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              {" "} 
              <ShoeCard
                imgURL={shoe.bigShoe}
                changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}}
                BigShoeImage={bigshoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
