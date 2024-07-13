import axios from "axios";

export const req = axios.create({
    baseURL: "https://metawall-w4-server.onrender.com",
});

req.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
