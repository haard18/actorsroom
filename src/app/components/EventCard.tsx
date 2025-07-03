"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
export function EventCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2
        style={{ fontFamily: "THEBOLDFONT" }}
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white tracking-wider"
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
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      style={{ fontFamily: "Made-Mirage-Bold" }}
    >
      <p
        className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      >
        <span className="font-bold  text-neutral-200">
          {workshopName}
        </span>{" "}
        {description}
      </p>

      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4 flex items-center gap-2">
        <span className="font-semibold flex items-center gap-2">
          <FaMapPin />
          <a
        href={`https://maps.app.goo.gl/ePKQ6KxdBYUeDwJR8`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
          >
        {workshopLocation}
          </a>
        </span>
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
    title: "",
    src: "https://i.ibb.co/p6JRX8mW/free-act-wrkshop-webs.jpg",
    content: (

      <Content
        workshopName="Free Acting Workshop"
        description="After the overwhelming response to our previous free acting workshop, we’ve decided to host another one for those who missed out. If you’re someone who wants a clear, no-pressure demo of our teaching style, this is the perfect chance to experience what The Actor’s Room is all about in person."
        workshopLocation="RDX studio Bungalow (previously: Creative Adda)"
        src="https://i.ibb.co/zMBgcZk/horizontal-for-cards.png"
        link="https://forms.gle/B9iY6CQs3E1qGEpM7"
      />
    ),
  },
  
];
