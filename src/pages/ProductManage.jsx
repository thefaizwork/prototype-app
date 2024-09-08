import React, { useState } from 'react';
import Sidebar from '../componenets/sidebar';

function ProductManage() {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    type: '',
    variety: '',
    price: '',
    deliveryType: '',
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.type || !newProduct.price || !newProduct.deliveryType) {
      alert('Please fill in all required fields.');
      return;
    }

    const newProductObj = {
      id: products.length + 1,
      ...newProduct,
    };

    setProducts([...products, newProductObj]);
    setNewProduct({
      name: '',
      type: '',
      variety: '',
      price: '',
      deliveryType: '',
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products Manage</h1>
          <button
            onClick={() => document.getElementById('add-product-form').classList.toggle('hidden')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add New Product
          </button>
        </div>

        {/* Add New Product Form */}
        <div id="add-product-form" className="hidden mb-4">
          <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Type"
            value={newProduct.type}
            onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Variety"
            value={newProduct.variety}
            onChange={(e) => setNewProduct({ ...newProduct, variety: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Price per Unit"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Delivery Type"
            value={newProduct.deliveryType}
            onChange={(e) => setNewProduct({ ...newProduct, deliveryType: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </div>

        {/* Product Management Cards */}
        <div className="grid grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p>No products available. Please add a product.</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="bg-white border border-gray-300 p-4 rounded-lg">
                <div className="mb-4">
                  <span className="block text-center font-semibold">Product Image</span>
                </div>
                <div className="mb-2">
                  <h2 className="font-bold text-lg">{product.name}</h2>
                  <p>Crop Type: {product.type}</p>
                  <p>Variety: {product.variety}</p>
                  <p>Price per Unit: {product.price}</p>
                  <p>Delivery Type: {product.deliveryType}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
