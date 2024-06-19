"use client";
import React, { useEffect } from "react";
import Header from "../_components/Header";
import Lenis from "@studio-freight/lenis";

const layout = ({ children }) => {
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
    <div className="w-[90%] mx-auto">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default layout;
