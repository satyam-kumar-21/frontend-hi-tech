import React from "react";
import companyoverview from "../../../src/Image/about/company overview.png";
import { Link } from "react-router-dom";

function CompanyOverwiew() {
  return (
    <>
      <section className="text-gray-900 bg-white body-font">
        <div className="container mx-auto flex px-6 py-16 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-6">
            <img
              className="object-cover object-center rounded-lg shadow-lg"
              alt="Company Overview"
              src={companyoverview}
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wide">
              About Us
            </p>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-gray-800">
              Our Company Overview
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Hi-tech Junction, an Indian IT firm, excels in web and app development, design, and IT consulting. We specialize in crafting secure, user-friendly websites and mobile apps optimized for diverse platforms.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              With innovative design solutions, we enhance client branding and communication strategies. Hi-tech Junction's personalized approach ensures tailored solutions that meet each client's unique needs, making us a reliable partner for businesses seeking top-quality IT services in India.
            </p>

            {/* Button Section */}
            <div className="flex justify-center gap-4 mt-6">
              <Link
                to="/contact-us"
                className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-lg shadow-md transform transition duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <button className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg shadow-md transform transition duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyOverwiew;
