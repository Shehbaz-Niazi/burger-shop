import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  name: string;
  image: StaticImageData;
  description: string;
  position: string;
}

const TeamCard = ({ name, description, image, position }: Props) => {
  return (
    <div>
      {/* image */}
      <Image
        src={image}
        alt="Chefs Images"
        width={400}
        height={400}
        className="rounded-md mx-auto"
      />
      {/* name */}
      <h1 className="text-[40px] font-bold text-gray-800 mt-[1.5rem] items-center text-center">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] text-white px-4 py-1 bg-green-500 w-fit font-medium mx-auto">
        {position}
      </p>
      {/* description */}
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">{description}</p>
    </div>
  );
};

export default TeamCard;
