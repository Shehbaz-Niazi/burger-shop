import React from "react";
import { GrRestaurant } from "react-icons/gr";

const ReservstionForm = () => {
  return (
    <div className="bg-green-700 p-6 pr-4 rounded-lg" data-aos="zoom-in-left">
      <GrRestaurant className="w-20 h-20 text-white mt-8 mx-auto" />
      <h1 className="text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5ewm] text-white ">
        Reservation
      </h1>
      <p className="uppercase text-[20px] md:text-[25px] text-white font-semibold text-center ">
        Book Your table
      </p>
      {/* inputs */}

      <div className="mt-[2rem] " >
        <div  className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 items-center w-[80%] mx-auto justify-between gap-x-4">
          <select
            className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100"
            name="people"
            id="people"
          >
            <option value="1" className="text-black">
              1 People
            </option>
            <option value="2" className="text-black">
              2 People
            </option>
            <option value="3" className="text-black">
              3 People
            </option>
            <option value="4" className="text-black">
              More Than 3
            </option>
          </select>
          <input
            type="date"
            className="px-1 py-2.5 bg-transparent w-[80%]  rounded-lg outline-none font-bold text-[17px] 
            text-white border-[2.2px] border-gray-100]"
          />
        </div>
        <input
          type="time"
          className="px-10 py-2.5 bg-transparent block w-[80%] mx-auto mt-[1rem] rounded-lg outline-none 
          font-bold text-[17px] text-white border-[2.2px] border-gray-100"
        />
        {/* button */}
        <div className="mt-8 w-[80%] text-center mx-auto">
            <button className="px-8 py-3 rounded-lg mb-12 text-[16px] w-full bg-blue-950 transition-all duration-300 hover:bg-red-600 text-white">Book Now</button>

        </div>
      </div>
    </div>
  );
};

export default ReservstionForm;
