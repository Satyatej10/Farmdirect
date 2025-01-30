import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6 hover:text-green-800 transition-all duration-300">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          FarmDirect was created by a passionate team of five innovators
          dedicated to transforming the agricultural marketplace. Our platform
          bridges the gap between farmers and consumers, eliminating middlemen
          and ensuring fair trade for both parties.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 group-hover:text-green-800 transition-all duration-300">
            Our Mission
          </h2>
          <p className="text-gray-700">
            We believe in empowering local farmers while providing customers
            with fresh, high-quality produce directly from the source. By
            leveraging technology, we aim to create a sustainable and efficient
            farm-to-table ecosystem that benefits both farmers and consumers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 group-hover:text-green-800 transition-all duration-300">
            About Our App
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="hover:text-green-600 transition-all duration-300 hover:translate-x-2">
              Connects farmers directly with buyers, ensuring fair pricing.
            </li>
            <li className="hover:text-green-600 transition-all duration-300 hover:translate-x-2">
              Farmers can easily list their crops and reach a wider audience.
            </li>
            <li className="hover:text-green-600 transition-all duration-300 hover:translate-x-2">
              Customers can browse, compare, and purchase fresh produce.
            </li>
            <li className="hover:text-green-600 transition-all duration-300 hover:translate-x-2">
              Supports local agriculture with a transparent pricing model.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Join us in revolutionizing the way farmers and customers connect!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 animate-pulse">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
