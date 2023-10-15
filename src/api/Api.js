import axios from 'axios';

// Отримання даних з API
export const requestData = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/`)
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


