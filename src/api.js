import axios from 'axios';

// ✅ FIXED: include /api in baseURL
const API = axios.create({
  baseURL: 'https://task-manager-backend-blue-nine.vercel.app/api',
});

export default API;
