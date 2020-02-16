<template lang="pug">
  .reviews-form
    .review-form__review
      .review-form__review--autor
        .review-form__review--autor-photo
          .user__photo
            img(:src="photoUrl").user__photo-avatar
        .review-form__review--autor-info
          .review-form__review--autor-name {{review.author}}
          .review-form__review--autor-pos {{review.occ}}
      .review__desc
        .review__desc--text {{review.text}}
    .review-form__btns
      button(type="button" @click.prevent="editUserReview").review-form__pencil
        .review-form__pencil--text Править
        .review-form__pencil--icon 
      button(type="button" @click.prevent="removeUserReview").review-form__remove
        .review-form__remove--text Удалить
        .review-form__remove--icon
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { getImgUrl } from "../helpers/getImgUrl";

export default {
  props: {
    review: Object
  },
  data() {
    return {
      photoUrl: getImgUrl(this.review.photo)
    }
  },
  watch: {
    review() {
      this.photoUrl = getImgUrl(this.review.photo);
    }
  },
  methods: {
    ...mapActions('reviews', ["removeReview"]),
    ...mapMutations('reviews', ["SET_CURRENT_REVIEW"]),
    ...mapActions("tooltips", ["showTooltip"]),
    editUserReview() {
      this.SET_CURRENT_REVIEW(this.review.id);
      this.$emit("editUserReview");
    },
    async removeUserReview() {
      try {
        const response = await this.removeReview(this.review.id);
        this.showTooltip({
          type: "success",
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