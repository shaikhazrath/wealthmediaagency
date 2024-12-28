import React from "react";
import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
const PosterGallery = () => {
  const [posters, setPosters] = useState([]);
  const client = new Client();
  const databases = new Databases(client);
  useEffect(() => {
    const fetchPosters = async () => {
      try {
        client
          .setEndpoint("https://cloud.appwrite.io/v1")
          .setProject("676fa187002ccfc0d35f");
        const response = await databases.listDocuments(
          "676e5194001bef78b9e5",
          "676ec839001d85fa426d"
        );
        console.log(response.documents);
        setPosters(response.documents);
      } catch (error) {
        console.log("Error fetching posters data:", error);
      }
    };
    fetchPosters();
  }, []);
  return (
    <section className="w-full py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Poster Gallery
        </h2> */}

        {/* Poster Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posters.map((poster) => (
            <div
              key={poster.$id}
              className="relative group overflow-hidden rounded-lg shadow-lg "
            >
              {/* Poster Image */}
              <img
                src={poster.image}
                // alt={poster.alt}
                className="w-full h-full object-cover"
                srcSet=""
              />

              {/* Hover Overlay */}

              {/* Hover Text */}
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;
