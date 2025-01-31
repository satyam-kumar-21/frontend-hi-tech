import React from 'react';

const HowWorks = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          How We Work
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          At Hi-tech Junction, we follow a structured process to ensure your project's success from idea to delivery. Here's how we do it:
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Requirement Gathering */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-list-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 1: Requirement Gathering
            </h3>
            <p className="text-lg text-gray-600">
              The first step is all about understanding your vision. We engage with you to gather requirements, understand your business goals, and outline project objectives. We listen, ask the right questions, and ensure we have a clear understanding of your needs to deliver a solution that aligns with your vision.
            </p>
          </div>

          {/* Design */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 2: Design
            </h3>
            <p className="text-lg text-gray-600">
              After gathering your requirements, we move on to the design phase. Our design team creates wireframes and prototypes that define the structure and functionality of your project. We work with you to refine the designs until we achieve a perfect representation of your vision. Our goal is to ensure your users have a seamless, intuitive experience.
            </p>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 3: Development
            </h3>
            <p className="text-lg text-gray-600">
              With designs in place, our skilled developers get to work on building the solution. Using modern technologies and coding best practices, we develop the backend and frontend of your project. We focus on creating robust, scalable, and high-performing solutions while maintaining clean, maintainable code.
            </p>
          </div>

          {/* Testing */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 4: Testing
            </h3>
            <p className="text-lg text-gray-600">
              Once development is complete, we conduct rigorous testing to ensure everything works as expected. Our QA team performs functional, performance, and security testing to identify any issues. We ensure that your project is bug-free, responsive, and secure across all platforms and devices.
            </p>
          </div>

          {/* Deployment */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 5: Deployment
            </h3>
            <p className="text-lg text-gray-600">
              After testing, we deploy your project to a live environment. We ensure that everything is properly configured, optimized, and fully functional. Whether it's a website, mobile app, or custom software, we ensure smooth deployment and launch your project successfully.
            </p>
          </div>

          {/* Maintenance */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Step 6: Ongoing Support & Maintenance
            </h3>
            <p className="text-lg text-gray-600">
              Our job doesn't end after deployment. We offer ongoing support and maintenance to ensure your project continues to run smoothly. Whether it's fixing bugs, updating features, or scaling your solution, we're here to help you maintain and grow your product over time.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Our streamlined process ensures that we meet your goals and deliver exceptional results, every time. Ready to get started with us?
          </p>
          <a
            href="/contact-us"
            className="mt-4 inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
