import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sellerLogin, sellerSignup } from '../api/apiService'; // Import API functions

function SellerForm() {
  const [email, setEmail] = useState('');
  const [passward, setPassword] = useState('');
  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await sellerLogin(email, password);
      navigate('/farmer-profile');
    } catch (error) {
      // Handle error (e.g., show a message)
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const userData = { name, phoneNumber, email, farmName, address, state, city, pincode };
      await sellerSignup(userData);
      navigate('/farmer-profile');
    } catch (error) {
      // Handle error (e.g., show a message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg mt-12 p-8 w-3/4">
        <h2 className="text-center text-green-600 text-3xl font-bold mb-8">
          {isLogin ? 'Seller Login' : 'Seller Registration'}
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Login Form */}
          {isLogin ? (
            <div className="bg-gray-50 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Existing Seller or Buyer? Log In Below</h3>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  value={phoneNumber}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="Password"
                  placeholder="Enter your Password"
                  value={email}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <button
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-4"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
              <p className="text-center text-gray-600">
                Not a seller?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-green-600 hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>
          ) : (
            /* Registration Form */
            <div className="bg-gray-50 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">New Seller? Register Below</h3>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Farm Name</label>
                <input
                  type="text"
                  placeholder="Enter your farm name"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">State</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Pincode</label>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <button
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-4"
                onClick={handleSignup}
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              <p className="text-center text-gray-600">
                Already a seller?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-green-600 hover:underline"
                >
                  Log in here
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerForm;
