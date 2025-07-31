'use client';

import Navbar from "../../../components/navbar-public"
import Footer from "../../../components/footer"
import Slider from "../../../components/slider"
import Image from "next/image"

export default function Main() {
    const images = [
    "/assets/beary/IMG_5248.PNG",
    "/assets/beary/IMG_5249.PNG",
    "/assets/beary/IMG_5250.PNG",
    "/assets/beary/IMG_5251.PNG",
  ];

    return (
        <div
            className="min-h-screen"
            style={
                {
                    backgroundColor: "#feffcd",
                    backgroundSize: "cover",
                    backgroundPosition: "center top 25%",
                }
            }
        >
            <Navbar className="bg-black/50 relative z-10" />
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
                    <h1 className="font-gloria font-bold text-9xl text-black text-center">
                        ???
                    </h1>
                    <h1 className="font-gloria font-bold text-8xl text-black text-center">
                        Questions Nobody Should Have Asked
                    </h1>
                </div>
                <div className="font-gloria mx-5 md:mx-10 my-15">
                    <div className="w-full max-w-3xl mx-auto space-y-4 text-gray-800">
                        <details className="group border border-gray-700 border-3 rounded-lg p-4 select-none">
                            <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold">
                                What is Phaser Beary?
                                <span className="transition-transform group-open:rotate-90 font-bold text-5xl">{'>'}</span>
                            </summary>
                            <hr className="my-4 border-t-3" />
                            <div className="font-gloria text-gray-600 text-xl">
                                I know you’re gonna ask — but seriously, figure it out yourself.
                            </div>
                        </details>
                    </div>
                </div>
                <div>
                    <h1 className="font-gloria font-bold text-5xl text-black text-center">
                        No, We Don’t Have a Roadmap. Still.
                    </h1>
                </div>
            <Footer color="text-black" />
        </div>
    )
}