import React from "react";
import Reveal from "../Reveal/Reveal";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc?: string;
  reverse?: boolean;
  company: string;
  name: string;
  tech: Array<string>;
  year: number;
  link: string;
}

export default function WorkBox({
  imgSrc,
  reverse = false,
  company,
  name,
  tech,
  year,
  link,
}: Props) {
  return (
    <div
      className={`h-full w-full flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex items-start py-10 px-5 lg:px-10 lg:py-20 gap-10 justify-center`}
    >
      <Reveal
        className="sm:h-[250px] md:h-[325px] lg:h-[400px] lg:w-fit w-full overflow-hidden lg:rounded-xl  shadow-2xl shadow-gray-500"
        classNameItem="h-full w-full"
      >
        <Link href={link || ""} target="_blank" className="h-full w-full block">
          <div className="w-full h-full bg-black">
            <Image
              src={imgSrc || "/images/about-image.jpg"}
              alt="avatar"
              width={1536}
              height={2024}
              className=" aspect-auto w-full h-full object-contain rounded  sm:mx-auto  hover:scale-110 transform transition duration-700"
            />
          </div>
        </Link>
      </Reveal>
      <Reveal className={`lg:w-[45%] w-full self-center text-gray-300 `}>
        <div
          className={`flex flex-col gap-5 ${
            reverse ? "lg:items-start" : "lg:items-end"
          } items-center`}
        >
          <h1 className="lg:text-7xl text-3xl font-semibold">{company}</h1>
          <h2 className="lg:text-5xl text-xl">
            {name} - {year}
          </h2>

          <div className="rounded-full w-fit border-2 border-solid border-gray-300 lg:p-5 p-2">
            {tech.map((item, index) => (
              <span key={item} className="lg:mr-2 mr-1 text-sm lg:text-base">
                {item} {index !== tech.length - 1 && "●"}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
