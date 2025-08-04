import { useRef, useState } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function ImageEditor() {
  const [baseImage, setBaseImage] = useState<string | null>(null);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const [showBaseDropdown, setShowBaseDropdown] = useState(false);
  const [showStcikerDropdown, setShowStickerDropdown] = useState(false);

  const nodeRef = useRef<HTMLImageElement>(null);

  const base_images = [
    "/assets/beary/IMG_5243.PNG",
    "/assets/beary/IMG_5244.PNG",
    "/assets/beary/IMG_5245.PNG",
    "/assets/beary/IMG_5246.PNG",
  ];
  
  const sticker = [
    "/assets/beary/about.GIF",
    "/assets/beary/Balon.PNG",
    "/assets/beary/coin.GIF",
    "/assets/beary/IMG_5247.PNG",
    "/assets/beary/IMG_5248.PNG",
    "/assets/beary/IMG_5249.PNG",
    "/assets/beary/IMG_5250.PNG",
    "/assets/beary/IMG_5251.PNG",
    "/assets/beary/IMG_5253.GIF",
    "/assets/beary/IMG_5254.GIF",
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
            <div className="flex flex-row md:flex-row md:items-center gap-4 mb-6">
                <div className="relative">
                    <button
                        onClick={() => setShowBaseDropdown((prev) => !prev)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow text-center"
                    >
                        Base Image
                    </button>

                    {showBaseDropdown && (
                    <div className="absolute z-50 mt-1 w-full bg-white border rounded shadow max-h-72 overflow-y-auto p-2" style={{ width: "10rem" }}>
                        <div className="grid grid-cols-2 gap-2">
                        {base_images.map((img, idx) => (
                            <div
                            key={idx}
                            onClick={() => {
                                setBaseImage(img);
                                setShowBaseDropdown(false);
                            }}
                            className="cursor-pointer hover:scale-105 transition-transform duration-150"
                            >
                            <img
                                src={img}
                                alt={`Base ${idx}`}
                                className="w-full h-24 object-cover rounded border"
                            />
                            </div>
                        ))}
                        </div>
                    </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowStickerDropdown((prev) => !prev)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow text-center"
                    >
                        Sticker
                    </button>

                    {showStcikerDropdown && (
                    <div className="absolute z-50 mt-1 w-full bg-white border rounded shadow overflow-y-auto p-2" style={{ width: "10rem" }}>
                        <div className="grid grid-cols-2 gap-2">
                        {sticker.map((img, idx) => (
                            <div
                            key={idx}
                            onClick={() => {
                                setOverlayImage(img);
                                setShowStickerDropdown(false);
                            }}
                            className="cursor-pointer hover:scale-105 transition-transform duration-150"
                            >
                            <img
                                src={img}
                                alt={`Base ${idx}`}
                                className="w-full h-auto object-cover"
                            />
                            </div>
                        ))}
                        </div>
                    </div>
                    )}
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

        <div className="relative w-full max-w-2xl border-black border-5 md:border-10 mx-auto">
            <div
                id="editor-capture"
                className="relative aspect-[1/1] overflow-hidden"
                style={{ background: "#b9d24e" }}
            >
                {baseImage && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                    backgroundImage: `url(${baseImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    }}
                />
                )}

                {overlayImage && (
                <Draggable nodeRef={nodeRef} bounds="parent">
                    <img
                    ref={nodeRef}
                    src={overlayImage}
                    alt="Overlay"
                    className="absolute top-0 left-0 w-32 sm:w-42 md:w-52 object-contain cursor-move"
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