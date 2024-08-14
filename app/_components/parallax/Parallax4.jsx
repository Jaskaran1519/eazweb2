"use client";
import { useRef } from "react";
import Picture1 from "../../../public/projects/ricaverse/large.webp";
import Picture2 from "../../../public/projects/ricaverse/medium.webp";
import Picture3 from "../../../public/projects/ricaverse/small.webp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const word = "with framer-motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  return (
    <div
      ref={container}
      className="my-[10vh] h-[30vh] md:h-[50vh]  lg:h-[50vh] xl:h-screen  relative flex justify-center w-full"
    >
      {images.map(({ src, y }, i) => (
        <motion.div
          style={{ y }}
          key={`i_${i}`}
          className={`absolute ${
            i === 0 ? "w-[80%] md:w-[70%] lg:w-[80%] xl:w-[60%] z-[1] shadow-lg" : ""
          } ${
            i === 1 ? "left-[60vw] top-[5vh] w-[20vw] md:w-[20vw] lg:w-[20vw] xl:w-[15vw] z-[2] shadow-lg" : ""
          } ${
            i === 2
              ? " left-[10vw] xl:left-[17vw]  top-[20vh] xl:top-[30vh] w-[25vw] md:w-[30vw] lg:w-[30vw] xl:w-[20vw] z-[3] shadow-lg"
              : ""
          }`}
        >
          <Image src={src} placeholder="blur" alt="image" className="" />
        </motion.div>
      ))}
    </div>
  );
}
