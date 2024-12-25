import React from "react";
import {
  FaBullhorn,
  FaVideo,
  FaChartBar,
  FaHandshake,
  FaCalendar,
  FaPen,
  FaLightbulb,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const services = [
  {
    title: "Influencer Campaigns",
    description: "Strategize and execute campaigns with top influencers to drive results.",
    icon: <FaBullhorn size={48} className="text-yellow-500 group-hover:text-yellow-700" />,
  },
  {
    title: "Content Creation",
    description: "Professional content creation tailored to your brand’s audience.",
    icon: <FaVideo size={48} className="text-green-500 group-hover:text-green-700" />,
  },
  {
    title: "Performance Analytics",
    description: "Track campaign performance with detailed analytics and insights.",
    icon: <FaChartBar size={48} className="text-red-500 group-hover:text-red-700" />,
  },
  {
    title: "Brand Collaborations",
    description: "Connect brands with influencers for meaningful collaborations.",
    icon: <FaHandshake size={48} className="text-purple-500 group-hover:text-purple-700" />,
  },
  {
    title: "Planning",
    description: "End-to-end campaign planning to ensure maximum impact and success.",
    icon: <FaCalendar size={48} className="text-teal-500 group-hover:text-teal-700" />,
  },
  {
    title: "Publishing",
    description: "Effortlessly publish content across multiple platforms.",
    icon: <FaPen size={48} className="text-orange-500 group-hover:text-orange-700" />,
  },
  {
    title: "Suggestions",
    description: "Tailored suggestions to optimize campaigns and improve engagement.",
    icon: <FaLightbulb size={48} className="text-pink-500 group-hover:text-pink-700" />,
  },
  // Social Media Platform Services
  {
    title: "Instagram Marketing",
    description: "Grow your Instagram audience with targeted campaigns and content strategies.",
    icon: <FaInstagram size={48} className="text-purple-500 group-hover:text-purple-700" />,
  },
  {
    title: "Facebook Marketing",
    description: "Leverage Facebook Ads and campaigns to reach your ideal audience.",
    icon: <FaFacebook size={48} className="text-blue-600 group-hover:text-blue-800" />,
  },
  {
    title: "Twitter Marketing",
    description: "Boost engagement and brand visibility with effective Twitter strategies.",
    icon: <FaTwitter size={48} className="text-sky-500 group-hover:text-sky-700" />,
  },
  {
    title: "LinkedIn Marketing",
    description: "Target professionals and businesses through LinkedIn advertising and content.",
    icon: <FaLinkedin size={48} className="text-blue-700 group-hover:text-blue-900" />,
  },
  {
    title: "YouTube Marketing",
    description: "Create impactful video campaigns and grow your YouTube channel.",
    icon: <FaYoutube size={48} className="text-red-500 group-hover:text-red-700" />,
  },
];

const OurServices = () => {
  return (
    <section className="w-full py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 shadow-lg shadow-blue-200 rounded-lg transform group hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 transition duration-300 ease-in-out"
            >
              <div className="mb-4">
                {/* Icon will change color on hover */}
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
