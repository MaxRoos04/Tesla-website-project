import React from 'react';

const CarModelSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Car Model" className="w-full" />
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold mb-2">Tesla Model S</h2>
              <p className="text-gray-700 text-base">The Model S is a luxury electric sedan with a range of up to 405 miles. It can accelerate from 0 to 60 mph in just 1.98 seconds and has a top speed of 200 mph.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Car Model" className="w-full" />
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold mb-2">Tesla Model X</h2>
              <p className="text-gray-700 text-base">The Model X is a luxury electric SUV with a range of up to 371 miles. It can accelerate from 0 to 60 mph in just 2.5 seconds and has a top speed of 155 mph.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Car Model" className="w-full" />
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold mb-2">Tesla Model 3</h2>
              <p className="text-gray-700 text-base">The Model 3 is a mid-size electric sedan with a range of up to 358 miles. It can accelerate from 0 to 60 mph in just 3.1 seconds and has a top speed of 162 mph.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarModelSection;