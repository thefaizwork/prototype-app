import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <div className="mb-14">
          {/* You can add content here if needed */}
        </div>
        <nav>
          <ul className="space-y-8"> {/* Increased spacing */}
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-600">Profile Manager</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-600">Crop Selling</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-600">Product Management</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-600">Contract Request</a>
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Adjust the max-w value and padding here */}
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

export default App;








//Contract request

// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-[#f8f6f1] p-4">
//       <div className="flex">
//         <Sidebar />
//         <ContractDetails />
//       </div>
//     </div>
//   );
// };

// const Sidebar = () => (
//   <div className="w-1/4 bg-white rounded-lg shadow-lg p-4 mr-4">
//     <ul>
//       <li className="font-bold text-gray-600 py-2">Profile Manager</li>
//       <li className="text-gray-600 py-2">Crop Selling</li>
//       <li className="text-gray-600 py-2">Product Management</li>
//       <li className="text-gray-600 py-2">Contract Request</li>
//       <li className="font-bold text-red-500 py-2">Active Contracts</li>
//       <li className="text-gray-600 py-2">Transaction History</li>
//       <li className="text-gray-600 py-2">Verify</li>
//       <li className="text-gray-600 py-2">Contract History</li>
//     </ul>
//   </div>
// );

// const ContractDetails = () => (
//   <div className="w-3/4 bg-white rounded-lg shadow-lg p-4">
//     <div className="flex justify-between items-center mb-4">
//       <div className="flex space-x-4">
//         <p className="text-xl font-semibold"><strong>Buyer:</strong> Rahul Ali Singh</p> {/* Increased font size */}
//         <p className="text-xl font-semibold"><strong>Product Type:</strong> Wheat</p> {/* Increased font size */}
//       </div>
//       <button className="bg-blue-500 text-white py-3 px-6 rounded text-lg">Accept</button> {/* Increased button size */}
//     </div>

//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <label className="block text-sm font-bold">Quantity Required</label>
//         <input type="text" value="5000KG" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">Negotiate</label>
//         <div className="flex items-center">
//           <input type="text" defaultValue="$40-$45" className="border rounded w-full p-2 mt-1" />
//           <button className="ml-2 text-blue-500">Edit</button>
//         </div>

//         <label className="block text-sm font-bold mt-4">Payment</label>
//         <input type="text" value="Online Payment" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">Delivery Type</label>
//         <input type="text" value="Home Delivery" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">Address</label>
//         <input type="text" value="1234 Farm Lane" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">City</label>
//         <input type="text" value="Agricity" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">District</label>
//         <input type="text" value="Harvest District" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <label className="block text-sm font-bold mt-4">Pincode</label>
//         <input type="text" value="123456" className="border rounded w-full p-2 mt-1 bg-gray-100" readOnly />

//         <div className="flex mt-4">
//           <button className="bg-blue-500 text-white py-3 px-6 rounded text-lg">Update</button> {/* Increased button size */}
//           <button className="ml-4 bg-gray-200 text-gray-700 py-3 px-6 rounded text-lg">Contact Buyer</button> {/* Increased button size */}
//         </div>
//       </div>

//       <div className="bg-gray-100 p-4 rounded">
//         <h3 className="text-lg font-bold mb-4">Confirmation of Contract Details</h3>
//         <p><strong>Crop Type:</strong> undefined</p>
//         <p><strong>Variety:</strong> undefined</p>
//         <p><strong>Quantity:</strong> undefined</p>
//         <p><strong>Price per Unit:</strong> undefined</p>
//         <p><strong>Sowing Date:</strong> undefined</p>
//         <p><strong>Harvest Date (Expected):</strong> undefined</p>
//         <p><strong>Delivery Type:</strong> undefined</p>
//         <p><strong>Contract Duration:</strong> undefined</p>
//       </div>
//     </div>
//   </div>
// );

// export default Dashboard;
