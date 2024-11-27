import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/f1.jpg";
import img2 from "../../../../public/images/f2.jpg";
import img3 from "../../../../public/images/f3.jpg";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      {/* heading */}
      <h1 className="heading">
        burgers made with <br /> Love and <span></span>
        <span className="  text-red-600">Care</span>
      </h1>

      {/* cards */}
      <div>
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {/* 1st card */}
          <div data-aos="fade-right">
            <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
              <Image src={img1} alt="img1" className="rounded-md" />
              <h1 className="mt-6 text-center text-[24px] text-black font-semibold">
                Our Burgers
              </h1>
              <p className="mt-1 text-black text-opacity-60 text-center">
                At FlavorStack Burgers, we believe that a burger should be more
                than just a meal—it should be an experience. Our burgers are
                crafted with premium, fresh ingredients, each stacked to
                perfection.
              </p>
            </div>
          </div>
          {/* 2nd card */}
          <div data-aos="fade-up">
            <div className="p-6 lg:translate-y-[3rem] hover:bg-white rounded-lg transition-all duration-200">
              <Image src={img2} alt="img1" className="rounded-md" />
              <h1 className="mt-6 text-center text-[24px] text-black font-semibold">
                Your Opinions
              </h1>
              <p className="mt-1 text-black text-opacity-60 text-center">
                If your burgers feature a special ingredient, technique, or a
                signature sauce, mention that to set your brand apart. For
                example, Our signature smoky BBQ sauce adds an unforgettable
                kick to every burger.
              </p>
            </div>
          </div>
          {/* 3nd card */}
          <div data-aos="fade-left">
            <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
              <Image src={img3} alt="img1" className="rounded-md" />
              <h1 className="mt-6 text-center text-[24px] text-black font-semibold">
                Chicken Burger
              </h1>
              <p className="mt-1 text-black text-opacity-60 text-center">
                Our Chicken Burger is the ultimate choice for those craving a
                tender, juicy bite. Made with perfectly seasoned, grilled
                chicken breast, topped with fresh, crunchy veggies, and a dollop
                of our signature sauce,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
