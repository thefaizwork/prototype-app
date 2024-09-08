import React from 'react';
import Sidebar from '../componenets/sidebar';


function ProductManage() {
    return (
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar />
  
      {/* Product Management Cards */}
      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products Manage</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Post New Product</button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="bg-white border border-gray-300 p-4 rounded-lg">
            <div className="mb-4">
              <span className="block text-center font-semibold">Product Image</span>
            </div>
            <div className="mb-2">
              <h2 className="font-bold text-lg">Golden Wheat</h2>
              <p>Crop Type: Wheat</p>
              <p>Variety: Durum</p>
              <p>Price per Unit: ₹1500 per kg</p>
              <p>Delivery Type: Pickup</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>

          {/* Product Card */}
          <div className="bg-white border border-gray-300 p-4 rounded-lg">
            <div className="mb-4">
              <span className="block text-center font-semibold">Product Image</span>
            </div>
            <div className="mb-2">
              <h2 className="font-bold text-lg">Premium Rice</h2>
              <p>Crop Type: Rice</p>
              <p>Variety: Basmati</p>
              <p>Price per Unit: ₹1800 per kg</p>
              <p>Delivery Type: Delivery</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>

          {/* Repeat similar cards for other products */}
        </div>
      </div>
    </div>
  );
};

export default ProductManage;