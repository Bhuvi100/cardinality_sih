import axiosLib from "axios";
import { api_token_store_name, retrieve } from "./store";
import auth from "./auth";

axiosLib.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN.toString().trim();
axiosLib.defaults.headers.common = {
  Authorization: `Bearer ${retrieve(api_token_store_name())}`,
  Accept: "application/json",
};

axiosLib.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      await auth().logout("/", true);
    } else {
      throw error;
    }
  }
);

export default axiosLib;
