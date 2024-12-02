import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/app.config";
import { TLoginCredentials } from "../../../types/authTypes";
import { setupInterceptors } from "./interceptor";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL, withCredentials: true });

// Set up interceptors
setupInterceptors();

// Login
export const LOGIN = (data: TLoginCredentials) => API.post("/auth/signin", data);
// Logout
export const LOGOUT = () => API.post("/auth/logout");