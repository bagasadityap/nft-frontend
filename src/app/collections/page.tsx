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
            <div className="bg-black/50 flex flex-col items-center justify-center px-6 py-10 mt-10 mx-5 rounded-lg text-center">
                <Slider />
                {/* <div className="col-span-2 row-span-9 flex items-center justify-center font-gloria font-bold text-5xl">Collecting Is Optional. Regret Is Forever.</div> */}
                <div className="col-span-2 row-span-9 flex items-center justify-center font-gloria font-bold text-5xl">Stay lazy. Stay tuned.</div>
            </div>
            {/* <div className="font-andika flex flex-col md:flex-row items-start md:items-center justify-center gap-4 mt-10 text-black">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 w-full">
                    <div className="w-full md:w-1/2">
                        <label className="block text-md font-bold text-black mb-1">Search by ID :</label>
                        <input type="text" placeholder="#34DJJD21" className="px-4 py-2 rounded-md bg-black/30 w-full" disabled/>
                    </div>

                    <div className="w-full md:w-auto">
                        <label className="block text-md font-bold text-black mb-1">Order by Rarity :</label>
                        <select className="px-4 py-2 rounded-md bg-black/30 w-full" disabled>
                            <option value="asc">Rarity</option>
                            <option value="asc">Rare to Common</option>
                            <option value="desc">Common to Rare</option>
                        </select>
                    </div>
                </div>
            </div> */}
            <div className="font-gloria my-10 mx-5 grayscale">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((item, index) => (
                    <div key={index} className="bg-black/20 p-6 rounded-lg shadow-md flex flex-col">
                        {/* <h2 className="flex flex-row items-center justify-between text-xl font-semibold mb-2 text-gray-800">
                            Beary #3123YHS2
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">RARE</span>
                        </h2> */}
                        <div className="relative w-full aspect-square mb-3 rounded overflow-hidden">
                            <Image
                                src={item}
                                fill
                                className="object-cover" alt={""}
                            />
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <Footer color="text-black" />
        </div>
    )
}