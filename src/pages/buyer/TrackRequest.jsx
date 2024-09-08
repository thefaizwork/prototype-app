import React from 'react';

const TrackRequest = () => {
  return (
    <div className="min-h-screen bg-yellow-50">

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-green-100 p-4 space-y-6">
          <div>
            <h2 className="font-bold">Profile Manager</h2>
          </div>
          <div>
            <h2 className="font-bold text-red-600">Contract Requests</h2>
          </div>
          <div>
            <h2>Orders</h2>
          </div>
          <div>
            <h2>Active Contracts</h2>
          </div>
          <div>
            <h2>Transaction History</h2>
          </div>
          <div>
            <h2>Verify</h2>
          </div>
          <div>
            <h2>Contract History</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Contract Requests</h2>

          {/* Contract Request Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold">Seller: Manpreet Singh</h3>
                <h4 className="text-md">Product type: Wheat</h4>
              </div>
              <div className="text-red-500 font-bold">Pending</div>
            </div>

            <form className="mt-4 space-y-4">
              <div>
                <label className="block font-bold">Quantity Required</label>
                <input type="text" value="5000KG" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">Negotiate</label>
                <input type="text" value="$40-$45" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">Payment</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">Delivery Type</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">Address</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">City</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">District</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div>
                <label className="block font-bold">Pincode</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded-md" />
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Chat with Seller</button>
              </div>
            </form>
          </div>

          {/* Contract Details Confirmation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Confirmation of Contract Details</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="font-bold">Crop Type:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Variety:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Quantity:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Price per Unit:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Sowing Date:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Harvest Date (Expected):</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Delivery Type:</span> <span>undefined</span>
              </div>
              <div>
                <span className="font-bold">Contract Duration:</span> <span>undefined</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRequest;
