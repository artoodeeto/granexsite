"use client";
import {Separator} from "@/components/ui/separator";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Catalog from "@/components/layout/catalog";

interface ImageNames {
  image: string[];
}

const images = [
  "s1.jpg",
  "s2.jpg",
  "s3.jpg",
  "s4.jpg",
  "s5.jpg",
  "s6.jpg",
  "s7.jpg",
  "s8.jpg",
  "s9.jpg",
];

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
          industries. <Catalog />
        </p>
      </div>
      <Separator />
      <div className="justify-items-center grid grid-rows-3 grid-flow-col-dense gap-2 mt-5 ">
        {images.map((img) => (
          <Image
            width={370}
            height={0}
            className="rounded-lg filter grayscale hover:grayscale-0 transition-all duration-400 ease-linear"
            src={`/supplies/${img}`}
            alt="image supplies"
          />
        ))}
      </div>
    </div>
  );
};

export default Supplies;
