"use client";
import React,{useState,useEffect} from "react";
import {Client ,Databases} from "appwrite";
const OurWork = () => {
  const [videos, setVideos] = useState([]);
  const client = new Client();
  const databases = new Databases(client);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        client
          .setEndpoint("https://cloud.appwrite.io/v1")
          .setProject("676fa187002ccfc0d35f");
        const response = await databases.listDocuments(
          "676e5194001bef78b9e5",
          "676ecbbf000bb8a0f7dd"
        );
        console.log(response.documents);
        setVideos(response.documents);
      } catch (error) {
        console.log("Error fetching videos data:", error);
      }
    };
    fetchVideos();
  }, []);

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
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
