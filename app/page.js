import React from "react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Service from "./_components/Service";

const page = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <Header />
      <Hero />
      <Service />
    </div>
  );
};

export default page;
