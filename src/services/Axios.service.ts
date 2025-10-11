import axios from "axios";
import { toast } from "react-toastify";
import { sanitizeObject } from "../controllers/Sanitize.controller";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});


AxiosInstance.interceptors.request.use(function (config) {

  // post, put, delete
  if (config.data) {
    config.data = JSON.stringify(sanitizeObject(config.data));
  }

  // get
  if (config.params) {
    config.params = JSON.stringify(sanitizeObject(config.params));
  }

  return config;
}, function (error) {
  toast.error("Something went wrong!");
  console.error(error);
}
);

AxiosInstance.interceptors.response.use(function onFulfilled(response) {
  
  console.log("Response:", response.data);
  return JSON.parse(response.data.data);

}, function onRejected(error) {
  toast.error(error.response?.data?.message || "Something went wrong!");
  console.error(error);
});

