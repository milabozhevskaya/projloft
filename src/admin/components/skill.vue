<template lang="pug">
  .form-skills.about-me__form-skills
    .form-skills__title(v-if="editGroup === false")
      .title-group  {{category.category}}
      .title__btns
        button(name="pencil" type="button" @click="editGroup = true").title__btn-pencil.btn-pencil
        //- button(name="tick").title__btn-tick.btn-tick
        button(name="trash" type="button" @click="removeGroupOfSkills").title__btn-trash.btn-trash
    .form-skills__title(v-else)
      input(type="text" placeholder="Title" v-model="editedGroup.category").title-group
      .title__btns
        //- button(name="pencil" type="button" @click="editGroup = true").title__btn-pencil.btn-pencil
        button(name="tick" type="button" @click="editExistedGroup").title__btn-tick.btn-tick
        button(name="remove" type="button" @click="editGroup = false").title__btn-remove.btn-remove
    .form-skills__content
      skill-item(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: loading}
    ).form-skills__skill.form-skills__skill--add
      input(type="text" placeholder="Новый навык" v-model="skill.title").skill-title.skill-title--add
      input(name="percent" type="text" placeholder="100" v-model="skill.percent").skill-persents.skill-persents--add
      .skill-btn
        button(
          type="submit"
          :disabled="loading"  
        ).skill-btn--icon
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {
    skillItem: () => import("./skill-item")
  },
  data() {
    return {
      editGroup: false,
      editedGroup: {
        ...this.category
      },
      loading: false,
      skill: {
        title: "",
        percent: "",
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions('tooltips', ['showTooltip']),
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "updateCategory", "fetchCategories"]),
    async addNewSkill() {
      this.loading = true;
      try {
        if (this.skill.title.length && this.skill.percent.length) {
          await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
          this.fetchCategories();
          this.showTooltip({
            type: "success",
            text: "Навык успешно добавлен"
        });
        } else {
          throw "Есть незаполненные поля"
        }
        
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.loading = false;
      }
    },
    async removeGroupOfSkills() {
      try {
        await this.removeCategory(this.category.id);
        this.showTooltip({
          type: "warning",
          text: "Вы удалили категорию"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async editExistedGroup() {
      try {
        // console.log(this.editedGroup);
        await this.updateCategory(this.editedGroup);
        this.fetchCategories();
        this.editGroup = false;
        this.showTooltip({
          type: "success",
          text: "Категория успешно обновлена"
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

<style lang="postcss" >

.form-skills__skill--add.blocked {
  opacity: 0.5s;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>