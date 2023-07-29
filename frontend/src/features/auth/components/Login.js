import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-main lg:justify-center">
        <div className="flex flex-col overflow-hidden    rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-main    bg-deepdark md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-3xl font-bold tracking-wider text-center">
              <Link to="/">Ecentric India</Link>
            </div>
            <p className="mt-6 font-normal text-center text-xs text-gray-400 md:mt-0">
              We Ecentric India offer you Natural Oil and range of fragrances to
              buy that is longlasting and pocket Friendly
            </p>
            <p className="flex flex-col items-center text-xs justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <Link to="/signup" class="underline">
                Get Started!
              </Link>
            </p>
          </div>
          <div className="p-5 shadow-2xl bg-main md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-dark">
              Account Login
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label for="email" className="text-sm font-semibold text-dark">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  autofocus
                  className="px-4 py-2 transition duration-300 border border-dark rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-black/50"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-dark"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot"
                    className="text-sm text-blue-600 hover:underline "
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="px-4 py-2 transition duration-300 border border-dark rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-black/50"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-dark hover:bg-deepdark rounded-md shadow  focus:outline-none focus:ring-black/50 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">Welcome</span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
