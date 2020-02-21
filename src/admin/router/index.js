import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";
import axios from "axios";
import { store } from "../store";
import requests from "../requests";

import { setAuthInHeaders, getToken, removeToken } from "../helpers/token";
const baseURL = requests.defaults.baseURL;//из реквестс получаем axios.defaults.baseURL

const guard = axios.create({
  baseURL
  // baseURL: "http://localhost:8080"
}); // создаем instance


Vue.use(VueRouter);

const router = routes;
router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];
  if (isPublicRoute === false && isUserLogged === false) {
    // const token = localStorage.getItem("token");

    // guard.defaults.headers["Authorization"] = `Bearer ${token}`;
    setAuthInHeaders(guard, getToken());
    try {
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      // localStorage.clear();
      removeToken();
    }
  } else {
    next();
  }
});
export default router;