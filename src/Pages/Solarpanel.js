import React from "react";
import solarPanelImage from "../assets/solar-panel.jpg";
import { BiArrowToRight } from "react-icons/bi";

const SolarPanelSection = () => {
  return (
    <section id="SP" className="bg-white py-16 mt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Solar Panels
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Power Your Home with Sustainable Energy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tesla solar panels provide a renewable energy source that can help
            power your home while reducing your reliance on traditional energy
            sources.
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <img src={solarPanelImage} alt="Solar Panel" className="w-full h-full object-cover rounded-lg mr-10"/>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 mx-4">
              Benefits of Solar Panels for Your Home
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-6 mx-8">
              <li>Reduces your carbon footprint</li>
              <li>Lower energy bills over time</li>
              <li>Increased property value</li>
              <li>Minimal maintenance required</li>
              <li>Long lifespan of 25+ years</li>
            </ul>
            <a href="#" className="flex items-center mt-8 text-indigo-600 hover:text-indigo-800 mx-8">
              Learn More
              <BiArrowToRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarPanelSection;
