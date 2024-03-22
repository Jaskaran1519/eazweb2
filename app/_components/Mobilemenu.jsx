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
            ? "absolute top-0 left-[-10%]  duration-300 ease-in-out"
            : "absolute top-0 left-[-100%] duration-300 ease-in-out"
        }  w-[80%]  h-screen bg-gray-50 p-[10%] `}
      >
        {isOpen && (
          <div className="text-[1.5rem] leading-loose">
            <Link onClick={() => setIsOpen(!isOpen)} href="/">
              Home
            </Link>
            <hr />
            <Link onClick={() => setIsOpen(!isOpen)} href="/project">
              <h1>Our Work</h1>
            </Link>
            <hr />
            <Link onClick={() => setIsOpen(!isOpen)} href="/about">
              <h1>About Us</h1>
            </Link>
            <hr />
            <Link onClick={() => setIsOpen(!isOpen)} href="/contact">
              <h1>Contact Us</h1>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Nav;
