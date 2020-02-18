<template lang="pug">
  .form-skills__skill-row(v-if="editmode === false")
    .skill-row--name {{skill.title}}
    .skill-row--persents {{skill.percent}}
    .skill-row--btns
      button(name="pencil" @click="editmode = true").skill-row__btn-pencil.btn-pencil
      button(name="trash" @click="removeExistedSkill").skill-row__btn-trash.btn-trash
      //- button(name="tick").skill-row__btn-tick.btn-tick
      //- button(type="button" ).skill-row__btn-remove.btn-remove
  .form-skills__skill-row(v-else)
    .skill-row--name
      input(type="text" placeholder="Title" v-model="editedSkill.title").skill-name--input
    .skill-row--persents
      input(type="text" placeholder="percent" v-model="editedSkill.percent").skill-percent--input
    .skill-row--btns
      //- button(name="pencil" @click="editmode = false").skill-row__btn-pencil.btn-pencil
      //- button(name="trash").skill-row__btn-trash.btn-trash
      button(name="tick" @click="editExistedSkill").skill-row__btn-tick.btn-tick
      button(type="button" @click="editmode = false").skill-row__btn-remove.btn-remove
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills",["removeSkill", "editSkill"]),
    ...mapActions('tooltips', ['showTooltip']),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
        this.showTooltip({
          type: "warning",
          text: "Вы удалили навык"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
        this.showTooltip({
          type: "success",
          text: "Навык успешно изменен"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  }
};
</script>