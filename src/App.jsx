import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import handshakeImage from './assets/handshake.png';
import FarmerImage from './assets/Farmer.png';
import BuyerForm from './pages/BuyerForm'; 
import SellerForm from './pages/SellerForm'; 
import FarmerProfile from './pages/FarmerProfile'; 



function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white p-6 flex justify-between items-center shadow-md">
        <div className="text-4xl font-bold text-black">
          CONFARM
        </div>
        <div className="flex space-x-8 text-lg font-semibold">
          <Link to="#" className="text-black">SHOP</Link>
          <Link to="#" className="text-black">WORKING</Link>
          <Link to="/buyer-form" className="text-black">BUYER</Link>
          <Link to="/seller-form" className="text-black">SELLER</Link>
        </div>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center mt-10 px-4">
              <Link to="/seller-form" className="flex-1 bg-green-500 flex flex-col items-center justify-center p-8">
                <img src={FarmerImage} alt="FarmerImage" className="mb-6" />
                <span className="text-white text-3xl font-bold">SELL</span>
              </Link>

              <Link to="/buyer-form" className="flex-1 bg-yellow-500 flex flex-col items-center justify-center p-8">
                <img src={handshakeImage} alt="Handshake" className="mb-6" />
                <span className="text-green-900 text-3xl font-bold">BUY</span>
              </Link>
            </div>
          }
        />
        <Route path="/buyer-form" element={<BuyerForm />} />
        <Route path="/seller-form" element={<SellerForm />} /> 
        <Route path="/farmer-profile" element={<FarmerProfile />} /> 
      </Routes>
    </div>
  );
}

export default App;
