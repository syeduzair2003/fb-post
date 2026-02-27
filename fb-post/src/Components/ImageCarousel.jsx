import React, { useState } from "react";

function ImageCarousel({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl"
      >
        ✕
      </button>

      <button
        onClick={prevImage}
        className="absolute left-5 text-white text-4xl"
      >
        ❮
      </button>

      <img
        src={images[current]}
        alt="carousel"
        className="max-h-[80%] max-w-[90%] rounded-lg"
      />

      <button
        onClick={nextImage}
        className="absolute right-5 text-white text-4xl"
      >
        ❯
      </button>
    </div>
  );
}

export default ImageCarousel;
