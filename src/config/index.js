import axios from "axios";

const BASE_URL = "https://modern-blue-hippo.cyclic.app/";

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
