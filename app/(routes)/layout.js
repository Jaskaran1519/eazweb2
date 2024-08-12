"use client";
import React, { useEffect } from "react";
import Secondaryheader from '../_components/Secondaryheader' 
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
    <>
      <div className="sticky top-0 z-50">
        <Secondaryheader />
      </div>
      <div  className="w-[90%] mx-auto">

      {children}
      </div>
    </>
  );
};

export default layout;
