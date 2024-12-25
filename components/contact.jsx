"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      console.log("Email submitted:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Get In Touch
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-blue-700">Our Location</p>
                    <p className="text-blue-600">
                      Mangapuram Colony, Pithapuram Colony, Maddilapalem,
                      <br />
                      Visakhapatnam, Andhra Pradesh 530017
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Phone Number</p>
                    <p className="text-blue-600">+91 8520800787</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Email Address</p>
                    <p className="text-blue-600">
                      wealthmediaagency@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sinka_brothers_multitasking/"
                  className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] mb-12 border-2 border-blue-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15200.595851106596!2d83.32153649999997!3d17.737618950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434e8e5cce43%3A0x4923da867e2c7bc5!2sMaddilapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1734423881344!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>

            {/* Subscribe Section */}
            <div className="bg-blue-100 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">
                Subscribe to Our Newsletter
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 w-max bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-blue-600">
                  Get the latest updates and news directly in your inbox.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
