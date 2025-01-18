import {Separator} from "@/components/ui/separator";
import React from "react";

const Supplies = () => {
  return (
    <div className="container mt-16">
      <div>
        <h1 className="text-3xl font-bold">Supplies</h1>
        <p className="text-md text-muted-foreground mb-8">
          We supply products ranging from; Electrical Supplies, Thermometers and
          Guages, Bearings, Safety Products and Equipments, Industrial
          Chemicals, Computers and other parts that are needed in food
          industries, Power Plants, Water Districts, Hospitals, Hotels and other
          industries.
        </p>
      </div>
      <Separator />
      <div></div>
    </div>
  );
};

export default Supplies;
