import React from "react";

interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  imgURL,
  label,
  subtext,
}) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-8 py-16">
      <div className="w-11 h-11 flex justify-center  items-center bg-coral-red rounded-full">
        <img src={imgURL} width={24} height={24} />
      </div>
      <h3 className="font-palanquin text-2xl font-bold leading-normal mt-5 ">
        {" "}
        {label}
      </h3>
      <p className="font-montserrat leading-normal break-words mt-3 text-lg text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
