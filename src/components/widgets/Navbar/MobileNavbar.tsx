import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
  closeNav:()=>void;
  showNav:boolean
}

const MobileNavbar = ({closeNav,showNav}:Props) => {
  const navStyle = showNav ? "translate-x-0 " : "translate-x-[-100%] "
  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      <ImCross onClick={closeNav} className="absolute cursor-pointer top-8 right-8 h-8 w-8 text-white" />
      {/* Nav Div */}
      <div className="bg-emerald-700 transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-full">

        {/* Nav Links */}
        <ul className="space-y-10">
          <li className="text-[25px] font-medium border-b border-white hover:text-yellow-500 text-white">
            <Link href={""}>Home</Link>
          </li>
          <li className="text-[25px] font-medium border-b border-white hover:text-yellow-500 text-white">
            <Link href={""}>About</Link>
          </li>
          <li className="text-[25px] font-medium border-b border-white hover:text-yellow-500 text-white">
            <Link href={""}>Blog</Link>
          </li>
          <li className="text-[25px] font-medium border-b border-white hover:text-yellow-500 text-white">
            <Link href={""}>Shop</Link>
          </li>
          <li className="text-[25px] font-medium border-b border-white hover:text-yellow-500 text-white">
            <Link href={""}>Menu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
