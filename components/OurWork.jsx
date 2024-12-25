"use client";

import React from "react";

const OurWork = () => {
  const videos = [
    "video.mp4", // Assuming video.mp4 is in the 'public/videos' folder
    "video.mp4",
    "video.mp4",
  ];

  return (
    <div className="our-work-container bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Work
      </h1>
      
      <div className="flex justify-center flex-wrap gap-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-container h-[70vh] w-fit overflow-hidden bg-white shadow-md rounded-lg flex justify-center"
          >
            <video
              className="h-full object-cover"
              style={{ width: "auto" }}
              controls
              autoPlay={false}
              muted
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
