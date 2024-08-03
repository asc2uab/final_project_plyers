import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import '../styles/pages/sellProduct.css';

const SellProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    age: '',
  });
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    if (name === 'name') {
      if (value === 'Chair') setPhoto('/images/chair.jpg');
      if (value === 'Table') setPhoto('/images/table.jpg');
      if (value === 'Bed') setPhoto('/images/bed.jpg');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      const newProduct = { ...product, photo, username: user.username };
      await authService.addProduct(newProduct);
      setMessage('Thank you for selling the product on Plyers!');
      setTimeout(() => {
        navigate('/marketplace');
      }, 2000); // Redirect to marketplace after 2 seconds
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="sell-product-container">
      <h1>Sell Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product</label>
          <select name="name" value={product.name} onChange={handleChange} required>
            <option value="">Select a product</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            <option value="Bed">Bed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age of Product (in years)</label>
          <input type="number" name="age" value={product.age} onChange={handleChange} required />
        </div>
        {photo && <img src={photo} alt={product.name} className="product-photo" />}
        <button type="submit">Add Product</button>
      </form>
      {message && <p className="thank-you-message">{message}</p>}
    </div>
  );
};

export default SellProduct;
