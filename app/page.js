import React from "react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Service from "./_components/Service";
import ProjectCard from "./_components/ProjectCard";
import Review from "./_components/Review";

const page = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <Header />
      <Hero />
      <Service />
      <div className="w-[80%] mx-auto mt-5">
        <h1 className="text-[2rem] font-semibold">Some of our work</h1>
        <div className=" mx-auto grid grid-cols-3 gap-4">
          <ProjectCard
            imageUrl="/next.svg"
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProjectCard
            imageUrl="/enw.svg"
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProjectCard
            imageUrl="/rightbox.jpg"
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <Review />
    </div>
  );
};

export default page;
