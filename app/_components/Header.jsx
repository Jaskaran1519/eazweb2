"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobilemenu from "./Mobilemenu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="md:px-[10%] mx-auto h-auto bg-white bg-opacity-60  backdrop-blur-sm  filter">
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.2 }}
        className=" flex justify-between items-center p-3"
      >
        <div className="overflow-hidden ">
          <Link href="/">
            <Image
              className="h-auto"
              src="/logo.png"
              width={120}
              height={120}
              alt="/"
            />
          </Link>
        </div>
        <div className=" justify-between p-3 items-center text-primary gap-5 hidden sm:flex font-semibold">
          <h3>
            <Link href="/service">Services</Link>
          </h3>
          <h3>
            <Link href="/about">About Us</Link>
          </h3>
          <h3>
            <Link href="/project">Our Work</Link>
          </h3>
        </div>
        <div className="hidden sm:flex">
          <Link href="/contact">
            <button className="px-3 py-2 bg-primary rounded-lg  text-white hover:bg-hoverprimary hover:text-white duration-200 font-bold">
              Talk to Us
            </button>
          </Link>
        </div>
        <Mobilemenu />
      </motion.div>
      <hr className="" />
    </div>
  );
};

export default Header;
