import React, { useState, useEffect } from 'react';
import ProductCard from '../components/Marketplace/ProductCard';
import authService from '../services/authService';
import '../styles/pages/marketplace.css';

const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await authService.getProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="marketplace-container">
      <h1>Marketplace</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
