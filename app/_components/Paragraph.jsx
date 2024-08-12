"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Paragraph = () => {
  const paragraph =
    "Your online presence deserves a standing ovation. We build websites that are stunning, user-friendly, and drive results. Let's create something remarkable.";
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.2"],
  });
  const words = paragraph.split(" ");

  return (
    <div className="w-[90%] mx-auto  h-auto my-[20vh] flex justify-center items-center ">
      <div
        className="text-[2em] font-medium text-primary p-3   mx-auto md:w-[70%] flex flex-wrap"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};

export default Paragraph;

const Word = ({ children, progress, range }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mt-2 mr-2 relative">
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative ">
      <span className="absolute opacity-10 ">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
