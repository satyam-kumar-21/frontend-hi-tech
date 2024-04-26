import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';


const MyTeams = () => {
  const teamData = [
    {
      name: "Satyam kumar",
      role: "UI Developer",
      bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/200x200",
      social: {
        linkedin: "https://www.linkedin.com/alper-kamu",
        facebook: "https://www.facebook.com/alperkamu",
        instagram: "https://www.instagram.com/alperkamu",
        twitter: "https://www.twitter.com/alperkamu"
      }
    },
    
    {
      name: "Satyam kumar",
      role: "UI Developer",
      bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/201x201",
      social: {
        linkedin: "https://www.linkedin.com/holden-caulfield",
        facebook: "https://www.facebook.com/holdencaulfield",
        instagram: "https://www.instagram.com/holdencaulfield",
        twitter: "https://www.twitter.com/holdencaulfield"
      }
    },
    {
      name: "Satyam kumar",
      role: "UI Developer",
      bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/202x202",
      social: {
        linkedin: "https://www.linkedin.com/atticus-finch",
        facebook: "https://www.facebook.com/atticusfinch",
        instagram: "https://www.instagram.com/atticusfinch",
        twitter: "https://www.twitter.com/atticusfinch"
      }
    },
    {
      name: "Satyam kumar",
      role: "UI Developer",
      bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/203x203",
      social: {
        linkedin: "https://www.linkedin.com/henry-letham",
        facebook: "https://www.facebook.com/henryletham",
        instagram: "https://www.instagram.com/henryletham",
        twitter: "https://www.twitter.com/henryletham"
      }
    }
  ];

  return (
    <section className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
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
                    <a href={member.social.linkedin} className="text-gray-700 mx-2">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.social.facebook} className="text-gray-700 mx-2">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href={member.social.instagram} className="text-gray-700 mx-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.social.twitter} className="text-gray-700 mx-2">
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
