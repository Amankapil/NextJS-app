import React from "react";

const Hr = () => {
  return (
    <>
      <div className="max-w-lg   mx-auto mt-20 mb-10">
        <h3 className="text-2xl font-bold text-center tracking-wide">Employee Details</h3>
      </div>
      <div className="flex gap-10 justify-center items-center flex-wrap my-20">
        <div className="w-full max-w-lg rounded-lg border border-gray-200 my20 dark:border-gray-800  mxauto">
          <div className="space-y-4 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide">
                Personal Employee Details
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter the employee's information below
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-clors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="email"
                    placeholder="Enter email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-olors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="job-title"
                    placeholder="Enter job title"
                    required
                  />
                </div>
              </div>
              <button
                className="w-full p-3 rounded-full hover:bg-[#dc4c51] bg-[#733e3d] text-white "
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg rounded-lg border border-gray-200 my20 dark:border-gray-800  mxauto">
          <div className="space-y-4 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide">
                Educational Employee Details
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter the employee's information below
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="name"
                  >
                    12th
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-clors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="email"
                    placeholder="Enter email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-olors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="job-title"
                    placeholder="Enter job title"
                    required
                  />
                </div>
              </div>
              <button
                className="w-full p-3 rounded-full hover:bg-[#dc4c51] bg-[#733e3d] text-white "
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg rounded-lg border border-gray-200 my20 dark:border-gray-800  mxauto">
          <div className="space-y-4 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide">
                Family background Details
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter the employee's information below
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="name"
                  >
                    12th
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-clors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="email"
                    placeholder="Enter email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-olors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="job-title"
                    placeholder="Enter job title"
                    required
                  />
                </div>
              </div>
              <button
                className="w-full p-3 rounded-full hover:bg-[#dc4c51] bg-[#733e3d] text-white "
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg rounded-lg border border-gray-200 my20 dark:border-gray-800  mxauto">
          <div className="space-y-4 p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide">
                Bank Details
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter the employee's information below
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="name"
                  >
                    12th
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-clors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="email"
                    placeholder="Enter email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transitioncolors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="inline-block text-sm font-medium peer"
                    htmlFor="job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className="w-full peer appearance-none border border-gray-200 rounded-lg py-2 px-3 transition-olors transition-shadow text-sm focus:outline-none focus:ring-0 focus:border-gray-300 dark:border-gray-700 dark:peer-gray-400 dark:peer-gray-600 dark:focus:border-gray-600"
                    id="job-title"
                    placeholder="Enter job title"
                    required
                  />
                </div>
              </div>
              <button
                className="w-full p-3 rounded-full hover:bg-[#dc4c51] bg-[#733e3d] text-white "
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hr;
