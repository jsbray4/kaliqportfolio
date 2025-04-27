"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Calculate aspect ratio: width / height
      const aspectRatio = window.innerWidth / window.innerHeight;

      // Check for horizontal phones (aspect ratio > 2, typically 2:1 or taller)
      setIsHorizontal(aspectRatio > 1); // If width is less than half of height
    };

    // Initial check
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow h-screen relative">
        <div className="absolute inset-0">
          {/* Render different images for horizontal screens */}
          <Image
            src={isHorizontal 
              ? '/images/portfolio/home/IMG_6019.jpg'  // For computers
              : '/images/portfolio/home/IMG_6019_Vertical.jpg'      // phones
            }
            alt="Background image of Ella Peach and Care <3"
            fill
            className="object-cover object-center lg:object-[center_28%]"
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </main>
    </div>
  );
}
