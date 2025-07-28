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
          backgroundImage:`url('/assets/beary/IMG_5246.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100dvh",
          transition: "background-size 0.3s ease",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.3)", zIndex: 1 }}
        />
        <div className="relative z-10">
          <Navbar />
          <Main />
        </div>
      </div>
      
      <Slider />
      <div
        style={{
          backgroundImage: `url('/assets/beary/IMG_5245.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100dvh",
          transition: "background-size 0.3s ease",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <AboutMe />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
