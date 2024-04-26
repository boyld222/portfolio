"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactElement;
  className?: string;
  classNameItem?: string;
  custom?: number;
}

export default function Reveal({
  children,
  className,
  classNameItem,
  custom = 1,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  const variant = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        custom={custom}
        className={classNameItem}
        variants={variant}
        initial="initial"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
}
