"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Wait until after hydration

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-100 brightness-150">
        <img
          src="/images/about/IMG_2707.jpg"
          alt="Background"
          className="object-cover object-center w-full h-full dark:opacity-70"
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-8 relative pb-20">
        {/* Animated image block */}
        <motion.div
          layout
          className="relative w-full aspect-[4/5] scale-80"
          initial={{ x: -1000, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <img
            src="/images/about/IMG_3166.jpg"
            alt="Profile"
            className="object-cover rounded-lg border-4 border-white dark:border-gray-900"
          />
        </motion.div>

        {/* Animated text block */}
        <motion.div
          layout
          className="text-gray-700 bg-white/90 dark:bg-gray-900/90 dark:text-gray-200 rounded-lg px-6 py-10 font-tinos w-full"
          initial={{ x: 1000, opacity: 0.95 }}
          animate={{ x: 0, opacity: 0.95 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            Kaliq Lowe <br/> Photographer | Storyteller | Visual Artist<br/>
          </p>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed">
            <br/>Born in New York and raised in Antigua, I’m a portrait photographer based in Orlando, Florida. I’m passionate about telling stories through photography, capturing the raw emotions and unique moments that define who we are. Every portrait is an opportunity to preserve a connection, a story, and a memory.
            <br/><br/>Let’s make something unforgettable together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
