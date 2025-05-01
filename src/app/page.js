"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Calculate aspect ratio: width / height
      const aspectRatio = window.innerWidth / window.innerHeight;

      // Check for horizontal phones (aspect ratio > 1, typically 2:1 or taller)
      setIsHorizontal(aspectRatio > 1); // If width is greater than height
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
          <img
            src={isHorizontal 
              ? '/images/home/IMG_6019.jpg'  // For horizontal screens
              : '/images/home/IMG_6019_Vertical.jpg' // For vertical screens
            }
            alt="Background image of Ella Peach and Care <3"
            className="object-cover object-center lg:object-[center_28%] w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
