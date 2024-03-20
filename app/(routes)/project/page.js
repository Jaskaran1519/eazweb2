import React from "react";

const cards = [
  {
    title: "Mountain View",
    copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    button: "View Trips",
    imageUrl: "/felina.webp",
  },
  {
    title: "To The Beach",
    copy: "Plan your next beach trip with these fabulous destinations",
    button: "View Trips",
    imageUrl: "/apex.webp",
  },
  {
    title: "Desert Destinations",
    copy: "It's the desert you've always dreamed of",
    button: "Book Now",
    imageUrl: "/port.webp",
  },
  {
    title: "Explore The Galaxy",
    copy: "Seriously, straight up, just blast off into outer space today",
    button: "Book Now",
    imageUrl: "/eazweb.webp",
  },
];

const Card = ({ title, copy, button, imageUrl }) => {
  return (
    <div className="group w-[80vw] h-[30vh] lg:w-[35vw] lg:h-[20vh] xl:w-[35vw] xl:h-[40vh] relative overflow-hidden rounded-lg shadow-md bg-white transform hover:scale-105  transition duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover absolute top-0 left-0 group-hover:scale-110   transition duration-300 ease-in-out"
      />
      <div className="p-8 absolute bottom-0 w-full text-center opacity-0 group-hover:opacity-100 backdrop-blur-sm inset-0 flex flex-col justify-center items-center  transition duration-300 ease-in-out">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-xl text-white font-semibold mt-2">{copy}</p>
        <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-hoverprimary transition duration-300 ease-in-out">
          {button}
        </button>
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
      <div className="flex justify-center items-center h-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
