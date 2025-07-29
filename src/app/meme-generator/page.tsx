"use client";

import Navbar from "../../../components/navbar-public";
import Footer from "../../../components/footer";
import Editor from "./editor";

export default function MemeGenerator() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-green-500 via-green-600 to-green-700 text-white"
      style={{
        backgroundImage: `url('/assets/beary/IMG_5244.PNG')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <Navbar className="bg-black/50"/>
        
        <div className="flex-grow pt-10 px-4 md:px-10 bg-black/30">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg transition-all duration-300">
              CREATE YOUR OWN BEAR
            </h1>

            <div className="mt-5 max-w-5xl mx-auto">
              <Editor />
            </div>
            <Footer />
        </div>
        
    </div>
  );
}
