import React from "react";
import Reviewcard from "./Reviewcard";

export default function App() {
  return (
    <div className="container">
      <div className="horizontal-scrolling-items gap-8">
        <div className="horizontal-scrolling-items__item">
          <Reviewcard
            name="Harry Uppal"
            date="20 Sep 2023"
            comment="Amazing work, I am getting positive feedback from my customers"
            rating="9"
            imageUrl="/1.svg"
          />
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard
            name="Nate River"
            date="1 Jan 2024"
            comment="Love the edits, really impressive cuts and transitions. "
            rating="9"
            imageUrl="/2.svg"
          />
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard
            name="Shrishti"
            comment="Would love to work with you in the future again, all my members really love the look you gave to our website"
            date="12 Jan 2024"
            rating="10"
            imageUrl="/3.svg"
          />
          v
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard name="roman reigns" date="3 Jan 2024" imageUrl="/4.svg" />
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard
            name="Parminder Singh"
            date="2 Sep 2023"
            comment="Great work, "
            imageUrl="/5.svg"
          />
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard imageUrl="/6.svg" />
        </div>
        <div className="horizontal-scrolling-items__item">
          <Reviewcard imageUrl="/1.svg" />
        </div>
      </div>
    </div>
  );
}
