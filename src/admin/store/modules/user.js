import { generateStdError } from "./../../helpers/errorHandler";
import { removeToken } from "./../../helpers/token";

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: state => (state.user = {})
  },
  getters: {
    userIsLogged: state => {
      const userObj = state.user;
      const userObjectIsEmpty =
        Object.keys(userObj).length === 0 && userObj.constructor === Object.user;
      
      return userObjectIsEmpty === false;
    },
    userId: state => {
      return state.user.id
    }
  },
  actions: {
    async loginUser({ commit }, user) {
      try {
        const response = await this.$axios.post("/login", user);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    logout({ commit }) {
      commit("CLEAR_USER");
      removeToken();
      location.href = "/admin"
    }
  }
}