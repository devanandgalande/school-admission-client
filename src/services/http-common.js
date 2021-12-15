import axios from "axios";

export default axios.create({
  baseURL: "https://alphonso-admission-server.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});