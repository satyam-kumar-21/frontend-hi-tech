import React from "react";
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <section
      className="text-black body-font relative flex items-center justify-center"
      style={{
        background: `url('https://imgs.search.brave.com/4tepOgSB-9qwJvITkg5cox4w1p-O2vJm5jW9eX2ZgsQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODUyNDE2NDU5Mjct/YzdhOGU1ODQwYzQy/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhOSHg4ZkdWdWZE/QjhmSHg4ZkE9PQ') no-repeat center center / cover`,
        opacity: 0.6, // Set opacity to 60%
        backdropFilter: "blur(100px)", // Apply blur effect
        height: "100vh", // Make section full height of viewport
      }}
    >
      <div className="container mx-auto flex lg:pl-[100px] px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-50 leading-tight">
            What is Hi-tech and &nbsp;
            <br className="hidden lg:inline-block" />
             how We can help you ?
          </h1>
          <p className="mb-8 leading-relaxed text-gray-50">
            Hi-tech Junction is a leading IT company offering comprehensive
            services including web development, app development, and more. With
            our expertise and dedication, we ensure top-notch solutions tailored
            to your needs. Let us streamline your digital journey and propel
            your business to new heights in the digital landscape.
          </p>
          <div className="flex justify-center">
            {/* WhatsApp link for "Get Consult" button */}
            <a href="https://wa.me/916203176139" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-gray-950 font-semibold bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Get Consult
              </button>
            </a>
            {/* "Contact us" button with transparent background */}
            <Link to="/contact-us" className="ml-4 inline-flex text-gray-300 font-semibold bg-transparent border py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      {/* Additional padding from the left side */}
      <div className="hidden md:block w-2/5"></div>
    </section>
  );
};

export default AboutMain;
