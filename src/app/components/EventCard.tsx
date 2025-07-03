"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Image from "next/image";

export function EventCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        style={{ fontFamily: "THEBOLDFONT" }}
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 tracking-wider"
      >
        Upcoming Events
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({
  workshopName,
  description,
  workshopLocation,
  src,
}: {
  workshopName: string;
  description: string;
  workshopLocation: string;
  src: string;
}) => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      style={{ fontFamily: "Made-Mirage-Bold" }}
    >
      <p
        style={{ fontFamily: "Made-Mirage-Bold" }}
        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto"
      >
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {workshopName}
        </span>{" "}
        {description}
      </p>
      <p
        style={{ fontFamily: "Made-Mirage-Bold" }}
        className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4"
      >
        Location: <span className="font-semibold">{workshopLocation}</span>
      </p>
      <Image
        src={src}
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Acting Workshop",
    title: "Inaugural Acting Workshop",
    src: "https://i.ibb.co/1wVf1z6/free-acting-workshop-website-thmbnl.jpg",
    content: (
      <Content
        workshopName="Inaugural Acting Workshop"
        description="After the overwhelming response to our previous free acting workshop, we’ve decided to host another one for those who missed out. If you’re someone who wants a clear, no-pressure demo of our teaching style, this is the perfect chance to experience what The Actor’s Room is all about in person."
        workshopLocation="Online"
        src="https://i.ibb.co/TMHpsJvq/actors-room-free-workshop.jpg"
      />
    ),
  },
  
];
