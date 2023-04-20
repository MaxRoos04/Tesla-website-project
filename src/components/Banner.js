import React from "react";

const FrontPagePicture = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=SIDE&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PPSW,$PRM30,$SC04,$TW01,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&"
        alt="Tesla front page"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          TESLA
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4">
          Accelerating the world's transition to sustainable energy
        </p>
      </div>
    </div>
  );
};

export default FrontPagePicture;