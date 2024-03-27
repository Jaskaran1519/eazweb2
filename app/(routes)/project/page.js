import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "Felina",
    copy: "Beauty care products website",

    imageUrl: "/felina.webp",
    link: "https://felina-gilt.vercel.app/",
  },
  {
    title: "Apex Footwear",
    copy: "Modern footwear company",

    imageUrl: "/apex.webp",
    link: "http://n8river.github.io/ApexFootWear/",
  },
  {
    title: "Portfolio",
    copy: "Developer's portfolios",

    imageUrl: "/port.webp",
    link: "https://jaskaran1519.github.io/Portfolio/",
  },
  {
    title: "Team portfolio",
    copy: "It is what is is, fellas",

    imageUrl: "/eazweb.webp",
    link: "https://jaskaran1519.github.io/Eazweb/",
  },
];

const Card = ({ title, copy, imageUrl, link }) => {
  return (
    <div className="group w-[80vw] h-[30vh] lg:w-[35vw] lg:h-[20vh] xl:w-[35vw] xl:h-[40vh] relative overflow-hidden rounded-lg shadow-md bg-white transform hover:scale-105  transition duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover absolute top-0 left-0 group-hover:scale-110   transition duration-300 ease-in-out"
      />
      <div className="p-8 absolute bottom-0 w-full text-center opacity-0 group-hover:opacity-100 backdrop-blur-xl hover:bg-primary hover:bg-opacity-25  inset-0 flex flex-col justify-center items-center  transition duration-300 ease-in-out">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-md leading-4 text-white  mt-2">{copy}</p>
        <a href={link} target="_blank">
          <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-hoverprimary transition duration-300 ease-in-out">
            Check Out
          </button>
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="mt-5 text-[2rem] font-semibold text-primary ">
        Some of our work
      </h1>
      <div className="flex justify-center items-center h-auto mt-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
