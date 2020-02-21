import { generateStdError} from "../../helpers/errorHandler";
import { wrapIntoFormData } from "../../helpers/forms";
export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {}
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => (state.reviews = reviews),
    ADD_REVIEW: (state, review) => state.reviews.unshift(review),
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(review => review.id !== removedReviewId);
    },
    SET_CURRENT_REVIEW: (state, updatedReviewId) => {
      state.currentReview = state.reviews.filter(review => review.id === updatedReviewId)[0];
    },
    UPDATE_REVIEW: (state, updatedReview) => {
      state.reviews = state.reviews.map(review => review.id === updatedReview.id ? updatedReview : review);
    }
  },
  actions: {
    async addReview({ commit }, reviews) {
      const data = wrapIntoFormData(reviews);
      try {
        const response = await this.$axios.post("/reviews", data);
        commit("ADD_REVIEW", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async getReviews({ commit, rootGetters }) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/reviews/${userId}`);
        commit("SET_REVIEWS", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async updateReview({ commit }, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post(`reviews/${review.id}`, data);
        // console.log(response);
        commit("UPDATE_REVIEW", response.data.review);
        return response.data.message;
      } catch (error) {
        generateStdError(error);
      }
    }
  }
};