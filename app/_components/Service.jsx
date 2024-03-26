"use client";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);
  const [ishover3, setIshover3] = useState(false);
  const [ishover4, setIshover4] = useState(false);
  const [ishover5, setIshover5] = useState(false);

  return (
    <div className="non-selectable w-[80%] mx-auto md:flex justify-between items-center mt-[5vh] xl:mt-[20vh]">
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-full sm:w-[30%] "
      >
        <h1 className="text-[3rem] font-bold text-primary">Services</h1>
        <h2 className="hidden md:flex">
          We provide all services related to web and social media content
          creation
        </h2>
      </motion.div>
      <div className=" w-full md:w-[60%] items-center">
        <div className="non-selectable md:grid grid-cols-9 grid-rows-6 md:w-[50vw] gap-x-2 gap-y-0 relative">
          <div
            className={`col-span-3 h-[15vh]  text-center flex justify-center items-center my-2 md:h-[15vw] hover:bg-hoverprimary duration-500 row-span-3 bg-opacity-50 backdrop-blur-lg   bg-gray-300  rounded-xl`}
            onMouseEnter={() => setIshover1(true)}
            onMouseLeave={() => setIshover1(false)}
          >
            <div>
              {ishover1 ? null : (
                <h1 className="text-[1.5rem]  font-semibold   text-primary ">
                  UI/UX Design
                </h1>
              )}
              {ishover1 ? (
                <h2 className=" non-selectable text-[1rem] w-[80%]  mx-auto text-white pt-2">
                  We make industry standard designs, you can check our work
                </h2>
              ) : null}
            </div>
          </div>
          <div
            className={`col-span-3 h-[15vh] my-2 text-center flex justify-center items-center md:h-[15vw] hover:bg-hoverprimary duration-200 row-span-3 bg-opacity-50 backdrop-blur-lg   bg-gray-300  rounded-xl`}
            onMouseEnter={() => setIshover2(true)}
            onMouseLeave={() => setIshover2(false)}
          >
            <div className="relative w-full">
              {ishover2 ? null : (
                <h1 className="text-[1.5rem]  font-semibold   text-primary ">
                  Web Development
                </h1>
              )}
              {ishover2 ? (
                <h2 className=" non-selectable text-[1rem] w-[80%]  mx-auto text-white pt-2">
                  Fast, Secure and Attractive website using latest technologies
                </h2>
              ) : null}
            </div>
          </div>
          <div
            className={`col-span-3 h-[15vh] my-2 flex text-center justify-center items-center md:h-[15vw] hover:bg-hoverprimary duration-200 row-span-3 bg-opacity-50 backdrop-blur-lg   bg-gray-300  rounded-xl`}
            onMouseEnter={() => setIshover3(true)}
            onMouseLeave={() => setIshover3(false)}
          >
            <div>
              {ishover3 ? null : (
                <h1 className="text-[1.5rem]  font-semibold   text-primary ">
                  Video Editing
                </h1>
              )}
              {ishover3 ? (
                <h2 className="non-selectable text-[1rem] w-[80%]  mx-auto text-white pt-2">
                  Creative Videos and reels editing
                </h2>
              ) : null}
            </div>
          </div>
          <div
            className="col-span-5 text-center flex justify-center items-center h-[15vh] my-2 md:h-[15vw] row-span-3 bg-gray-300 bg-opacity-50 backdrop-blur-lg  hover:bg-hoverprimary duration-200  rounded-xl"
            onMouseEnter={() => setIshover4(true)}
            onMouseLeave={() => setIshover4(false)}
          >
            <div>
              {ishover4 ? null : (
                <h1 className="non-selectable text-[1.5rem]  font-semibold   text-primary ">
                  Social Media Management
                </h1>
              )}
              {ishover4 ? (
                <h2 className="non-selectable text-[1rem] w-[80%]  mx-auto text-white pt-2">
                  Managing social media accounts to maximize reach
                </h2>
              ) : null}
            </div>
          </div>
          <div
            className="col-span-4 text-center flex justify-center items-center h-[15vh] my-2 md:h-[15vw] row-span-3 bg-gray-300 bg-opacity-50 backdrop-blur-lg  hover:bg-hoverprimary duration-200  rounded-xl"
            onMouseEnter={() => setIshover5(true)}
            onMouseLeave={() => setIshover5(false)}
          >
            <div>
              {ishover5 ? null : (
                <h1 className="text-[1.5rem]  font-semibold   text-primary ">
                  SEO Optimisation
                </h1>
              )}
              {ishover5 ? (
                <h2 className="non-selectable text-[1rem] w-[80%]  mx-auto text-white pt-2">
                  Improving your websites performance and searc engine ranking
                </h2>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
{
  /* <h1
              className={`text-[1.5rem] font-semibold duration-200 text-primary ${
                ishover ? `text-white` : null
              }`}
            >
              Video Editing
            </h1> */
}
