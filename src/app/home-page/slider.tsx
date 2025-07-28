import Image from "next/image";

export default function Slider() {
  const images = [
    "/assets/beary/IMG_5248.PNG",
    "/assets/beary/IMG_5249.PNG",
    "/assets/beary/IMG_5250.PNG",
    "/assets/beary/IMG_5251.PNG",
  ];
  const sliderImages = [...images, ...images, ...images];

  return (
    <div className="slider my-10">
      <style jsx>{`
        .slider {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .slider-track {
          display: inline-flex;
          animation: scroll 15s linear infinite;
        }

        .slider-item {
          display: inline-block;
          width: 150px;
          margin-right: 40px;
        }

        .slider-item img {
          width: 100%;
          border-radius: 8px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>

      <div className="slider-track">
        {sliderImages.map((src, index) => (
          <div key={index} className="slider-item">
            <Image
              src={src}
              alt={`slider-${index}`}
              loading="eager"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
