import Image from "next/image";
import React from "react";
import Info from "./Info";
import Reveal from "../Reveal/Reveal";

export default function About() {
  return (
    <div className="h-full w-full flex items-center  p-10">
      <Reveal className="h-full w-[45%]" classNameItem="h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src={"/images/about-image.jpg"}
            alt="avatar"
            fill
            objectFit="contain"
            className="rounded-t-md"
          />
        </div>
      </Reveal>
      <Reveal className="h-full w-[30%]">
        <Info />
      </Reveal>
    </div>
  );
}
