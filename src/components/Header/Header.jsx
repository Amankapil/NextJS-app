import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "./logo.svg";
import "./head.css";

const Header = () => {
  return (
    <>
      <header className="bg-[#733e3d] bg-opacity-50 backdrop-blur-[110.60px] p-4 w-[90%] mx-auto sticky top-5 h[100px] rounded-full z-[999999999990]">
        <div className="header flex justify-between gap-20 max-w-7xl mx-auto items-center">
          <div className="logo">
            <Link href="/">
              <div className="logobg"></div>
              {/* <Image src={logo} width={80} height={50} alt="Logo" /> */}
            </Link>
          </div>
          <nav className="flex gap-6 text-base font-medium text-white items-center ">
            <Link className="hovertext-[#733e3d]" href="/aboutus">
              About Us
            </Link>
            <Link className="hovertext-[#733e3d]" href="/services">
              Service
            </Link>
            <Link className="hovertext-[#733e3d]" href="/career">
              Career
            </Link>
            <Link className="hovertext-[#733e3d]" href="/training">
              Training
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 hover:bg-[#dc4c51] bg-[#733e3d] text-white rounded-3xl  hover:textblack"
            >
              Lets Talk
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
