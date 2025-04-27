'use client';

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Transition(){
    const pathname = usePathname(); // Detects route changes

    return(
        <AnimatePresence mode="wait">
        {/* Page Transition Overlay */}
        <motion.div
          key={pathname} // Runs on every route change
          className="fixed inset-0 bg-white z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
        //   exit={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "circIn" }}
        />
      </AnimatePresence>
    )
}