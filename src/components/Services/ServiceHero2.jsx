import React from "react";
import hero from "../../../src/Image/services/hero2.png";
import { Link } from "react-router-dom";

function ServiceHero2() {
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:h-screen items-center bg-gray-100 py-1 lg:py-1 px-6 relative">
      {/* Circular Background for Laptop View */}
      <div className="hidden lg:block absolute bg-blue-500 rounded-full w-96 h-96 -top-24 -left-24"></div>

      {/* Image */}
      <div className="lg:w-1/2 lg:order-1 flex justify-center items-center lg:p-6 lg:pl-[8rem] lg:pr-[4rem] relative">
        <img
          src={hero}
          alt="Hero"
          className="object-cover w-full lg:w-[100%] h-72 lg:h-[100%] lg:max-w-none lg:px-0"
        />
      </div>

      {/* Circular Background for Mobile View */}
      <div className="lg:hidden absolute bg-blue-500 rounded-full w-60 h-60 -top-24 -left-24"></div>

      {/* Content */}
      <div className="lg:w-1/2 lg:order-2 lg:text-left lg:pl-[5rem] lg:pr-5 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
      <p className="  font-bold mb-4 text-center lg:text-left">
      
      <span className="text-blue-600 block lg:inline">HI-tech </span> Services
    </p>
        <p className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
        The Perfect Digital <br/>
        Connection
        </p>
        <p className="text-lg lg:text-lg text-gray-700 mb-6 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consectetur adipiscing commodo euismod condimentum nunc.
        </p>

        

        <div className="flex flex-wrap justify-center">
        {/* First Row */}
        <div className="flex items-center justify-center m-4">
          <p className="bg-gray-200 ">Element 1</p>
        </div>
        <div className="flex items-center justify-center m-4">
          <p className="bg-gray-200 ">Element 2</p>
        </div>
  
        
        {/* Second Row */}
        <div className="flex items-center justify-center m-4">
          <p className="bg-gray-200 ">Element 3</p>
        </div>
        <div className="flex items-center justify-center m-4">
          <p className="bg-gray-200 ">Element 4</p>
        </div>
      </div>



        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold py-2 px-4 lg:mr-10  block lg:inline-block mx-auto">
          Discover more
        </button>
      </div>
    </div>
  );
}

export default ServiceHero2;
