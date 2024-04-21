import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Navbar = () => {
   const location = useLocation();
const isSignupPage = location.pathname === "/signup";
const isLoginPage = location.pathname === "/login";

  return (
    !isSignupPage &&
    !isLoginPage && (
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <div class="fixed bottom-4 left-1/2 z-50 h-16 w-[95%] max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white px-2 md:px-0 dark:border-gray-600 dark:bg-gray-700">
          <div class="mx-auto grid h-full max-w-lg grid-cols-4">
            <Link to="/">
              <div class="flex items-center justify-center">
                <button
                  data-tooltip-target="tooltip-home"
                  type="button"
                  class="group mt-5 inline-flex flex-col items-center justify-center rounded-s-full px-5 dark:hover:bg-gray-800"
                >
                  <svg
                    class="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  <span class="sr-only">Home</span>
                </button>
              </div>
            </Link>

            <Link to="/vote">
              <div class="flex items-center justify-center">
                <button
                  data-tooltip-target="tooltip-home"
                  type="button"
                  class="group mt-5 inline-flex flex-col items-center justify-center rounded-s-full px-5 dark:hover:bg-gray-800"
                >
                  <svg
                    class="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6"
                    />
                  </svg>

                  <span class="sr-only">Home</span>
                </button>
              </div>
            </Link>

            <Link to="/about">
              <div class="flex items-center justify-center">
                <button
                  data-tooltip-target="tooltip-home"
                  type="button"
                  class="group mt-5 inline-flex flex-col items-center justify-center rounded-s-full px-5 dark:hover:bg-gray-800"
                >
                  <svg
                    class="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span class="sr-only">Home</span>
                </button>
              </div>
            </Link>

            <Link to="/contact">
              <div class="flex items-center justify-center">
                <button
                  data-tooltip-target="tooltip-home"
                  type="button"
                  class="group mt-5 inline-flex flex-col items-center justify-center rounded-s-full px-5 dark:hover:bg-gray-800"
                >
                  <svg
                    class="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                    />
                  </svg>

                  <span class="sr-only">Home</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default Navbar