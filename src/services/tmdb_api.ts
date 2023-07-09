import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL as string;
const token = import.meta.env.VITE_TMDB_API_KEY as string;

const instance = axios.create({
  baseURL,
  params: {
    api_key: token,
    language: "en-US",
  },
});

export default instance;
