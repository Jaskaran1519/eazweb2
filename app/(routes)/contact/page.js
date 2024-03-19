import { Instagram, Twitter } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-[80%] mx-auto flex">
      <div className=" w-[70%] md:w-[25%] mx-auto flex justify-between items-center  p-2 rounded-md bg-red-400">
        <Twitter className="text-white" />
        <h1>Instagram</h1>
      </div>
    </div>
  );
};

export default page;
