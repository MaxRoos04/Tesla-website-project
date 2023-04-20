import React from "react";
import CarSection from "../components/CarSection";

const CarPage = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto mt-60">
      <CarSection
        imageUrl="https://www.tesla.com/sites/default/files/images/support/Meet-Your-Tesla-Model-3.png"
        title="Model 3"
        description="The Model 3 is Tesla's most affordable car yet, without compromising on range or performance. With a minimalist design and all of Tesla's signature features, the Model 3 is the perfect choice for those who want a high-quality electric vehicle without breaking the bank."
      />
    </div>
  );
};

export default CarPage;
