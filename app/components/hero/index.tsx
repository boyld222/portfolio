"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";
export default function Hero() {
  const textIntroduce =
    "“A front-end developer passionate about creating a user-friendly and appeal UI that enhance the UX.”";
  const variant = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };
  return (
    <div className="h-[600px] flex items-center justify-between py-20 px-10 gap-4 bg-hero-pattern">
      <div>
        <Title />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center h-full w-[35%]">
        <motion.div
          // className="relative h-[268px] w-[268px]"
          variants={variant}
          initial="initial"
          animate="animate"
        >
          <Image
            src={"/images/hero-image.jpg"}
            alt="avatar"
            width={250}
            height={250}
            className=" rounded-t-md"
          />
        </motion.div>
        <div className="whitespace-pre-line font-bold text-xl h-full flex flex-col justify-center gap-5 w-[70%] text-center">
          {textIntroduce.split("\n").map((word: string, index) => (
            <motion.div
              key={index}
              className="w-fit"
              custom={index}
              initial="initial"
              animate="animate"
              variants={variant}
            >
              <span>{word}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
