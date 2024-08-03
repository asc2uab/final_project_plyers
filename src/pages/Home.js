import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';
import '../styles/components/form.css';

const Home = () => {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="form-container">
        <div className="form-content">
          <h2>Welcome to Our Marketplace</h2>
          <div className="form-links">
            <Link to="/login" className="form-link">Login</Link>
            <Link to="/register" className="form-link">Register</Link>
          </div>
        </div>
      </div>
      <div className="bottom-message">
        Discover Exclusive Deals at Your Fingertips!
      </div>
    </div>
  );
};

export default Home;
