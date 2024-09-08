// src/containers/FarmerProfile.js
import React from 'react';
import Sidebar from '../componenets/sidebar';

function FarmerProfile() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg" style={{ maxWidth: '800px' }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Farmer Profile Management</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Farmer Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contact Information:</label>
              <input
                type="text"
                placeholder="Enter your phone number or email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farm Location:</label>
              <input
                type="text"
                placeholder="Enter your farm location"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farm Size (in acres):</label>
              <input
                type="text"
                placeholder="Enter the size of your farm"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Crop Preferences:</label>
              <textarea
                placeholder="Enter your crop preferences"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farming Method:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded">
                <option>Select Farming Method</option>
                <option>Organic</option>
                <option>Conventional</option>
                <option>Hydroponic</option>
                <option>Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Years of Experience:</label>
              <input
                type="text"
                placeholder="Enter your farming experience"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Profile Picture:</label>
              <input
                type="file"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FarmerProfile;
