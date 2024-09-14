import React from 'react';
import { FaSeedling, FaShoppingCart } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';
const Second = () => {
  const navigate=useNavigate();
  const handelnext1=()=>{
    navigate('/farmer')
  }
  const handelnext2=()=>{
    navigate('/customer')
  }
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen p-6"
      style={{
        backgroundColor: '#e0d7af', 
      }}
    >
      <div 
        className="p-10 max-w-md bg-transparent rounded-lg"
        style={{
          boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)', 
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-teal-900">What is your Role?</h1>
        <p className="text-gray-700 mb-6 text-center">
          Please select your role to continue. This helps us provide you with a more personalized experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="w-full px-6 py-3 bg-teal-700 text-white font-bold rounded-lg shadow-md hover:bg-teal-800 transition duration-300 ease-in-out flex items-center justify-center" onClick={handelnext1}>
            <FaSeedling className="mr-2" /> Farmer
          </button>
          <button className="w-full px-6 py-3 bg-yellow-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out flex items-center justify-center" onClick={handelnext2}>
            <FaShoppingCart className="mr-2" /> Customer
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Not sure about your role?</p>
          <p className="text-teal-700 font-semibold hover:underline">Learn more here</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
