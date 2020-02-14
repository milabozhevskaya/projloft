export default {
  namespaced: true,
  actions: {
    async addSkill({commit}, skill) {
      try {
        const {data} = await this.$axios.post("/skills", skill);
        commit("categories/ADD_SKILL", data, { root: true }); //вызываем мутацию из соседнего модуля
      } catch (error) {

      }
    },
    async removeSkill({commit}, skill) {
      try {
        const {data} = await this.$axios.delete(`/skills/${skill.id}`);
        commit("categories/REMOVE_SKILL", skill, {root: true});
      } catch (error) {

      }
    },
    async editSkill({commit}, editedSkill) {
      try {
        const {data: {skill}} = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);
        commit("categories/EDIT_SKILL", skill, {root: true});
      } catch (error) {

      }
    }
  }
};