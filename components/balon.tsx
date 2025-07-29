'use client';

import { motion, useScroll, useTransform, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';

export default function BalonParallax() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const scrollYTransform = useTransform(scrollY, [0, 800], [0, -600]);

  const [floatY, setFloatY] = useState(0);
  useAnimationFrame((t) => {
    const float = Math.sin(t / 800) * 30;
    setFloatY(float);
  });

  return (
    <div ref={ref} className="relative ">
      <motion.img
        src="/assets/beary/Balon.PNG"
        alt="Balon"
        className="absolute z-10"
        style={{
          y: scrollYTransform,
          translateY: typeof window !== "undefined" && window.innerWidth < 640
            ? floatY + 100
            : floatY - 300,
        }}
      />
    </div>
  );
}
