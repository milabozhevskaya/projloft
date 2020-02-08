<template lang="pug">
  .about-me
    .about-me__container
      .about-me__info
        .about-me__title Блок "Обо мне"
        .about-me__new-group
          .about-me__new-group--icon
          button.about-me__new-group--title Добавить группу
      .about-me__skills
          .about-me__form
            form.form-skills.about-me__form-skills--add
              .form-skills__title.form-skills__title--add
                input(name="name" placeholder="Название новой группы").title-group.title-group--new
                .title__btns.title__btns--add
                  button(name="pencil").title__btn-pencil.title__btn-pencil--add.btn-pencil
                  button(name="tick").title__btn-tick.title__btn-tick--add.btn-tick
                  button(name="remove").title__btn-remove.title__btn-remove--add.btn-remove
              .form-skills__content.form-skills__content--add
              .form-skills__skill.form-skills__skill--add
                input(name="name" type="text" placeholder="Новый навык").skill-title.skill-title--add
                input(name="persent" type="value" max-value="100" min-value="0" placeholder="100").skill-persents.skill-persents--add
                .skill-btn
                  button.skill-btn--icon.skill-btn--add
          .about-me__form
            .form-skills.about-me__form-skills
              .form-skills__title
                .title-group Workflow
                .title__btns
                  button(name="pencil").title__btn-pencil.btn-pencil
                  button(name="tick").title__btn-tick.btn-tick
                  button(name="remove").title__btn-remove.btn-remove
              .form-skills__content
                .form-skills__skill-row
                  .skill-row--name GIT
                  .skill-row--persents 100
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name Terminal
                  .skill-row--persents 90
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name Gulp
                  .skill-row--persents 80
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name Webpack
                  .skill-row--persents 85
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
              .form-skills__skill.form-skills__skill--add
                input(name="name" type="text" placeholder="Новый навык").skill-title.skill-title--add
                input(name="persent" type="value" max-value="100" min-value="0" placeholder="100").skill-persents.skill-persents--add
                .skill-btn
                  button.skill-btn--icon
          .about-me__form
            .form-skills.about-me__form-skills
              .form-skills__title
                .title-group Frontend
                .title__btns
                  button(name="pencil").title__btn-pencil.btn-pencil
                  button(name="tick").title__btn-tick.btn-tick
                  button(name="remove").title__btn-remove.btn-remove
              .form-skills__content
                .form-skills__skill-row
                  .skill-row--name HTML5
                  .skill-row--persents 100
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name CSS3
                  .skill-row--persents 90
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name JavaScript
                  .skill-row--persents 80
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
                .form-skills__skill-row
                  .skill-row--name JQuery и Vue.js
                  .skill-row--persents 85
                  .skill-row--btns
                    button(name="pencil").skill-row__btn-pencil.btn-pencil
                    button(name="trash").skill-row__btn-trash.btn-trash
                    button(name="tick").skill-row__btn-tick.btn-tick
                    button(name="remove").skill-row__btn-remove.btn-remove
              .form-skills__skill.form-skills__skill--add
                input(name="name" type="text" placeholder="Новый навык").skill-title.skill-title--add
                input(name="persent" type="value" max-value="100" min-value="0" placeholder="100").skill-persents.skill-persents--add
                .skill-btn
                  button.skill-btn--icon
</template>

