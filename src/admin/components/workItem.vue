<template lang="pug">
  .works-form
    .works-form__work
      .work__thumb
        .work__img
          img(:src="photoUrl").work__img--photo
        work-tags-list(
          :tags="work.techs"
        )
      .work__desc
        .work__title {{work.title}}
        .work__info {{work.description}}
        a(:href="work.link").work__link {{work.link}}
    .works-form__btns
      button(type="button" @click.prevent="editUserWork").works-form__pencil
        .works-form__pencil--text Править
        .works-form__pencil--icon 
      button(type="button" @click.prevent="removeUserWork").works-form__remove
        .works-form__remove--text Удалить
        .works-form__remove--icon
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { getImgUrl } from "../helpers/getImgUrl";

export default {
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  components: {
    workTagsList: () => import('./workTagsList')
  },
  data() {
    return {
      photoUrl: getImgUrl(this.work.photo)
    }
  },
  watch: {
    work() {
      this.photoUrl = getImgUrl(this.work.photo);
    }
  },
  methods: {
    ...mapActions('works', ["removeWork", "getWorks"]),
    ...mapMutations('works', ["SET_CURRENT_WORK"]),
    ...mapActions("tooltips", ["showTooltip"]),
    editUserWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit("editUserWork");
      this.getWorks();
    },
    async removeUserWork() {
      try {
        const response = await this.removeWork(this.work.id);
        this.showTooltip({
          type: "warning",
          text: "Работа удалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  }
}
</script>