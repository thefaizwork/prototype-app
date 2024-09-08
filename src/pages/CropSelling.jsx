
import React from 'react';
import Sidebar from '../componenets/sidebar';

function CropSelling() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg" style={{ maxWidth: '800px' }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Crop Selling Management</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Crop Name:</label>
              <input
                type="text"
                placeholder="Enter crop name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Crop Type:</label>
              <input
                type="text"
                placeholder="Enter crop type"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Quantity:</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Price per Unit:</label>
              <input
                type="number"
                placeholder="Enter price per unit"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Sowing Date:</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Harvest Date:</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Delivery Type:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded">
                <option>Select Delivery Type</option>
                <option>Self Pickup</option>
                <option>Home Delivery</option>
                <option>Drop-Off at Location</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contract Duration:</label>
              <input
                type="text"
                placeholder="Enter contract duration"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <textarea
                placeholder="Enter description of the crop"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Crop Details
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CropSelling;