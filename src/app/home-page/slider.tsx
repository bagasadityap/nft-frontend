export default function Slider() {
  const images = [
    "/assets/collections/1.jpg",
    "/assets/collections/2.jpg",
    "/assets/collections/3.jpg",
    "/assets/collections/4.jpg",
    "/assets/collections/5.jpg",
    "/assets/collections/6.jpg",
    "/assets/collections/7.jpg",
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
            <img
              src={src}
              alt={`slider-${index}`}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
