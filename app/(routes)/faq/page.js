"use client";
import { useState } from "react";

const Accordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl  mt-[5vh] text-primary font-semibold  leading-1.5">
        Some frequently asked questions
      </h2>

      <details
        className="w-3/4 mx-auto mt-[5vh] p-10 border border-gray-200 rounded-lg transition-all duration-500"
        open={isOpen1}
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>How much do you charge for a website?</span>
          <svg
            className={`control-icon ${
              isOpen1 ? "control-icon-close" : "control-icon-expand"
            }`}
            width="24"
            height="24"
            role="presentation"
          >
            <use xlinkHref={`${isOpen1 ? "close" : "expand-more"}`} />
          </svg>
        </summary>
        <p className="text-gray-600 mt-4">
          Depends on the amount of works that we have to give in. We usually
          charge around 10k for a basic portfolio website and around 30k for an
          ecommerce website.
        </p>
      </details>

      <details
        className="w-3/4 mx-auto  p-10 border border-gray-200 rounded-lg transition-all duration-300"
        open={isOpen2}
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>What services do you offer? </span>
          <svg
            className={`control-icon ${
              isOpen2 ? "control-icon-close" : "control-icon-expand"
            }`}
            width="24"
            height="24"
            role="presentation"
          >
            <use xlinkHref="#${isOpen2 ? 'close' : 'expand-more'}" />
          </svg>
        </summary>
        <p className="text-gray-600 mt-4">
          We are specialised in web development, SEO optimisation,graphics
          design and video editing.
        </p>
      </details>
      <details
        className="w-3/4 mx-auto  p-10 border border-gray-200 rounded-lg transition-all duration-300"
        open={isOpen3}
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <summary className="flex justify-between items-center font-semibold cursor-pointer">
          <span>What technologies do you use? </span>
          <svg
            className={`control-icon ${
              isOpen2 ? "control-icon-close" : "control-icon-expand"
            }`}
            width="24"
            height="24"
            role="presentation"
          >
            <use xlinkHref="#${isOpen2 ? 'close' : 'expand-more'}" />
          </svg>
        </summary>
        <p className="text-gray-600 mt-4">
          We use the most updated tools to carft your product , like Nextjs,
          photoshop, blender and some highly efficient AI tools
        </p>
      </details>
    </div>
  );
};

export default Accordion;
