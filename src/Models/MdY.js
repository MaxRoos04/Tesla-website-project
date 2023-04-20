import React from "react";
import CarSection from "../components/CarSection";

const CarPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <CarSection
        imageUrl="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=my&options=$APBS,$DV2W,$INPB0,$PPSW,$PRMY1,$SC04,$MDLY,$WY20P,$MTY13,$STY5S,$CPF0,$TW01&crop=1400,850,300,130&"
        title="Model Y"
        description="The Model Y is Tesla's newest SUV, combining the versatility of a crossover with the performance and range of a Tesla. With room for up to seven passengers and plenty of cargo space, the Model Y is perfect for families or anyone who needs a little extra room."
      />
    </div>
  );
};

export default CarPage;