"use client"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials: {
  name: string;
  title: string;
  testimonial: string;
}[] = [
  {
    "name": "Peter Pan",
    "title": "CEO of Neverland",
    "testimonial": "With this level of automation, I don't even need pixie dust to fly.",
  },
  {
    "name": "Walter White",
    "title": "Founder & Chemist-in-Chief of Blue Sky Labs",
    "testimonial": "Ever since we started using Acme Corp, I've had more time to cook.",
  },
  {
    "name": "Luke Skywalker",
    "title": "COO, Jedi Solutions",
    "testimonial": "Even the Force can't automate workflows like this.",
  },
  {
    "name": "Homer Simpson",
    "title": "Safety Supervisor, Springfield Nuclear Inc.",
    "testimonial": "Before Acme Corp's solutions, running the power plant was a meltdown waiting to happen.",
  },
  {
    "name": "Techno Viking",
    "title": "Head of Festivals, Deep Bass Logistics",
    "testimonial": "Thanks to Acme Corp, my workflows run smoother than a Berlin street rave.",
  },
  {
    "name": "Jack Napier AKA Joker",
    "title": "Founder, Smile Syndicate",
    "testimonial": "Automation so smooth, it's criminal.",
  },
];

export const Testimonials = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map(({ name, title, testimonial }, index) => (
          <CarouselItem key={index} className="basis-1/1 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full flex justify-center">
                <CardContent className="flex flex-col text-center items-center justify-center p-6 gap-5">
                  <span>&quot;{testimonial}&quot;</span>
                  <div className="flex flex-col text-sm items-center justify-center">
                    <span className="font-bold">{name}</span>
                    <span className="text-muted-foreground">{title}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}