import axios from "axios";

export default axios.create({
  // baseURL: "https://fair-rose-lemur-gown.cyclic.app/api",
  baseURL: process.env.SERVER_URL || "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});