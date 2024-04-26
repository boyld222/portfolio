import Image from "next/image";
import React from "react";
import Info from "./Info";
import Reveal from "../Reveal/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="h-fit w-full flex items-start py-20 px-10 gap-40"
    >
      <Reveal className="h-full w-[45%]" classNameItem="h-full w-full">
        <Image
          src={"/images/about-image.jpg"}
          alt="avatar"
          width={1536}
          height={2024}
          objectFit="contain"
          className=" aspect-auto w-full h-auto rounded object-cover sm:mx-auto 2xl:rounded-2xl shadow-2xl"
        />
      </Reveal>
      <Reveal className="sticky lg:top-32 md:top-28 w-[45%]  self-start">
        <Info />
      </Reveal>
    </section>
  );
}
