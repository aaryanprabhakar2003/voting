import React from 'react'

const Contact = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto  my-6">
        <div className="mx-auto grid max-w-4xl items-center gap-16 rounded-md bg-white p-8 font-[sans-serif] text-[#333] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sm:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold">Let's Talk</h1>
            <p className="mt-3 text-sm text-gray-400">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      id="email"
                       className='p-1'
                    >
                      <path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path>
                    </svg>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="ml-3 text-sm text-black"
                  >
                    <strong>help@evote.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Phone</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      id="phone"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                    </svg>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="ml-3 text-sm text-black"
                  >
                    <strong>+158 996 888</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className="ml-auo space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border px-4 py-2.5 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border px-4 py-2.5 text-sm "
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border px-4 py-2.5 text-sm "
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md border px-4 pt-2.5 text-sm"
              defaultValue={""}
            />
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact