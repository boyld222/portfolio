"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "../Navbar/Navbar";
import Button from "./Button";
import AnimatedText from "./AnimatedText";
import { RouteType } from "../Navbar/data";

const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const variant = {
  open: {
    width: 400,
    height: 600,
    top: "-28px",
    right: "-28px",
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
  const routes: RouteType[] = [
    {
      title: "services",
      href: "/services",
    },
    {
      title: "works",
      href: "/works",
    },
    {
      title: "about",
      href: "#about",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ];
  return (
    <div className="fixed top-0 py-5 px-5 w-full h-fit flex items-center justify-between bg-[#f8f8f8] z-50">
      <span
        className={`text-black text-2xl font-semibold ${jetBrains_mono.className} `}
      >
        letrikiet
      </span>
      {/* Web Menu */}
      <div className="hidden gap-6 md:flex">
        {routes.map((route, index) => {
          return (
            <Link key={index} className="relative" href={route.href}>
              <AnimatedText>
                <span className="tracking-[0.25em] ">{route.title}</span>
              </AnimatedText>
            </Link>
          );
        })}
      </div>
      {/* Mobile Menu */}
      <div className="relative w-fit h-[64px] block md:hidden">
        <div className="absolute top-0 right-0">
          <motion.div
            variants={variant}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            className="bg-black h-[600px] w-[450px] rounded-[25px] relative"
          >
            <AnimatePresence>
              {isActive && <Navbar routes={routes} />}
            </AnimatePresence>
          </motion.div>
          <Button setisActive={setisActive} isActive={isActive} />
        </div>
      </div>
    </div>
  );
}
