import React from 'react'

const Carousel = () => {
  return (
    <div className="sm: mt-32 lg:mt-10">
      <div
        id="default-carousel"
        className="relative w-full "
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-20 overflow-hidden  md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="https://i.postimg.cc/FKcst7fS/Fl8t-V6w-Dc-JHRy-Pz1709025126.jpg"
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="https://i.postimg.cc/KY5wg2wV/vu1-So-SLg-Yzyr-A1w1706197686.jpg"
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="https://i.postimg.cc/nc8y5043/LIZeu-PPwfk-Gtt-O71712552308.jpg"
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel