import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">About FarmDirect</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to FarmDirect</h2>
            <p className="text-gray-600 leading-relaxed">
              FarmDirect is a platform that bridges the gap between farmers and customers. Our mission is to empower farmers by providing them with a direct marketplace to sell their produce while offering customers fresh, high-quality crops straight from the farm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Farmers</h2>
            <p className="text-gray-600 leading-relaxed">
              Farmers can easily upload details about their crops, including type, quantity, and pricing. This allows them to reach a wider audience and sell their produce directly to customers without intermediaries. FarmDirect ensures fair pricing and transparency for farmers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Customers</h2>
            <p className="text-gray-600 leading-relaxed">
              Customers can browse through a variety of fresh crops uploaded by farmers. With FarmDirect, you get access to high-quality, farm-fresh produce at competitive prices. You can place orders directly through the platform and support local farmers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where farmers and customers are directly connected, fostering a sustainable and transparent agricultural ecosystem. FarmDirect is committed to promoting local farming and ensuring fresh produce reaches your table.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a farmer looking to sell your crops or a customer seeking fresh produce, FarmDirect is here for you. Join our community today and be a part of the farm-to-table revolution!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;