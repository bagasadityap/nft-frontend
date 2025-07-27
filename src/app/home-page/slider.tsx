const images = [
  "/assets/collections/1.jpg",
  "/assets/collections/2.jpg",
  "/assets/collections/3.jpg",
  "/assets/collections/4.jpg",
  "/assets/collections/5.jpg",
  "/assets/collections/6.jpg",
  "/assets/collections/7.jpg",
];

export default function Slider() {
  return (
    <div className="slider my-25 mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <style jsx>{`
            .slider {
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
            }

            .slider-track {
                display: inline-flex;
                animation: scroll 20s linear infinite;
            }

            .slider-item {
                display: inline-block;
                width: 150px;
                margin-right: 50px;
                user-select: none;
            }

            .slider-item img {
                width: 100%;
                border-radius: 10px;
            }

            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
        `}</style>
        <div className="slider-track">
          {images.map((src, i) => (
            <div key={i} className="slider-item">
              <img src={src} alt={`item-${i}`} />
            </div>
          ))}
          {images.map((src, i) => (
            <div key={`dup-${i}`} className="slider-item">
              <img src={src} alt={`item-dup-${i}`} />
            </div>
          ))}
        </div>
    </div>
  );
}