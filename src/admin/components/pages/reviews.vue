<template lang="pug">
  .reviews("style"="padding:0")
    .reviews__container
      .reviews__info
        .reviews__info--title Блок "Отзывы"
      reviewAdd(
        v-if="addReviewVisible"
        :mode="mode"
        @closeAddReview="closeAddReview"
      )
      .reviews-dashboard
        .reviews-form.add-review(v-if="addReviewVisible==false")
          button(type="button" @click.prevent="showAddReview('new')").add-review__btn 
            .add-review__icon
              .add-review__icon-circle
              .add-review__icon-plus
            .add-review__text Добавить отзыв
        reviewItem(
          :review="review"
          @editUserReview="showAddReview('edit')"
          v-for="review in reviews"
          :key="review.id"
        )
    tooltips    
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    tooltips: () => import("../tooltips"),
    reviewAdd: () => import("../reviewAdd"),
    reviewItem: () => import("../reviewItem")
  },
  data() {
    return {
      addReviewVisible: false,
      mode: ""
    }
  },
  computed: {
    ...mapState("reviews", { reviews: state => state.reviews })
  },
  methods: {
    ...mapActions("reviews", ["getReviews"]),
    ...mapActions('tooltips', ['showTooltip']),
    
    showAddReview(mode) {
      this.mode = mode;
      this.addReviewVisible = true;
    },
    closeAddReview() {
      this.addReviewVisible = false;
    }
  },
  async created() {
    try {
      await this.getReviews();
    } catch (error) {
      this.showTooltip({
        type: "error",
        text: error.message
      });
    }
  }
}
</script>
<style lang="postcss">
  @import "../../../styles/main.pcss";

  .reviews {
    color: $text-color;
    display: flex;
    justify-content: center;
    padding-top: 0;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: column;
      justify-content: center
    }
    & .reviews__info {
      color: $text-color;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4%;
    }
    & .reviews__info--title {
      color: $text-color;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.62;
      margin-right: 7%;
    }
    &__add {
      width: 98%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
      margin-bottom: 3%;
      padding-bottom: 3%;
      @include phones {
        padding-bottom: 6%;
      }
    }
    & .review-new {
      width: 100%;
      margin-bottom: 3%;
      border-bottom: 1px solid rgba($text-color,.4);
      padding: 2%;
    }
    & .review-new--title {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.89;
      color: $text-color;
    }
    & .review-new__form {
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      @include desktop {
        width: 90%;
      }
      @include tablets {
        width: 94%;
      }
      
    
    .review-new__desc {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 5%;
    }
    & .review-new__photo {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      @include tablets {
          width: 40%;
          margin-right: 2%;
        }
    }
    & .review-new__photo--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #dee4ed;
      border-radius: 50%;
      overflow: hidden;
      width: 200px;
      height: 200px;
      margin: 0 auto;
      @include desktop {
        max-width: 100%;
      }
      @include tablets {
        width: 180px;
        height: 180px;
      }
    }
    & .img-photoUrl {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    & .photo--icon {
      width: 50%;
      height: 60%;
      background-image: svg-load("user-icon.svg", "fill=white", "width=100%", "height=100%");
      background-position: center;
      background-repeat: no-repeat;
      &.filled {
        display: none;
      }
    }
    & .label-upload--review-new{
      width: 90%;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
    }
    & .label-upload--review-file {
        opacity: 0;
        width: 100%;
        cursor: pointer;
        position: absolute;
        z-index: 9999;
        height: 112%;
        top: 0%;
        left: 0;
        /* visibility: hidden; */
    }
    .label-upload--review-btn {
      margin: 0 auto;
      text-align: center;
    }
    & .label-upload--btn-text {
      font-size: 16px;
      font-weight: 600;
      line-height: 2.12; 
      color: $links-color;
    }
    & .label-upload--rewr-photo {
      display: none;
    }
    & .review-new__info {
      width: 69%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    & .review-new__autor {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 5%;
      @include tablets {
        flex-direction: column;
      }
      &--name {
        width: 42%;
        margin-right: 5%;
        @include tablets {
          width: 80%;
        }
        &-title {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.88;
          opacity: .5;
          /* margin-bottom: 4%; */
        }
        &-text {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.8;

          border-top: 1px  solid transparent;
          border-left: 1px  solid transparent;
          border-right: 1px  solid transparent;
          width: 100%;
          border-bottom: 1px solid rgba($text-color,1);
          outline: none;
          padding: 12px 2px;
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
      }
      &--pos {
        width: 42%;
        /* margin-right: 5%; */
        @include tablets {
          width: 80%;
        }
        &-title {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.88;
          opacity: .5;
          /* margin-bottom: 4%; */

        }
        &-text {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.8;
          border-top: 1px  solid transparent;
          border-left: 1px  solid transparent;
          border-right: 1px  solid transparent;
          width: 100%;
          border-bottom: 1px solid rgba($text-color,1);
          outline: none;
          padding: 12px 2px;
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
      }
    }
    & .review-new__review {
      width: 87%;
      display: flex;
      flex-direction: column;

      &--title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .5;
        margin-bottom: 3%;
      }
      &--text {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        height: 30%;
        width: 100%;
        background-color: transparent;
      
        border: 1px solid rgba($text-color, .1);
        width: 100%;
        height: 100%;
        outline: none;
        resize: vertical;
        padding: 15px 13px 15px 20px;
        space-word: wrap;
        @include tablets {
          padding: 4px 5px;
          font-size: 14px;

        }
        &:focus {
          border: 1px solid  rgba($main-color,1);
        }
      }
      
    }
      & .review-new__review--btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
      & .review-new__review--btn {
        width: 22%;
        padding: 10px 10px;
        border-radius: 40px;
        font-size: 16px;
        font-weight: 600;
        line-height: 2;
        transition: .3s;
        color: $main-color;
        @include tablets {
          width: 32%;
        }
        &:hover {
          background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
          text-transform: uppercase;
          color: white;
          font-weight: bold;
        }
      }
    }
    & .reviews-dashboard {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 98%;
      margin: 0 auto;
      & .add-review {
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
        justify-content: center;
        align-items: bottom;
        color: white;
        position: relative;
        min-height: 400px;
        
        &__btn {
          width: 100%;
          height: 100%;
        }
      }
      & .add-review__icon {
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%,-50%);
        @include phones {
          top: 50%;
          left: 20%;
          transform: translateY(-50%);

        }
      }
      & .add-review__icon-circle {
        background-image: svg-load("circle.svg", "fill=white", "width=100%", "height=100%");
        width: 150px;
        height: 150px;
        @include phones {
          width: 50px;
          height: 50px;
        }
        
      }
      & .add-review__icon-plus {
        background-image: svg-load("plus.svg", "fill=white", "width=100%", "height=100%");
        width: 34px;
        height: 34px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        @include phones {
          width: 12px;
          height: 12px;
        }
      }
      & .add-review__text {
        position: absolute;
        top: 62%;
        left: 50%;
        top: 75%;
        width: 46%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: bold;
        line-height: 1.67;
        color: white;
        @include phones {
          top: 50%;
        }
      }
      & .reviews-form {
        width: 32%;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
        padding: 3% 2%;
        margin-bottom: 2%;
        color: $text-color;
        min-height: 350px;

        &.add-review {
          @include phones {
          padding: 50px 0;
          }
        }
        @include tablets {
          width: 48%;
          margin-right: 3%;
          padding-bottom: 4%;
          &:nth-child(2n) {
          margin-right: 0;

          }
        }
        @include phones {
          width: 100%;
          margin-right: 0;
          margin-bottom: 6%;
          padding: 7%;
        }
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n) {
          margin-right: 0;
          @include tablets {
            margin-right: 3%;
          }
          @include phones {
            margin-right: 0;
          }
        }
      }
      & .review-form__review {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      & .review-form__review--autor {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid rgba($text-color, .4);
        padding-bottom: 10%;
        margin-bottom: 5%;
        &-photo {
          width: 25%;
          justify-content: center;
          display: flex;

        }
        & .user__photo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8%;
        }

        & .user__photo-avatar {
          max-width: 100%;
          max-height: none;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        &-info {
          width: 74%;
          display: flex;
          flex-direction: column;
          /* align-items: center; */
        }
        &-name {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.8;
          /* margin-bottom: 3%; */
        }
        &-pos {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          opacity: .5;
        }


      }
      & .review__desc {
        margin-bottom: 20%;
        /* overflow: hidden; */
        width: 100%;
      }
      & .review__desc--text {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .7;
        padding: 3%;
        word-wrap: break-word;
      }
      
      & .review-form__btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        width: 87%;
        @include desktop {
          width: 100%;
        }
      }
      & .review-form__pencil--text {
        margin-right: 10%;
        opacity: .6;
      }
      & .review-form__pencil {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      & .review-form__pencil--icon {
        background-image: svg-load("pencil.svg", "fill=$main-color", "width=100%", "height=100%");
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
      }
      & .review-form__remove--text {
        margin-right: 12%;
        opacity: .6;
      }
      & .review-form__remove {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      & .review-form__remove--icon {
        background-image: svg-load("remove.svg", "fill=#c92e2e", "width=100%", "height=100%");
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
      }
    }
  }
</style>