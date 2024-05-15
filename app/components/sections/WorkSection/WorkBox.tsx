import React from "react";
import Reveal from "../../Reveal/Reveal";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  imgSrc?: StaticImageData;
  reverse?: boolean;
  company: string;
  name: string;
  tech: Array<string>;
  year: number | string;
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
      } flex items-center lg:items-start py-10 px-5 lg:px-10 lg:py-20 gap-10 justify-center`}
    >
      <div className="overflow-hidden rounded-xl">
        <Link href={link || ""} target="_blank">
          <div className="lg:w-[700px] md:w-[625px] w-[80vw] bg-transparent relative h-[150px] md:h-[325px] lg:h-[400px]">
            <Image
              src={imgSrc || "/images/about-image.jpg"}
              alt="avatar"
              fill
              placeholder="blur"
              className="hover:scale-110 transform transition duration-700 object-contain"
              sizes="100vw"
            />
          </div>
        </Link>
      </div>
      <Reveal className={`lg:w-[45%] w-full self-center text-gray-300 `}>
        <div
          className={`flex flex-col gap-5 ${
            reverse ? "lg:items-start" : "lg:items-end"
          } items-center`}
        >
          <h1 className="lg:text-5xl text-3xl font-semibold">{company}</h1>
          <h2 className="lg:text-3xl text-xl">
            {name} - {year}
          </h2>

          <div className="rounded-full w-fit border-2 border-solid border-gray-300 lg:p-2 p-2">
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
