import axios from 'axios';

// ✅ Make sure /api is included
const API = axios.create({
  baseURL: 'https://task-manager-backend-blue-nine.vercel.app/api',
});

export default API;
