import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="pt-[5rem] pb-[5rem]"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
    >
      <div className="text-center">
        <h1 className="font-bold text-black text-[28px] sm:text-[38px] md:text-[50px] uppercase">
          join for hot offers
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          beatae at assumenda, perspiciatis ab accusamus explicabo odit eius
          deserunt voluptatibus labore ut omnis doloremque veniam distinctio
          unde sunt provident voluptas.
        </p>
        <div className="flex items-center justify-center mt-[3rem] gap-x-2">
          {/* input */}
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-5 py-4 w-[40%] bg-gray-400 outline-none rounded-lg placeholder:text-black"
          />
          {/* button */}
          <button className="px-8 py-4 bg-green-600 hover:bg-green-900 font-bold text-white transition-all duration-300 rounded-md">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
