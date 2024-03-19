import React from "react";
import Header from "../_components/Header";

const layout = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default layout;
