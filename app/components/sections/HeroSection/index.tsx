"use client";
import HeroImage from "@/public/images/hero-image-2.png";
import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {
  scrollYProgress: MotionValue<number>;
}
export default function Hero({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const textIntroduce =
    "“A front-end developer passionate about creating an appeal outstanding UI that enhance the UX. 🚀”";

  return (
    <motion.section
      id="hero"
      style={{ scale }}
      className="text-black-300 h-screen sticky top-0 bg-white z-0 py-10 px-5"
    >
      <div className="flex justify-center lg:justify-around lg:gap-0 items-center h-full flex-col-reverse lg:flex-row gap-10">
        <div className="flex flex-col gap-10">
          <span>
            <h1 className="lg:text-7xl text-5xl font-bold uppercase">
              Hi, there
            </h1>
            <h1 className="lg:text-7xl text-5xl font-bold">
              TRI KIET IS RIGHT HERE !
            </h1>
          </span>
          <span>
            <p className="lg:text-3xl text-xl max-w-[33ch]">{textIntroduce}</p>
          </span>
          <button className="w-fit p-5 bg-black text-gray-300 font-bold rounded-sm under hover:underline hover:text-white">
            <a
              href="/CV-LeTriKiet-Frontend-Dev.pdf"
              download="CV-LeTriKiet-Frontend-Dev"
            >
              Download My CV
            </a>
          </button>
        </div>

        <div className="md:w-[400px] md:h-[400px]  w-[250px] h-[250px] relative overflow-hidden rounded-full shadow-xl">
          <Image
            src={HeroImage}
            alt="avatar"
            placeholder="blur"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </motion.section>
  );
}
