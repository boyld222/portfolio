import React from "react";
import { motion } from "framer-motion";

import "./Title.css";
import Reveal from "../Reveal/Reveal";
const Title = () => {
  const bigText = [
    {
      firstLetter: "L",
      other: "essons",
    },
    {
      firstLetter: "T",
      other: "rying",
    },
    {
      firstLetter: "K",
      other: "nowledge",
    },
  ];

  return (
    <div className="flex flex-col gap-1">
      {bigText.map((text, index) => (
        <Reveal key={index} custom={index}>
          <>
            <span className="md:text-9xl sm:text-7xl text-5xl font-bold">
              {text.firstLetter}
            </span>
            <span
              className="md:text-8xl sm:text-6xl text-4xl  first-letter:pr-1 uppercase font-extrabold transparent-border-text"
              key={text.other}
            >
              {text.other}
            </span>
          </>
        </Reveal>
      ))}
    </div>
  );
};

export default Title;
