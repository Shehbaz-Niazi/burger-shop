import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservstionForm from "./ReservstionForm";
// import bgBlack from "../../../../public/images/bg-black.jpg"

const Reservstion = () => {
  return (
    <div className="relative pt-[5rem] mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/images/bg-black.jpg')] bg-center bg-cover">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000a6] w-full h-full"></div>
      <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12">
        {/* text content */}
        <div data-aos="zoom-in-up">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-[3rem] md:leading-[4rem] text-white">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-[17px] text-white mt-[1rem] text-opacity-50 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est consectetur necessitatibus porro. Aliquam, placeat! Corrupti
            incidunt ab dignissimos rerum consequatur quidem odio, sit
            molestias.
          </p>
          {/* Pnone Number */}
          <div className="flex mt-[2rem] items-center gap-x-4">
            <div className="w-12 h-12 flex justify-center items-center bg-red-600 flex-col rounded-full">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-[25px] text-white">
                Quick Order 24/7
              </h1>
              <h1 className="font-bold text-[30px] text-yellow-400">
                Quick Order 24/7
              </h1>
            </div>
          </div>
        </div>
        {/* reservation form */}
        <ReservstionForm/>
        <div></div>
      </div>
    </div>
  );
};

export default Reservstion;
