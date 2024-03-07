"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const textIntroduce = "Hi,\n I'm Kiet,\n a frontent developer ";
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
    <div className="h-[600px] flex items-center justify-between p-20 gap-5">
      <div className="whitespace-pre-line font-bold text-7xl">
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
  );
}
