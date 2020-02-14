import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "@/router/routes";
import axios from "axios";
import store from "@/store";
import requests from "@/requests";

import { setAuthHttpHeaderToAxios, getToken, removeToken } from "/helpers/token";

Vue.use(VueRouter);

const baseURL = requests.defaults.baseURL;//из реквестс получаем axios.defaults.baseURL
const guard = axios.create({ baseURL }); // создаем instance
const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogged == false) {
    setAuthHttpHeaderToAxios(guard, getToken());
    try {
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      removeToken();
    }
  } else {
    next();
  }
});
export default router;