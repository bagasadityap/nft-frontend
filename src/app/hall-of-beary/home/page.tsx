'use client';

import { useEffect, useRef, useState } from "react";
import Sidebar from "../../../../components/sidebar";

export default function HallOfBearyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Handle mouse/touch movement for parallax
  useEffect(() => {
    const handleMovement = (clientX: number, clientY: number) => {
      const container = containerRef.current;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const offsetX = (clientX / width - 0.5) * 2;
      const offsetY = (clientY / height - 0.5) * 2;

      // Smaller movement on mobile
      const maxShift = windowSize.width < 768 ? 20 : 50;
      setPosition({
        x: -offsetX * maxShift,
        y: -offsetY * maxShift,
      });
    };

    const handleMouseMove = (e: MouseEvent) => handleMovement(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMovement(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [windowSize.width]);

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScaleFactor = () => {
    if (windowSize.width < 640) return 1.2;
    if (windowSize.width < 1024) return 1.3;
    return 1.2;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          ref={videoRef}
          src="/assets/beary/background.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover"
          style={{
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${getScaleFactor()})`,
            left: '50%',
            top: '50%',
            minWidth: '100%',
            minHeight: '100%'
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row">
        <Sidebar bg="bg-white/50" />
        <div className="w-full flex justify-center"
          style={{ backgroundImage: "url('assets/beary/bg-home.PNG')" }}
        >
          <h1
            className="max-w-4xl font-gloria text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center text-[#FFEC4A] px-4 pt-20"
            style={{
                textShadow: '-px -1px 0 #FFF581, 1px -1px 0 #FFF581, -1px 1px 0 black, 1px 1px 0 #FFF581',
              }}
          >
            Welcome Home Phaser&apos;s
          </h1>
        </div>
      </div>
    </div>
  );
}

{/* <div className="relative z-10 h-full flex flex-col md:flex-row">
  <Sidebar bg="bg-white/50" /> 
  <div 
    className="w-full flex justify-center items-center pt-30 md:pt-0 lg:pt-0 md:pb-20 lg:pb-70"
  >
    <img src="/assets/beary/bg-home.PNG" className="absolute w-full md:w-[70%] lg:w-[50%]" />
    <h1 className="absolute w-[40%] font-gloria text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-yellow-800 px-4 z-20">
      Welcome Home Phaser&apos;s
    </h1>
  </div>
</div> */}