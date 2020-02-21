<template lang="pug">
  .works
    .works__container
      .works__info
        .works__info--title Блок "Работы" 
      worksUpgrate(
        v-if="addFormVisible"
        :mode="mode"
        @closeAddForm="closeAddForm"
      )
      .works-dashboard
        .works-form.add-work(v-if="addFormVisible==false")
          button(type="button" @click.prevent="showAddForm('new')").add-work__btn 
            .add-work__icon
              .add-work__icon-circle
              .add-work__icon-plus
            .add-work__text Добавить работу
        workItem(
          :work="work"
          @editUserWork="showAddForm('edit')"
          v-for="work in works"
          :key="work.id"
        )
    tooltips
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    worksUpgrate: () => import("../worksUpgrate"),
    workItem: () => import("../workItem"),
    tooltips: () => import("../tooltips")
  },
  data() {
    return {
      addFormVisible: false,
      mode: ""
    }
  },
  computed: {
    ...mapState("works", { works: state => state.works })
  },
  methods: {
    ...mapActions("works", ["getWorks"]),
    ...mapActions('tooltips', ['showTooltip']),

    showAddForm(mode) {
      this.mode = mode;
      this.addFormVisible = true;
    },
    closeAddForm() {
      this.addFormVisible = false;
      this.getWorks();
    }
  },
  async created() {
    try {
      await this.getWorks();
    } catch (error) {
      this.showTooltip({
        type: "error",
        text: "Не получилось получить работы"
      });
    }
  }
}
</script>
<style lang="postcss">
  @import "../../../styles/main.pcss";

  .works {
    color: $text-color;
    display: flex;
    justify-content: center;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: column;
      justify-content: center
    }
    & .works__info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4%;
    }
    & .works__info--title {
      font-size: 21px;
      font-weight: bold;
      line-height: 1.62;
      margin-right: 7%;
    }
    &__rewriting {
      width: 98%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
      margin-bottom: 3%;
      padding-bottom: 4%;
      @include phones {
        padding-bottom: 10%;
      }
      & .rewriting {
        width: 100%;
        margin-bottom: 3%;
        border-bottom: 1px solid rgba($text-color,.4);
      }
      & .rewriting--title {
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.89;
        color: currentColor;
        padding: 10px;
      }
      & .rewriting__work {
        width: 97%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        @include tablets {
          flex-direction: column;
          width: 80%;
        }
      }
      & .rewriting__work--img {
        width: 40%;
        background-color: #dee4ed;
        border: none;
        outline: none;
        /* border: 1px dashed rgba($text-color,1); */
        background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 1; stroke-dasharray: 10 3'/></svg>");
        opacity: .8;
        position: relative;
        display: flex;
        justify-content: center;  
        align-items: center;        
        padding: 5% 0;
        height: 100%;
        @include tablets {
          width: 100%;
          padding: 17%;
          margin-bottom: 10%;
        }
      }
      & .label-upload {
        width: 90%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        position: relative;
      }
      & .label-upload--text {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 2.12;
        color: $text-color;
        opacity: .5;
      }
      & .label-upload--file {
        opacity: 0;
        width: 100%;
        cursor: pointer;
        position: absolute;
        z-index: 9999;
        height: 134%;
        top: -20%;
        /* visibility: hidden; */
      }
      & .label-upload--btn {
        text-align: center;
      }
      & .btn-upload {
        padding: 8px 20px;
        width: 40%;
        background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
        text-transform: uppercase;
        border-radius: 40px;
        font-size: 16px;
        font-weight: bold;
        line-height: 2;
        color: white;
        transition: .6s;
        @include desktop {
          padding: 8px 20px; 
          width: 60%; 
        }
        @include tablets {
          width: 80%; 
        }
        @include phones {
          width: 90%;
        }
        &:hover {
          background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,127,255) 35%, rgb(0,145,255) 100%);
        }
      }
      & .rewriting__work--info {
        width: 58%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5px;
        @include tablets {
          width: 100%;
        }
      }
      & .rewriting__work--info-row {
        width: 100%;
        /* border-bottom: 1px solid rgba($text-color,1); */
        display: flex;
        flex-direction: column;
        padding-bottom: 2%;
        margin-bottom: 3%;
        &:last-child {
          margin-bottom: 0;
        }
      }
      & .rewriting__work--name-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .5;
      }
      & .rewriting__work--name-input {
        width: 100%;
        background-color: transparent;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        & .work--name {
          border-top: 1px  solid transparent;
          border-left: 1px  solid transparent;
          border-right: 1px  solid transparent;
          width: 100%;
          border-bottom: 1px solid rgba($text-color,1);
          outline: none;
          padding: 12px 2px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          @include tablets {
            font-size: 16px;
          }
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
          
      }
      & .rewriting__work--link-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .5;
      }
      & .rewriting__work--link-input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        & .work--link {
            border-top: 1px  solid transparent;
          border-left: 1px  solid transparent;
          border-right: 1px  solid transparent;
          width: 100%;
          border-bottom: 1px solid rgba($text-color,1);
          outline: none;
          padding: 12px 2px;
          font-size: 16px;
          font-weight: 600;
          line-height: 2;
          @include tablets {
            font-size: 16px;
          }
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
      }
      .rewriting__work--textarea {
        width: 100%;
        margin-bottom: 8%;
        height: 40%;
        @include tablets {
        margin-bottom: 16%;

        }
      }
      & .rewriting__work--textarea-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .5;
      }
      & .rewriting__work--textarea-input {
        width: 100%;
        background-color: transparent;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        height: 100%;
        & .work--textarea {
          border: 1px solid rgba($text-color, .4);
          width: 100%;
          height: 100%;
          outline: none;
          resize: vertical;
          padding: 15px 13px;
          space-word: wrap;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.6;
          @include tablets {
            line-height: 1.6;
            padding: 5px 5px;
          }
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        } 
      }
      & .rewriting__work--tags-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .5;
      }
      & .rewriting__work--tags-input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 5%;
        & .work--tags {
          border-top: 1px  solid transparent;
          border-left: 1px  solid transparent;
          border-right: 1px  solid transparent;
          width: 100%;
          border-bottom: 1px solid rgba($text-color,1);
          outline: none;
          padding: 12px 2px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
      }
      & .rewriting__work--tags-under {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      & .rewriting__work--tag {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5%;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
        @include phones {
          margin-bottom: 15%;
        }
      }
      & .work--tag {
        display: flex;
        flex-direction: row;
        padding: 10px 17px;
        background-color: #eceff2;
        border-radius: 30px;
        /* margin-right: 3%; */
        align-items: center;

      }
      & .rewriting__work--btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        @include tablets {
          justify-content: flex-start;
        }
      }
      & .rewriting__work--btn {
        width: 28%;
        padding: 10px 10px;
        border-radius: 40px;
        font-size: 16px;
        font-weight: 600;
        line-height: 2;
        transition: .3s;
        color: $main-color;
        @include tablets {
          width: 46%;
        }
        @include phones {
          width: 55%;
          padding: 8px 10px;
        }
        &:hover {
          background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
          text-transform: uppercase;
          color: white;
          font-weight: bold;
        }
      }
    }
    & .works-dashboard {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 98%;
      margin: 0 auto;
      & .add-work {
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
        justify-content: center;
        align-items: bottom;
        color: white;
        position: relative;
        min-height: 481px;
        &__btn {
          width: 100%;
          height: 100%;
        }
      }
      & .add-work__icon {
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%,-50%);
        @include phones {
          top: 50%;
          left: 18%;
          transform: translateY(-50%);
        }
      }
      & .add-work__icon-circle {
        background-image: svg-load("circle.svg", "fill=white", "width=100%", "height=100%");
        width: 150px;
        height: 150px;
        @include phones {
          width: 50px;
          height: 50px;
        }
        
      }
      & .add-work__icon-plus {
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
      & .add-work__text {
        position: absolute;
        top: 65%;
        width: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: bold;
        line-height: 1.67;
        @include phones {
          top: 50%;
        }
      }
      & .works-form {
        width: 32%;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
        padding-bottom: 2%;
        margin-bottom: 2%;
        @include tablets {
          margin-right: 3%;
          width: 48%;
          &:nth-child(2n) {
            margin-right: 0;
        }
        }
        &.add-work {
          @include phones {
            padding: 13% 0;
          }
        }
        
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n) {
          margin-right: 0;
          @include tablets {
            margin-right: 3%
          }
          @include phones {
            margin-right: 0;
          }
        }
        
        @include phones {
          width: 100%;
          margin-right: 0;
        }
      }
      & .works-form-1 {
        opacity: .4;
        
      }
      & .works-form__work {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      & .work__thumb {
        position: relative;
        margin-bottom: 10%;
      }
      & .work__img--photo {
        width: 100%;
        height: 30%;
      }
      & .work__tags {
        width: 100%;
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: currentColor;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
      & .work--tag {
        padding: 8px 20px;
        background-color: #eceff2;
        border-radius: 30px;
        margin-right: 2%;
        /* margin-right: 10px; */
        &:last-child() {
          margin-right: 0;
        }
      }
      & .work__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 87%;
        color: currentColor;
        margin-bottom: 10%;
      }
      & .work__title {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.67;
        text-align: center;
        margin-bottom: 6%;
      }
      & .work__info {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        /* text-align: center; */
        margin-bottom: 5%;
      }
      & .work__link{
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        color: $links-color;
      }
      & .works-form__btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        width: 87%;
      }
      & .works-form__pencil--text {
        margin-right: 10%;
        opacity: .6;
      }
      & .works-form__pencil {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      & .works-form__pencil--icon {
        background-image: svg-load("pencil.svg", "fill=$main-color", "width=100%", "height=100%");
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
      }
      & .works-form__remove--text {
        margin-right: 12%;
        opacity: .6;
      }
      & .works-form__remove {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      & .works-form__remove--icon {
        background-image: svg-load("remove.svg", "fill=#c92e2e", "width=100%", "height=100%");
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
      }
    }

  }
