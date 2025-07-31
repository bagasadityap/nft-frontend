'use client';

import Navbar from "../../components/navbar-public";
import Footer from "../../components/footer";
import Main from "../../components/main";
import Slider from "../../components/slider";
import AboutMe from "../../components/about-me";
import BalonParallax from "../../components/balon";
import React, {useEffect} from "react";

export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <div
        className="relative text-white"
        style={{
          backgroundImage:`url('/assets/beary/Bear.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100dvh",
          transition: "background-size 0.3s ease",
        }}
      >
        <BalonParallax />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.3)", zIndex: 1 }}
        />
        <div className="relative z-10">
          <Navbar className="bg-black/50"/>
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
        <section id="about" style={{ position: "relative", zIndex: 2 }}>
          <AboutMe />
        </section>
        {/* <section id="roadmap" style={{ position: "relative", zIndex: 2 }}>
          <Roadmap />
        </section> */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
