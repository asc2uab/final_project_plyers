import React, { useState, useEffect } from 'react';
import productService from '../../services/productService';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
