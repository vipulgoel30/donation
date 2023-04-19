import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import Logo from "../Logo";
import dummyImage from "./../../images/dummy.webp";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/ContextProvider";

const NavBarNgo = () => {
  const { ngoData: data } = useDataContext()

  return (
    <>
      <div className="relative">
        <div className="sticky flex top-0 left-0  justify-between items-center w-screen py-6 px-8  sm:py-2 shadow-md">
          <div>
            <Link to="/ngo" className="flex items-center gap-4">
              <Logo dimension={2} loader={false} />
              {/* <h1
                className="text-4xl font-mono italic text-transparent bg-clip-text bg-gradient-to-t from-colorPrimary to-colorSecondary hidden lg:block"
                style={{
                  wordSpacing: ".1rem",
                  letterSpacing: ".1rem",
                }}
              >
                DoNation
              </h1> */}
              <p className="font-bold text-xl hidden xxsm:block">
                DoNation
              </p>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8  ">
            <Link
              to="/ngo"
            //   className="hidden sm:block text-xl tracking-widest font-semibold uppercase relative  after:absolute after:content-[''] after:w-full  after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-[#2dc1e4] after:to-[#e8ecc7] hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-1 hover:ease-in-out hover:duration-200"
            // >
            className="hidden sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
              Home
            </Link>
            <Link
              to="/ngo/dashboard"
              // className=" hidden sm:block text-xl tracking-widest font-semibold uppercase relative  after:absolute after:content-[''] after:w-full  after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-[#2dc1e4] after:to-[#e8ecc7] hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-1 hover:ease-in-out hover:duration-200 "
            // >
            className="hidden sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
              Dashboard
            </Link>
            <Link to="/ngo/dashboard" className=" relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 animate-[ring_1s_ease-out_infinite] "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span
                className="absolute -top-2 -right-1 bg-red-700 text-white px-[.4rem] py-[.1rem] rounded-full text-[.55rem] animate-pulse
            "
              >
                5
              </span>
            </Link>
            <Link to="/ngo/profile">
              <img
                src={data?.image || dummyImage}
                className="w-12 h-12 rounded-full "
                alt="Ngo logo"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute z-7 top-32 right-6 sm:hidden shadow-2xl p-4 bg-stone-100 rounded-full "
        onClick={() => {
          document
            .querySelector(".ngo-menu-back")
            .classList.add("w-screen", "h-screen");
        }}
      >
        <div
          className="ngo-hamburger"
          onClick={() => {
            document.querySelector(".ngo-hamburger").classList.add("hidden");
            document.querySelector(".ngo-cross").classList.remove("hidden");
            document.querySelector(".ngo-menu").classList.remove("hidden");
            document.querySelector(".ngo-menu-back").classList.remove("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="ngo-menu absolute top-24 left-0 w-screen h-screen  z-10 sm:hidden   hidden">
        <div className="flex justify-end mr-6 mt-8">
          <div
            className="  ngo-cross hidden shadow-2xl p-4 bg-stone-100 rounded-full"
            onClick={() => {
              document
                .querySelector(".ngo-hamburger")
                .classList.remove("hidden");
              document.querySelector(".ngo-cross").classList.add("hidden");
              document.querySelector(".ngo-menu").classList.add("hidden");
              document.querySelector(".ngo-menu-back").classList.add("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-8 py-20 px-14">
          <Link
            to="/ngo"
            className="text-xl border-b-2 py-4 font-semibold"
            onClick={() => {
              document
                .querySelector(".ngo-hamburger")
                .classList.remove("hidden");
              document.querySelector(".ngo-cross").classList.add("hidden");
              document.querySelector(".ngo-menu").classList.add("hidden");
              document.querySelector(".ngo-menu-back").classList.add("hidden");
            }}
          >
            Home
          </Link>
          <Link
            to="/ngo/dashboard"
            className="text-xl border-b-2 py-4 font-semibold"
            onClick={() => {
              document
                .querySelector(".ngo-hamburger")
                .classList.remove("hidden");
              document.querySelector(".ngo-cross").classList.add("hidden");
              document.querySelector(".ngo-menu").classList.add("hidden");
              document.querySelector(".ngo-menu-back").classList.add("hidden");
            }}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div
        className="ngo-menu-back hidden absolute top-26 right-0 bg-gradient-to-r from-colorPrimary to-colorSecondary -z-1   sm:hidden"
        style={{
          transition: "all 2s",
        }}
      ></div>
    </>
  );
};

export default NavBarNgo;
