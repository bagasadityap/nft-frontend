'use client';

import { Clock } from "lucide-react";
import { FaUser } from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'
import Link from "next/link";

export default function ArtGallery() {
  const images = [
    "/assets/beary/memes/IMG_5451.PNG",
    "/assets/beary/memes/IMG_5452.PNG",
    "/assets/beary/memes/Untitled_Artwork.png",
    "/assets/beary/memes/Untitled_Artwork(1).png",
    "/assets/beary/memes/Untitled_Artwork(2).png",
  ]

  return (
    <div className="flex flex-col min-h-screen py-10 px-10 bg-[#feffcd] grayscale">
      <div className="flex flex-row justify-between">
        <Link href="/" className="font- underline font-semibold text-black hover:text-gray-800 text-sm md:text-md lg:text-xl hover:scale-105 py-3 px-6 rounded-lg transition">
            {'<'} Back to Hall of Beary
        </Link>
        {/* <button type="button" className="bg-black text-white text-xl font-bold py-2 px-3 rounded-lg">Submit your Art</button> */}
      </div>
      <div className="font-andika w-full flex flex-col items-center py-20 px-4">
        <h1 className="text-4xl md-text:7xl lg:text-8xl font-bold text-center mb-10">Coming Soon</h1>
        <h1 className="text-3xl md-text:6xl lg:text-7xl font-bold text-center mb-10">Art Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid p-5 bg-black/50 rounded-lg shadow-sm">
                <img
                    src={image}
                    alt={`phaser-beary-meme-${index}`}
                    className="w-full h-auto rounded-lg object-cover"
                    loading="eager"
                />
                <div className="mt-2 text-white">
                    <p className="text-base font-bold">Lorem ipsum dolor sit amet.</p>
                    <a href="https://x.com/phaserbeary_xrp?s=21" className="flex flex-row items-center gap-1 hover:underline">
                         <FaXTwitter className="h-4 w-4" aria-hidden="true" />
                        @phaserbeary_xrp
                    </a>
                    <p className="text-sm text-gray-200 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Submited on January 10, 2025
                    </p>
                    <p className="text-justify text-sm mt-2">
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore quis rerum omnis adipisci temporibus totam ipsa. Blanditiis voluptates itaque incidunt quos. Ab dolore laudantium sint quo, eligendi officia ut?`.slice(0, 150)}...
                    </p>
                    <a className="flex justify-end gap-1 font-bold text-blue-300 hover:text-blue-400 hover:underline mt-2">
                        See Details {'>'}
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
