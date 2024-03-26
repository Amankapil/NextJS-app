import React from "react";

const Trainig = () => {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container px4 md:px6">
        <div className="flex flex-wrap justify-center items-center gap-10 ">
          <div className="card border-1 shadow-2xl p-12 border-[#733e3d] max-w-[400px]">
            <div className="flex flex-col items-start py-3">
              <h3 className="text-3xl font-bold">FrontEnd Developer</h3>
              <p className="text-[#733e3d] darkxt-gray-400">
                <span className="text-3xl">6000rs</span>
                <span>/m0</span>
              </p>
            </div>
            <div className="grid gap-4 py-6 card-content">
              <div className="space-y-2">
                <h4 className="font-semibold">Perfect for individuals</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get started with essential features
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>75-Day Intensive Training Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Effective Communication Skills Workshop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Professional Resume Design Services</span>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Gap Year Guidance and Support Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Remote Learning Opportunities: Learn from Home</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-6 w-full">
              <button className="hover:bg-[#dc4c51] bg-[#733e3d] text-white p-4 rounded-full w-full">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="card border-1 shadow-2xl p-12 border-[#733e3d] max-w-[410px]">
            <div className="flex flex-col items-start py-3">
              <h3 className="text-3xl font-bold">Application Developer</h3>
              <p className="text-[#733e3d] darkxt-gray-400">
                <span className="text-3xl">6000rs</span>
                <span>/m0</span>
              </p>
            </div>
            <div className="grid gap-4 py-6 card-content">
              <div className="space-y-2">
                <h4 className="font-semibold">Perfect for individuals</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get started with essential features
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>75-Day Intensive Training Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Effective Communication Skills Workshop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Professional Resume Design Services</span>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Gap Year Guidance and Support Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Remote Learning Opportunities: Learn from Home</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-6 w-full">
              <button className="hover:bg-[#dc4c51] bg-[#733e3d] text-white p-4 rounded-full w-full">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="card border-1 shadow-2xl p-12 border-[#733e3d]  max-w-[400px]">
            <div className="flex flex-col items-start py-3">
              <h3 className="text-3xl font-bold">Backend developer</h3>
              <p className="text-[#733e3d] darkxt-gray-400">
                <span className="text-3xl">6000rs</span>
                <span>/m0</span>
              </p>
            </div>
            <div className="grid gap-4 py-6 card-content">
              <div className="space-y-2">
                <h4 className="font-semibold">Perfect for individuals</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get started with essential features
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>75-Day Intensive Training Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Effective Communication Skills Workshop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Professional Resume Design Services</span>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Gap Year Guidance and Support Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Remote Learning Opportunities: Learn from Home</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-6 w-full">
              <button className="hover:bg-[#dc4c51] bg-[#733e3d] text-white p-4 rounded-full w-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainig;

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
