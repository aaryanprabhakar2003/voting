import React from "react";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Tabs from "../Components/Tabs";
import Api from "../Components/Api";
import About from "../Components/About";
import { Link } from "react-router-dom";
import Testimonials from "../Components/Testimonials";


const Home = () => {
  const obj = [
    {
      icon: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nO2WPQrCQBCFv17FQvA6amdI60kEsRVyIMULeAP1DImFNimineBKYAQbdxOcRYt58Kp9Ox877B+Y/BoCGXAAbsAF2AFzoE8kzYAKcB98BqYxoA8BrIER0BGPgY2M3YFUs72VFF54ckvJlMBAA5y9rTSkrWRXGuCjFKvbG9JEsnsN8FWKdRtke5Kt53wtJ46V/z04BU6e89rWBZA0AReK0JfzNq3SdlAGdtZqbHNhxwm7QNxfPxKJMjyP8e010VRPzCeH3BXJpVoAAAAASUVORK5CYII=">',
      heading: "A reliable online voting tool.",
      content:
        "Run online elections for an important event or manage consistent, recurring votes.",
    },
    {
      icon: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVR4nO2VzUoDMRDHfxdfQKggWhFPgn0ED14FFUVfwGu1evAFPHr1KH6Bz+Dn2aPeFKoIiiCUUi9aEaEtkYUJLEs3m2RT8dA/DLskZH6ZSWYCff1DjQEV4BJ4AL6AH+BNxspAISRwFDgE2oDKsBZwHGIDi0DTApi0d2Al5mcIuAWubaCbQMcDqi3K0KpA72XsxibSPFBtNWBf/u9kE8Yz9Ulv0urAFDAIXGVBIx0FgpbE3ySwY1My7UCRIt+63PaiCVzpAVTPbZnAF4GgpQRUAacm8GOPoAp4NYE/uyxYBpakRfpCFfDtCp6QuZkucFuoEt9OqX4BxmV+OlbjyZKpZRxH1edyPUlj0ZE/O0Sq7cwEXjcsjMMHHKFKns1UFTMaSBzuAm3F1qXqIMNJlOZtoOFQbntYaCTldvvaBzCMpWYD9GwlT+u8LVRrI+eb3JHe76UFz7RH6Z0jpwrArtxMmyhPXM7URlE5rAHn0oWaYlVpDmWbkumLv9YvDwOZxJUfqaYAAAAASUVORK5CYII=">',
      heading: "Key electronic voting features.",
      content:
        "Stay protected against double voting and other forms of vote manipulation.",
    },
    {
      icon: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeklEQVR4nO3VUQqAMAgG4P9csd6T3f8C2T2MoCAGQycuViT4Nv3A/2HA1yoD2ACI0gyAPAAblsvZqwe4hifPcAuAp4EclU0N4KhsaoAYskmWE2uAVj/wohOl3oAUDyUK4N4AFUg40JrNveYIQIw93kdERuRYvniAcWsH5dicQ4EnsmoAAAAASUVORK5CYII=">',
      heading: "Web app-based voting platform.",
      content:
        "Send eligible voters to a personalized voting website, without having to download an online voting app.",
    },
  ];

  return (
    <div>
      <nav class="border-gray-200 bg-white dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://i.postimg.cc/HW3vdNjH/Designer.png"
              class="h-20  rounded-full"
              alt="Flowbite Logo"
            />
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              VoteEase
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              {/* <li>
                <a
                  href="#"
                  class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <Link to="/login">
                    <button
                      type="button"
                      class="mb-2 me-2 w-24 rounded-full border-2 border-black px-5 py-2 text-center text-sm font-medium text-black hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800 "
                    >
                      Login
                    </button>
                  </Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <Link to="/Signup">
                    <button
                      type="button"
                      class="mb-2 me-2 w-24 rounded-full border-2 border-black px-5 py-2 text-center text-sm font-medium text-black hover:bg-blue-800  hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      SignUp
                    </button>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carousel />

      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <h1 class=" mb-4 mt-6 text-center text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">
          An online voting system with your needs at the forefront
        </h1>

        <p class="mb-6 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
          From secure voting software to the management of complex virtual
          events, we offer a range of online voting software options that exceed
          expectations.
        </p>
      </div>

      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Card
          heading={obj[0].heading}
          content={obj[0].content}
          icon={obj[0].icon}
        />
        <Card
          heading={obj[1].heading}
          content={obj[1].content}
          icon={obj[1].icon}
        />
        <Card
          heading={obj[2].heading}
          content={obj[2].content}
          icon={obj[2].icon}
        />
      </div>
      <div>
        <About />
      </div>

      <div>
       <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
