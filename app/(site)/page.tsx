"use client";

import { useRef } from "react";
import About from "../components/sections/AboutSection";
import Contact from "../components/sections/ContactSection";
import Hero from "../components/sections/HeroSection";
import Services from "../components/sections/ServicesSection";
import Works from "../components/sections/WorkSection";
import { useScroll } from "framer-motion";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={container} className="bg-black h-fit relative">
      <Hero scrollYProgress={scrollYProgress} />
      <Works />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
