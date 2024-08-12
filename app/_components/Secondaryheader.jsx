"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobilemenu from "./Mobilemenu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" md:px-[5%] w-full mx-auto h-auto sticky top-0  bg-opacity-60  backdrop-blur-sm  filter ">
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.2 }}
        className=" flex justify-between items-center  z-50"
      >
        <div className="overflow-hidden ">
          <Link href="/">
            <Image
              className="h-auto"
              src="/logo.png"
              width={150}
              height={150}
              alt="/"
              priority
            />
          </Link>
        </div>
        <div className="bg-[url('/menusvg.svg')] w-20 h-20 flex justify-center items-center">
          <Mobilemenu />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
