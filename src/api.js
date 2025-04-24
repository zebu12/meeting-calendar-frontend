import axios from "axios";


const API = axios.create({ baseURL: 'http://localhost:8080/api/meetings' });

export const getMeetings = () => API.get('/');
export const getMeeting = (id) => API.get(`/${id}`);
export const createMeeting = (data) => API.post('/', data);
export const updateMeeting = (id, data) => API.put(`/${id}`, data);
export const deleteMeeting = (id) => API.delete(`/${id}`);