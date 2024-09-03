import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SellerForm() {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLogin = () => {
    // Perform any necessary validation here before navigating
    navigate('/farmer-profile'); // Navigate to Farmer Profile Management page
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center">
      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg mt-12 p-8 w-3/4">
        <h2 className="text-center text-green-600 text-3xl font-bold mb-8">Seller Login & Registration</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Login Form */}
          <div className="bg-gray-50 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Existing Seller? Log In Below</h3>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-4">Send OTP</button>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button 
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              onClick={handleLogin} // Attach the navigation function to the button
            >
              Log In
            </button>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-50 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-4">New Seller? Register Below</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Farm Name</label>
                <input
                  type="text"
                  placeholder="Enter your farm name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">State</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Pincode</label>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mb-4">Send OTP</button>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerForm;
