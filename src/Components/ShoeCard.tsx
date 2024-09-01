import React from "react";

interface shoeCardProps {
  imgURL: string;
  changeBigShoeImage: (imgURL: string) => void;
  BigShoeImage: string;
}
const ShoeCard: React.FC<shoeCardProps> = ({
  imgURL,
  changeBigShoeImage,
  BigShoeImage,
}) => {
  const handleclick = () => {
    if (BigShoeImage !== imgURL) {
      changeBigShoeImage(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        BigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      }cursorr-pointer max-sm:flex-1`}
      onClick={handleclick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img src={imgURL} alt="Shoe" />
      </div>
    </div>
  );
};

export default ShoeCard;
