import axios from "axios";

const prod = "https://api-contact-book.onrender.com";

const dev = "http://localhost:3001";

export const api = axios.create({
  baseURL: prod,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
