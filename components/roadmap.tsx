"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  { label: "Q1 2025", detail: "Launch Beary NFT Collection" },
  { label: "Q2 2025", detail: "Start Marketplace Integration" },
  { label: "Q3 2025", detail: "Community Airdrop + DAO Voting" },
  { label: "Q4 2025", detail: "Game Alpha Release" },
];

export default function BearyRoadmap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bearyTop, setBearyTop] = useState(0);
  const circleRefs = useRef<(HTMLDivElement | null)[]>(Array(timeline.length).fill(null));
  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const circle = circleRefs.current[activeIndex];
    const container = containerRef.current;

    if (circle && container) {
      const circleTop = circle.getBoundingClientRect().top;
      const containerTop = container.getBoundingClientRect().top;
      setBearyTop(circleTop - containerTop + 50);
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="relative flex flex-row items-center justify-center">
        <div className="absolute flex flex-col items-center top-0 bottom-0 w-80 md:w-xl bg-gray-600 rounded-lg">
          <div className="absolute w-2 md:w-4 top-0 bottom-0 bg-[repeating-linear-gradient(to_bottom,white_0_30px,transparent_30px_50px)] md:bg-[repeating-linear-gradient(to_bottom,white_0_50px,transparent_50px_80px)]" />
        </div>

        <div ref={containerRef} className="relative z-10 flex flex-col items-center gap-24 py-12 md:py-24 w-80 md:w-xl px-4">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className="flex flex-row items-center justify-center gap-4 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <div className="font-gloria text-sm md:text-xl font-bold me-32">{item.label}</div>
                <div
                  ref={(el) => {
                    circleRefs.current[index] = el;
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-6 border-green-500 z-20 bg-black/50 hover:scale-120"
                ></div>
              </div>
              {activeIndex === index && (
                <div className="font-andika mt-4 text-white text-sm md:text-lg font-semibold text-center bg-black/50 p-3 rounded-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque quo assumenda.
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          className="absolute left-[calc(50%-50px)] z-0"
          animate={{ top: bearyTop - 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src="/assets/beary/roadmap.png"
            alt="Beary the Bear"
            width={60}
            height={60}
            className="rounded-full"
        />
        </motion.div>
      </div>
    </div>
  );
}
