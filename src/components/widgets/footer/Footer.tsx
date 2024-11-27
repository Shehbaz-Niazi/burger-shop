import Link from "next/link";
import React from "react";
import { FaBurger } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-[5rem]" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <div>
        <footer className="footer bg-gray-900 t  pl-10 pt-[8rem]  pb-[8rem]">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500 " />
              <h1 className="text-[20px] sm:text-[30px] text-white font-semibold">
                BurgerBIP.
              </h1>
            </div>
            <p className="mt-3 text-white">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nam eius
            </p>
            <p className="mt-6 text-white text-[17px]">
              shehbazniazi.pr@gmail.com
            </p>
            <p className="text-[20px] font-bold text-red-300">+92 3473184155</p>
          </div>
          <nav>
            <h1 className=" text-[20px] mb-[1rem] text-white">Services</h1>
            <Link href={"/"} className="link link-hover text-white opacity-65 ">
              Branding
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px] "
            >
              Design
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px] "
            >
              Marketing
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px] "
            >
              Advertisement
            </Link>
          </nav>
          <nav>
            <h6 className="text-[20px] mb-[1rem] text-white">Company</h6>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65  text-[18px]"
            >
              About us
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px]"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px]"
            >
              Jobs
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px]"
            >
              Press kit
            </Link>
          </nav>
          <nav>
            <h6 className="text-[20px] mb-[1rem] text-white">Legal</h6>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65  text-[18px]"
            >
              Terms of use
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px]"
            >
              Privacy policy
            </Link>
            <Link
              href={"/"}
              className="link link-hover text-white opacity-65 mt-2 text-[18px]"
            >
              Cookie policy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
