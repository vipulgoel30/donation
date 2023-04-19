import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import Logo from "./Logo";
import dummyImage from "./../images/Ngo/dummy.webp";
import { Link } from "react-router-dom";
import { useDataContext } from "./../context/ContextProvider";

const NavBarLanding = () => {
  const { ngoData: data } = useDataContext()

  return (
    <>
      {/* <div className="relative"> */}
        <div className="bg-white sticky flex top-0 left-0 z-20  justify-between items-center w-screen py-6 px-8  md:py-2 shadow-md">
          <div>
            <Link to="/" className="flex items-center gap-4">
              <Logo dimension={2} loader={false} />
              <h1
                className="text-4xl font-mono italic text-transparent bg-clip-text bg-gradient-to-t from-colorPrimary to-colorSecondary "
                style={{
                  wordSpacing: ".1rem",
                  letterSpacing: ".1rem",
                }}
              >
                DoNation
              </h1>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8  ">
            <a
              href="#about"
              className="hidden md:block text-xl tracking-widest font-semibold uppercase relative  after:absolute after:content-[''] after:w-full  after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-[#2dc1e4] after:to-[#e8ecc7] hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-1 hover:ease-in-out hover:duration-200"
            >
              Home
            </a>
            <Link
              to="/ngos"
              className=" hidden md:block text-xl tracking-widest font-semibold uppercase relative  after:absolute after:content-[''] after:w-full  after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-[#2dc1e4] after:to-[#e8ecc7] hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-1 hover:ease-in-out hover:duration-200 "
            >
              NGOs
            </Link>
                <a
              href="#testimonials"
              className="hidden md:block text-xl tracking-widest font-semibold uppercase relative  after:absolute after:content-[''] after:w-full  after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-[#2dc1e4] after:to-[#e8ecc7] hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-1 hover:ease-in-out hover:duration-200"
            >
              Testimonials
            </a>
          </div>

          {/* Hamburger button */}
                <div
        className=" md:hidden "
        onClick={() => {
          // const ngoMenyB
          // document
          //   .querySelector(".ngo-menu-back")
          //   .classList.add("w-screen", "h-screen");
        }}
      >
        <div
          className="ngo-hamburger shadow-2xl p-4 bg-stone-100 rounded-full "
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
          {/* Hamburger cross button */}
        </div>
      {/* </div> */}
      
      <div className="ngo-menu absolute top-24 left-0 w-screen h-screen  z-10 md:hidden hidden">
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
            to=""
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
            About
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
        className="ngo-menu-back hidden w-screen h-screen fixed top-26 right-0 bg-gradient-to-r from-colorPrimary to-colorSecondary z-2  md:hidden"
        style={{
          transition: "all 2s",
        }}
      ></div>
    </>
  );
};

export default NavBarLanding;
