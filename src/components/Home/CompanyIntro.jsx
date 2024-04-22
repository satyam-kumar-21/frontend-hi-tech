import React from 'react'

function CompanyIntro() {
  return (
    <div className="flex lg:flex-row lg:pb-24 flex-col-reverse justify-center items-center bg-white  lg:py-24 ">
    {/* Content */}
    <div className="lg:w-1/2 lg:order-1 lg:text-left lg:pl-[5rem] lg:pr-24 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
    <div className="border-t-4 border-blue-800 w-20 mb-4"></div> {/* Added line */}
    <p className="leading-10 text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
      <span className="leading-10">Leading companies trust us </span> <br /> <b className="leading-10">to develop software</b> 
    </p>
    <p className="text-lg lg:text-lg text-gray-700 mb-6 text-center lg:text-left">
      We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
    </p>
    <p className="text-blue-800 py-2 lg:text-left text-center font-bold rounded-lg block lg:inline-block mx-auto">
      See more Informations&nbsp;&nbsp;
      <svg viewBox="0 0 20 20" fill="currentColor" className="chevron-right w-4 h-4 inline-block">
        <path fillRule="evenodd" d="M14.29 10l-5-5a1 1 0 0 1 1.42-1.42l6 6a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-1.42-1.42L14.29 11H4a1 1 0 1 1 0-2h10.29z" clipRule="evenodd" />
      </svg>
    </p>
  </div>
  

    <div className="lg:w-1/2 lg:order-2 flex justify-center items-center lg:p-6 lg:pl-[2rem] lg:pr-[10rem]">
      <img
        src="../../../public/Image/Abou-us-Video.png"
        alt="Hero"
        className="object-cover w-full lg:w-auto lg:max-w-none h-64 lg:h-auto lg:rounded-lg shadow-lg lg:px-0"
      />
    </div>
  </div>
  )
}

export default CompanyIntro