</style>


        // //- .works-form
        // //-   .works-form__work
        // //-     .work__thumb
        // //-       .work__img
        // //-         img(src=`~images/content/slider-2.jpg`).work__img--photo
        // //-       .work__tags
        // //-     .work__desc
        // //-       .work__title Сайт школы образования
        // //-       .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        // //-       .work__link http://loftschool.ru
        // //-   .works-form__btns
        // //-     button.works-form__pencil
        // //-       .works-form__pencil--text Править
        // //-       .works-form__pencil--icon 
        // //-     button.works-form__remove
        // //-       .works-form__remove--text Удалить
        // //-       .works-form__remove--icon
        // //- .works-form
        // //-   .works-form__work
        // //-     .work__thumb
        // //-       .work__img
        // //-         img(src=`~images/content/slider-3.jpg`).work__img--photo
        // //-       .work__tags
        // //-     .work__desc
        // //-       .work__title Сайт школы образования
        // //-       .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        // //-       .work__link http://loftschool.ru
        // //-   .works-form__btns
        // //-     button.works-form__pencil
        // //-       .works-form__pencil--text Править
        // //-       .works-form__pencil--icon 
        // //-     button.works-form__remove
        // //-       .works-form__remove--text Удалить
        // //-       .works-form__remove--icon
        // //- .works-form
        //   .works-form__work
        //     .work__thumb
        //       .work__img
        //         img(src=`~images/content/slider-4.jpg`).work__img--photo
        //       .work__tags
        //     .work__desc
        //       .work__title Сайт школы образования
        //       .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        //       .work__link http://loftschool.ru
        //   .works-form__btns
        //     button.works-form__pencil
        //       .works-form__pencil--text Править
        //       .works-form__pencil--icon 
        //     button.works-form__remove
        //       .works-form__remove--text Удалить
        //       .works-form__remove--icon
