import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

function Post({ post }) {
  const { createdBy, avatar, description, images, createdAt } = post;

  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(true);

  const openCarousel = (index) => {
    setSelectedIndex(index);
    setShowCarousel(true);
  };

  const extraImages = images.length - 4;

  const timeDiff = Date.now() - createdAt;
  const minutes = Math.floor(timeDiff / 60000);

  const getTimeText = () => {
    if (minutes < 1) return "Just Now";
    if (minutes === 1) return "1 minute ago";
    return `${minutes} minutes ago`;
  };

  const previewLength = 100;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="bg-white w-[600px] rounded-xl shadow-md p-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-blue-800">{createdBy}</h3>
          <p className="text-sm text-gray-500">{getTimeText()}</p>
        </div>
      </div>

      <div className="relative">
        <p
          className={`text-gray-950 pr-16 ${
            showDescription ? "line-clamp-4" : ""
          }`}
        >
          {description}
        </p>

        {showDescription && (
          <button
            onClick={toggleDescription}
            className="absolute bottom-0 right-105 bg-white text-gray-500 hover:underline cursor-pointer"
          >
            See More
          </button>
        )}

        {!showDescription && (
          <button
            onClick={toggleDescription}
            className="text-gray-500 hover:underline cursor-pointer ml-1"
          >
            See Less
          </button>
        )}
      </div>
      <div className="overflow-hidden rounded-lg">
        <div>
          <img
            src={images[0]}
            onClick={() => openCarousel(0)}
            className="w-full h-[400px] object-cover cursor-pointer"
            alt=""
          />
        </div>

        <div className="grid grid-cols-3 gap-1 mt-1">
          {images.slice(1, 4).map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                onClick={() => openCarousel(index + 1)}
                className="w-full h-[150px] object-cover cursor-pointer"
                alt=""
              />

              {index === 2 && extraImages > 0 && (
                <div
                  onClick={() => openCarousel(index + 1)}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold cursor-pointer"
                >
                  +{extraImages}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showCarousel && (
        <ImageCarousel
          images={images}
          startIndex={selectedIndex}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </div>
  );
}

export default Post;
