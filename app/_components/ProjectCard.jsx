import React from "react";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="w-[80%] mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden scale-100 hover:scale-105 duration-200">
      <div
        className="bg-cover bg-center h-40"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
