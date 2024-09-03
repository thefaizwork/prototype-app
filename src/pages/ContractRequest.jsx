import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 shadow-md">
          <div className="mb-14">
            {/* Add additional content here if necessary */}
          </div>
          <nav>
            <ul className="space-y-8"> {/* Increased spacing */}
              <li>
                <Link to="/profile-manager" className="block text-gray-700 hover:text-green-600">Profile Manager</Link>
              </li>
              <li>
                <Link to="/crop-selling" className="block text-gray-700 hover:text-green-600">Crop Selling</Link>
              </li>
              <li>
                <Link to="/product-management" className="block text-gray-700 hover:text-green-600">Product Management</Link>
              </li>
              <li>
                <Link to="/contract-request" className="block text-gray-700 hover:text-green-600">Contract Request</Link>
              </li>
              <li>
                <Link to="/active-contracts" className="block text-gray-700 hover:text-green-600">Active Contracts</Link>
              </li>
              <li>
                <Link to="/transaction-history" className="block text-gray-700 hover:text-green-600">Transaction History</Link>
              </li>
              <li>
                <Link to="/verify" className="block text-gray-700 hover:text-green-600">Verify</Link>
              </li>
              <li>
                <Link to="/contract-history" className="block text-gray-700 hover:text-green-600">Contract History</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/profile-manager" element={<div>Profile Manager Content</div>} />
            <Route path="/contract-request" element={<Dashboard />} />
            {/* Add other routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
