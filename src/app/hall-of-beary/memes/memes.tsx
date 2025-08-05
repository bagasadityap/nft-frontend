'use client';

import Sidebar from "../../../../components/sidebar";
import { Download } from "lucide-react";
import UploadMeme from "./create";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

type Memes = {
  id: string,
  image: string,
  created_at: Date,
};


export default function Memes({ memes }: { memes: Memes[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const success = searchParams.get('success')
    const error = searchParams.get('error')

    if (success === '1') {
      toast.success('Meme uploaded successfully!', { id: "1" })
      router.replace(pathname)
    } else if (error === '1') {
      toast.error('Meme upload failed!', { id: "2" })
      router.replace(pathname)
    }
  }, [searchParams, pathname, router])
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#C4FF74]">
      <div>
        <Sidebar />
      </div>
      <div className="font-gloria w-full flex flex-col items-center py-20 px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-10">Memes</h1>
        <UploadMeme/>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-4">
          {memes.map((meme, index) => (
            <div key={meme.id} className="break-inside-avoid p-5 bg-white/70 rounded-lg shadow-md">
              <div className="flex flex-row items-start justify-between mb-2">
                {/* <div>
                  <p className="font-andika text-base">Lorem ipsum dolor sit amet.</p>
                </div> */}
                <a href={`https://api.phaserxrp.xyz/download/${meme.image}`} download className="flex flex-row gap-1 bg-black/20 hover:text-gray-300 hover:bg-black/30 py-1 px-2 rounded-lg">
                  <Download></Download>
                  Download
                </a>
              </div>
              <img
                src={`https://api.phaserxrp.xyz/storage/${meme.image}`}
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
