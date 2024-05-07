import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import Info from "./Info";

export default function About() {
  return (
    <section
      id="about"
      className="h-fit w-full flex-col lg:flex-row flex items-start py-20 px-10 lg:gap-40 gap-10"
    >
      <Reveal
        className="h-full lg:w-[45%] w-full"
        classNameItem="h-full w-full"
      >
        <Image
          src={"/images/about-image.jpg"}
          alt="avatar"
          width={1536}
          height={2024}
          objectFit="contain"
          className=" aspect-auto w-full h-auto rounded object-cover sm:mx-auto 2xl:rounded-2xl shadow-2xl"
        />
      </Reveal>
      <Reveal className="sticky xl:top-32 lg:top-28 lg:w-[45%] w-full  self-start">
        <Info />
      </Reveal>
    </section>
  );
}
