import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/components/auth.css'; // Correct the import path

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const { firstName, lastName, phoneNumber, email, username, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        firstName,
        lastName,
        phoneNumber,
        email,
        username,
        password,
      });
      if (response.data && response.data.token) {
        setMessage(`Registration successful! Token: ${response.data.token}`);
        setError('');
      } else {
        setError('Unexpected response from the server');
        setMessage('');
      }
    } catch (err) {
      console.error('Registration error:', err); // Log the error to the console for debugging
      setError(err.response && err.response.data && err.response.data.message
        ? err.response.data.message
        : 'Error registering');
      setMessage('');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          required
        />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
