import axios from 'axios';

const API_BASE_URL = 'https://contract-farming-system-backend.onrender.com';

// Create an instance of axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define API calls
export const sellerLogin = async (email, password) => {
  try {
    const response = await api.post('/api/v1/users/loginUser', { email, password });
    console.log("Login") 
    return response.data;
  } catch (error) {
    console.error('Error logging in seller:', error);
    throw error;
  }
};

export const sellerSignup = async (userData) => {
  try {
    const response = await api.post('/api/v1/users/registerUser', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up seller:', error);
    throw error;
  }
};

export const buyerLogin = async (phoneNumber, email) => {
  try {
    const response = await api.post('/api/v1/users/loginUser', { phoneNumber, email });
    return response.data;
  } catch (error) {
    console.error('Error logging in buyer:', error);
    throw error;
  }
};

export const buyerSignup = async (userData) => {
  try {
    const response = await api.post('/api/v1/users/registerUser', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up buyer:', error);
    throw error;
  }
};
