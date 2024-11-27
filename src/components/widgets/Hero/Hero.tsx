"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImage1 from "../../../../public/images/b1.png";
import BurgerImage2 from "../../../../public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      itemClass="item"
      arrows={false}
      showDots={true}
      responsive={responsive}
    >
      {/* 1st image div */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid  grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image alt="BurgerImage1" src={BurgerImage1}  className="hidden md:block" data-aos="flip-left"/>
          {/* Image Information */}
          <div  data-aos="zoom-in">
            <h1 className="text-[40px] capitalize font-semibold text-yellow-400">
            Welcome to our 
            </h1>
            <h1 className="leading-[5rem] text-[90px] uppercase text-white font-bold">
              Best <br /> Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
              Welcome to our Burger Shop, where every bite tells a story of
              juicy, handcrafted burgers, fresh ingredients, and bold flavors.
              we are here to satisfy your cravings. Order now and taste the love
              we put into every meal!
            </p>
            <button
              className="px-4 mt-[2rem] py-1  sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-green-400 transition-all duration-300 
          hover:bg-green-700 flex items-center rounded-md gap-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <p className="font-bold">Order Now</p>
            </button>
          </div>
        </div>
      </div>
      {/* 2nd image Div */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid  grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image alt="BurgerImage1" src={BurgerImage2} className="hidden md:block" data-aos="flip-left"/>
          {/* Image Information */}
          <div  data-aos="zoom-in">
            <h1 className="text-[40px] font-semibold text-yellow-400">
            Stacked With Love
            </h1>
            <h1 className="leading-[5rem] text-[90px] uppercase text-white font-bold">
            Big Bite <br />  Burgers Here
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
            At FlavorStack Burgers, every layer tells a story—soft buns, fresh toppings, and patties grilled to perfection. We’re not just about burgers; we are about creating moments filled with taste, joy, and satisfaction.
            </p>
            <button
              className="px-4 mt-[2rem] py-1  sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-400 transition-all duration-300 
          hover:bg-green-700 flex items-center rounded-md gap-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <p className="font-bold">Order Now</p>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
