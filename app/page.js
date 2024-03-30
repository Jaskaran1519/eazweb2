"use client";
import React, { useEffect } from "react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Paragraph from "./_components/Paragraph";
import Stats from "./_components/Stats";
import Lenis from "@studio-freight/lenis";
import Review from "./_components/Review";
import Slider from "./_components/Slider";
const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="w-[90%] mx-auto z-0 ">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <Stats />
      <Paragraph />
      <Slider />
      <Review />
    </div>
  );
};

export default page;
