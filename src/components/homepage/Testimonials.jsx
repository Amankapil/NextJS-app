"use client";
import React, { createContext } from "react";

import Image from "next/image";
import hero from "./assets/profile.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="testiminilas max-w-7xl mx-auto mt-20">
        <h2 className=" text-[#733e3d] text-3xl font-bold mb-4">
          Testimonials
        </h2>
      </div>
      <div className="flx max-w-7xl mx-auto p-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          //   spaceBetween={30}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper p-10 m-10 h-[300px]"
        >
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-80 md:w-96">
              <div className="relative">
                <Image
                  src={hero}
                  alt="L"
                  className="w-16 h-16 rounded-full absolute top-0 left-0 border-4 border-white"
                />
                <div className="ml-20">
                  <h2 className="text-lg font-semibold">lavesh</h2>
                  <p className="text-sm text-gray-600">dev</p>
                  <div className="flex">
                    {/* {[...Array(rating)].map((_, index) => ( */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0c-.55 0-1.045.275-1.348.695L5.15 4.766a1 1 0 0 0-.252 1.106l2.255 6.608-5.894.565a1 1 0 0 0-.554 1.706l4.647 4.303L5.19 19.42a1 1 0 0 0 1.451-1.054l.84-5.211 4.245-4.065a1 1 0 0 0-.274-1.723l-5.94-.568-2.088-6.128A1 1 0 0 0 0 4v.001a1 1 0 0 0 .574.895l4.478 3.104L7.87 17.98a1 1 0 0 0 1.81 0l2.817-8.378L19.424 4.9A1 1 0 0 0 20 4V.999a1 1 0 0 0-.554-.895A10 10 0 0 0 10 0zM9 12a1 1 0 0 0 .276-.04l5.94-.569-4.23-3.085a1 1 0 0 0-.305-.06l-5.81-.556 4.425-4.12a1 1 0 0 0 .155-1.392l-1.64-2.418 5.838.56 4.257 12.637-4.113-3.854a1 1 0 0 0-1.422.041l-.901 1.096a1 1 0 0 0 .057 1.396l4.767 4.47-1.792 5.437a1 1 0 0 0 1.457 1.147L10 16.914l-5.597 3.5a1 1 0 0 0-.205 1.553l.85 1.004a1 1 0 0 0 1.384.18l6.071-3.795 5.36 4.737c.327.289.803.356 1.202.176l1.746-.693a1 1 0 0 0 .59-1.306l-3.015-8.908a1 1 0 0 0-.71-.667l-5.037-.482L10.056 12.9A1 1 0 0 0 9 12z"
                      />
                    </svg>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fuga adipisci sequi modi incidunt ipsum amet maxime cumque illum
                veritatis possimus voluptate qui accusantium, enim distinctio
                repellendus officia labore? Aliquid?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-80 md:w-96">
              <div className="relative">
                <Image
                  src={hero}
                  alt="L"
                  className="w-16 h-16 rounded-full absolute top-0 left-0 border-4 border-white"
                />
                <div className="ml-20">
                  <h2 className="text-lg font-semibold">lavesh</h2>
                  <p className="text-sm text-gray-600">dev</p>
                  <div className="flex">
                    {/* {[...Array(rating)].map((_, index) => ( */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0c-.55 0-1.045.275-1.348.695L5.15 4.766a1 1 0 0 0-.252 1.106l2.255 6.608-5.894.565a1 1 0 0 0-.554 1.706l4.647 4.303L5.19 19.42a1 1 0 0 0 1.451-1.054l.84-5.211 4.245-4.065a1 1 0 0 0-.274-1.723l-5.94-.568-2.088-6.128A1 1 0 0 0 0 4v.001a1 1 0 0 0 .574.895l4.478 3.104L7.87 17.98a1 1 0 0 0 1.81 0l2.817-8.378L19.424 4.9A1 1 0 0 0 20 4V.999a1 1 0 0 0-.554-.895A10 10 0 0 0 10 0zM9 12a1 1 0 0 0 .276-.04l5.94-.569-4.23-3.085a1 1 0 0 0-.305-.06l-5.81-.556 4.425-4.12a1 1 0 0 0 .155-1.392l-1.64-2.418 5.838.56 4.257 12.637-4.113-3.854a1 1 0 0 0-1.422.041l-.901 1.096a1 1 0 0 0 .057 1.396l4.767 4.47-1.792 5.437a1 1 0 0 0 1.457 1.147L10 16.914l-5.597 3.5a1 1 0 0 0-.205 1.553l.85 1.004a1 1 0 0 0 1.384.18l6.071-3.795 5.36 4.737c.327.289.803.356 1.202.176l1.746-.693a1 1 0 0 0 .59-1.306l-3.015-8.908a1 1 0 0 0-.71-.667l-5.037-.482L10.056 12.9A1 1 0 0 0 9 12z"
                      />
                    </svg>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fuga adipisci sequi modi incidunt ipsum amet maxime cumque illum
                veritatis possimus voluptate qui accusantium, enim distinctio
                repellendus officia labore? Aliquid?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-80 md:w-96">
              <div className="relative">
                <Image
                  src={hero}
                  alt="L"
                  className="w-16 h-16 rounded-full absolute top-0 left-0 border-4 border-white"
                />
                <div className="ml-20">
                  <h2 className="text-lg font-semibold">lavesh</h2>
                  <p className="text-sm text-gray-600">dev</p>
                  <div className="flex">
                    {/* {[...Array(rating)].map((_, index) => ( */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0c-.55 0-1.045.275-1.348.695L5.15 4.766a1 1 0 0 0-.252 1.106l2.255 6.608-5.894.565a1 1 0 0 0-.554 1.706l4.647 4.303L5.19 19.42a1 1 0 0 0 1.451-1.054l.84-5.211 4.245-4.065a1 1 0 0 0-.274-1.723l-5.94-.568-2.088-6.128A1 1 0 0 0 0 4v.001a1 1 0 0 0 .574.895l4.478 3.104L7.87 17.98a1 1 0 0 0 1.81 0l2.817-8.378L19.424 4.9A1 1 0 0 0 20 4V.999a1 1 0 0 0-.554-.895A10 10 0 0 0 10 0zM9 12a1 1 0 0 0 .276-.04l5.94-.569-4.23-3.085a1 1 0 0 0-.305-.06l-5.81-.556 4.425-4.12a1 1 0 0 0 .155-1.392l-1.64-2.418 5.838.56 4.257 12.637-4.113-3.854a1 1 0 0 0-1.422.041l-.901 1.096a1 1 0 0 0 .057 1.396l4.767 4.47-1.792 5.437a1 1 0 0 0 1.457 1.147L10 16.914l-5.597 3.5a1 1 0 0 0-.205 1.553l.85 1.004a1 1 0 0 0 1.384.18l6.071-3.795 5.36 4.737c.327.289.803.356 1.202.176l1.746-.693a1 1 0 0 0 .59-1.306l-3.015-8.908a1 1 0 0 0-.71-.667l-5.037-.482L10.056 12.9A1 1 0 0 0 9 12z"
                      />
                    </svg>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fuga adipisci sequi modi incidunt ipsum amet maxime cumque illum
                veritatis possimus voluptate qui accusantium, enim distinctio
                repellendus officia labore? Aliquid?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-80 md:w-96">
              <div className="relative">
                <Image
                  src={hero}
                  alt="L"
                  className="w-16 h-16 rounded-full absolute top-0 left-0 border-4 border-white"
                />
                <div className="ml-20">
                  <h2 className="text-lg font-semibold">lavesh</h2>
                  <p className="text-sm text-gray-600">dev</p>
                  <div className="flex">
                    {/* {[...Array(rating)].map((_, index) => ( */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0c-.55 0-1.045.275-1.348.695L5.15 4.766a1 1 0 0 0-.252 1.106l2.255 6.608-5.894.565a1 1 0 0 0-.554 1.706l4.647 4.303L5.19 19.42a1 1 0 0 0 1.451-1.054l.84-5.211 4.245-4.065a1 1 0 0 0-.274-1.723l-5.94-.568-2.088-6.128A1 1 0 0 0 0 4v.001a1 1 0 0 0 .574.895l4.478 3.104L7.87 17.98a1 1 0 0 0 1.81 0l2.817-8.378L19.424 4.9A1 1 0 0 0 20 4V.999a1 1 0 0 0-.554-.895A10 10 0 0 0 10 0zM9 12a1 1 0 0 0 .276-.04l5.94-.569-4.23-3.085a1 1 0 0 0-.305-.06l-5.81-.556 4.425-4.12a1 1 0 0 0 .155-1.392l-1.64-2.418 5.838.56 4.257 12.637-4.113-3.854a1 1 0 0 0-1.422.041l-.901 1.096a1 1 0 0 0 .057 1.396l4.767 4.47-1.792 5.437a1 1 0 0 0 1.457 1.147L10 16.914l-5.597 3.5a1 1 0 0 0-.205 1.553l.85 1.004a1 1 0 0 0 1.384.18l6.071-3.795 5.36 4.737c.327.289.803.356 1.202.176l1.746-.693a1 1 0 0 0 .59-1.306l-3.015-8.908a1 1 0 0 0-.71-.667l-5.037-.482L10.056 12.9A1 1 0 0 0 9 12z"
                      />
                    </svg>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fuga adipisci sequi modi incidunt ipsum amet maxime cumque illum
                veritatis possimus voluptate qui accusantium, enim distinctio
                repellendus officia labore? Aliquid?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
