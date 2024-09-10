import { ArrowUpRight, ArrowUpRightFromCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Play } from "next/font/google";

const fontmain = Play({
  subsets: ["latin"],
  weight: ["400"],
});

const Card = ({ title, copy, imageUrl, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <Image
        src={`/projects${imageUrl}`}
        width={1000}
        height={1000}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 transition-opacity duration-300 ease-in-out opacity-0"></div>
      {/* Title */}
      <h1
        className={` ${fontmain.className} absolute bottom-[5%] left-[5%] text-white text-[5vw] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100`}
      >
        {title}
      </h1>
      {/* Button */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="absolute  top-[5%] right-[5%] border-[2px] border-white rounded-full px-5 py-3 text-2xl text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center gap-4">
          Visit
          <ArrowUpRight />
        </button>
      </a>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      title: "Ricaverse",
      copy: "Developer's portfolios",
      imageUrl: "/ricaverse.webp",
      link: "https://ricaverse.in",
    },
    {
      title: "Worsst",
      copy: "Clothing Website",
      imageUrl: "/worsst.png",
      link: "https://www.worsst.com/",
    },
    {
      title: "Portfolio",
      copy: "Modern footwear company",
      imageUrl: "/portfolio.webp",
      link: "https://jaskaran1519.vercel.app",
    },
    {
      title: "Jenn",
      copy: "Modern footwear company",
      imageUrl: "/jenn.png",
      link: "https://www.thelabeljenn.com/",
    },
    {
      title: "Felina",
      copy: "Beauty care products website",
      imageUrl: "/felina.webp",
      link: "https://felina1519.vercel.app/",
    },
    {
      title: "Sharelit",
      copy: "It is what it is, fellas",
      imageUrl: "/sharelit.webp",
      link: "https://sharelit.vercel.app",
    },
    {
      title: "Real Estate",
      copy: "It is what it is, fellas",
      imageUrl: "/realestate.png",
      link: "https://real-estate-web.pages.dev/",
    },
    {
      title: "Qiuzesty",
      copy: "",
      imageUrl: "/quizesty.webp",
      link: "http://quizesty.vercel.app",
    },
    {
      title: "Apex footwear",
      copy: "",
      imageUrl: "/apex.webp",
      link: "https://n8river.github.io/ApexFootWear/",
    },
  ];

  return (
    <div className="w-[90%] mx-auto overflow-hidden mb-20">
      <h1 className="mt-5 text-[2rem] font-semibold text-primary">
        Some of our work
      </h1>
      <div className="flex justify-center items-center h-auto mt-10">
        <div className=" w-[80%] flex flex-col gap-[10vh]">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
