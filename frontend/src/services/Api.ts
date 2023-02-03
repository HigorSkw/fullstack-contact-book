import axios from "axios";

const prod = "";

const dev = "http://localhost:3001";

export const api = axios.create({
  baseURL: dev,
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
  },
});
