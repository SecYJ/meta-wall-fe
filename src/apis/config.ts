import axios, { AxiosResponse } from "axios";

interface ApiResponse {
    status: string;
    token: string;
    id: string;
}

export const req = axios.create({
    baseURL: "https://metawall-w4-server.onrender.com",
});

req.interceptors.response.use(
    (res: AxiosResponse<ApiResponse>) => {
        if (res.status === 200 && res.data) {
            localStorage.setItem("token", res.data.token);
        }
        throw new Error("bodoh");
    },
    (err) => {
        console.log("err", err);
        return Promise.reject(err);
    },
);
