"use client";
import React, { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const variant = {
  open: {
    width: 400,
    height: 600,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 64,
    height: 64,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="sticky top-0 py-10 px-20 w-full h-fit flex items  backdrop-blur-sm z-50">
      <span className="text-black text-3xl font-semibold font-mono">
        trikiet.le.16
      </span>
      <div className="absolute right-20">
        <div>
          <motion.div
            variants={variant}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            className="bg-black h-[600px] w-[450px] rounded-[25px] relative"
          >
            <AnimatePresence>{isActive && <Navbar />}</AnimatePresence>
          </motion.div>
          <Button setisActive={setisActive} isActive={isActive} />
        </div>
      </div>
    </div>
  );
}
