import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, Handshake, Home, Scale, Star, Store } from "lucide-react";
import { IconGrowth } from "@tabler/icons-react";

const Sliders = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "25px",
          zIndex: 50,
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-auto mb-10 ">
      <div className="w-[70vw] mx-auto mb-8 leading-normal ">
        <h1 className="flex justify-center items-center text-[2rem] md:text-[3rem] text-primary  font-semibold">
          Why do this
        </h1>
        <h2 className="text-center font-light text-[1rem] md:text-[2rem] text-primary">
          Its important to have a personal website for your respective business{" "}
        </h2>
      </div>
      <div className="mt-5 ">
        <Slider {...settings}>
          {data.map((d, index) => (
            <Box
              key={index}
              heading={d.heading}
              content={d.content}
              icon={d.icon}
              toptitle={d.toptitle}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;

const Box = ({ heading, content, icon, toptitle }) => {
  return (
    <div className="bg-gray-100 relative backdrop-blur-lg bg-cover text-primary h-[40vh] rounded-2xl mx-5 px-2 ">
      <div className=" roundedt-t-2xl p-2 flex items-center pt-5">
        <div className="p-2 bg-gray-200 rounded-full">{icon}</div>
        <div className="text-md font-semibold ml-5 py-1 px-3 bg-gray-200 rounded-full">
          {toptitle}
        </div>
        <Star className="absolute top-5 right-5" />
      </div>
      <div>
        <h1 className="p-3 text-[2rem] font-bold text-gray-800 ">{heading}</h1>
      </div>
      <div>
        <h2 className=" px-4 py-2 text-gray-600">{content}</h2>
      </div>
      <div className="absolute bottom-5 left-4 ">
        <div className="flex items-center">
          <div className="w-44 h-6 bg-gray-200 rounded-full"></div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    heading: "E-commerce",
    content: "Enables online sales and revenue generation",
    icon: <Home size={15} />,
    toptitle: "Business",
  },
  {
    heading: "Content Marketing",
    content:
      "Publishing valuable content builds authority and attracts visitors.",
    icon: <Scale size={15} />,
    toptitle: "Marketing",
  },
  {
    heading: "Marketing",
    content:
      "They serve as a platform to market your brand, products, and services",
    icon: <Store size={15} />,
    toptitle: "Sales",
  },
  {
    heading: "Credibility and Trust",
    content:
      "A professionally designed website instills trust and credibility in your audience. It gives the impression that you are a legitimate and established entity",
    icon: <Handshake size={15} />,
    toptitle: "Trust",
  },
  {
    heading: "Scalability and Flexibility",
    content:
      "Websites can grow and evolve with your business. You can easily update content, add new features, and expand functionality as your needs change over time",
    icon: <IconGrowth size={15} />,
    toptitle: "Scalability",
  },
];
