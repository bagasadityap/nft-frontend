'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingSpinner({ size = 200, duration = 2000 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/50 flex justify-center items-center">
      <Image
        src="/assets/beary/loading.gif"
        alt="Loading..."
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
