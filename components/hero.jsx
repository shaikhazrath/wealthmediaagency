import React, { useState, useEffect } from "react";
import { Client, Databases } from "appwrite";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  const client = new Client();
  const databases = new Databases(client);

  useEffect(() => {
    client
      .setEndpoint("https://cloud.appwrite.io/v1") 
      .setProject("676fa187002ccfc0d35f"); 

    const fetchHeroData = async () => {
      try {
        const response = await databases.getDocument(
          "676e5194001bef78b9e5", 
          "676e519d0001f11391a8", 
          "676e5306000fd3797d20"
        );
        console.log('helo',response);
        setHeroData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  const backgroundImage =
    typeof window !== "undefined" && window.innerWidth < 768
      ? heroData.ImageMobile
      : heroData.ImageDesktop;

  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage.split("&mode=admin")[0]})`,
        }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white px-4 md:px-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-2xl mb-6">{heroData.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
