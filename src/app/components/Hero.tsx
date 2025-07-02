"use client";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      {/* Hero Header */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-wider text-white drop-shadow-md"
          style={{ fontFamily: "THEBOLDFONT" }}
        >
          The Actor&apos;s Room
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontFamily: "THEBOLDFONT" }}
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-200 text-center"
        >
          For the Actor Who Thinks, Feels, and Transforms.
        </motion.p>
      </BackgroundLines>

      {/* Section 1 - Text Left, Image Right */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          style={{ fontFamily: "Made-Mirage-Bold" }}
        >
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 p-6 rounded-xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-neutral-200">
              <span className="text-[#f40000] font-semibold">Harshal Pawar</span>{" "}
              is a self-trained actor who has been working in the film industry
              for over a decade. With ten years of hands-on experience in front
              of the camera and behind the script, he has developed a deep
              understanding of performance, storytelling, and character.
              <br />
              <br />
              As a writer with a natural flair for narrative, Harshal brings a
              storyteller’s vision into every role and rehearsal room.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              src="/assets/images/hero.jpg"
              alt="Harshal Pawar image"
              width={800}
              height={500}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div
          className="flex flex-col-reverse md:flex-row-reverse items-center gap-10"
          style={{ fontFamily: "Made-Mirage-Bold" }}
        >
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 p-6 rounded-xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-neutral-200">
              Through{" "}
              <span className="text-[#f40000] font-semibold">
                The Actor’s Room
              </span>
              , his mission is to shape actors who are not just emotionally
              honest but also intellectually sharp and practically equipped.
              <br />
              <br />
              He believes that an actor must be both a thinker and a doer, ready
              not just to perform but to understand, interpret, and transform.
              His teaching blends intuition with technique, discipline with
              creativity, and above all, passion with purpose.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              src="/assets/images/arw1.jpg"
              alt="Harshal teaching"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
