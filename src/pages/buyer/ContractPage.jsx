import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContractPage() {

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/requestformpage'); 
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Main Content Area */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 flex flex-col md:flex-row justify-between">
        {/* Left Side - Empty space for possible image or content */}
        <div className="bg-gray-100 rounded-lg w-full h-64 md:h-auto md:w-1/2"></div>

        {/* Right Side - Product and Confirmation Details */}
        <div className="flex-grow mt-6 md:mt-0 md:ml-6">
          {/* Product Title */}
          <h2 className="text-2xl font-bold text-gray-800">WHeat From Punjab Sardarji Farms</h2>
          <p className="text-gray-600 mt-1">Natural wheat</p>
          <p className="text-gray-600">Packagin type: Loose</p>

          {/* Confirmation Box */}
          <div className="border border-yellow-400 rounded-lg p-6 mt-6 bg-white shadow-lg">
            <h3 className="text-green-600 font-semibold text-lg mb-4">Confirmation of Contract Details</h3>
            <ul className="space-y-2">
              <li><strong>Crop Type:</strong> Wheat</li>
              <li><strong>Variety:</strong> Premium</li>
              <li><strong>Quantity:</strong> 5000KG</li>
              <li><strong>Price per Unit:</strong> $42</li>
              <li><strong>Sowing Date:</strong> 01/09/2024</li>
              <li><strong>Harvest Date (Expected):</strong> 15/11/2024</li>
              <li><strong>Delivery Type:</strong> Immediate</li>
              <li><strong>Contract Duration:</strong> 3 months</li>
            </ul>
          </div>

          {/* Get Contract Button */}
          <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-md shadow-md" onClick={handleConfirm}>
            Get Contract
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContractPage;
