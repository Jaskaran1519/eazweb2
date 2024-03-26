"use client";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="text-primary">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto  mt-[10vh] md:w-[70%] xl:w-[60%]"
      >
        <h1 className="text-[3rem] text-center  font-semibold font-herofont leading-tight">
          We Analyse, Create and Innovate
        </h1>
        <h2 className=" w-[75%] hidden md:flex mt-4 mx-auto text-[1rem] text-center font-light">
          We don't just build websites, we build growth engines. Partner with
          our design and development squad to elevate your online presence.
        </h2>
      </motion.div>
      <div className="  mt-5 flex justify-center items-center">
        <div className=" block sm:flex sm:gap-1 lg:gap-8 ">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-4 animate-fadedown hidden scale-100 hover:scale-105 duration-150 lg:flex lg:w-[20vw] lg:h-[20vw] shadow-2xl lg:rounded-xl xl:rounded-[5vh]"
          >
            <div className="w-[80%] mx-auto  mt-6">
              <div className="inline-block">
                <h1 className="text-lg font-semibold inline-block">
                  We know what we are doing
                  <ArrowDown className="inline-block align-middle" />
                </h1>
              </div>
              <div className="mt-4">
                <div className="flex gap-4 ">
                  <h1 className="text-primary text-[3vw]">50+</h1>
                  <h4 className="flex items-end">Projects completed</h4>
                </div>
                <div className="flex gap-4 ">
                  <h1 className="text-primary text-[3vw]">2y+</h1>
                  <h4 className="flex items-end">Developing Experience</h4>
                </div>
              </div>

              <div className="mt-5  "></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className=" overflow-hidden  flex scale-100 hover:scale-105 duration-150 relative my-4  w-[80vw] h-[70vw]  rounded-xl lg:w-[30vw] lg:h-[27vw] xl:h-[23vw] border shadow-2xl xl:rounded-[5vh]"
          >
            <Image
              src="/centerbox.svg"
              layout="fill"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="/"
            />
            <div className="w-[80%]  absolute translate-x-[12.5%] top-4">
              <h1 className="flex justify-center text-[2rem] text-primary font-bold">
                Lets Connect
              </h1>
              <div className="flex justify-center gap-[15%] mt-[20%] ">
                <Image
                  src="/instagram.svg"
                  className="rounded-lg"
                  width={40}
                  height={40}
                  alt="/"
                />
                <Image
                  src="/whatsapp.svg"
                  className="rounded-lg"
                  width={40}
                  height={40}
                  alt="/"
                />
              </div>
              <div className="mt-[5%] flex justify-between">
                <Image
                  src="/gmail.svg"
                  className="rounded-lg"
                  width={55}
                  height={55}
                  alt="/"
                />
                <Image
                  src="/x.png"
                  className="rounded-lg"
                  width={55}
                  height={55}
                  alt="/"
                />
              </div>
              <div className="flex justify-center">
                <button className="w-[35%] p-3 bg-primary hover:bg-hoverprimary text-white font-bold rounded-[2vh]">
                  <Link href="/contact">Lets Go</Link>
                </button>
              </div>
            </div>
          </motion.div>
          <Link href="/project">
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="my-4 overflow-hidden scale-100 hover:scale-105 duration-150  relative  lg:flex lg:w-[20vw] lg:h-[20vw] border  shadow-2xl lg:rounded-xl xl:rounded-[5vh]"
            >
              <Image
                src="/rightbox.jpg"
                layout="fill"
                className="absolute  inset-0  object-cover z-0 "
                alt="/"
              />
              <div className="absolute gap-1 top-5 right-3 flex cursor-pointer">
                <h1 className="text-lg font-semibold text-primary">
                  All Projects
                </h1>
                <ArrowUpRight />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
