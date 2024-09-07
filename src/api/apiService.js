import axios from 'axios';

const API_URL = 'https://contract-farming-system-backend.onrender.com'; // Replace with your actual API URL

export const sellerSignup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/registerUser`, data);
    return response.data;
  } catch (error) {
    console.error('Error during seller signup:', error);
    throw error;
  }
};

export const sellerLogin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/loginUser`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during seller login:', error);
    throw error;
  }
};

export const buyerSignup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/registerUser`, data);
    return response.data;
  } catch (error) {
    console.error('Error during buyer signup:', error);
    throw error;
  }
};

export const buyerLogin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/loginUser`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during buyer login:', error);
    throw error;
  }
};
