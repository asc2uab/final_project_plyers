import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const authService = {
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },
  getProfile: async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: { 'x-auth-token': user.token },
      });
      return response.data;
    }
    return null;
  },
  addProduct: async (productData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      await axios.post(`${API_URL}/products`, productData, {
        headers: { 'x-auth-token': user.token },
      });
    }
  },
  getProducts: async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },
};

export default authService;
