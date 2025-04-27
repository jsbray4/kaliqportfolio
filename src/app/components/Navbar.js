"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
      setMenuOpen(false);
      setMobileDropdownOpen(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    setMenuOpen(false);
    setMobileDropdownOpen(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 bg-white p-4 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-cinzel text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 whitespace-nowrap">
          Kaliq Lowe
        </h1>

        {/* Navigation */}
        <nav>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 md:space-x-20 text-gray-800 tracking-[.15em] items-center">
            <li className="hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <div className="cursor-pointer hover:text-gray-500">
                Portfolio
              </div>

              {/* Desktop Dropdown */}
              <ul className="absolute left-0 mt-2 w-54 bg-white overflow-hidden text-md whitespace-nowrap transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/portfolio/thecinematiccut">The Cinematic Cut</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/portfolio/loveinfocus">Love in Focus</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/portfolio/rollthecredits">Roll The Credits</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="ml-auto">
              <Link
                href="https://www.instagram.com/kaliq.the.lowest.xposure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-500 transition-colors" />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {isMobile && (
            <ul
              className={`absolute left-0 w-full bg-white p-4 flex flex-col items-center space-y-4 transition-all duration-300 text-gray-800 tracking-[.15em] ${
                isMenuOpen ? "block" : "hidden"
              } top-full`}
            >
              <li className="hover:text-gray-500">
                <Link href="/">Home</Link>
              </li>

              {/* Mobile Portfolio Dropdown */}
              <li className="relative flex flex-col items-center">
                <div
                  className="cursor-pointer hover:text-gray-500 flex items-center"
                  onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Portfolio
                </div>

                {/* Dropdown Items */}
                <ul
                  className={`transition-all duration-300 flex flex-col items-center space-y-2 overflow-hidden ${
                    isMobileDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="hover:text-gray-500 pt-2">
                    <Link href="/portfolio/thecinematiccut">The Cinematic Cut</Link>
                  </li>
                  <li className="hover:text-gray-500">
                    <Link href="/portfolio/loveinfocus">Love in Focus</Link>
                  </li>
                  <li className="hover:text-gray-500">
                    <Link href="/portfolio/rollthecredits">Roll The Credits</Link>
                  </li>
                </ul>
              </li>

              <li className="hover:text-gray-500">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/kaliq.the.lowest.xposure/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-gray-500 transition-colors" />
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-1 bg-gray-800 mb-2 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-1 bg-gray-800 mb-2 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-1 bg-gray-800 mb-2 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>
    </header>
  );
}
