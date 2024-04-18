import React from 'react'

const Signup = () => {
  return (
    <div>
      <div class="mx-auto flex max-w-4xl items-center bg-white p-4 font-[sans-serif] text-gray-800 md:h-screen">
        <div class="grid items-center overflow-hidden rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] md:grid-cols-3">
          <div class="flex min-h-full flex-col justify-center space-y-16 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-4 max-md:order-1 max-md:mt-16 lg:px-8">
            <div>
              <h4 class="text-lg font-semibold text-white">
                Create Your Account
              </h4>
              <p class="mt-2 text-[13px] text-white">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">
                Simple & Secure Registration
              </h4>
              <p class="mt-2 text-[13px] text-white">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <form class="w-full px-6 py-6 sm:px-16 md:col-span-2">
            <div class="mb-6">
              <h3 class="text-2xl font-bold">Create an account</h3>
            </div>
            <div class="space-y-5">
              {/* <div>
                <label class="mb-2 block text-sm">Name</label>
                <div class="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="absolute right-4 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div> */}
              <div>
                <label class="mb-2 block text-sm font-bold">Email Id:</label>
                <div class="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                    placeholder="Enter email"
                  />
               
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm font-bold">Adhaar Number:</label>
                <div class="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                    placeholder="Enter Adhaar Number"
                  />
            
                </div>
              </div>
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label for="remember-me" class="ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    class="ml-1 font-semibold text-blue-600 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div class="!mt-10">
              <button
                type="button"
                class="w-full rounded bg-gray-700 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p class="mt-6 text-center text-sm">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                class="ml-1 font-semibold text-blue-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup