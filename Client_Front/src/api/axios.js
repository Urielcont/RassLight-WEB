import axios from "axios";
// render
const instance = axios.create({
    baseURL: 'https://rasslight-web.onrender.com/api',
    withCredentials: true
})

export default instance