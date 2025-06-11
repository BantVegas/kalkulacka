"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="
        flex flex-col items-center justify-center text-center 
        py-10 sm:py-16 md:py-24 w-full
      "
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="
          text-2xl 
          xs:text-3xl
          sm:text-4xl 
          md:text-6xl 
          font-extrabold 
          bg-gradient-to-r from-sky-700 via-indigo-500 to-fuchsia-500 
          bg-clip-text text-transparent drop-shadow-lg
          px-3 md:px-0
          leading-tight sm:leading-tight md:leading-none
          max-w-[95vw] sm:max-w-3xl
        "
        initial={{ letterSpacing: "0.05em" }}
        animate={{ letterSpacing: "0.12em" }}
        transition={{ delay: 0.2, duration: 1.2 }}
      >
        Univerzálna finančná kalkulačka
      </motion.h1>
    </motion.section>
  );
}
