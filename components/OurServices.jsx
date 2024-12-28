import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";

const OurServices = () => {
  const [services, setServices] = useState([ ]);
    const client = new Client();
    const databases = new Databases(client);
  useEffect(() => {
    const fetchdata = async () => {
    try {
      client
        .setEndpoint("https://cloud.appwrite.io/v1") 
        .setProject("676fa187002ccfc0d35f");
      const response = await databases.listDocuments(
        "676e5194001bef78b9e5", 
        "676ec5e0001b33413fd8",
      )
      console.log(response)
      setServices(response.documents);
    } catch (error) {
      console.log("Error fetching services data:", error);
    }
    };
    fetchdata();
  },[])
  return (
    <section className="w-full py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a href={`/services/${service.$id}`}
              key={index}
              className="flex flex-col items-center bg-white p-4 shadow-lg shadow-blue-200 rounded-lg transform group hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 transition duration-300 ease-in-out"
            >
              <div className="mb-4 w-full h-64">
                <img src={service.Image.split("&mode=admin")[0]} alt={service.title} className="w-full h-full object-cover rounded-md"  />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">
                {service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description}
              </p>
              <span className="text-blue-500 mt-2">Learn more</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
