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
  link,
}: {
  workshopName: string;
  description: string;
  workshopLocation: string;
  src: string;
  link?: string;
}) => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      style={{ fontFamily: "Made-Mirage-Bold" }}
    >
      <p
        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto"
      >
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {workshopName}
        </span>{" "}
        {description}
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
        Location: <span className="font-semibold">{workshopLocation}</span>
      </p>

      {link && (
        <div className="flex justify-center mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition-colors"
          >
            Register Now
          </a>
        </div>
      )}

      <Image
        src={src}
        alt={workshopName}
        width={900}
        height={900}
        layout="responsive"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
      />
    </div>
  );
};


const data = [
  {
    category: "Workshops",
    title: "Free Acting Workshop",
    src: "https://i.ibb.co/1wVf1z6/free-acting-workshop-website-thmbnl.jpg",
    content: (

      <Content
        workshopName="Free Acting Workshop"
        description="After the overwhelming response to our previous free acting workshop, we’ve decided to host another one for those who missed out. If you’re someone who wants a clear, no-pressure demo of our teaching style, this is the perfect chance to experience what The Actor’s Room is all about in person."
        workshopLocation="RDX studio Bungalow number 191 Aram nagar part-2 near ambe mata mandir varsova mumbai"
        src="https://i.ibb.co/zMBgcZk/horizontal-for-cards.png"
        link="https://forms.gle/B9iY6CQs3E1qGEpM7"
      />
    ),
  },
  
];
