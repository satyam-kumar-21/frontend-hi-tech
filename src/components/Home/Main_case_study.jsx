import React from "react";
import Slider from "./Slider";
import img1 from "../../../src/Image/Case-study__image.png";
import img2 from "../../../src/Image/Case-study__image2.png";
import img3 from "../../../src/Image/Case-study__image 3.png";

const Main_case_study = () => {
  const content = [
    {
      img: img2,
      heading: "Website Design for Hi-Coding Junction",
      desc: "Hi-Coding Junction is a premier online coding learning platform, offering comprehensive courses in programming languages, software development, and computer science fundamentals. With expert instructors and interactive learning resources, we empower students to master coding skills and pursue rewarding careers in tech",
      bg: "greenbg",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-white py-4">
        <div className="lg:text-2xl flex flex-col space-y-2 items-center my-4">
          <span className="block  w-12 h-1 bg-blue-700" />
          <p>Our recent  </p>
          <h3 className="font-bold"> Case studies </h3>
        </div>
        <div>
          {content.map((item) => {
            return <Slider item={item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Main_case_study;
