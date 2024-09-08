import React, { useState } from "react";
import Sidebar from '../componenets/sidebar';

const ContractRequestForm = () => {
    const [quantity] = useState("5000KG");
    const [priceRange, setPriceRange] = useState("$40-$45");
    const [buyerName] = useState("Rahul Ali Singh");
    const [productType] = useState("Wheat");
    const [isEditingPrice, setIsEditingPrice] = useState(false); // Toggle for negotiate section
    const [isAccepted, setIsAccepted] = useState(false); // State to switch to e-signature form
    const [signature, setSignature] = useState(""); // State to store the signature

    // Function to handle toggling between edit and view mode
    const handleEditPrice = () => {
        setIsEditingPrice(!isEditingPrice); // Toggle the state
    };

    // Function to handle the acceptance and show the e-signature form
    const handleAccept = () => {
        setIsAccepted(true); // Set the state to show e-signature form
    };

    // Function to handle submission of the e-signature
    const handleSubmitSignature = (e) => {
        e.preventDefault();
        alert(`E-signature submitted: ${signature}`);
        // You can add further logic here like sending the signature to the server.
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />

            <div className="p-6 flex flex-col w-full">
                {/* Conditional rendering for E-Signature Form */}
                {isAccepted ? (
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl font-bold mb-4">E-Signature Required</h2>
                        <form onSubmit={handleSubmitSignature} className="space-y-4 w-1/2">
                            <div>
                                <label className="block text-gray-700">Enter Your Name</label>
                                <input
                                    type="text"
                                    value={signature}
                                    onChange={(e) => setSignature(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                                Submit E-Signature
                            </button>
                        </form>
                    </div>
                ) : (
                    <>
                        {/* Buyer and Product Section */}
                        <div className="flex justify-between items-center border-b pb-4 mb-6">
                            <div>
                                <h2 className="font-semibold text-lg">{buyerName}</h2>
                                <p className="text-gray-500">Product type: {productType}</p>
                            </div>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                                onClick={handleAccept}>
                                Accept
                            </button>
                        </div>

                        {/* Form Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Input Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Quantity Required</label>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Negotiate</label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(e.target.value)}
                                            readOnly={!isEditingPrice} // Input is read-only if not editing
                                            className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 ${!isEditingPrice ? 'bg-gray-100' : ''}`}
                                        />
                                        <button
                                            onClick={handleEditPrice}
                                            className="ml-2 text-blue-500 text-sm">
                                            {isEditingPrice ? "Save" : "Edit"}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Payment</label>
                                    <input
                                        type="text"
                                        value="Online"
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Delivery Type</label>
                                    <input
                                        type="text"
                                        value="Third Party, Self"
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        value="XYZ"
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">City</label>
                                    <input
                                        type="text"
                                        value="XYZ"
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">District</label>
                                    <input
                                        type="text"
                                        value="XYZ"
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Pincode</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Update</button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Contact Buyer</button>
                                </div>
                            </div>

                            {/* Confirmation Section */}
                            <div className="border border-green-500 rounded-lg p-6 bg-white shadow">
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
                    </>
                )}
            </div>
        </div>
    );
};

export default ContractRequestForm;
