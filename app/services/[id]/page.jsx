'use client'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Client, Databases } from 'appwrite'
import OurServices from '@/components/OurServices'
const page = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [otherservices,setOtherServices] = useState([]);

    const client = new Client();
    const databases = new Databases(client);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                client
                    .setEndpoint("https://cloud.appwrite.io/v1")
                    .setProject("676fa187002ccfc0d35f");
                const response = await databases.getDocument(
                    "676e5194001bef78b9e5",
                    '676ec5e0001b33413fd8',
                    id,
                )
                console.log(response)
                setService(response);
            } catch (error) {
                console.log("Error fetching services data:", error);
            }
        };
        fetchdata();
    },[]    )

    useEffect(() => {
        const fetchOtherServices = async () => {
            try {
                client
                    .setEndpoint("https://cloud.appwrite.io/v1")
                    .setProject("676fa187002ccfc0d35f");
                const response = await databases.listDocuments(
                    "676e5194001bef78b9e5",
                    "676ec5e0001b33413fd8",
                )
                console.log(response)
                setOtherServices(response.documents);
            } catch (error) {
                console.log("Error fetching services data:", error);
            }
        };
        fetchOtherServices();
    },[]    )


return (
    <div>
            <Navbar />
            {
                    service && (
                            <div className="max-w-4xl mx-auto p-4">
                                    <img src={service.Image} alt={service.title} className="w-full h-auto object-cover rounded-md mb-4" />
                                    <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                                    <p className="text-lg text-gray-700">{service.description}</p>
                            </div>
                    )

            }
            {/* {
                otherservices.length > 0 && (
                    <div className="max-w-4xl mx-auto p-4">
                        <h2 className="text-2xl font-bold mb-4">Other Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                otherservices.map((service) => (
                                    <a key={service.$id} className="bg-white p-4 shadow-lg rounded-md" href={`/services/${service.$id}`}>
                                        <img src={service.Image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">
                {service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description}
              </p>
              <span className="text-blue-500 mt-2">Learn more</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                )
            } */}
            <OurServices />
    </div>
)
}

export default page