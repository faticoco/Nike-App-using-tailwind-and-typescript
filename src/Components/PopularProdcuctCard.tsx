import React from "react";
import { star } from "../assets/icons";
interface PopularProductsProps {
  imgurl: string;
  name: string;
  price: string;
}
const PopularProdcuctCard: React.FC<PopularProductsProps> = ({
  imgurl,
  name,
  price,
}) => {
  return (
    <div>
      <img src={imgurl} className="h-[280px] w-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">(4.5)</p>
      </div>
      <p className="mt-2 font-palanquin font-semibold text-2xl  leading-normal">{name}</p>
      <p className="mt-2 font-palanquin font-semibold text-2lx  leading-normal text-coral-red ">{price}</p>
    </div>
  );
};

export default PopularProdcuctCard;
