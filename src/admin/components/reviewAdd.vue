<template lang="pug">
  .reviews__add
    .review-new
      .review-new--title Новый отзыв
    form.review-new__form
      .review-new__desc
        .review-new__photo
          .review-new__photo--icon()
            img(:src="photoUrl" v-if='photoUrl.length !== 0').img-photoUrl
            .photo--icon(:class="{filled: photoUrl.length}")
          label(for="photo").label-upload--review-new
            vue-dropzone(id="drop1" :options="dropOptions")
            input(name="photo" @change="loadPhoto" type="file").label-upload--review-file
            .label-upload--review-btn
              .label-upload--add-photo
                button.label-upload--btn-text Добавить фото
              .label-upload--rewr-photo
                button.label-upload--btn-text Редактировать фото
        .review-new__info
          .review-new__autor
            .review-new__autor--name
              .review-new__autor--name-title Имя автора
              input(name="name" type="text" v-model="review.author" placeholder="Введите имя").review-new__autor--name-text
            .review-new__autor--pos
              .review-new__autor--pos-title Титул автора
              input(name="occ" type="text" v-model="review.occ" placeholder="Введите титул").review-new__autor--pos-text
          .review-new__review
            .review-new__review--title Отзыв
            textarea(name="desc"  field-type="textarea" v-model="review.text" wrap="soft").review-new__review--text
      .review-new__review--btns
          button(type="button" @click.prevent="$emit('closeAddReview')").review-new__review--btn.review--reset Отмена
          button(name="name" type="button" @click.prevent="mode === 'new' ? addUserReview() : updateUserReview()").review-new__review--btn.review--save Сохранить
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { getImgUrl } from "../helpers/getImgUrl";
import vueDropzone from 'vue2-dropzone';
export default {
  props: {
    mode: String
  },
  data() {
    return {
      photoUrl: "",
      review: {
        id: "",
        author: "",
        occ: "",
        photo: {},
        text: ""
      },
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFileSize: 1.5,
        maxFiles: 1,
        chunking: false,
        addRemoveLinks: false
      }
    }
  },
  components: {
    vueDropzone
  },
  computed: {
    ...mapState("reviews", { currentReview: state => state.currentReview})
  },
  watch: {
    currentReview() {
      if (this.mode === "edit") this.getCurrentReview();
    },
    mode() {
      if (this.mode === "edit") {
        this.getCurrentReview()
      } else {
        this.review = {};
        this.photoUrl = "";
      };
    }
  },
  created() {
    if (this.mode === "edit") this.getCurrentReview();
  },
  methods: {
    ...mapActions('reviews', ['addReview', 'updateReview']),
    ...mapActions('tooltips', ['showTooltip']),
    loadPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      this.getPhoto(file);
    },
    getPhoto(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.photoUrl = reader.result;
        };
      } catch (error) {
        this.showTooltip ({
          type: "error",
          text: error.message
        });
      }
    },
    async addUserReview() {
      console.log("in adduserreview");
      try {
        const response = await this.addReview(this.review);
        this.review = {};
        this.$emit('closeAddReview');
        this.showTooltip({
          type: "success",
          text: "Отзыв добавлен"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async updateUserReview() {
      try {
        const response = await this.updateReview(this.review);
        this.review = {};
        this.$emit('closeAddReview');
        this.showTooltip({
          type: "success",
          text: "Отзыв успешно изменен"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    getCurrentReview() {
      this.review = { ...this.currentReview };
      this.photoUrl = getImgUrl(this.review.photo);
      this.review.photo = "";
    }
  }
}

</script>