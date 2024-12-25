"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/bg.jpg" // Replace with the actual image path in your public folder
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            We are passionate about crafting exceptional digital experiences
            that leave a lasting impression. Whether it’s developing cutting-edge
            apps or creating stunning designs, our team turns ideas into reality.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Innovation is at the heart of what we do. We strive to deliver
            solutions that not only meet your expectations but exceed them.
          </p>
          <a className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Contact Us To Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
