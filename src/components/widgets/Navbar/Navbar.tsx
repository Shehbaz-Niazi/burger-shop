import Link from "next/link";
import React from "react";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto  flex h-[100%] items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500 " />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">
            BurgerBIP.
          </h1>
        </div>

        {/* Navbar Links */}
        <ul className="hidden lg:flex items-center gap-x-10">
          <li className="text-[20px] font-medium hover:text-red-500">
            <Link href={""}>Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-500">
            <Link href={""}>About</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-500">
            <Link href={""}>Blog</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-500">
            <Link href={""}>Shop</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-500">
            <Link href={""}>Menu</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center sm:gap-x-4 gap-x-2">
          {/* 1 */}
          <button
            className="px-3 py-1  sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950  transition-all duration-300 
          hover:bg-red-500 flex items-center rounded-md gap-x-2 text-white"
          >
            <span>
              <BiCycling className="w-[1rem] h-[1rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
            <p className="font-bold">Order Now</p>
          </button>
          {/* 2 */}
          <button
            className="sm:px-6 sm:py-3 px-2 py-[0.5rem] hover:bg-green-600 transition-all duration-300 bg-orange-600 flex items-center  
          rounded-md text-white"
          >
            <BiShoppingBag className="w-[1rem] h-[1rem] sm:w-[1.7rem] sm:h-[1.7rem] " />
          </button>
          {/* 3 Which is Hamburger */}
          <button>
            <HiBars3BottomRight
              onClick={openNav}
              className="lg:hidden w-[2rem] h-[2rem] text-black"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
