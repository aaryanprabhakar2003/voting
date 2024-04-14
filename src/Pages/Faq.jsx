import React from "react";
import Accordin from "../Components/Accordin";

const Faq = () => {
  return (
    <div>
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 ">
        <h1 class="mb-4  mt-16 text-center text-4xl font-extrabold  tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Frequently <span class="text-blue-600 dark:text-blue-500">Asked</span>{" "}
          Questions
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Welcome to our FAQ page!We've compiled a list of commonly asked
          questions to provide you with quick and informative answers.
        </p>
      </div>

      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 ">
        <Accordin />
      </div>
    </div>
  );
};

export default Faq;
