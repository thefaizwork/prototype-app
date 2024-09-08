import React, { useState } from 'react';
import Sidebar from '../componenets/sidebar';
// import { farmRegister } from '../api/apiService';
import { useNavigate } from 'react-router-dom';
import { registerFarm } from '../api/apiService'; 


function FarmRegister() {
    const [farmName, setFarmName] = useState('');
    const [farmSize, setFarmSize] = useState('');
    const [cropPreferences, setCropPreferences] = useState('');
    const [farmCompleteAddress, setFarmCompleteAddress] = useState('');
    const [addressProof, setAddressProof] = useState(null);
    const [farmingMethod, setFarmingMethod] = useState('');
    const [yearOfExperience, setYearOfExperience] = useState('');
  
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('farmName', farmName);
      formData.append('farmSize', farmSize);
      formData.append('cropPreferences', cropPreferences);
      formData.append('farmCompleteAddress', farmCompleteAddress);
      formData.append('farmingMethod', farmingMethod);
      formData.append('yearOfExperience', yearOfExperience);
      
      if (addressProof) {
        formData.append('addressProof', addressProof);
      }
  
      try {
        await registerFarm(formData);
  
        navigate('/clone');
      } catch (error) {
        console.error('Error during farm registration:', error);
      }
    };
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      {/* Main Content  */}
      <main className="flex-1 p-6">
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg" style={{ maxWidth: '800px' }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Farm Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Farm Name:</label>
              <input
                type="text"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                placeholder="Enter your farm name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farm Size (in acres):</label>
              <input
                type="text"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                placeholder="Enter the size of your farm"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Crop Preferences:</label>
              <textarea
                value={cropPreferences}
                onChange={(e) => setCropPreferences(e.target.value)}
                placeholder="Enter your crop preferences"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farm Complete Address:</label>
              <textarea
                value={farmCompleteAddress}
                onChange={(e) => setFarmCompleteAddress(e.target.value)}
                placeholder="Enter the full address of your farm"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address Proof:</label>
              <input
                type="file"
                onChange={(e) => setAddressProof(e.target.files[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Farming Method:</label>
              <select
                value={farmingMethod}
                onChange={(e) => setFarmingMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Farming Method</option>
                <option value="Organic">Organic</option>
                <option value="Conventional">Conventional</option>
                <option value="Hydroponic">Hydroponic</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Year of Experience:</label>
              <input
                type="text"
                value={yearOfExperience}
                onChange={(e) => setYearOfExperience(e.target.value)}
                placeholder="Enter your farming experience"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Register Farm
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FarmRegister;