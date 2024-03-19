import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function ReviewCards({ name, date, comment, rating, imageUrl }) {
  return (
    <div className="bg-light">
      <div className="container py-4">
        <div className="col">
          <div className="border-primary border-[1px] p-4 rounded-md w-[45vh] h-[35vh] relative">
            <div className="w-full pb-0 gap-5 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src={`${imageUrl}`}
                  width={40}
                  height={40}
                  alt="/"
                  className="rounded-full"
                />
                <div className="flex flex-col justify-center items-start text-lg">
                  <b className="text-primary">{name}</b>
                  <small className="text-muted">{date}</small>
                </div>
              </div>
            </div>
            <div className=" py-2">
              <p className=" text-[1rem] text-wrap text-primary">{comment}</p>
            </div>
            <div className="absolute bottom-3 left-3 gap-2 pt-0 flex flex-row items-center text-muted">
              <small className="text-[1.5rem]">{rating}</small>
              <Star width={20} className="text-orange-600" />
            </div>
            <a href="#" className="stretched-link"></a>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}
      </div>
    </div>
  );
}

export default ReviewCards;
