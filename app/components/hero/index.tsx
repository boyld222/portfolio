"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";
import LineIcon from "@/public/images/line.svg";
import Reveal from "../Reveal/Reveal";

export default function Hero() {
  const textIntroduce =
    "“A front-end developer passionate about creating a user-friendly and appeal UI that enhance the UX. 🚀”";

  return (
    <section
      id="hero"
      className="h-full flex items-center justify-around py-10 px-10 gap-4 bg-hero-pattern bg-cover flex-col md:flex-row"
    >
      <div className="w-[60%]">
        <Title />
      </div>
      <Image priority src={LineIcon} alt="Line" className="xl:block hidden" />

      <div className="flex flex-col gap-4 items-center justify-center w-[35%]">
        <Reveal className="w-1/2">
          <Image
            src={"/images/hero-image-2.jpg"}
            alt="avatar"
            width={250}
            height={250}
            quality={100}
            className="rounded-2xl w-full object-cover shadow-2xl"
          />
        </Reveal>
        <div className="whitespace-pre-line font-bold text-xl  h-full lg:flex flex-col justify-center gap-5 w-[70%] text-center  hidden">
          {textIntroduce.split("\n").map((word: string, index) => (
            <Reveal key={index} custom={index}>
              <span>{word}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
