import { useRef, useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import html2canvas from "html2canvas";

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
    link.download = "pasher_beary_meme_generated.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div>
        <div className="flex flex-row gap-x-4 items-center justify-center p-4">
            <select
                value={baseImage ?? ""}
                onChange={(e) => setBaseImage(e.target.value)}
                className="mb-4 text-black border p-2 rounded"
            >
                <option value="">Select a base image</option>
                {base_images.map((img, idx) => (
                    <option key={idx} value={img}>
                    {img.split("/").pop()}
                    </option>
                ))}
            </select>

            <select
                value={overlayImage ?? ""}
                onChange={(e) => setOverlayImage(e.target.value)}
                className="mb-4 text-black border p-2 rounded"
            >
                <option value="">Select a sticker</option>
                {sticker.map((img, idx) => (
                    <option key={idx} value={img}>
                    {img.split("/").pop()}
                    </option>
                ))}
            </select>

            <button
                onClick={handleDownload}
                className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Download
            </button>
        </div>

        <div
            id="editor-capture"
            className="relative w-full max-w-md aspect-[3/4] border-black border-8 mx-auto overflow-hidden"
            style={{ background: "#fff" }}
        >
            {baseImage && (
            <Image
                width={900}
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
  );
}