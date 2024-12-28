
import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";

const TestimonialCountMinimal = () => {
  const [counts, setCounts] = useState({
    testimonials: 0,
    creators: 0,
    campaigns: 0,
  }); 
   const [loading, setLoading] = useState(true);
  const client = new Client();
  const databases = new Databases(client);
  useEffect(() => {
    const startCounters = async() => {
      client
      .setEndpoint("https://cloud.appwrite.io/v1") 
      .setProject("676fa187002ccfc0d35f"); 
      const response = await databases.getDocument(
        "676e5194001bef78b9e5", 
        "676e56c10011de10aedf",
        "676e571200361a51e4e2"
      );
      // console.log(response)
         
    const duration = 2000;
    const increment = 20;
     const testimonials = response.testimonials;
     const  creators = response.creators;
     const  campaigns = response.campaigns;
       setLoading(false);
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setCounts({
          testimonials: Math.floor(progress * testimonials),
          creators: Math.floor(progress * creators),
          campaigns: Math.floor(progress * campaigns),
        });

        if (progress === 1) clearInterval(interval);
      }, increment);
    };

    startCounters();
  }, []);

  

  return (
    <section className="w-full py-12 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Trusted by Thousands of Creators & Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonials */}
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-gray-900">{counts.testimonials}+</p>
            <p className="text-lg text-gray-600 mt-2">Happy Testimonials</p>
          </div>

          {/* Creators */}
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-gray-900">{counts.creators}+</p>
            <p className="text-lg text-gray-600 mt-2">Top Creators</p>
          </div>

          {/* Campaigns */}
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-gray-900">{counts.campaigns}+</p>
            <p className="text-lg text-gray-600 mt-2">Successful Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCountMinimal;
