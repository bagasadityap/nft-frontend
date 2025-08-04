'use client';

import Sidebar from "../../../../components/sidebar";
import { Download, Clock, Wallet } from "lucide-react";

export default function Memes() {
  const images = [
    "/assets/beary/memes/IMG_5451.PNG",
    "/assets/beary/memes/IMG_5452.PNG",
    "/assets/beary/memes/IMG_8868.JPG",
    "/assets/beary/memes/IMG_8869.JPG",
    "/assets/beary/memes/IMG_8870.JPG",
    "/assets/beary/memes/IMG_8871.JPG",
    "/assets/beary/memes/IMG_8872.JPG",
    "/assets/beary/memes/IMG_8920.JPG",
    "/assets/beary/memes/IMG_8921.JPG",
    "/assets/beary/memes/Untitled_Artwork.png",
    "/assets/beary/memes/Untitled_Artwork(1).png",
    "/assets/beary/memes/Untitled_Artwork(2).png",
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#C4FF74]">
      <div>
        <Sidebar />
      </div>
      <div className="font-gloria w-full flex flex-col items-center py-20 px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-10">Memes</h1>
        {/* <button className="p-3 bg-black text-white my-3 rounded-lg text-xl">
          Upload Meme1
        </button> */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid p-5 bg-white/70 rounded-lg shadow-md">
              <div className="flex flex-row items-start justify-between mb-2">
                {/* <div>
                  <p className="font-andika text-base">Lorem ipsum dolor sit amet.</p>
                  <p className="font-andika text-sm text-gray-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                        January 10, 2025
                  </p>
                  <p className="font-andika text-sm text-gray-600 flex items-center gap-1">
                    <Wallet className="w-4 h-4" />
                    {`aBcd12efG345`.slice(0, 10)}...
                  </p>
                </div> */}
                <a download href={image} className="flex flex-row gap-1 bg-black/20 hover:text-gray-300 hover:bg-black/30 py-1 px-2 rounded-lg">
                  <Download></Download>
                  Download
                </a>
              </div>
              <img
                src={image}
                alt={`phaser-beary-meme-${index}`}
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
