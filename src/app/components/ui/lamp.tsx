"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import Image from "next/image";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 md:min-h-[80vh] sm:min-h-[50vh]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <Image
          src="/assets/images/bg.png"
          alt="Background Image"
          fill
          className="absolute inset-0 z-0 opacity-80 md:opacity-30 sm:opacity-80 mt-10 object-cover object-center sm:object-top"
        />

        {/* Left edge gradient */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-40"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 60%, transparent 100%)",
            filter: "blur(24px)",
          }}
        />

        {/* Right edge gradient */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-40"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.7) 60%, transparent 100%)",
            filter: "blur(24px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute inset-auto z-50 h-24 sm:h-36 w-64 sm:w-[28rem] -translate-y-1/2 rounded-full bg-[#f40000] opacity-50 blur-2xl sm:blur-3xl"></div>

        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-24 sm:h-36 w-48 sm:w-64 -translate-y-[4rem] sm:-translate-y-[6rem] rounded-full bg-[#f40000] blur-xl sm:blur-2xl"
        />

        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] sm:w-[30rem] -translate-y-[5rem] sm:-translate-y-[7rem] bg-[#f40000]"
        />

        <div className="absolute inset-auto z-40 h-20 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
