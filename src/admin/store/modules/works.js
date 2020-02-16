import { generateStdError} from "../../helpers/errorHandler";
import { wrapIntoFormData } from "../../helpers/forms";
export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    SET_WORKS: (state, works) => (state.works = works),
    ADD_WORK: (state, work) => state.works.unshift(work),
    REMOVE_WORK: (state, removedWorkId) => {
      state.works = state.works.filter(work => work.id !== removedWorkId);
    },
    SET_CURRENT_WORK: (state, updatedWorkId) => {
      state.currentWork = state.works.filter(work => work.id === updatedWorkId)[0];
    },
    UPDATE_WORK: (state, updatedWork) => {
      state.works = state.works.map(work => work.id === updatedWork.id ? updateWork : work);
    }
  },
  actions: {
    async addWork({ commit }, works) {
      const data = wrapIntoFormData(works);
      console.log(data);
      try {
        const response = await this.$axios.post("/works", data);
        commit("ADD_WORK", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async getWorks({ commit, rootGetters }) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/works/${userId}`);
        commit("SET_WORKS", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async updateWork({ commit }, works) {
      const data = wrapIntoFormData(works);
      try {
        const response = await this.$axios.post(`works/${works.id}`, data);
        commit("UPDATE_WORK", response.data.work);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    }
  }
};