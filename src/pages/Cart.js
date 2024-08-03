import React, { useState, useEffect } from 'react';
import '../styles/pages/cart.css';
import couponImage from '../assets/images/coupon.jpg'; // Ensure you have a coupon image in this path

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (productName) => {
    const updatedCart = cart.filter(item => item.name !== productName);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePurchase = () => {
    setShowCoupon(true);
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.name} className="cart-item">
              <img src={item.photo} alt={item.name} className="cart-item-photo" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="purchase-button" onClick={handlePurchase}>Buy Now and Win a Coupon</button>
        </>
      )}
      {showCoupon && (
        <div className="coupon-message">
          <h2>Thank you for your purchase!</h2>
          <img src={couponImage} alt="Coupon" className="coupon-image" />
        </div>
      )}
    </div>
  );
};

export default Cart;