<style lang="postcss">
  @import "../../../styles/main.pcss";

  .about-me {
    color: $text-color;
    display: flex;
    justify-content: center;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: column;
      justify-content: center
    }
    & .about-me__info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4%;
      @include phones {
        flex-direction: column;
        align-items: start;
        margin-bottom: 10%;

      }
    }
    & .about-me__title {
      font-size: 21px;
      font-weight: bold;
      line-height: 1.62;
      margin-right: 7%;
      @include phones {
        margin-bottom: 5%;
      }
    }
    & .about-me__new-group {
      display: flex;
      flex-direction: row;
      width: 25%;
      color: $main-color;
      @include tablets {
        width: 40%;
      }
      @include phones {
        width: 70%;
      }
      &--icon {
        position: relative;
        background-color: $main-color;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin-right: 5%;
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-image: svg-load("plus.svg", "fill=white", "width=100%", "height=100%");
          /* transform: rotate(-90deg); */
          width: 8px;
          height: 8px;
        }
        &--title {
          font-size: 16px;
          font-weight: 600;
          line-height: 2.12;
        }
      }
      
     
    }
    &__skills {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      & .about-me__form {
        width: 48%;
        margin-right: 3%;
        margin-bottom: 5%;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
        &:nth-child(2n) {
          margin-right: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        @include phones {
          margin-right: 0;
          width: 99%;
        }
      }
      & .form-skills {
        padding: 5%;
        color: $text-color;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        justify-content: center;

        &__title {
          border-bottom: 1px solid rgba($text-color,.4);
          display: flex;
          flex-direction: row;
          padding-top: 2%;
          padding-bottom: 2%;
          margin-bottom: 4%;
          justify-content: space-between;
          
          }
        }
        & .title-group {
          width: 77%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid transparent;
          padding: 3px 4px 3px 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.89;
          color: currentColor;
          @include tablets {
            width: 89%;
            font-size: 15px;
          }
          &:focus {
            border-bottom: 1px solid rgba($text-color,1);
          }
        }
        & .title__btns {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        }
        & .btn-pencil {
          background-image: svg-load("pencil.svg", "fill=$text-color", "width=100%", "height=100%");
          background-repeat: no-repeat;
          opacity: .4;
          width: 14px;
          height: 14px;
        }
        & .btn-tick {
          background-image: svg-load("tick.svg", "fill=#00d70a", "width=100%", "height=100%");
          background-repeat: no-repeat;
          width: 15px;
          height: 13px;
          display: none;
        }
        & .btn-remove {
          background-image: svg-load("remove.svg", "fill=#bf2929", "width=100%", "height=100%");
          background-repeat: no-repeat;
          width: 14px;
          height: 14px;
          display: none;

        }
        & .form-skills__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 10%;
        }
        & .form-skills__skill-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: relative;
          align-items: center;
           &:after {
            content: "%";
            display: flex;
            font-size: 16px;
            font-weight: normal;
            line-height: 1.89;
            opacity: .8;
            position: absolute;
            top: 48%;
            left: 80%;
            transform: translate(-50%,-50%);
            @include tablets {
              left: 76%;
            }
          }
        }
        & .skill-row--name {
          width: 60%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid transparent;
          padding: 3px 4px 3px 0;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.89;
          color: currentColor;
          opacity: .8;
          @include tablets {
            width: 54%;
          }
          &:focus {
            border-bottom: 1px solid rgba($text-color,1);
          }
        }
        & .skill-row--persents {
          width: 20%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid transparent;
          padding: 3px 4px 3px 3px;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.89;
          color: currentColor;
          opacity: .8;
          position: relative;
         
          &:focus {
            border-bottom: 1px solid rgba($text-color,1);
          }
        }
        & .skill-row--btns {
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          @include tablets {
            width: 17%;
          }
        }
        & .form-skills__skill {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          position: relative;
          align-items: center;
          @include tablets {
            justify-content: flex-start;
          }
           &:after {
            content: "%";
            display: flex;
            font-size: 16px;
            font-weight: normal;
            line-height: 1.89;
            opacity: .8;
            position: absolute;
            top: 48%;
            left: 84%;
            transform: translate(-50%,-50%);
            @include tablets {
              left: 76%;
            }
          }
        }
        & .skill-title {
          width: 40%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid rgba($text-color,1);
          padding: 3px 4px 3px 7px;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.89;
          color: currentColor;
          opacity: .8;
          margin-right: 2%;
          @include tablets {
            width: 55%;
            font-size: 14px
          }
          @include phones {
            width: 60%;
          }
          &:focus {
            opacity: 1;
          }
        }
        & .skill-persents {
          width: 20%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid rgba($text-color,1);
          padding: 3px 4px 3px 5px;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.89;
          color: currentColor;
          opacity: .8;
          position: relative;
          @include tablets {
            font-size: 14px;
            width: 15%;
            margin-right: 22px;
          }
          &:focus {
            opacity: 1;
          }
        }
        & .skill-btn {
          width: 10%;
          text-align: end;
        }
        & .skill-btn--icon {
          position: relative;
          background-color: $main-color;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-image: svg-load("plus.svg", "fill=white", "width=100%", "height=100%");
            width: 15px;
            height: 15px;
          } 
        }
        & .btn-trash {
          background-image: svg-load("trash.svg", "fill=$text-color", "width=100%", "height=100%");
          background-repeat: no-repeat;
          width: 13px;
          height: 15px;
          opacity: .4;
        }
        
      }
      & .about-me__form-skills--add {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        justify-content: center;

        & .form-skills__content {
          height: 65%;
          
        }
      }
      & .skill-btn--add {
        opacity: .3;
      }
  }
</style>