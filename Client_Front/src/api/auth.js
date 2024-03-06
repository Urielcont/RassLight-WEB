import axios from "axios";

const API = 'http://localhost:3000/api'

export const sendMessageRequest = message => axios.post(`${API}/sendMessage`, message);
export const loginRequest = user => axios.post(`${API}/login`, user);
