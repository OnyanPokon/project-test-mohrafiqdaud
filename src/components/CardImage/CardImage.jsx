/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const CardImage = ({ images, title, fallbackImage }) => {
  const handleImageError = (event) => {
    event.target.src = fallbackImage; // Ganti dengan gambar cadangan
  };

  return (
    <>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={`${title} image`}
          className="rounded-t-md"
          loading="lazy"
          onError={handleImageError}
        />
      ))}
    </>
  );
};

export default CardImage;