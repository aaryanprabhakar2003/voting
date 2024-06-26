import React from "react";
import Card from "./Card";
import Accordin from "./Accordin";

const Tabs = () => {
  return (
    <div>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li class="me-2" role="presentation">
            <button
              class="inline-block rounded-t-lg border-b-2 p-4"
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Current Issues
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Press Releases
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="settings-styled-tab"
              data-tabs-target="#styled-settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Instructions
            </button>
          </li>
          <li role="presentation">
            <button
              class="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="contacts-styled-tab"
              data-tabs-target="#styled-contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div>
      
        </div>
        <div
          class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="styled-contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
