import axios from 'axios';

// ✅ Correct base URL includes /api
const API = axios.create({
  baseURL: 'https://task-manager-backend-blue-nine.vercel.app/api',
});

export default API;
