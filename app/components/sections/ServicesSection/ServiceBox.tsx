/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

export default function ServicesBox() {
  return (
    <div className="lg:h-fit h-full w-full bg-[#E5E3DB] p-5 rounded-lg shadow-2xl">
      <div className="flex lg:justify-around gap-5 lg:items-center flex-col lg:flex-row">
        <div className="flex-grow">
          <h2 className="lg:text-3xl underline font-bold mb-5 text-xl">
            Web Development
          </h2>
          <p className="lg:text-3xl font-semibold lg:w-[60%] w-full text-xl">
            I craft personalized websites that reflect your brand's vibe.
            Focusing on scalability, performance and accessibility, your site
            becomes a unique online destination. With care and creativity, I'll
            build a site that feels like home.
          </p>
        </div>

        <div className="flex justify-center gap-5 flex-grow">
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[30%] object-cover "
          />
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[30%] object-cover "
          />
          <Image
            src={"/images/library.png"}
            alt="avatar"
            width={250}
            height={250}
            className="rounded-2xl w-[30%] object-cover "
          />
        </div>
      </div>
    </div>
  );
}
