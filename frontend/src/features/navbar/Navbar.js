import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineProfile,
  AiOutlineShoppingCart,
  AiOutlineDown,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { TbPrompt } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <>
      {/* <div className="backdrop-blur-lg bg-red-600 "> */}
      {/* Code block starts */}
      <nav className="   font-Poppins xl:block hidden  ">
        <div className="flex   items-center justify-between  mx-20">
          <div className="flex   w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-between">
            <Link to="/">
              <div className="flex items-center ">
                <h2 className="hidden sm:block  cursor-pointer text-dark md:text-2xl text-xl font-bold  leading-normal pl-3">
                  Ecentric{" "}
                  <span className="md:text-lg text-base font-medium">
                    India
                  </span>
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex ">
            <div className="hidden xl:flex md:mr-6 xl:mr-16">
              <Link
                to="/"
                className="flex px-5  items-center py-6 text-dark hover:deepdark  md:text-base text-sm"
              >
                <span className="mr-2">
                  <AiOutlineHome />
                </span>
                Home
              </Link>
              <Link
                to="/products"
                className="flex  px-5 items-center py-6  text-dark hover:deepdark  md:text-base text-sm "
              >
                <span className="mr-2 hover:text-red">
                  <TbPrompt />
                </span>
                Products
              </Link>
              <Link
                to="/about"
                className="flex px-5 items-center py-6 text-dark hover:deepdark  md:text-base text-sm "
              >
                <span className="mr-2">
                  <BsChatDots />
                </span>
                About
              </Link>
              <Link
                to="/contact"
                className="flex px-5 items-center py-6 text-dark hover:deepdark  md:text-base text-sm "
              >
                <span className="mr-2">
                  <GrContactInfo />
                </span>
                Contact
              </Link>
              <Link
                to="/cart"
                className="flex px-5 items-center py-6 text-dark hover:deepdark  md:text-base text-sm"
              >
                <span className="mr-2">
                  <AiOutlineShoppingCart />
                </span>
                Cart
              </Link>
            </div>
            <div className="hidden xl:flex items-center">
              <div className="ml-6 relative">
                <div
                  className="flex items-center relative"
                  onClick={() => setProfile(!profile)}
                >
                  {profile && (
                    <ul className="p-2 w-40 border-r z-30 bg-main absolute rounded right-0 shadow top-0 mt-16 ">
                      <li className="cursor-pointer  leading-3 tracking-normal py-2  focus:outline-none">
                        <div className="flex text-dark hover:deepdark  md:text-base text-sm items-center">
                          <AiOutlineLogin />
                          <Link to="/login">
                            <span className="ml-2 ">Login</span>
                          </Link>
                        </div>
                      </li>
                      <Link to="/signup">
                        <li className="cursor-pointer  text-dark hover:deepdark  md:text-base text-sm leading-3 tracking-normal mt-2 py-2  focus:outline-none flex items-center">
                          <AiOutlineProfile />
                          <span className="ml-2">Signup</span>
                        </li>
                      </Link>
                      <Link to="/account">
                        <li className="cursor-pointer text-dark hover:deepdark  md:text-base text-sm  leading-3 tracking-normal mt-2 py-2  focus:outline-none flex items-center">
                          <AiOutlineProfile />
                          <span className="ml-2">My Profile</span>
                        </li>
                      </Link>
                    </ul>
                  )}
                  <div className="cursor-pointer  flex items-center justify-center">
                    <div className=" flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <AiOutlineUser className="text-xl" />
                    </div>
                    <div className="ml-2 text-gray-600">
                      <AiOutlineDown className="text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="">
        <div className="py-4 px-6 w-full flex xl:hidden  sticky justify-between items-center   top-0 z-40">
          <div className="w-full">
            <h2 className=" cursor-pointer text-dark md:text-2xl text-xl font-bold ">
              Ecentric
              <span className="md:text-lg text-base font-medium">India</span>
            </h2>
          </div>
          <div className="flex items-center">
            <div
              id="menu"
              className="text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? "" : <AiOutlineAlignRight />}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full xl:hidden h-full  top-14 z-40 fixed transition-all ease-in-out  duration-300 transform  translate-x-0 "
              : "   w-full xl:hidden h-full fixed z-40  transition-all ease-in-out   duration-300 transform   -translate-x-full"
          }
        >
          <div
            className="     opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40  overflow-y-auto  top-[-56px] absolute backdrop-blur-lg bg-white/30 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex    flex-col justify-between h-full w-full">
                <div className="">
                  <div className="mt-6  flex w-full items-center justify-between">
                    <div className="flex  items-center justify-between w-full">
                      <div className="flex  items-center">
                        <h2 className=" cursor-pointer text-dark md:text-2xl text-xl font-bold ">
                          Ecentric
                          <span className="md:text-lg text-base font-medium">
                            India
                          </span>
                        </h2>
                      </div>
                      <div
                        id="cross"
                        className="text-dark"
                        onClick={() => setShow(!show)}
                      >
                        <AiOutlineClose className="cursor-pointer text-dark hover:text-deepdark" />
                      </div>
                    </div>
                  </div>
                  <ul className=" flex flex-col items-start">
                    <Link to="/" className="cursor-pointer">
                      <li className="text-dark  pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <AiOutlineHome />
                            <p className="">Home</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link className="cursor-pointer">
                      <li className="text-dark hover:text-deepdark  pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <TbPrompt />
                            <p className="">Products</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link className="cursor-pointer">
                      <li className="text-dark hover:text-deepdark pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <BsChatDots />
                            <p className="">About</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="text-dark hover:text-dark pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <GrContactInfo />
                            <p className="">Contact</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link to="/login">
                      <li className="text-dark hover:text-dark pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <AiOutlineLogin />
                            <p className="">Login</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link to="/login">
                      <li className="text-dark  hover:text-dark pt-6">
                        <div className="flex items-center translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <AiOutlineProfile />
                            <p className="">Signup</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link to="/account">
                      <li className="text-text-dark  hover:text-dark pt-6">
                        <div className="flex items-center  translate-x-0  ">
                          <div className="flex justify-center items-center gap-x-4">
                            <AiOutlineProfile />
                            <p className="">My Profile</p>
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Code block ends */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
