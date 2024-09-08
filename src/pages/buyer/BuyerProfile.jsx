import React from 'react';
import { useNavigate } from 'react-router-dom';

function BuyerProfile() {

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/contractpage'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Profile Section */}
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg w-full  mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          {/* Placeholder for Image */}
          <div className="w-40 h-40 bg-yellow-400 rounded-lg mb-4 md:mb-0 md:mr-6"></div>

          {/* User Details */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-900">Manpreet Singh</h2>
            <p className="text-gray-700 mt-1">Ram Paul Farms</p>
            <p className="text-gray-500 mt-1">Rohtak, Haryana</p>

            <p className="mt-4 text-lg font-semibold text-gray-900">Best in -</p>
            <p className="text-gray-900">Wheat, Sugarcane, Cereals</p>
          </div>
        </div>

        {/* Product Selector */}
        <div className="mt-6">
          <label
            htmlFor="products"
            className="block text-lg font-semibold text-gray-900"
          >
            Choose Products :
          </label>
          <div className="flex mt-2">
            <select
              id="products"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Product</option>
              <option value="wheat">Wheat</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="cereals">Cereals</option>
            </select>
            <button className="ml-2 px-6 py-2 bg-orange-400 text-white font-bold rounded-md shadow-md hover:bg-orange-500 focus:outline-none" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mt-8 text-center bg-blue-100 p-6 rounded-lg shadow-md w-full  mx-4 md:mx-auto">
        <p className="text-6xl font-bold text-gray-900">4.7</p>
        <p className="text-gray-700 mt-1">Based on 150 Ratings</p>
        <div className="mt-3 text-4xl text-yellow-500">
          {/* Static 5-Star Rating */}
          ★★★★★
        </div>
      </div>
    </div>
  );
}

export default BuyerProfile;
