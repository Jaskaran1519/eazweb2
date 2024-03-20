import React from "react";
import Header from "../_components/Header";

const layout = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default layout;
