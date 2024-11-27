import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

interface Props {
  title: string;
  image: StaticImageData | string;
  review: string;
  price: string;
}

const PopularBurgerCardCom = ({ title, image, price, review }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
      {/* image */}

      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt="popular burger image"
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* title */}
      <div>
        <h1 className="mt-[1.3rem] font-semibold text-[22px] text-black">
          {title}
        </h1>
      </div>
      {/* stars */}
      <div className="flex items-center mt-[0.5rem] gap-x-3">
        <div className="flex items-center">
          <FaStar className="w-4 h-4 text-yellow-500" />
          <FaStar className="w-4 h-4 text-yellow-500" />
          <FaStar className="w-4 h-4 text-yellow-500" />
          <FaStar className="w-4 h-4 text-yellow-500" />
          <FaStar className="w-4 h-4 text-yellow-500" />
        </div>
        <div className="text-black opacity-80 ">({review})</div>
      </div>
      {/* description */}
      <p className="mt-[0.5rem] text-black text-opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {/* buuton and price */}
      <div className="flex mt-[1.4rem] items-center justify-between">
        <h1 className="text-[25px] font-bold text-red-500 ">{price}</h1>
        <button className="px-4 py-2 hover:bg-green-700 transition-all duration-300  bg-orange-600 items-center flex  rounded-md text-white">
          <BiShoppingBag className="w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};

export default PopularBurgerCardCom;
