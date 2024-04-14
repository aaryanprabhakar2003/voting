import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="flex h-[100vh] items-center justify-center px-5 lg:px-0">
        <div className="flex max-w-screen-xl flex-1 justify-center border bg-white shadow sm:rounded-lg">
          <div className="hidden flex-1 bg-blue-900 text-center md:flex">
            <div
              className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
              style={{
                backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
              }}
            ></div>
          </div>
          <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="mb-2 text-2xl font-extrabold text-blue-900 xl:text-4xl">
                  Sign up
                </h1>
                <p className="text-[12px] text-gray-500 ">
                  Hey enter your details to create your account
                </p>
              </div>
              <div className="mt-8 w-full flex-1">
                <div className="mx-auto flex max-w-xs flex-col gap-4">
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="number"
                    placeholder="Enter your Adhaar Number"
                  />
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-blue-900 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none">
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    Already have an account?{" "}
                    <a href="">
                      <span className="font-semibold text-blue-900">
                        Sign in
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
