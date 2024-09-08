// src/components/Sidebar.js
import React from 'react';


function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 shadow-md">
      <div className="mb-14">
        {/* You can add content here if needed */}
      </div>
      <nav>
        <ul className="space-y-8"> {/* Increased spacing */}
          <li>
            <a href="/farmer-profile" className="block text-gray-700 hover:text-green-600">Profile Manager</a>
          </li>
          <li>
            <a href="/farm-register" className="block text-gray-700 hover:text-green-600">Farm Register</a>
          </li>
          <li>
            <a href="/crop-selling" className="block text-gray-700 hover:text-green-600">Crop Selling</a>
          </li>
          <li>
            <a href="/product-manage" className="block text-gray-700 hover:text-green-600">Product Management</a>
          </li>
          <li>
            <a href="contract-request" className="block text-gray-700 hover:text-green-600">Contract Request</a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600">Active Contracts</a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600">Transaction History</a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600">Verify</a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600">Contract History</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
