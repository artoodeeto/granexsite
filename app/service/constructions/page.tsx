import Catalog from "@/components/layout/catalog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ConstructionService {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

const constService: ConstructionService[] = [
  {
    imageUrl: "c1.jpg",
    title: "PPE Waterline Installation",
    description: "7 storey building waterline installation at MetroJ hotel.",
    url: "",
  },
  {
    imageUrl: "c2.jpg",
    title: "Chiller Installation",
    description: "Chiller pullout/reinstallation at GenTuna Philippines.",
    url: "",
  },
  {
    imageUrl: "c3.jpg",
    title: "Converge Cable Installation",
    description: "Internet Cable Installation.",
    url: "",
  },
  {
    imageUrl: "c4.jpg",
    title: "Bypass Installation Cooling System",
    description:
      "CONVERSION OF E120 ISUZU ENGINE COOLING SYSTEM FOR GAS PUMP --- INSTALLATION OF BYPASS COOLING SYSTEM",
    url: "",
  },
];

const Constructions = () => {
  return (
    <div className="container mt-16">
      <div>
        <h1 className="text-3xl font-bold">Construction and Repairs</h1>
        <p className="text-md text-muted-foreground mb-8">
          We provide civil works repairs and renovations. Engine conversion and
          repairs. We also provide plumbing/waterline projects. <Catalog />
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
        {constService.map(({imageUrl, title, description, url}, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
          >
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={`/constructions/${imageUrl}`}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 px-6">
                <span className="text-primary">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent key={index} className={"pb-0 text-muted-foreground"}>
              {description}
            </CardContent>
            <CardFooter>
              <Link href={""} className="underline">
                Read More
              </Link>
            </CardFooter>

            {/* {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))} */}

            {/* <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Constructions;
