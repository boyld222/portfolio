"use client";
import { motion } from "framer-motion";

import React, { useRef, useState } from "react";
interface Props {
  children: React.ReactNode;
}
export default function FramerMagnetic({ children }: Props) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;
  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = (e: any) => {
    setPosition({ x: 0, y: 0 });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
