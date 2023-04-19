import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import About from "../components/About";
import Footer from "../components/Footer";
import Testimonials from "./Testimonials";

// import NavBarLanding from "./NavBarLanding";
// import RegisterBannerLanding from "./RegisterBannerLanding";
const Landing = () => {
  return (
    <>
      {/* <NavBarLanding />
      <RegisterBannerLanding /> */}

      <div id="testimonials">
        {/* <Testimonials /> */}
      </div>
      {/* <Register></Register> */}
      <div id="about">
        {/* <About></About> */}
      </div>
      <Footer></Footer>

    </>
  );
};

export default Landing;
