import React from "react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Service from "./_components/Service";
import Review from "./_components/Review";

const page = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <Header />
      <Hero />
      <Service />
      <Review />
    </div>
  );
};

export default page;
