import React from 'react'

const Contact = () => {
  return (
    <div className="flex h-screen items-center justify-center px-3">
      <div class=" mx-auto my-6  grid max-w-4xl items-center gap-16 bg-white font-[sans-serif] text-[#333] sm:grid-cols-2">
        <div>
          <h1 class="text-3xl font-extrabold">Contact Us</h1>
          <p class="mt-3 text-sm text-gray-400">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Email</h2>
            <ul class="mt-3">
              <li class="flex items-center">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                  <svg
                    class="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
                <a href="javascript:void(0)" class="ml-3 text-sm text-black">
                 
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Phone Number</h2>
            <ul class="mt-3">
              <li class="flex items-center">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
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
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                </div>
                <a href="javascript:void(0)" class="ml-3 text-sm text-black">
                
                  <strong>+91 1234567890</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form class="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-black"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-black"
          />
          <input
            type="text"
            placeholder="Subject"
            class="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-black"
          />
          <textarea
            placeholder="Message"
            rows="6"
            class="w-full rounded-md bg-gray-100 px-4 pt-3 text-sm outline-black"
          ></textarea>
          <button
            type="button"
            class="w-full rounded-md bg-[#007bff] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact