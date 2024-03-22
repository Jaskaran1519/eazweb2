"use client";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className=" md:hidden flex flex-col justify-center items-center"
      >
        <span
          className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
      <div
        className={`${
          isOpen
            ? " w-[80%] duration-300 ease-in-out"
            : "w-0 duration-300 ease-in-out"
        }  absolute top-0 left-[-10%] h-screen bg-gray-50 `}
      >
        <Link href="/">Home</Link>
        <hr />
        <Link href="/project">Our Work</Link>
        <hr />
        <Link href="/about">About Us</Link>
        <hr />
        <Link href="/contact">Contact Us</Link>
      </div>
    </>
  );
};
export default Nav;
