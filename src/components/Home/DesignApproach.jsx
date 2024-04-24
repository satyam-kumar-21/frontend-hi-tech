import React from "react";
import DesignApproachCard from "./DesignApproachCard";
import img1 from "../../../src/Image/ux-driven.png"
import img2 from "../../../src/Image/developing-shared.png"
import img3 from "../../../src/Image/Proven.png"
import img4 from "../../../src/Image/security.png"
import img5 from "../../../src/Image/code reviews.png"
import img6 from "../../../src/Image/quality.png"

function DesignApproach() {
  return (
    <>
      <div className="flex flex-col items-center bg-white py-4">
        <div className="lg:text-2xl flex flex-col space-y-2 items-center my-4">
          <span className="block  w-12 h-1 bg-blue-700" />
          <p>Our design and </p>
          <h3 className="font-bold">development approach</h3>
        </div>
        
        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img1} heading="UX Driven Engineering" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
          <DesignApproachCard logo={img2} heading="Developing Shared Understanding" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
        </div>

        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img3} heading="Proven Experience and Expertise" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
          <DesignApproachCard logo={img4} heading="Security & Intellectual Property (IP)" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
        </div>

        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img5} heading="Code Reviews" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
          <DesignApproachCard logo={img6} heading="Quality Assurance & Testing" desc = "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."/>
        </div>
      </div>
    </>
  );
}

export default DesignApproach;
