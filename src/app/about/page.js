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
          src="/images/portfolio/about/IMG_2707.jpg"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-8 relative">
        {/* Animated image block */}
        <motion.div
          layout
          className="relative w-full aspect-[4/5] scale-80"
          initial={{ x: -1000, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <img
            src="/images/portfolio/about/IMG_3166.jpg"
            alt="Profile"
            className="object-cover rounded-lg border-4 border-white"
          />
        </motion.div>

        {/* Animated text block */}
        <motion.div
          layout
          className="text-gray-700 bg-white/90 rounded-lg px-6 py-4 border-4 border-white font-fell w-full"
          initial={{ x: 1000, opacity: 0.95 }}
          animate={{ x: 0, opacity: 0.95 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            Kaliq Lowe <br/> Photographer | Storyteller | Visual Artist<br/>
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            <br/>Born in New York and raised in Antigua, I’m a portrait photographer based in Orlando, Florida. I’m passionate about telling stories through photography, capturing the raw emotions and unique moments that define who we are. Every portrait is an opportunity to preserve a connection, a story, and a memory.
            <br/><br/>Let’s make something unforgettable together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
