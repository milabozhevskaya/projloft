<template lang="pug">
  .form-skills.about-me__form-skills
    .form-skills__title(v-if="editGroup === false")
      .title-group  {{category.category}}
      .title__btns
        button(name="pencil" type="button" @click="editGroup = true").title__btn-pencil.btn-pencil
        //- button(name="tick").title__btn-tick.btn-tick
        button(name="remove" type="button" @click="removeGroupOfSkills").title__btn-remove.btn-remove
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
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "updateCategory"]),
    async addNewSkill() {
      this.loading = true;
      try {
        if (this.skill.title.length && this.skill.percent.length) {
          await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
        } else {
          throw "Есть незаполненные поля"
        }
        
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async removeGroupOfSkills() {
      try {
        await this.removeCategory(this.category.id);
      } catch (error) {

      }
    },
    async editExistedGroup() {
      try {
        // console.log(this.editedGroup);
        await this.updateCategory(this.editedGroup);
        this.editGroup = false;
      } catch (error) {

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
// .form-skills {
//         padding: 5%;
//         color: $text-color;
//         display: flex;
//         flex-direction: column;
//         align-content: space-between;
//         justify-content: center;

//         &__title {
//           border-bottom: 1px solid rgba($text-color,.4);
//           display: flex;
//           flex-direction: row;
//           padding-top: 2%;
//           padding-bottom: 2%;
//           margin-bottom: 4%;
//           justify-content: space-between;
          
//           }
//         }
</style>