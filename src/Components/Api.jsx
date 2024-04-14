// Api.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "2e1b041c2c3f4bb09ed12e5354929054";
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${apiKey}`;

        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    // <div>
    //   <h1>Top Headlines from Google News India</h1>
    //   <ul>
    //     {articles.map((article, index) => (
    //       <li key={index}>
    //         <img
    //           src={article.urlToImage}
    //           alt={article.title}
    //           style={{ width: "100px", height: "100px", marginRight: "10px" }}
    //         />
    //         <div>
    //           <h2>{article.title}</h2>
    //           <p>{article.description}</p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div>
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 " >
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <a href={article.url}>
              <img
                className="rounded-t-lg"
                src={article.urlToImage}
                alt={article.title}
              />
            </a>
            <div className="p-5">
              <a href={article.url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {article.description}
              </p>
              <a
                href={article.url}
                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
