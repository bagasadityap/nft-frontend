'use client';
import Image from "next/image";

export default function LoadingCollection() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#feffcd]">
      <Image
        width={200}
        height={200}
        src="/assets/beary/loading.gif"
        alt="Loading..."
      />
    </div>
  );
}
