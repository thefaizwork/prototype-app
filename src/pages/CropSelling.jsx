import React, { useState } from 'react';
import Sidebar from '../componenets/sidebar';
import { addCrop } from '../api/apiService'; // Adjust the import path if necessar

function CropSelling() {
  const [cropName, setCropName] = useState('');
  const [cropType, setCropType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [sowingDate, setSowingDate] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [contractDuration, setContractDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object to send in the request
    const cropData = {
      cropName,
      cropType,
      quantity,
      pricePerUnit,
      sowingDate,
      harvestDate,
      deliveryType,
      contractDuration,
      description,
    };

    try {
      await addCrop(cropData);
      // Handle success, e.g., show a success message or reset the form
    } catch (error) {
      console.error('Error during crop addition:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg" style={{ maxWidth: '800px' }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Crop Selling Management</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Crop Name:</label>
              <input
                type="text"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                placeholder="Enter crop name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Crop Type:</label>
              <input
                type="text"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                placeholder="Enter crop type"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Price per Unit:</label>
              <input
                type="number"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                placeholder="Enter price per unit"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Sowing Date:</label>
              <input
                type="date"
                value={sowingDate}
                onChange={(e) => setSowingDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Harvest Date:</label>
              <input
                type="date"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Delivery Type:</label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Delivery Type</option>
                <option value="Self Pickup">Self Pickup</option>
                <option value="Home Delivery">Home Delivery</option>
                <option value="Drop-Off at Location">Drop-Off at Location</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contract Duration:</label>
              <input
                type="text"
                value={contractDuration}
                onChange={(e) => setContractDuration(e.target.value)}
                placeholder="Enter contract duration"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description of the crop"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
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
