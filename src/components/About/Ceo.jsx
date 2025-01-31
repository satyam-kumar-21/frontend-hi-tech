import React from 'react';
import ceo from "../../../src/Image/about/satyam2.jpeg";

function Ceo() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-semibold text-gray-800">
              Hey 👋, I'm <span className="text-blue-600">Satyam Kumar</span>
            </h2>
            <p className="text-xl text-gray-600">
              I'm the founder of Hi-Tech Junction, a CSE graduate, and an expert in MERN stack technologies (MongoDB, Express.js, React.js, Node.js). I'm passionate about empowering developers and fostering community learning.
            </p>
            <p className="text-lg text-gray-600">
              Feel free to reach out to me on any of the following platforms:
            </p>
            <div className="space-x-6 mt-4">
              <a href="https://twitter.com/SatyamK59781252" className="text-blue-600 hover:underline">Twitter</a>
              <a href="https://www.facebook.com/profile.php?id=100023153630952" className="text-blue-600 hover:underline">Facebook</a>
              <a href="https://www.instagram.com/_satyam_thakur_21/" className="text-blue-600 hover:underline">Instagram</a>
              <a href="https://www.linkedin.com/in/satyam-kumar-518762228/" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              className="w-80 h-80 object-cover rounded-full mx-auto shadow-xl"
              src={ceo}
              alt="Satyam Kumar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
