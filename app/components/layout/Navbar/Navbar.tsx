"use client";
import React from "react";
import { RouteType, footerLinks } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";

const variant = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 80,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

export default function Navbar({ routes }: { routes: RouteType[] }) {
  return (
    <div className="flex flex-col box-border px-10 pt-20 pb-12 h-full justify-between">
      <div className="flex flex-col gap-5">
        {routes.map((route, index) => (
          <div key={`b_${index}`}>
            <motion.div
              variants={variant}
              className="text-4xl"
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={route.href} className="text-white">
                {route.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between">
        {footerLinks.map((item, index) => (
          <div key={`b_${index}`} className="w-[50%]">
            <motion.div
              variants={slideIn}
              className="text-lg"
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link
                href={item.href}
                target={item.blank ? "_blank" : "_self"}
                className="text-white"
              >
                {item.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
