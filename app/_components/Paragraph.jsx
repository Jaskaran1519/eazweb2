"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { Edu_NSW_ACT_Foundation } from "next/font/google";
import React, { useRef } from "react";
const herofont = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-herofont",
});

const Paragraph = () => {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, officiis tempora nobis nihil atque iste sed voluptatibus, ea mollitia molestias adipisci consequatur, labore rerum cum?";
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.2"],
  });
  const words = paragraph.split(" ");

  return (
    <div className="w-full  h-auto my-[20vh] flex justify-center items-center ">
      <div
        className="text-[2em]  text-primary p-3   mx-auto md:w-[70%] flex flex-wrap"
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
