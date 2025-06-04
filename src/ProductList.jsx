import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 2499, description: 'Premium sound quality with noise cancellation' },
    { id: 2, name: 'Smart Watch', price: 5999, description: 'Track your fitness and receive notifications' },
    { id: 3, name: 'Bluetooth Speaker', price: 1299, description: 'Portable speaker with 10hr battery life' },
    { id: 4, name: 'Power Bank', price: 999, description: '10000mAh capacity with fast charging' }
  ];

  // State to track selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      <div className="products">
        {products.map(product => (
          <div 
            key={product.id}
            className={`product-card ${selectedProduct?.id === product.id ? 'selected' : ''}`}
            onClick={() => setSelectedProduct(product)}
          >
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Product details section */}
      <div className="product-details">
        {selectedProduct ? (
          <>
            <h3>{selectedProduct.name}</h3>
            <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
          </>
        ) : (
          <p>Select a product to view details</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;