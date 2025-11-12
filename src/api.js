import axios from 'axios';

// ✅ Must include /api
const API = axios.create({
  baseURL: 'https://task-manager-backend-blue-nine.vercel.app/api',
});

export default API;
