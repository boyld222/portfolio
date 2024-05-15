"use client";
import { Kanit } from "next/font/google";
import Reveal from "../../Reveal/Reveal";
import ServicesBox from "./ServiceBox";

const katnit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export default function Services() {
  const techStacks = [
    {
      title: "FramerMotion",
    },
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
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-[#D9D9D9] px-5 py-10 lg:p-20  relative z-10"
    >
      {/* <Reveal className="lg:w-1/2 w-full"></Reveal> */}
      <div className="flex flex-col lg:flex-row  justify-between mb-20">
        <div className="flex flex-col gap-7 lg:w-[45%] w-full">
          <Reveal>
            <h1 className="lg:text-7xl text-5xl font-bold">SO WHAT I DO ?</h1>
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="lg:text-3xl font-semibold text-xl">
                Unlock the potential of React with your company. I crafts
                dynamic websites using React core principles. Let me elevate
                your online presence today!{" "}
              </p>
            </Reveal>
            <Reveal className="mb-10 lg:mb-0">
              <span className="lg:text-3xl font-semibold text-xl">
                My tech stacks <span className="font-bold">HERE</span>
                <span className="text-5xl ml-5 hidden lg:block">
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
