import axios from 'axios';

// ✅ use your deployed backend URL here
const API = axios.create({ baseURL: 'https://task-manager-backend-blue-nine.vercel.app/' });

export default API;
