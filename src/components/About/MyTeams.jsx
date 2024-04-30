import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import sandip from "../../../src/Image/about/sandip.jpeg";
import akshay from "../../../src/Image/about/akshay.jpeg";
import vandna from "../../../src/Image/about/Vandna.jpg"

const MyTeams = () => {
  const teamData = [
    {
      name: "Sandip kr. pandey",
      role: "Co-founder & Product Designer",
      bio: "Guiding brand vision and product design as Co-founder & Product Designer, crafting engaging experiences for meaningful connections.",
      image: sandip,
      social: {
        linkedin: "https://www.linkedin.com/alper-kamu",
        facebook: "https://www.facebook.com/alperkamu",
        instagram: "https://www.instagram.com/alperkamu",
        twitter: "https://www.twitter.com/alperkamu",
      },
    },

    {
      name: "Hariom Dangi",
      role: "Full stack developer",
      bio: "Enhancing digital experiences as a Full Stack Developer, combining front-end and back-end skills for seamless innovation.",
      image: akshay,
      social: {
        linkedin: "https://www.linkedin.com/in/hariom-dangi-3160a1246/",
        facebook: "https://www.facebook.com/hariom.dangi.98284566",
        instagram: "https://www.instagram.com/akshuuu_4u/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      name: "Vandna Lodhi",
      role: "App developer",
      bio: "Driving app innovation as an App Developer, crafting user-friendly interfaces and robust functionalities for seamless digital experiences.",
      image: vandna,
      social: {
        linkedin: "https://www.linkedin.com/in/vandana-lodhi-a3a9b0285/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/v.lodhi152/",
        twitter: "https://www.twitter.com/",
      },
    },
  
  ];

  return (
    <section className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Our diverse team combines expertise in design, development, and
            strategy, collaborating seamlessly to realize your vision.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamData.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center justify-between text-center bg-white rounded-lg shadow-md p-6">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-800">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4 text-gray-700">{member.bio}</p>
                  <div className="inline-flex">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={member.social.facebook}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTeams;
