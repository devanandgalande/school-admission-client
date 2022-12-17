import axios from "axios";

export default axios.create({
  baseURL: "https://fair-rose-lemur-gown.cyclic.app/api",
  // baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});