"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Paragraph from "./_components/Paragraph";
import Stats from "./_components/Stats";
import Lenis from "@studio-freight/lenis";
import Review1 from "./_components/Review1";
import Parallax1 from "./_components/parallax/Parallax1";
import Parallax2 from "./_components/parallax/Parallax2";
import Parallax3 from "./_components/parallax/Parallax3";
import Parallax4 from "./_components/parallax/Parallax4";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full z-0 bg-[#FFFFF2] overflow-hidden">
      <div className="bg-[#1f1e1c]">
        <Header />
      </div>
      <div className="bg-[#1f1e1c] z-10 w-full xl:min-h-[90vh]  overflow-hidden">
        <Hero />
      </div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Stats />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Paragraph />
      </motion.div>
      <Parallax1 />
      <Parallax2 />
      <Parallax3 />
      <Parallax4 />
      <Link href="/project">
        <button className="-mt-10 mx-auto border-[1px] border-black px-5 py-2 rounded-lg flex justify-center items-center">
          More Work
        </button>
      </Link>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Review1 />
      </motion.div>
    </div>
  );
};

export default Page;
