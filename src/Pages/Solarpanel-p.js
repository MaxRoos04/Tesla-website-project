import React from "react";

const SolarPanelPricesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Prices and Features
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Option 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                Basic
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Great for small homes and apartments.
              </p>
              <p className="mt-4 text-xl font-semibold text-gray-900">
                $4,999
              </p>
              <p className="mt-1 text-sm text-gray-500">Installation Included</p>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    6 Solar Panels
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    1,800 kWh/year
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    20-year warranty
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Option 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 truncate">
               Standard
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                 Suitable for medium-sized homes and businesses.
              </p>
              <p className="mt-4 text-xl font-semibold text-gray-900">
                $9,999
              </p>
              <p className="mt-1 text-sm text-gray-500">Installation Included</p>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    12 Solar Panels
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    3,600 kWh/year
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    25-year warranty
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Option 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                Premium
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Suitable for large-sized homes and warehouses.
              </p>
              <p className="mt-4 text-xl font-semibold text-gray-900">
                $19,999
              </p>
              <p className="mt-1 text-sm text-gray-500">Installation Included</p>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    24 Solar Panels
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    7,200 kWh/year
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm text-gray-700">
                    30-year warranty
                  </p>
                </li>
              </ul>
            </div>
          </div>
         </div>
        </div>
      </section>
    
  );
};

export default SolarPanelPricesSection;