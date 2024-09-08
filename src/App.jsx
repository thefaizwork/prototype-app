import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import handshakeImage from './assets/handshake.png';
import FarmerImage from './assets/Farmer.png';
import CombinedForm from './pages/CombinedForm';
import FarmerProfile from './pages/FarmerProfile';
import FarmRegister from './pages/FarmRegister';
import CropSelling from './pages/CropSelling';
import ProductManage from './pages/ProductManage';



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
      {/* Main Content */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center mt-10 px-4">
              {/* Both links should point to /combined-form */}
              <Link to="/combined-form?role=seller" className="flex-1 bg-green-500 flex flex-col items-center justify-center p-8">
                <img src={FarmerImage} alt="Farmer" className="mb-6" />
                <span className="text-white text-3xl font-bold">SELL</span>
              </Link>

              <Link to="/combined-form?role=buyer" className="flex-1 bg-yellow-500 flex flex-col items-center justify-center p-8">
                <img src={handshakeImage} alt="Handshake" className="mb-6" />
                <span className="text-green-900 text-3xl font-bold">BUY</span>
              </Link>

            </div>
          }
        />

        
        <Route path="/combined-form" element={<CombinedForm />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} /> 
        <Route path="/farm-register" element={<FarmRegister />} />
       <Route path="/crop-selling" element={<CropSelling />} />
        <Route path="/product-manage" element={<ProductManage />} /> 
        

        
      </Routes>

    </div>
  );
}

export default App;
