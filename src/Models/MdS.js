import React from "react";
import CarSection from "../components/CarSection";

const CarPage = () => {
  return (
    <div className="container mx-auto mt-60">
      <CarSection
        imageUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/638101a8-7cab-47b1-9ce4-034f070b7400/bvlatuR/std/1800x998/Model-S-Order-Hero-Desktop-Mobile-LHD?quality=auto-medium&format=auto"
        title="Model S"
        description="The Model S is Tesla's flagship sedan, offering incredible performance and range. With a sleek design and innovative features like Autopilot, the Model S is the ultimate luxury electric vehicle."
      />
    </div>
  );
};

export default CarPage;
