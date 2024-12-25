import React, { useEffect, useState } from "react";

const TestimonialCountMinimal = () => {
  const [counts, setCounts] = useState({
    testimonials: 0,
    creators: 0,
    campaigns: 0,
  });

  useEffect(() => {
    const counters = {
      testimonials: 1500,
      creators: 200,
      campaigns: 500,
    };

    const duration = 2000;
    const increment = 20;

    const startCounters = () => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setCounts({
          testimonials: Math.floor(progress * counters.testimonials),
          creators: Math.floor(progress * counters.creators),
          campaigns: Math.floor(progress * counters.campaigns),
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
