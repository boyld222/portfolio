import Image from "next/image";
import Reveal from "../../Reveal/Reveal";
import Info from "./Info";
import AboutImage from "@/public/images/about-image.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="z-10 h-fit w-full flex-col lg:flex-row flex items-start lg:py-20 py-10 px-5 lg:px-10 lg:gap-40 gap-10 relative bg-white"
    >
      <div className="lg:h-[100vh] h-[50vh] lg:w-[45%] w-full relative">
        <Image
          src={AboutImage}
          placeholder="blur"
          alt="avatar"
          fill
          sizes="100vw"
          className=" aspect-auto w-full h-full rounded  sm:mx-auto 2xl:rounded-2xl shadow-2xl object-cover"
        />
      </div>
      <Reveal className="sticky xl:top-32 lg:top-28 lg:w-[45%] w-full  self-start">
        <Info />
      </Reveal>
    </section>
  );
}
