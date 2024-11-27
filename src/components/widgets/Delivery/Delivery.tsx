import Image from "next/image";
import React from "react";
import DeleveryImage from "../../../../public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";

const Delivery = () => {
  return (
    <div className="mt-[8rem] mb-[3rem]">
      <div className="w-[80%] transition-all duration-200 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-easing="ease-in-sine"
        >
          <Image src={DeleveryImage} alt="DeleveryImage" />
        </div>

        {/* Heading Div */}
        <div className="" data-aos="zoom-in">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase leading-[3rem] md:leading-[4rem] font-bold">
            Your <span className="text-red-600">Favourite burger</span> on the
            way
          </h1>
          {/* Paragraph  */}
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum amet
            odit atque facilis maxime consequatur doloribus asperiores accusamus
            voluptatum omnis, quos soluta cumque ut earum rem eaque, dignissimos
            nisi hic.
          </p>
          {/*Bullet Pionts  */}

          <div className="flex items-center gap-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-8 h-8 text-red-600" />
            <h1 className="text-[18px] font-medium text-black">
              Delivery In 30 Minutes
            </h1>
          </div>
          <div className="flex items-center gap-x-3 mt-[1rem]">
            <IoFastFood className="w-8 h-8 text-red-600" />
            <h1 className="text-[18px] font-medium text-black">
              Free Shipping from $75
            </h1>
          </div>
          <div className="flex items-center gap-x-3 mt-[1rem]">
            <BsDoorOpen className="w-8 h-8 text-red-600" />
            <h1 className="text-[18px] font-medium text-black">
              Delivery on Yoor Door Step
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
