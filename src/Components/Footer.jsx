import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className="mx-8"></hr>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0">
         
            <img
              className="scale-125 h-12 w-auto"
              src="https://i.ibb.co/f4fwX8W/Screenshot-2024-04-16-at-8-51-56a-PM-transformed-out-removebg-preview-out.png"
              alt
            />
       
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="-mx-2 flex gap-3">
            <Link to="/contact">
              <svg
                class="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link to="/about">
              <svg
                class="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
