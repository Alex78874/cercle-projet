import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (username: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data;
  },
};

// Add auth token to all requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-storage');
  if (token) {
    const parsedToken = JSON.parse(token)?.state?.token;
    if (parsedToken) {
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
  }
  return config;
});