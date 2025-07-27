'use client';

import Navbar from "../../components/navbar-public";
import Footer from "../../components/footer";
import Main from "./home-page/main";
import Slider from "./home-page/slider";
import AboutMe from "./home-page/about-me";
import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <div
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1)), url('/assets/images/background2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="absolute inset-0"
          style={{background: "rgba(0,0,0,0.3)",zIndex: 1,}}/>
        <div className="relative z-10">
          <Navbar />
          <Main />
        </div>
      </div>
      
      <Slider />
      <AboutMe />
      <Footer />
    </div>
  )
}
