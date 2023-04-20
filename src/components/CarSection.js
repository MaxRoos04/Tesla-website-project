import React from "react";

const CarSection = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imageUrl} alt={title} className="w-96 h-64 object-cover" />
      <h2 className="text-2xl font-bold mt-6">{title}</h2>
      <p className="text-gray-500 text-lg mt-2">{description}</p>
    </div>
  );
};

export default CarSection;