"use client";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Star} from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Singh",
    userName: "Manufacturing Consultant",
    comment:
      "Every engineer on their team was knowledgeable and approachable. They delivered ahead of schedule and provided ongoing support after implementation.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Taylor",
    userName: "Nuvatech Solutions",
    comment:
      "They didn’t just deliver a solution — they worked alongside us to understand our goals. From layout planning to automation integration, they exceeded expectations.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Roberts",
    userName: "Plant Manager",
    comment:
      "We saw a 22% cost reduction in logistics after their team revamped our warehouse and flow systems. Highly recommended for any business serious about scaling efficiently.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Laura Mitchell",
    userName: "Operations Director",
    comment:
      "Working with this industrial engineering team transformed our manufacturing line. Downtime dropped by 30%, and productivity is up. Their attention to detail and process optimization was exactly what we needed.",
    rating: 5.0,
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "Ava Mitchell",
  //   userName: "IT Project Manager",
  //   comment:
  //     "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
  //   rating: 5.0,
  // },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "Isabella Reed",
  //   userName: "DevOps Engineer",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   rating: 4.9,
  // },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      {/* <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      /> */}
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
