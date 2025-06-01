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
    <div className="container mt-16 px-4">
      <div className="max-w-4xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Supplies
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
          We supply products ranging from; Electrical Supplies, Thermometers and
          Gauges, Bearings, Safety Products and Equipments, Industrial
          Chemicals, Computers and other parts that are needed in food
          industries, Power Plants, Water Districts, Hospitals, Hotels and other
          industries.
        </p>
        <Catalog />
      </div>

      <Separator className="my-8" />

      {/* Responsive Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg bg-gray-100 aspect-square"
            >
              <Image
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                src={`/supplies/${img}`}
                alt={`Supply item ${index + 1}`}
                loading={index < 8 ? "eager" : "lazy"}
              />

              {/* Optional overlay for better hover effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplies;
