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
                  <h2 className="text-lg font-semibold">Sagar Mishra</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                Best place to find jobs easily. If anyone is looking to make
                their career in Full stack Software Development and in IT sector
                then learning from them will definitely serve your purpose.
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
                  <h2 className="text-lg font-semibold">Shivam </h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                Thank you Hiring Tech for your Unwavering Dedication and
                Commitment to help candidates like me find the right career
                path. With their help of Hiring tech the selection process was
                very smooth and i totally recommend them.
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
                  <h2 className="text-lg font-semibold">Rahul </h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                From basic coding to expert level is what I have learnt so far
                in their training sessions. Even got placed Thank you so much
                hiring tech. Thanks for the timely coordination and helping me
                land a job. Kudos!!!!
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
                  <h2 className="text-lg font-semibold">Riya Thakur</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                A fantastic organisation! Great support from beginning to end of
                the hiring process. The team are really informed and go the
                extra mile at every stage. Always keeps me 100% up to date with
                the process; I was never left wondering where we were at in each
                phase of the entire recruitment process.
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
                  <h2 className="text-lg font-semibold">Ishita Sisodiya</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                One of the best consultant in Indore , I would definitely
                recommend to everyone who are searching a job they should
                definitely contact to Hiring Tech, my experience is so great
                Lavesh sir helped me a lot to crack the interview , thank you
                for your support without you it was not possible at all
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
                  <h2 className="text-lg font-semibold">Raj</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                At hiring tech you get tremendous opportunities to elevate your
                career. Especially through their training program.
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
                  <h2 className="text-lg font-semibold">Rishab Mishra</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                Landing a position at Houseeazy through Hiring Tech's support
                was a career milestone. With a 9.5 LPA package, their
                personalized guidance and advanced technology streamlined the
                process seamlessly. The comprehensive training module prepared
                me thoroughly for my role, providing valuable technical skills
                and industry insights. Surrounded by talented peers, I'm excited
                to pursue my career goals confidently. I'm grateful to Hiring
                Tech for this opportunity and especially Lavesh sir, he is my
                mentor. I highly recommend their services to aspiring
                professionals.
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
                  <h2 className="text-lg font-semibold">Ravi Sharma</h2>
                  {/* <p className="text-sm text-gray-600">dev</p> */}
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
                Collaborating with Hiring Tech has been a game-changer for our
                organization. Their professionalism, attention to detail, and
                commitment to excellence have transformed our project outcomes.
                Hiring Tech's advanced technology and personalized approach
                ensured that we connected with the right talent seamlessly. They
                provided comprehensive solutions tailored to our needs,
                delivering exceptional results. We're impressed by their
                dedication, expertise, and proactive communication throughout
                our collaboration. We highly recommend Hiring Tech to any
                organization seeking top-notch talent acquisition solutions
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
                  <h2 className="text-lg font-semibold">Abhimanyu Singh</h2>
                  <div className="flex">
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
                Our experience partnering with Hiring Tech has been nothing
                short of outstanding. Their team's expertise and dedication have
                significantly streamlined our recruitment process, resulting in
                the successful acquisition of top-tier talent for our
                organization. From the initial consultation to the final
                placement, Hiring Tech demonstrated a deep understanding of our
                requirements. We wholeheartedly recommend their services to any
                company in search of reliable and effective talent
                acquisition solutions
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
