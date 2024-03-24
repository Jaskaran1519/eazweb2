"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AnimatePresence>
      <html lang="en">
        <body className={inter.className}>
          <motion.div className="m-0">
            {children}
            <motion.div
              className="slide-in"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>{" "}
            <motion.div
              className="slide-out"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <Footer />
          </motion.div>
        </body>
      </html>
    </AnimatePresence>
  );
}
