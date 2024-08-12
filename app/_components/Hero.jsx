"use client";
import Image from "next/image";
import React from "react";
import { Lobster_Two, Righteous } from "next/font/google";
import Herobutton from "./Herobutton";
import Righthero from "./righthero/Righthero";

const hero = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const smallhero = Lobster_Two({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto h-auto md:flex justify-between items-center">
      <div className=" flex flex-col z-0  px-2 ">
        <div className="w-full h-16"></div>
        <h1
          className={`${smallhero.className} text-red-300 md:px-[5%] text-[2rem]`}
        >
          We do it all
        </h1>
        <div className="md:pl-[10%] mt-5 mb-20">
          <div
            className={` ${hero.className} text-[8vw] md:text-[5vw] text-white md:leading-tight leading-none`}
          >
            The only Design team
            <br />
            <span className="flex gap-3 items-center">
              <Image
                src="/herotext.jpg"
                width={50}
                height={50}
                alt=""
                className="w-[20vw] h-8 md:h-10 lg:h-16 -mb-3 rounded-xl"
              />{" "}
              you need.
            </span>
          </div>

          <h1 className=" mt-8 text-gray-100 text-[1.25rem] mb-10">
            We are a creative team of designers, developers, strategists, and
            producers <br /> building elevated websites based in Chandigarh.
          </h1>
          
        </div>
      </div>
      <Righthero />
    </div>
  );
};

export default Hero;
