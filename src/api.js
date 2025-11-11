import axios from 'axios';

const API = axios.create({
  baseURL: 'https://task-manager-backend-blue-nine.vercel.app/api',
});

export default API;
