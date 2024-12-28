"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const client = new Client();
  const databases = new Databases(client);
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        client
          .setEndpoint("https://cloud.appwrite.io/v1")
          .setProject("676fa187002ccfc0d35f");
        const response = await databases.getDocument(
          "676e5194001bef78b9e5",
          "676ecd2e00084335befd",
          "676ed343003438f7d498"
        );

        setAboutData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={loading ? "Loading..." : aboutData.image.split("&mode=admin")[0]} // Replace with the actual image path in your public folder
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {loading ? "Loading..." : aboutData.description}
          </p>
          <a
            href="https://wa.me/+918520800787" // Replace 'yourwhatsappnumber' with the actual WhatsApp number
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Contact Us To Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
