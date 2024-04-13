"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Image

import logo from "./logo.svg";
import "./head.css";
import Link from "next/link";

// let [active, setactive] = useState(false);
// const hamburger = () => {
//   setactive(!active);
// };

const Header2 = () => {
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
  }, []);

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
                  fill="#fff"
                >
                  <line
                    x1="13.4353"
                    y1="12.1875"
                    x2="51.5647"
                    y2="12.1875"
                    stroke="white"
                  />
                  <line
                    x1="13.4353"
                    y1="20.3594"
                    x2="51.5647"
                    y2="20.3594"
                    stroke="white"
                  />
                  <line
                    x1="13.4353"
                    y1="28.813"
                    x2="51.5647"
                    y2="28.813"
                    stroke="white"
                  />
                </svg>
              </button>
              {/* <nav className="flex gap-6 text-base font-medium text-white items-center "> */}
              <div
                className={`lists flex items-center justify-between flex-col ${
                  active ? "active " : ""
                }`}
              >
                <nav className="flex gap-6 text-base font-medium text-black items-center flex-col w-1/2 mt-20">
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/aboutus"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]  text-white"
                    href="/services"
                  >
                    Service
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]  text-white"
                    href="/career"
                  >
                    Career
                  </Link>
                  <Link
                    className="hovertext-[#733e3d] text-white"
                    onClick={hamburger}
                    href="/training"
                  >
                    Training
                  </Link>

                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/blog"
                  >
                    Insights
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/drop-resume"
                  >
                    Resume
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
                      fill="#fff"
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
        <div className="bg-[#062b43] max-w-[1400px] mx-auto flex gap-5 justify-between items-center w-full text-base font-medium leading-4 text-center text-white max-md:flex-wrap max-md:max-w-full p-4 px-10 wfull mxauto sticky top-5 h[100px] rounded-full z-[9999999999999999990] ">
          <Link href="/">
            <div className="logobg"></div>
          </Link>
          <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap">
            <Link className="hovertext-[#733e3d]" href="/aboutus">
              <div className="flex flex-col justify-center">
                <div className="justify-center px-6 py-4 rounded-2xl border border-solid border-white hoverbg-black  hoverborder-black max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
                  About Us
                </div>
              </div>
            </Link>
            <Link className="hovertext-[#733e3d]" href="/services">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="justify-center px-8 py-4 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
                  Service
                </div>
              </div>
            </Link>
            <Link className="hovertext-[#733e3d]" href="/career">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="justify-center px-8 py-4 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
                  Career
                </div>
              </div>
            </Link>
            <Link className="hovertext-[#733e3d]" href="/training">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="justify-center px-7 py-3.5 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
                  Training
                </div>
              </div>
            </Link>
            <Link className="hovertext-[#733e3d]" href="/blog">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="justify-center px-7 py-3.5 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
                  Insights
                </div>
              </div>
            </Link>
            {/* <div className="flex flex-col justify-center whitespace-nowrap">
              <div className="justify-center px-7 py-4 rounded-2xl border border-solid border-white max-md:px-5">
                <Link className="hovertext-[#733e3d]" href="/drop-resume">
                  Resume
                </Link>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="justify-center px-9 py-4 rounded border-white border-solid border-[0.5px] max-md:px-5 lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]">
              <Link href="/contact">Lets Talk</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header2;
