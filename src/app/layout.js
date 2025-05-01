import Navbar from "@/app/components/Navbar"; // Import Navbar
import Footer from "@/app/components/Footer";
import Transition from "@/app/components/Transition";

import { Geist, Geist_Mono, Jacquard_24 as Jacquard, Cinzel, IM_Fell_DW_Pica_SC as Fell, Tinos as Tinos } from "next/font/google";
import "./globals.css";

const fell = Fell({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fell',
});

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tinos',
});

const jacquard = Jacquard({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jacquard',
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ['400'],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaliq Lowe | Portrait Photography",
  description: "Discover the portrait photography of Kaliq Lowe — refined, expressive, and crafted to highlight your unique character and story.",
  icons: {
    icon: [
      { url: '/images/favicons/favicon.ico', sizes: 'any' },
      { url: '/images/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/favicons/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/favicons/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/images/favicons/apple-touch-icon.png',
  },
  manifest: '/images/favicons/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jacquard.variable} ${cinzel.variable} ${fell.variable} ${tinos.variable} antialiased`}>
        <Navbar />  {/* Navbar visible on all pages */}
        <div className="h-16"/>
        {children}
        <Footer />
        <Transition />
      </body>
    </html>
  );
}
