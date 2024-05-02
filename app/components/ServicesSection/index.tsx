"use client";
import { Kanit } from "next/font/google";
import Reveal from "../Reveal/Reveal";
import ServicesBox from "./ServiceBox";

const katnit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export default function Services() {
  const techStacks = [
    {
      title: "TailwindCSS",
    },
    {
      title: "Javascript",
    },
    {
      title: "Typescript",
    },
    {
      title: "ReactJS",
    },
    //   {
    //     title: "FramerMotion",
    //   },
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
  ];

  return (
    <section id="services" className="h-fit w-full bg-[#D9D9D9] p-10 md:p-20">
      {/* <Reveal className="md:w-1/2 w-full"></Reveal> */}
      <div className="flex flex-col md:flex-row  justify-between mb-20">
        <div className="flex flex-col gap-7 md:w-[45%] w-full">
          <Reveal>
            <h1 className="md:text-7xl text-5xl font-bold">SO WHAT I DO ?</h1>
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="md:text-3xl font-semibold text-xl">
                Unlock the potential of React with your company. I crafts
                dynamic websites using React core principles. Let me elevate
                your online presence today!{" "}
              </p>
            </Reveal>
            <Reveal className="mb-10 md:mb-0">
              <span className="md:text-3xl font-semibold text-xl">
                My tech stacks <span className="font-bold">HERE</span>
                <span className="text-5xl ml-5 hidden md:block">
                  {"------------->"}
                </span>
              </span>
            </Reveal>
          </div>
        </div>
        <div className="whitespace-pre-line font-bold text-xl  h-full lg:flex flex-col justify-center gap-5 ">
          {techStacks.map((tech, index) => (
            <Reveal key={index} custom={index}>
              <span className={`text-5xl ${katnit.className}`}>
                {tech.title.toUpperCase()}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal>
        <ServicesBox />
      </Reveal>
    </section>
  );
}
