import React from "react";

const TeslaLineupSection = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imageUrl}
        alt="Tesla lineup"
        className="w-170 h-110 object-cover"
      />
      <h2 className="text-2xl font-bold mt-6">Tesla Lineup</h2>
      <p className="font-secondary unbold">
        Overall, Tesla's lineup offers something for everyone, from luxury
        sedans to affordable crossovers. No matter which model you choose, you
        can expect the same cutting-edge technology, incredible performance,
        and long-range capabilities that make Tesla one of the most innovative
        companies in the automotive industry.
      </p>
    </div>
  );
};

export default TeslaLineupSection;