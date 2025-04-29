"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-[#EAF4F4] min-h-screen flex flex-col items-center py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1E293B]">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center gap-6 mb-10">
        <img src="/logoipsum.png" alt="Logo 1" className="h-10" />
        <img src="/logoipsum.png" alt="Logo 2" className="h-10" />
        <img src="/logoipsum.png" alt="Logo 3" className="h-10" />
        <img src="/logoipsum.png" alt="Logo 4" className="h-10" />
      </div>

      {/* Form Section */}
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Button
            </button>
          </form>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#D1E8E4] p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Our Newsletters</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Button
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-1/3">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold">(+876) 765 665</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-1/3">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h4m-4 0h-4m4 0V8m0 4v4m0-4H8m4 0H4"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold">mail@influenca.id</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-1/3">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold">London Eye London</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 w-full max-w-6xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.0837059787!2d-0.3817838!3d51.5287352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb1b1c0b1b1%3A0x1b1b1b1b1b1b1b1b!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1611234567890!5m2!1sen!2suk"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}