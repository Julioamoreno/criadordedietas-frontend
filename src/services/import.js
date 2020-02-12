import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// export const lista = async () => {
       
//     const response = await fetch(`${process.env.REACT_APP_API_URL}/cliente/inicio`)

//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);

//     return body;
// }

export default api;