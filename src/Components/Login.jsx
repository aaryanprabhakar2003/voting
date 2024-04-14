import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center px-5 sm:px-0">
        <div className="flex w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg lg:max-w-4xl">
          <div
            className="hidden bg-blue-700 bg-cover md:block lg:w-1/2"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-center text-xl text-gray-600">Welcome back!</p>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                className="block w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Password
                </label>
              </div>
              <input
                className="block w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:outline-2 focus:outline-blue-700"
                type="password"
              />
              <a
                href="#"
                className="mt-2 w-full text-end text-xs text-gray-500 hover:text-gray-900"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button className="w-full rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-600">
                Login
              </button>
            </div>
            <a
              href="#"
              className=" mt-4 flex items-center justify-center rounded-lg text-white shadow-md hover:bg-gray-100"
            >
               
            </a>
            <div className="mt-4 flex w-full items-center text-center">
              <a
                href="#"
                className="w-full text-center text-xs capitalize text-gray-500"
              >
                Don&apos;t have any account yet?
                <span className="text-blue-700"> Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login