import axios from "./axios";

export const sendMessageRequest = message => axios.post(`/sendMessage`, message);
export const loginRequest = user => axios.post(`/login`, user);
export const verifyTokenRequest = () => axios.get('/verify')
