import axios from "./axios.js";

export const getMessagesRequest = () => axios.get(`/getMessages`)
export const sendMessageRequest = message => axios.post(`/sendMessage`, message);