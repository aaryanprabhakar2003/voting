import React from "react";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Tabs from "../Components/Tabs";
import Api from "../Components/Api";
import About from "../Components/About";
import { Link } from "react-router-dom";
import Testimonials from "../Components/Testimonials";
import { useAuth } from "./AuthContext";

const Home = () => {
   const { isAuthenticated, userName } = useAuth();
  
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
      <div className="fixed left-0 top-0 z-50 w-full border-b bg-white bg-opacity-80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <a className="flex flex-shrink-0 items-center" href="/">
                <img
                  className="block h-16 w-auto scale-110"
                  src="https://i.ibb.co/f4fwX8W/Screenshot-2024-04-16-at-8-51-56a-PM-transformed-out-removebg-preview-out.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex flex-shrink-0 items-center space-x-8 px-2 py-3">
              {isAuthenticated ? (
                <span className="flex items-center text-sm text-black">
                  <span>
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
                        d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  {userName}
                </span>
              ) : (
                <>
                  <Link to="/login">
                    <a
                      className="text-sm font-medium text-gray-700 hover:text-indigo-700"
                      href="#"
                    >
                      Login
                    </a>
                  </Link>
                  <Link to="/signup">
                    <a
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-indigo-200"
                      href="#"
                    >
                      Sign up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

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
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
