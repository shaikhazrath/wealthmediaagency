import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background image for different screen sizes */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${typeof window !== "undefined" && window.innerWidth < 768 ? 'hero.jpg' : 'hero-destop.jpg'})`,
        }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white px-4 md:px-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empower Your Brand with Influencers
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Connect with top creators to craft authentic, engaging, and impactful ad campaigns.
          </p>
          <a
            href="#learn-more"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Find Influencers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
