"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./logo.svg";
import "./head.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let [width, setWidth] = useState(0);


  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, 
  
  []
);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  let [active, setactive] = useState(false);
  const hamburger = () => {
    setactive(!active);
  };
  return (
    <>
      {width <= 900 ? (
        <>
          <header className="bg-[#062b43] bg-opacity-50 backdrop-blur-[110.60px] p-4 w-full mx-auto sticky top-5 h[100px] rounded-full z-[9990]">
            <div className="header flex justify-between gap-20 max-w-7xl mx-auto items-center">
              <div className="logo">
                <Link href="/">
                  <div className="logobg"></div>
                </Link>
              </div>
              <button onClick={hamburger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="42"
                  viewBox="0 0 65 42"
                  fill="none"
                >
                  <line
                    x1="13.4353"
                    y1="12.1875"
                    x2="51.5647"
                    y2="12.1875"
                    stroke="black"
                  />
                  <line
                    x1="13.4353"
                    y1="20.3594"
                    x2="51.5647"
                    y2="20.3594"
                    stroke="black"
                  />
                  <line
                    x1="13.4353"
                    y1="28.813"
                    x2="51.5647"
                    y2="28.813"
                    stroke="black"
                  />
                </svg>
              </button>
              <div
                className={`lists flex items-center justify-between flex-col ${
                  active ? "active " : ""
                }`}
              >
                <nav className="flex gap-6 text-base font-medium text-black items-center flex-col w-1/2 mt-20">
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]"
                    href="/aboutus"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]"
                    href="/services"
                  >
                    Service
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]"
                    href="/career"
                  >
                    Career
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]"
                    href="/training"
                  >
                    Training
                  </Link>
                  <Link
                    onClick={hamburger}
                    href="/contact"
                    className="px-4 py-2 hover:bg-[#dc4c51] bg-[#733e3d] text-white rounded-3xl  hover:textblack"
                  >
                    Lets Talk
                  </Link>
                </nav>
                <div className="absolute right-20 top-20">
                  <button
                    type="reset"
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2"
                    onClick={hamburger}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  </button>
                </div>
              </div>
          
            </div>
          </header>
        </>
      ) : (
        <>
          <header className="bg[#733e3d] bg-[#062b43] bg-opacity50 backdropblur-[10.60px] p-4 w-[90%] mx-auto sticky top-5 h[100px] rounded-full z-[999990]">
            <div className="header flex justify-between gap-20 max-w-7xl mx-auto items-center">
              <div className="logo">
                <Link href="/">
                  <div className="logobg"></div>
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
                <Link className="hovertext-[#733e3d]" href="/blog">
                  Insights
                </Link>
                <Link className="hovertext-[#733e3d]" href="/drop-resume">
                Resume 
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 hover:bg-[#fff] hover:text-black bg-[#24475e] text-white rounded-3xl  hover:textblack"
                >
                  Lets Talk
                </Link>
              </nav>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
