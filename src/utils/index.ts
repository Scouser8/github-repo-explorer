import { toast } from "react-toastify";
import axios from "../axios";

export const configureAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const accessToken = import.meta.env.VITE_GITHUB_API_TOKEN;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const message = error.response?.data?.message || error.message;
      message && toast.error(message);
      return Promise.reject(error);
    }
  );
};
