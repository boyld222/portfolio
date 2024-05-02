/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";

export default function ServicesBox() {
  return (
    <div className="lg:h-[300px] h-full w-full bg-[#E5E3DB] p-5 rounded-lg shadow-2xl">
      <h2 className="lg:text-3xl underline font-bold mb-5 text-xl">
        Web Development
      </h2>
      <div className="flex lg:justify-between  gap-10 lg:items-center flex-col lg:flex-row">
        <p className="lg:text-3xl font-semibold lg:w-[60%] w-full text-xl">
          I craft personalized websites that reflect your brand's vibe. Focusing
          on scalability, performance and accessibility, your site becomes a
          unique online destination. With care and creativity, I'll build a site
          that feels like home, welcoming visitors with open arms and leaving a
          smile on their faces.
        </p>
        <div className="flex justify-center gap-5 lg:w-[40%] w-full">
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[20%] object-cover "
          />
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[20%] object-cover "
          />
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[20%] object-cover "
          />
        </div>
      </div>
    </div>
  );
}