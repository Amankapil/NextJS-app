import Image from "next/image";
import React from "react";
import img from "./assets/abhidutt.jpg";
import img2 from "./assets/shruti.jpg";

import "../home2/style.scss";
import Link from "next/link";
const Heroexpert = () => {
  return (
    <>
      <div className="bg-[#175574] py-12 md:py-16 lg:py-20 xl:py-24 h-[400px]">
        <div className="container flex flex-col items-center justify-center text-center px-4 space-y-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none text-gray-50">
            Meet the Experts
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl ">
            Our experts have years of experience and are ready to help you
            achieve your goals.
          </p>
        </div>
      </div>
      <div className="vision-bg-j">
        <div className="max-w-7xl mx-auto ">
          <section className="w-full py-12">
            <div className="container grid max-[1fr_900px] items-center gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-20">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                    ABHIDATT SHARMA
                  </h2>
                  <p className="text-black ">Training Expert</p>
                </div>
                <p className="text-black md:text-xl  text-justify">
                  Result-driven HR & training and development professional with
                  more than 10 years’ experience profoundly impacting
                  performance through the design of personnel training for the
                  reform, enhancement and advancement of organizational
                  objectives. Expert at synthesizing HR values, personnel,
                  management, and operations disciplines to meet organizational
                  requirements and align goals with organizational values and
                  visions. Promote employee excellence and motivate employees
                  towards top-level performance. Core competencies include:
                </p>
                <div className="flex self-end gap-4">
                  <Link
                    href="http://linkedin.com/in/abhidatt-sharma"
                    className="connecticons text-end self-end"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5398 0C4.76274 0 0.0795898 4.68315 0.0795898 10.4602C0.0795898 16.2372 4.76274 20.9204 10.5398 20.9204C16.3168 20.9204 21 16.2372 21 10.4602C21 4.68315 16.3167 0 10.5398 0ZM7.74899 15.5172H5.45234V8.09743H7.74899V15.5172ZM6.58972 7.12575C5.83966 7.12575 5.23161 6.51274 5.23161 5.75667C5.23161 5.00052 5.83975 4.38755 6.58972 4.38755C7.3397 4.38755 7.94775 5.00052 7.94775 5.75667C7.94779 6.51278 7.33974 7.12575 6.58972 7.12575ZM16.3557 15.5172H14.0701V11.6224C14.0701 10.5542 13.6644 9.95793 12.8197 9.95793C11.9004 9.95793 11.4202 10.579 11.4202 11.6224V15.5172H9.21743V8.09743H11.4202V9.09675C11.4202 9.09675 12.0828 7.8711 13.6561 7.8711C15.2294 7.8711 16.3557 8.83177 16.3557 10.8191L16.3557 15.5172Z"
                        fill="black"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="mailto:abhidatt.sharma@gmail.com"
                    className="connecticons text-end self-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                alt="Dr. Susan Smith"
                className="mx-auto rounded-full aspect-square object-top"
                height="400"
                src={img}
                width="400"
              />
            </div>
          </section>

          <section className="w-full py-12">
            <div className="container grid max-[1fr_900px] items-center gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-20 ">
              <Image
                alt="Dr. Susan Smith"
                className="mx-auto rounded-full aspect-square object-top"
                height="400"
                src={img2}
                width="400"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                    Shruti Dixit
                  </h2>
                  <p className="text-black">Communication Expert</p>
                </div>
                <p className="text-black md:text-xl  text-justify">
                  Meet our skilled content maestro, renowned for her
                  contributions to five dynamic websites, including the
                  prestigious Hiring Tech and Viable Diamonds. With a year of
                  experience under her belt, she weaves captivating narratives
                  and informative articles that resonate with diverse audiences.
                </p>

                <div className="flex gap-4 self-end">
                  <Link
                    href="http://www.linkedin.com/in/shruti-dixit-23b1021b7"
                    className="connecticons text-end self-end"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5398 0C4.76274 0 0.0795898 4.68315 0.0795898 10.4602C0.0795898 16.2372 4.76274 20.9204 10.5398 20.9204C16.3168 20.9204 21 16.2372 21 10.4602C21 4.68315 16.3167 0 10.5398 0ZM7.74899 15.5172H5.45234V8.09743H7.74899V15.5172ZM6.58972 7.12575C5.83966 7.12575 5.23161 6.51274 5.23161 5.75667C5.23161 5.00052 5.83975 4.38755 6.58972 4.38755C7.3397 4.38755 7.94775 5.00052 7.94775 5.75667C7.94779 6.51278 7.33974 7.12575 6.58972 7.12575ZM16.3557 15.5172H14.0701V11.6224C14.0701 10.5542 13.6644 9.95793 12.8197 9.95793C11.9004 9.95793 11.4202 10.579 11.4202 11.6224V15.5172H9.21743V8.09743H11.4202V9.09675C11.4202 9.09675 12.0828 7.8711 13.6561 7.8711C15.2294 7.8711 16.3557 8.83177 16.3557 10.8191L16.3557 15.5172Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="mailto:shruti@hiringtech.in"
                    className="connecticons text-end self-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 border-dashed dark:border-gray-800" />
          <section className="w-full py-12">
            <div className="container px-4 md:px-6">
              <div className="grid max-[1fr_900px] items-start gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                      Abhidutt Sharma
                    </h2>
                    <p className="text-black">Training Expert</p>
                  </div>
                  <p className="textray-500 md:text-xl text-black text-justify">
                    Abhidatt is a gifted genius of his own sort. It is amazing
                    to see somebody to have such good understanding of life with
                    absolute clarity. The way he connects to you and empathizes,
                    he leaves a mark in your life.
                    <br />
                    Abhidatt has the capacity to understand the perspective of
                    other person and give it a meaningful direction. If you are
                    depressed or lost, he will listen to you and counsel you in
                    the most appropriate manner. He is incredibly balanced, his
                    charm is contagious and once you start taking his sessions
                    he will become a friend cum guide for life.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                      Shruti Dixit
                    </h2>
                    <p className="text-black">Communication Expert</p>
                  </div>
                  <p className="tex00 md:text-xl text-black">
                    What sets her apart? She's a hands-on creator, steering
                    clear of AI tools to infuse her work with authenticity and
                    flair. From content creation to meticulous moderation, she
                    ensures each piece meets the highest standards, enriching
                    online platforms with quality and fostering positive user
                    engagement. She's not just a writer; she's a curator of
                    captivating stories and a guardian of online excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Heroexpert;
