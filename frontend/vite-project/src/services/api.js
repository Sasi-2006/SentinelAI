import axios from "axios";

const api = axios.create({
    baseURL: "https://sentinelai-backend-5zom.onrender.com"
});

export default api;