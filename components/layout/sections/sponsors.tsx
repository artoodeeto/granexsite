"use client";

import {Icon} from "@/components/ui/icon";
import {Marquee} from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import {icons} from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Drama",
    name: "Sacom",
  },
  {
    icon: "Puzzle",
    name: "Cortec",
  },
  {
    icon: "Cookie",
    name: "Nitti",
  },
  {
    icon: "Crown",
    name: "Qbits Resource Corporation",
  },
  {
    icon: "Vegan",
    name: "Dole Philippines",
  },
  {
    icon: "Ghost",
    name: "GenSan Government",
  },
  {
    icon: "Puzzle",
    name: "Mindanao State University",
  },
  {
    icon: "Squirrel",
    name: "Gen. Tuna Corporation",
  },
  {
    icon: "Cookie",
    name: "Philbest Canning Corporation",
  },
  {
    icon: "Drama",
    name: "Celebes Canning Corporation",
  },
  {
    icon: "Drama",
    name: "Next Power Consortium, Inc.",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <div className="pt-56">
        <h2 className="text-3xl md:text-4xl text-center mb-6 text-primary font-bold">
          Our Partners
        </h2>

        <div className="mx-auto">
          <Marquee
            className="gap-[3rem]"
            fade
            innerClassName="gap-[3rem]"
            pauseOnHover
          >
            {sponsors.map(({icon, name}) => (
              <div
                key={name}
                className="flex items-center text-xl md:text-2xl font-medium"
              >
                {/* <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              /> */}
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
