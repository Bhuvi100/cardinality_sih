import React, { useEffect } from "react";
import axios from "./axios";
import { api_token_store_name, retrieve, store } from "./store";
import RouteHelper from "./routeHelper";

export default function auth() {
  let isAuth =
    retrieve(api_token_store_name()) != null &&
    retrieve(api_token_store_name()) != "" &&
    retrieve(api_token_store_name()) != "null";

  const fetchUser = async (id = null, redirect_verification = true) => {
    let user;

    try {
      user = await (await axios().get("/user" + (id ? `s/${id}` : ""))).data
        .data;
      isAuth = true;

      if (!user.email_verified && redirect_verification) {
        RouteHelper.redirect("/verify");
      }

      return { isAuth, user };
    } catch (error) {
      store(api_token_store_name(), "");
      isAuth = false;
      user = null;

      return { isAuth, user };
    }
  };

  const login = (data) => {
    return axios.post("/login", data);
  };

  const register = (data) => {
    return axios.post("/register", data);
  };

  const sendVerificationEmail = () => {
    return axios.post("/user/send_verification");
  };

  const setToken = async (data) => {
    await store(api_token_store_name(), data.token);

    // if (data.user.email_verified) {
      RouteHelper.redirect("/dashboard");
    // } else {
    //   RouteHelper.redirect("/verify");
    // }
  };

  const logout = async (redirectUrl = "/", token_expired = false) => {
    try {
      if (!token_expired) {
        await axios.post("/logout");
      }
    } finally {
      store(api_token_store_name(), "");

      RouteHelper.redirect(redirectUrl);
    }
  };

  return {
    login,
    setToken,
    logout,
    fetchUser,
    isAuth,
    register,
    sendVerificationEmail,
  };
}
