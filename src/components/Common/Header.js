import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import '../../styles/components/header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileClick = () => {
    if (user) {
      alert(`Username: ${user.username}`);
    } else {
      alert('Please log in first.');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Plyers</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/sell">Sell Product</Link>
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
          <div className="profile-icon" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            {user && (
              <div className="profile-dropdown">
                <p>Username: {user.username}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
