import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import categories from "./modules/categories";
import skills from "./modules/skills";
import user from "./modules/user";
import tooltips from "./modules/tooltips";
import works from "./modules/works";
import reviews from "./modules/reviews";

export const store = new Vuex.Store({
  modules: {
    categories,
    user,
    skills,
    tooltips,
    works,
    reviews
  }
});
