import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sellerSignup, sellerLogin, buyerSignup, buyerLogin } from '../api/apiService'; // Import API functions

function CombinedForm() {
  const [role, setRole] = useState('buyer'); // Default to buyer
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [loading, setLoading] = useState(false);

  // Common fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  // Seller fields
  const [farmName, setFarmName] = useState('');

  // Buyer fields
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Determine role based on URL search params
    const query = new URLSearchParams(location.search);
    const roleFromQuery = query.get('role');
    if (roleFromQuery === 'seller' || roleFromQuery === 'buyer') {
      setRole(roleFromQuery);
    }
  }, [location.search]);

  // Handle login
  const handleLogin = async () => {
    try {
      setLoading(true);
      if (role === 'buyer') {
        await buyerLogin(email, password);
        navigate('/buyer-profile'); // Navigate to the buyer profile page
      } else {
        await sellerLogin(email, password);
        navigate('/farmer-profile'); // Navigate to the seller profile page
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Show an error message or alert the user
    } finally {
      setLoading(false);
    }
  };

  // Handle signup
  async function handleSignup() {
    try {
      setLoading(true);
      const userData = { name, email, address, state, city, pincode };

      if (role === 'buyer') {
        await buyerSignup({ ...userData, phoneNumber });
        navigate('/buyer-profile');
      } else {
        await sellerSignup({ ...userData, password, farmName });
        navigate('/farmer-profile');
      }
    } catch (error) {
      // Handle error (e.g., show a message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg mt-12 p-8 w-3/4">
        <h2 className="text-center text-green-600 text-3xl font-bold mb-8">
          {isLogin ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : `${role.charAt(0).toUpperCase() + role.slice(1)} Registration`}
        </h2>

        {/* Role Selection */}
        {isLogin && (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Select Role</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="buyer"
                  checked={role === 'buyer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Buyer</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="seller"
                  checked={role === 'seller'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Seller</span>
              </label>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Login Form */}
          {isLogin ? (
            <div className="bg-gray-50 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Existing {role === 'buyer' ? 'Buyer' : 'Seller'}? Log In Below</h3>

              {/* Common Login Fields */}
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
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
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
                Not a {role}?{' '}
                <button onClick={() => setIsLogin(false)} className="text-green-600 hover:underline">
                  Register here
                </button>
              </p>
            </div>
          ) : (
            // Registration Form
            <div className="bg-gray-50 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">New {role === 'buyer' ? 'Buyer' : 'Seller'}? Register Below</h3>
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

              {/* Conditional Fields for Buyer or Seller */}
              {role === 'buyer' && (
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
              )}
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
              {role === 'seller' && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                </>
              )}
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
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="text-green-600 hover:underline">
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

export default CombinedForm;
