import React from 'react'

const Signup2 = () => {
  return (
    <div>
      <div class="mx-auto max-w-4xl p-6 font-[sans-serif] text-[#333]">
        <div class="mb-16 text-center">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              class="inline-block w-52"
            />
          </a>
          <h4 class="mt-3 text-base font-semibold">
            Sign up into your account
          </h4>
        </div>
        <form>
          <div class="grid gap-x-12 gap-y-7 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm">First Name</label>
              <input
                name="name"
                type="text"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm">Last Name</label>
              <input
                name="lname"
                type="text"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm">Email Id</label>
              <input
                name="email"
                type="text"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm">Mobile No.</label>
              <input
                name="number"
                type="number"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm">Password</label>
              <input
                name="password"
                type="password"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                class="w-full rounded-md bg-gray-100 px-4 py-3.5 text-sm outline-blue-500"
                placeholder="Enter confirm password"
              />
            </div>
          </div>
          <div class="!mt-10">
            <button
              type="button"
              class="min-w-[150px] rounded bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup2