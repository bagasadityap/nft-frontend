import { useRef, useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function ImageEditor() {
  const [baseImage, setBaseImage] = useState<string | null>(null);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const nodeRef = useRef<HTMLImageElement>(null);

  const base_images = [
    "/assets/beary/IMG_5243.PNG",
    "/assets/beary/IMG_5244.PNG",
    "/assets/beary/IMG_5245.PNG",
    "/assets/beary/IMG_5246.PNG",
  ];
  
  const sticker = [
    "/assets/beary/IMG_5247.PNG",
    "/assets/beary/IMG_5248.PNG",
    "/assets/beary/IMG_5249.PNG",
    "/assets/beary/IMG_5250.PNG",
    "/assets/beary/IMG_5251.PNG",
    "/assets/beary/IMG_5252.PNG",
    "/assets/beary/IMG_5253.PNG",
    "/assets/beary/IMG_5254.PNG",
  ];

  const handleDownload = async () => {
    const editor = document.getElementById("editor-capture");
    if (!editor) return;
    const canvas = await html2canvas(editor, { backgroundColor: null });
    const link = document.createElement("a");
    link.download = "phaser_beary_meme_generated.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div>
        <div className="flex flex-row gap-x-4 items-center justify-center p-4">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
                <div className="relative">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow">
                    {baseImage ? baseImage.split("/").pop() : "Base Image"}
                    </button>
                    <select
                    value={baseImage ?? ""}
                    onChange={(e) => setBaseImage(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    >
                    <option value="">Select a base image</option>
                    {base_images.map((img, idx) => (
                        <option key={idx} value={img}>
                        {img.split("/").pop()}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="relative">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow">
                    {overlayImage ? overlayImage.split("/").pop() : "Sticker"}
                    </button>
                    <select
                    value={overlayImage ?? ""}
                    onChange={(e) => setOverlayImage(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    >
                    <option value="">Select a sticker</option>
                    {sticker.map((img, idx) => (
                        <option key={idx} value={img}>
                        {img.split("/").pop()}
                        </option>
                    ))}
                    </select>
                </div>

                <button
                    onClick={handleDownload}
                    className="text-gray-500 bg-blue-100 rounded-lg p-1 hover:text-black transition-colors"
                    title="Download image"
                >
                    <Download size={30} />
                </button>
            </div>
        </div>

        <div className="relative w-full max-w-2xl border-black border-20 mx-auto">
            <div
                id="editor-capture"
                className="relative aspect-[1/1] overflow-hidden"
                style={{ background: "#43af5eff" }}
            >
                {baseImage && (
                <Image
                    width={1200}
                    height={1200}
                    src={baseImage}
                    alt="Base"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
                )}

                {overlayImage && (
                <Draggable nodeRef={nodeRef} bounds="parent">
                    <Image
                    width={225}
                    height={300}
                    ref={nodeRef}
                    src={overlayImage}
                    alt="Overlay"
                    className="absolute top-0 left-0 object-contain cursor-move"
                    draggable={false}
                    style={{ pointerEvents: "auto" }}
                    />
                </Draggable>
                )}
            </div>
        </div>
    </div>
  );
}