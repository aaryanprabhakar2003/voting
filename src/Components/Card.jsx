import React from "react";

const Card = ({heading,content,icon}) => {
  return (
    <div className="mb-3">
      <div class="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 h-auto">
        <div dangerouslySetInnerHTML={{ __html: icon }}></div>
        <br></br>

        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
          {heading}
        </h5>

        <p class="mb-3 h-20 font-normal text-gray-500 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
