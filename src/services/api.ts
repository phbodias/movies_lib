import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL as string;
const token = import.meta.env.TMDB_API_KEY as string;

const instance = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
