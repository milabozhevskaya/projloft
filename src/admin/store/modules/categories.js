import {generateStdError} from "./../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => state.categories = data,
    // GET_CATEGORIES: (state, payload) => {
    //   state.categories = payload;
    // },
    ADD_CATEGORY: (state, category) => {
      state.categories.unshift(category);
    },
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id != deletedSkill.id
        );
      };

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    },
    UPDATE_CATEGORY: (state, changedCategory) => {
      // const editTitleInCategory = category => {
      //   category = category.map(category => {
      //     return category.id === changedCategory.id ? changedCategory : category;
      //   });
      // };

      // const findCategory = category => {
      //   if (category.id === changedCategory.id) {
      //     editTitleInCategory(category);
      //   }
      //   return category;
      // };
      // state.categories = state.categories.map(findCategory);

      // console.log(changedCategory);
      state.categories = state.categories.map(category => {
        return category.id === changedCategory.id ? changedCategory : category;
      });
    },
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(
        category => category.id !== removedCategoryId
      );
    }
  },
  actions: {
    async addNewGroup({commit}, title) {
      try {
        const {data} = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        generateStdError(error);
        // throw (
        //   error.response.data.error || error.response.data.message
        // );
      }
    },
    async fetchCategories({commit}) {
      try {
        // const userID = await this.$axios.get("/user");

        const { data } = await this.$axios.get("/categories/259");
        commit("SET_CATEGORIES", data);
        console.log(data);
      } catch (error) {

      }
    },
    // async addCategory({commit}, categoryTitle) {
    //   try {
    //     const response = await this.$axios.post("/categories", {
    //       title: categoryTitle
    //     });
    //     commit("ADD_CATEGORY", response.data);
    //     return response
    //   } catch(e) {
    //     // generateStdError(e);
    //   }
    // },
    // async getCategories({commit}) {
    //   try {
    //     const response = await this.$axios.get("/categories");
    //     commit('GET_CATEGORIES', response.data);
    //     return response
    //   } catch(e) {
    //     // generateStdError(e);
    //   }
    // },
    async updateCategory({commit}, editedCategory) {
      try {
        // console.log(editedCategory);
        const {data} = await this.$axios.post(`/categories/${editedCategory.id}`, {title:editedCategory.category});
        // console.log(category);
        commit("UPDATE_CATEGORY", data.category);
        // return category;
      } catch(error) {
        generateStdError(error);
      }
    },
    async removeCategory({commit}, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch(e) {
        generateStdError(e);
      }
    }
  }
};