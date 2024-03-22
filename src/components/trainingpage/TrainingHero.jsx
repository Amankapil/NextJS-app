import React from "react";
import Link from "next/link";
import Image from "next/image";
const TrainingHero = () => {
  return (
    <section className="w-full py12">
      {/* <div className="container px-4 md:px-6"> */}

      <div className="flex flex-col justify-center items-center space-y-4  h-[500px]">
        {/* <div className="space-y-2"> */}
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
          Mastering the Art of Learning
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
          Learn the principles of beautiful and functional web design from
          industry experts. No prior experience required.
        </p>
        {/* </div> */}
        {/* <Link
            className="inline-flex h-10 items-center justify-center rounded-md border bordergray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 darkborder-gray-800 darkborder-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default TrainingHero;
