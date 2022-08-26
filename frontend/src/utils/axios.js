import axiosLib from "axios";

axiosLib.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN;

export default axiosLib;
