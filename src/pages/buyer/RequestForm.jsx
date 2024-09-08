// import React, { useState } from 'react';

// function ContractForm() {
//   // State to control the visibility of the second form
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true); // Hide first form and show second form
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
//         {/* First Form */}
//         {!formSubmitted && (
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Left Side - Contract Details */}
//             <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
//               <h3 className="text-xl font-semibold mb-2">Wheat From Punjab Sardarji Farms</h3>
//               <p>Natural wheat</p>
//               <p>Packaging type: Loose</p>

//               <div className="mt-4 border border-yellow-500 rounded-lg p-6 bg-white shadow">
//                 <h3 className="text-green-600 font-semibold text-lg mb-4">Confirmation of Contract Details</h3>
//                 <ul className="space-y-2">
//                   <li><strong>Crop Type:</strong> Wheat</li>
//                   <li><strong>Variety:</strong> Premium</li>
//                   <li><strong>Quantity:</strong> 5000 KG</li>
//                   <li><strong>Price per Unit:</strong> $42</li>
//                   <li><strong>Sowing Date:</strong> 01/09/2024</li>
//                   <li><strong>Harvest Date (Expected):</strong> 15/11/2024</li>
//                   <li><strong>Delivery Type:</strong> Immediate</li>
//                   <li><strong>Contract Duration:</strong> 3 months</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Side - Buyer Request Form */}
//             <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
//               <h3 className="text-green-600 font-semibold text-lg mb-4">Confirm Your Details</h3>
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     placeholder="Enter Quantity"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="price" className="block text-sm font-medium">Price Negotiation</label>
//                   <input
//                     type="text"
//                     id="price"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     placeholder="Enter Price Negotiation Range"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="payment" className="block text-sm font-medium">Payment Mode</label>
//                   <select
//                     id="payment"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     required
//                   >
//                     <option value="">Select Payment Mode</option>
//                     <option value="credit-card">Credit Card</option>
//                     <option value="cash">Cash on Delivery</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="delivery" className="block text-sm font-medium">Delivery Type</label>
//                   <select
//                     id="delivery"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     required
//                   >
//                     <option value="">Select Delivery Type</option>
//                     <option value="standard">Standard Delivery</option>
//                     <option value="express">Express Delivery</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="address" className="block text-sm font-medium">Address</label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     placeholder="Enter Address"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="city" className="block text-sm font-medium">City</label>
//                   <input
//                     type="text"
//                     id="city"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     placeholder="Enter City"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="pincode" className="block text-sm font-medium">Pincode</label>
//                   <input
//                     type="number"
//                     id="pincode"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                     placeholder="Enter Pincode"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Second Form - Appears After First Form Submission */}
//         {formSubmitted && (
//           <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//             <h3 className="text-green-600 font-semibold text-lg mb-4">Confirm Your Contract</h3>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="confirmedQuantity" className="block text-sm font-medium">Confirmed Quantity:</label>
//                 <input
//                   type="text"
//                   id="confirmedQuantity"
//                   value="10"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedPrice" className="block text-sm font-medium">Confirmed Price Negotiation:</label>
//                 <input
//                   type="text"
//                   id="confirmedPrice"
//                   value="15-20"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedPayment" className="block text-sm font-medium">Payment Mode:</label>
//                 <input
//                   type="text"
//                   id="confirmedPayment"
//                   value="Credit Card"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedDelivery" className="block text-sm font-medium">Delivery Type:</label>
//                 <input
//                   type="text"
//                   id="confirmedDelivery"
//                   value="Standard Delivery"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedAddress" className="block text-sm font-medium">Address:</label>
//                 <input
//                   type="text"
//                   id="confirmedAddress"
//                   value="123 Main St"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedCity" className="block text-sm font-medium">City:</label>
//                 <input
//                   type="text"
//                   id="confirmedCity"
//                   value="Los Angeles"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmedPincode" className="block text-sm font-medium">Pincode:</label>
//                 <input
//                   type="text"
//                   id="confirmedPincode"
//                   value="90001"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   readOnly
//                 />
//               </div>

//               <button
//                 type="button"
//                 className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600"
//               >
//                 Confirm Above Details
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContractForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RequestForm() {
  // State to manage form visibility
  const [formSubmitted, setFormSubmitted] = useState(false); // For the first form
  const [requestConfirmed, setRequestConfirmed] = useState(false); // For the second form and confirmation

  // Function to handle first form submission
  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Hide the first form, show the second form
  };

  // Function to handle second form confirmation
  const handleConfirmRequest = () => {
    setRequestConfirmed(true); // Hide the second form and show "Request Sent" message
  };

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/trackrequest'); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl flex flex-col md:flex-row gap-6">
        
        {/* Left Side - Contract Details */}
        <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">WHeat From Punjab Sardarji Farms</h3>
          <p>Natural wheat</p>
          <p>Packagin type: Loose</p>

          <div className="mt-4 border border-yellow-500 rounded-lg p-6 bg-white shadow">
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
        </div>

        {/* Right Side - Conditional Rendering */}
        <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
          {!formSubmitted ? (
            <form className="space-y-4" onSubmit={handleFirstFormSubmit}>
              <h3 className="text-green-600 font-semibold text-lg mb-4">Buyer Request Form</h3>
              {/* Add your input fields here */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                  placeholder="Enter Quantity"
                />
              </div>

              {/* Add other form fields... */}

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
              >
                Submit
              </button>
            </form>
          ) : !requestConfirmed ? (
            <div className="space-y-4">
              <h3 className="text-green-600 font-semibold text-lg mb-4">Confirm Your Details</h3>
              <p>Quantity: 10</p>
              <p>Price Negotiation: 15-20</p>
              <p>Payment Mode: Credit Card</p>
              <p>Delivery Type: Standard Delivery</p>
              <p>Address: 123 Main St</p>
              <p>State: California</p>
              <p>City: Los Angeles</p>
              <p>District: Central LA</p>
              <p>Pincode: 90001</p>

              <button
                onClick={handleConfirmRequest}
                className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600"
              >
                Confirm Above Details
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <button className="bg-green-500 text-white py-2 px-6 rounded-md">
                Request Sent
              </button>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md" onClick={handleConfirm}>
                Track Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
