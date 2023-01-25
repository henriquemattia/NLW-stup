import axios from "axios";

export const api = axios.create({
    baseURL: '192.168.0.108:19000:3333'
})