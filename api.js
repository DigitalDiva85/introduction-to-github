import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend's URL

const api = axios.create({
baseURL: API_BASE_URL,
});

export const registerUser = async (userData) => {
const response = await api.post('/auth/register', userData);
return response.data;
};

export const loginUser = async (userData) => {
const response = await api.post('/auth/login', userData);
return response.data;
};

export const fetchMatches = async (userId) => {
const response = await api.get(`/matches/${userId}`);
return response.data;
};

export const fetchMessages = async (matchId) => {
const response = await api.get(`/chat/${matchId}`);
return response.data;
};

export const sendMessage = async (messageData) => {
const response = await api.post('/chat', messageData);
return response.data;
};

export default api;
