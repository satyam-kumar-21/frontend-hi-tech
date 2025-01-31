import React from "react";
import { Link } from "react-router-dom";
import about from "../../Image/about/about-us.png"

const AboutMain = () => {
  return (
    <section
      className="text-black body-font relative flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://example.com/your-image.jpg') no-repeat center center / cover`,
        height: "100vh", // Full viewport height
        padding: "0", // Remove any padding
      }}
    >
      <div className="container mx-auto flex px-0 py-24 md:flex-row flex-col-reverse items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col items-center text-center md:text-left mb-8 md:mb-0">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white leading-tight">
            What is Hi-tech and &nbsp;
            <br className="hidden lg:inline-block" />
            how We can help you?
          </h1>
          <p className="mb-8 leading-relaxed text-white text-lg md:text-xl">
            Hi-tech Junction is a leading IT company offering comprehensive
            services including web development, app development, and more. With
            our expertise and dedication, we ensure top-notch solutions tailored
            to your needs. Let us streamline your digital journey and propel your
            business to new heights in the digital landscape.
          </p>
          <div className="flex justify-center gap-4">
            {/* WhatsApp link for "Get Consult" button */}
            <a
              href="https://wa.me/916203176139"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex text-gray-950 font-semibold bg-yellow-400 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-500 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105">
                Get Consult
              </button>
            </a>
            {/* "Contact us" button with transparent background */}
            <Link
              to="/contact-us"
              className="inline-flex text-white font-semibold bg-transparent border-2 border-white py-3 px-8 focus:outline-none hover:bg-blue-600 hover:text-white rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="lg:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img
            src={about} // Replace with your image URL
            alt="About Hi-tech"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
