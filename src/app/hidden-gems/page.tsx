'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';

export default function HiddenGems() {
  const images = [
    "/assets/beary/hidden-1.png",
    "/assets/beary/hidden-2.png",
    "/assets/beary/hidden-3.png",
    "/assets/beary/hidden-4.png",
    "/assets/beary/hidden-5.png",
    "/assets/beary/hidden-6.png",
    "/assets/beary/hidden-1.png",
    "/assets/beary/hidden-2.png",
    "/assets/beary/hidden-3.png",
    "/assets/beary/hidden-4.png",
    "/assets/beary/hidden-5.png",
    "/assets/beary/hidden-6.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const total = images.length;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 700);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-gloria flex flex-col min-h-screen py-10 px-10 bg-[#feffcd]">
      <div className="flex flex-row  justify-between">
        <Link href="/" className="underline font-semibold text-black hover:text-gray-800 text-xl hover:scale-105 py-3 px-6 rounded-lg transition">
            {'<'} Back to Home
        </Link>
      </div>
      <div className="font-gloria w-full flex flex-col items-center py-20 px-4">
        <h1 className="text-8xl font-bold text-yellow-500 text-center mb-10">Hidden Gems</h1>
        <div className="w-xl flex flex-col items-center justify-center overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                <div key={index} className="min-w-full p-5 bg-yellow-500/50">
                    <img
                      src={image}
                      alt={`phaser-beary-hidden-gems-${index}`}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                ))}
            </div>
        </div>
        
        <div className="flex flex-col items-center text-yellow-900 p-10">
            <p className="w-3xl text-center text-2xl font-bold">Phaser Beary celebrates imperfection. This isn’t a broken NFT—it’s an honest one.</p>
            <p className="w-3xl text-2xl text-justify">
                <br /><br />
                While everyone else is busy fixing things, we let ours live just the way they are.
                Because in laziness, there&apos;s honesty. In mistakes, there&apos;s character.
                And in system failure... there&apos;s a human touch. Now imagine you end up with one of the “glitched” NFTs from this collection That’s not an accident. That’s luck. Only a few ever fail this perfectly. They’re artifacts of pure, unfiltered laziness and that makes them rare. Phaser Beary doesn’t ask to be understood. Doesn’t want to be fixed. He just wants to nap quietly on the blockchain. And still get paid a lot for it.
            </p>
        </div>
      </div>
    </div>
  )
}
