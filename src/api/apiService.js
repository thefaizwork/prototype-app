import axios from 'axios';
import CropSelling from '../pages/CropSelling';

const API_URL = 'https://contract-farming-system-backend.onrender.com';   

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


//farm regsiter

export const registerFarm = async (farmData) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/farmer/registerFarm`, {FormData});

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during farm registration:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// CropSelling

export const addCrop = async (cropData) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/users/farmer/addCrop`, cropData, {
      headers: {
        'Content-Type': 'application/json', 
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during crop addition:', error);
    throw error;
  }
};