"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Paragraph from "./_components/Paragraph";
import Stats from "./_components/Stats";
import Lenis from "@studio-freight/lenis";
import Review1 from "./_components/Review1";
import Slider from "./_components/Slider";

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
    <div className="w-full z-0">
      <div className="bg-[#1f1e1c] z-10 w-full relative overflow-hidden">
        <Header />
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

      {/* <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Slider />
      </motion.div> */}

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
