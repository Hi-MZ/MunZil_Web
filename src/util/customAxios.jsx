import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://52.79.255.1:8080",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
  },
});

export default customAxios;
