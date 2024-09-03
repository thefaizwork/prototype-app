import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white p-6 flex justify-between items-center shadow-md">
        <div className="text-4xl font-bold text-black">
          CONFARM
        </div>
        <div className="flex space-x-8 text-lg font-semibold">
          <a href="#" className="text-black">SHOP</a>
          <a href="#" className="text-black">WORKING</a>
          <a href="#" className="text-black">BUYER</a>
          <a href="#" className="text-black">SELLER</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center mt-10 px-4">
        {/* Green Box */}
        <div className="flex-1 bg-green-500 flex flex-col items-center justify-center p-8">
          <img
            src="https://example.com/your-image-url-here"
            alt="Farmer"
            className="mb-6"
          />
          <span className="text-white text-3xl font-bold">SELL</span>
        </div>

        {/* Yellow Box */}
        <div className="flex-1 bg-yellow-500 flex flex-col items-center justify-center p-8 wh-1500">
          <img
            src="./assets/handshake.png"
            alt="Handshake"
            className="mb-6"
          />
          <span className="text-green-900 text-3xl font-bold">BUY</span>
        </div>
      </div>
    </div>
  );
}

export default App;
