"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  HiMiniArrowsPointingIn,
  HiMiniArrowsPointingOut,
} from "react-icons/hi2";

export default function Button({
  isActive,
  setisActive,
}: {
  isActive: boolean;
  setisActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="rounded-[25px] w-16 h-16  overflow-hidden cursor-pointer absolute top-0 right-0"
      onClick={() => setisActive(!isActive)}
    >
      <motion.div
        className="h-full w-full relative"
        animate={{
          top: isActive ? "-100%" : "0",
        }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
      >
        <div className=" bg-black h-full w-full text-center uppercase group font-semibold text-white">
          <div className="h-full w-full text-center flex items-center justify-center transition-all	ease-in-expo duration-[750ms] group-hover:rotate-x-90 transform-style-preserve-3d">
            <p className="group-hover:-translate-y-full transition-all ease-in-expo duration-[750ms] group-hover:opacity-0">
              <HiMiniArrowsPointingOut size={24} />
            </p>
            <p className="absolute -rotate-x-90-translate-y-12 transition-all ease-in-expo duration-[750ms] opacity-0 group-hover:opacity-100 origin-bottom-center">
              <HiMiniArrowsPointingOut size={24} />
            </p>
          </div>
        </div>
        <div className=" bg-black h-full w-full text-center uppercase group text-white font-semibold">
          <div className="h-full w-full text-center flex items-center justify-center transition-all	ease-in-expo duration-[750ms] group-hover:rotate-x-90 transform-style-preserve-3d">
            <p className="group-hover:-translate-y-full transition-all ease-in-expo duration-[750ms] group-hover:opacity-0">
              <HiMiniArrowsPointingIn size={24} />
            </p>
            <p className="absolute -rotate-x-90-translate-y-12 transition-all ease-in-expo duration-[750ms] opacity-0 group-hover:opacity-100 origin-bottom-center">
              <HiMiniArrowsPointingIn size={24} />
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
