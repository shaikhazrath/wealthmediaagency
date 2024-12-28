"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Client, Databases, ID } from 'appwrite'
const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [socialmedialinks, setSocialMediaLinks] = useState([]);
  const client = new Client();
  const database = new Databases(client);
  useEffect(() => {
    const fetchContactData = async () => {
      setLoading(true);
      try {
        client
          .setEndpoint("https://cloud.appwrite.io/v1")
          .setProject("676fa187002ccfc0d35f");
        const response = await database.getDocument(
          "676e5194001bef78b9e5",
          "676f9330000c45970aad",
          "676f941c0010487947fc"
        );

        setContact(response);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchContactData();
  }, []);

  useEffect(() => { 
    const fetchSocialMediaLinks = async () => {
      try {
        client
          .setEndpoint("https://cloud.appwrite.io/v1")
          .setProject("676fa187002ccfc0d35f");
        const response = await database.listDocuments(
          "676e5194001bef78b9e5",
          "676f942f002196583127",
        );
        console.log(response)
        setSocialMediaLinks(response.documents);
      } catch (error) {
        console.error("Error fetching social media links:", error);
      }
    };

    fetchSocialMediaLinks();
  }, []);

  const handleSubmit =async (e) => {
    e.preventDefault();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("676fa187002ccfc0d35f");

  const databases = new Databases(client);

  try {
    await databases.createDocument(
    "676e5194001bef78b9e5",
    "676f96510008ebf92630",
    ID.unique(),
    {
      email: email,
    }
    );
    alert("Email subscribed successfully!");
    setEmail("");
  } catch (error) {
    console.error("Error subscribing email:", error);
    alert("Failed to subscribe email.");
  }
  };


  return (
    <section className="bg-blue-50 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-around">
          <div>
            <img src={loading ? 'loading..':  contact.logo} alt="" srcset="" className=" rounded-md pb-10" />
            <div>
              <div className="flex space-x-4 flex-wrap gap-5">
                {socialmedialinks.map((data) => (
                  <a key={data.$id}
                    href={data.link}
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <img src={data.image} alt="Instagram" className="w-10 h-10" srcSet="" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>

            <ul className="space-y-4 text-2xl">
              <li>
                <a href="#home" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-600 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-600 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Main Grid Layout */}
          <div className="grid">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-700">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-700">Phone Number</p>
                      <p className="text-blue-600">{contact && contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-700">Email Address</p>
                      <p className="text-blue-600">
                        {contact && contact.email}
                      </p>
                    </div>
                  </div>


                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-700">Newsletter</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="p-3 border border-blue-300 rounded-md"
                      />
                      <button
                        type="submit"
                        className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
