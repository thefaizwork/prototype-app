// src/containers/BuyerProfile.js
import React from 'react';
import Sidebar from '../components/Sidebar';

function BuyerProfile() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg" style={{ maxWidth: '800px' }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Buyer Profile Management</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Buyer Name:</label>
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
              <label className="block text-gray-700">Company Name:</label>
              <input
                type="text"
                placeholder="Enter your company name (if applicable)"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Company Address:</label>
              <input
                type="text"
                placeholder="Enter your company address"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Preferred Crops:</label>
              <textarea
                placeholder="Enter your preferred crops"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Purchase Volume (in tons):</label>
              <input
                type="text"
                placeholder="Enter your expected purchase volume"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contract Preferences:</label>
              <textarea
                placeholder="Enter your contract preferences"
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

export default BuyerProfile;
