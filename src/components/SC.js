import React from "react";

const SuperchargersSection = () =>{
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-20 container mx-auto mt-60 ">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Unleash Your Adventures</h2>
        <p className="text-lg text-gray-500 mt-4">
          With Tesla's Supercharger network, you can travel farther and explore
          more without worrying about running out of charge. Our Superchargers
          are strategically placed along the most popular routes, allowing you
          to easily charge up and continue your journey. And with the latest V3
          Superchargers, you can charge up to 75 miles in just 5 minutes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center">
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3dec2bc6-a3f4-4d27-8249-05e78bbfa7d0/bvlatuR/std/2880x1620/Supercharger-Savings-Hero-Desktop-NA"
            alt="Tesla Superchargers"
            className="w-64 h-64 object-cover mr-4 mb-4 sm:mb-0"
          />
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">Fast and Convenient</h3>
            <p className="text-gray-500">
              Tesla Superchargers are designed to get you back on the road as
              quickly as possible. With an average charging time of 30-45
              minutes, you can enjoy a meal, take a restroom break, or stretch
              your legs while your car charges up. And with the latest V3
              Superchargers, you can reduce your charging time even further.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">A Better Future</h3>
            <p className="text-gray-500">
              By using Tesla Superchargers, you're not just getting a convenient
              charging solution. You're also helping to accelerate the world's
              transition to sustainable energy. Tesla Superchargers are powered
              by renewable energy sources like solar and wind power, which
              helps to reduce our dependence on fossil fuels and decrease
              carbon emissions. So every time you charge up, you're making a
              positive impact on the environment.
            </p>
          </div>
          <img
            src="https://www.notateslaapp.com/images/news/2021/superchargers-wifi.jpg"
            alt="Tesla Supercharger"
            className="w-64 h-64 object-cover ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SuperchargersSection;