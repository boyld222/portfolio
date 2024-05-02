"use client";
import LineIcon from "@/public/images/line.svg";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import Title from "./Title";
import Link from "next/link";

export default function Hero() {
  const textIntroduce =
    "“A front-end developer passionate about creating a user-friendly and appeal UI that enhance the UX. 🚀”";

  return (
    <section
      id="hero"
      className="h-full flex items-center md:justify-around  justify-center py-10 px-10 gap-4 bg-gradient-to-r from-[#dacfba] to-[#ddd4cc] bg-cover flex-col md:flex-row"
    >
      <div className="md:w-[60%] md:block hidden">
        <Title />
      </div>
      <Image priority src={LineIcon} alt="Line" className="xl:block hidden" />

      <div className="flex flex-col gap-4 items-center justify-center md:w-[35%] w-full">
        <Reveal className="md:w-1/2 w-full">
          <Image
            src={"/images/hero-image-2.jpg"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-full object-cover shadow-2xl"
          />
        </Reveal>
        <div className="whitespace-pre-line font-bold text-xl  h-full lg:flex flex-col justify-center gap-5 md:w-[70%] w-full text-center ">
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
