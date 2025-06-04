import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-tinos">
        {/* Left Section: Navigation Links (hidden on mobile) */}
        <div className="flex items-center hidden md:flex text-xl">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link href="/portfolio/thecinematiccut" className="hover:text-gray-400">Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-gray-400">Pricing</Link></li>  
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>

          </ul>
        </div>

        {/* Middle Section: Social Media Links (hidden on mobile) */}
        <div className="flex flex-col items-center space-y-4 hidden md:flex">
          <h3 className="text-xl mb-4">Socials</h3>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/kaliq.the.lowest.xposure/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Right Section: Contact Info (hidden on mobile) */}
        <div className="flex items-center hidden md:flex">
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <p className="text-gray-400 text-lg">
              For any and all inquiries, please contact{" "}
              <a href="mailto:kaliqlowe@gmail.com" className="text-blue-400 hover:text-blue-500">kaliqlowe@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright (always visible) */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 Kaliq Lowe. All rights reserved.</p>
      </div>
    </footer>
  );
}
