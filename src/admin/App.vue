<template lang="pug">
  .wrapper
    section.admin
      .login
        .login-bg
          .login-bg__item.login-bg__item--1
          .login-bg__item.login-bg__item--2
          .login-bg__item.login-bg__item--3
          .login-bg__item.login-bg__item--4
          .login-bg__item.login-bg__item--5
          .login-bg__item.login-bg__item--6
          .login-bg__item.login-bg__item--7
          .login-bg__item.login-bg__item--8
          .login-bg__item.login-bg__item--9
          .login-bg__item.login-bg__item--10
        .login-overlay
          .login-overlay__container
            .login-overlay__menu
              .login-overlay__close
            .login-overlay__title Авторизация
            .login-overlay__form
              form.admin-entry
                .admin-entry__form-wrap
                  .admin-entry__text Логин
                  input(name="name" type="text" placeholder="").admin__login.admin-entry__input
                  .admin-entry__icon--name
                .admin-entry__form-wrap
                  .admin-entry__text Пароль
                  input(name="name" type="password" placeholder="").admin__password.admin-entry__input
                  .admin-entry__icon--passw
                .admin-entry__btn
                  button.admin__btn Отправить
      header.admin-header
        .admin-header__container
          .user-info
            .user-info__avatar
              img(src=`~images/content/user.jpg`).user-info__photo
            .user-info__name Мила Божевская
          .admin-title Панель администрирования
          .admin-exit
            a.admin-exit__ref Выйти
      nav.admin-nav
        .admin-nav__container  
          ul.admin__menu-list
            li.admin__menu-item
              a(href="#").admin__menu-link Обо мне
            li.admin__menu-item
              a(href="#").admin__menu-link Работы
            li.admin__menu-item
              a(href="#").admin__menu-link Отзывы
      main.content
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
        .works
          .works__container
            .works__info
              .works__info--title Блок "Работы"
            form.works__rewriting
              .rewriting
                .rewriting--title Редактирование работы
              .rewriting__work
                .rewriting__work--img
                  label(for="image").label-upload
                    .label-upload--text Перетащите или загрузите для загрузки изображения
                    input(name="image" type="file").label-upload--file
                    .label-upload--btn
                      button.btn-upload Загрузить
                .rewriting__work--info
                  .rewriting__work--info-row
                    .rewriting__work--name-title Название
                    .rewriting__work--name-input
                      input(name="name" type="text" value="Дизайн сайта для авто салона Porsche").work--name 
                  .rewriting__work--info-row
                    .rewriting__work--link-title Ссылка
                    .rewriting__work--link-input
                      input(name="name" type="text" value="https://www.porsche-pulkovo.ru").work--link 
                  .rewriting__work--textarea
                    .rewriting__work--textarea-title  Описание
                    .rewriting__work--textarea-input
                      textarea(name="name" type="textarea" max-cols="30" max-rows="10" value="").work--textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                  .rewriting__work--info-row
                    .rewriting__work--tags-title Добавление тэга
                    .rewriting__work--tags-input
                      input(name="name" type="text" value="Jquery, Vue.js, HTML5").work--tags
                  .rewriting__work--tag 
                    .work--tag HTML5
                    .work--tag JS
                    .work--tag PHP
                  .rewriting__work--btns
                    button.rewriting__work--btn.work--reset Отмена
                    button.rewriting__work--btn.work--save Сохранить
            .works-dashboard
              .works-form.add-work
                button.add-work__btn 
                  .add-work__icon
                    .add-work__icon-circle
                    .add-work__icon-plus
                  .add-work__text Добавить работу
              .works-form.works-form-1
                .works-form__work
                  .work__thumb
                    .work__img
                      img(src=`~images/content/slider-1.jpg`).work__img--photo
                    .work__tags
                      .work--tag HTML5
                      .work--tag JS
                      .work--tag PHP
                  .work__desc
                    .work__title Сайт школы образования
                    .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a.work__link http://loftschool.ru
                .works-form__btns
                  .works-form__pencil
                    .works-form__pencil--text Править
                    .works-form__pencil--icon 
                  .works-form__remove
                    .works-form__remove--text Удалить
                    .works-form__remove--icon
              .works-form
                .works-form__work
                  .work__thumb
                    .work__img
                      img(src=`~images/content/slider-2.jpg`).work__img--photo
                    .work__tags
                  .work__desc
                    .work__title Сайт школы образования
                    .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .work__link http://loftschool.ru
                .works-form__btns
                  .works-form__pencil
                    .works-form__pencil--text Править
                    .works-form__pencil--icon 
                  .works-form__remove
                    .works-form__remove--text Удалить
                    .works-form__remove--icon
              .works-form
                .works-form__work
                  .work__thumb
                    .work__img
                      img(src=`~images/content/slider-3.jpg`).work__img--photo
                    .work__tags
                  .work__desc
                    .work__title Сайт школы образования
                    .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .work__link http://loftschool.ru
                .works-form__btns
                  .works-form__pencil
                    .works-form__pencil--text Править
                    .works-form__pencil--icon 
                  .works-form__remove
                    .works-form__remove--text Удалить
                    .works-form__remove--icon
              .works-form
                .works-form__work
                  .work__thumb
                    .work__img
                      img(src=`~images/content/slider-4.jpg`).work__img--photo
                    .work__tags
                  .work__desc
                    .work__title Сайт школы образования
                    .work__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .work__link http://loftschool.ru
                .works-form__btns
                  .works-form__pencil
                    .works-form__pencil--text Править
                    .works-form__pencil--icon 
                  .works-form__remove
                    .works-form__remove--text Удалить
                    .works-form__remove--icon
        .reviews
          .reviews__container
            .reviews__info
              .reviews__info--title Блок "Отзывы"
            .reviews__add
              .review-new
                .review-new--title Новый отзыв
              form.review-new__form
                .review-new__desc
                  .review-new__photo
                    .review-new__photo--icon
                      .photo--icon
                    label(for="photo").label-upload--review-new
                      input(name="photo" type="file").label-upload--review-file
                      .label-upload--review-btn
                        .label-upload--add-photo
                          button.label-upload--btn-text Добавить фото
                        .label-upload--rewr-photo
                          button.label-upload--btn-text Редактировать фото
                  .review-new__info
                    .review-new__autor
                      .review-new__autor--name
                        .review-new__autor--name-title Имя автора
                        input(name="name" type="text" value="Ковальчук Дмитрий" placeholder="Введите имя").review-new__autor--name-text
                      .review-new__autor--pos
                        .review-new__autor--pos-title Титул автора
                        input(name="name" type="text" value="Основатель LoftSchool" placeholder="Введите титул").review-new__autor--pos-text
                    .review-new__review
                      .review-new__review--title Отзыв
                      textarea(name="name" cols="45"  type="textarea" rows="3" wrap="soft" value="").review-new__review--text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .review-new__review--btns
                    button.review-new__review--btn.review--reset Отмена
                    button.review-new__review--btn.review--save Сохранить
            .reviews-dashboard
              .reviews-form.add-review
                button.add-review__btn 
                  .add-review__icon
                    .add-review__icon-circle
                    .add-review__icon-plus
                  .add-review__text Добавить отзыв
              - for (var i = 0; i<2; i++)
                .reviews-form
                  .review-form__review
                    .review-form__review--autor
                      .review-form__review--autor-photo
                        .user__photo
                          img(src=`~images/content/sabanc.png`).user__photo-avatar
                      .review-form__review--autor-info
                        .review-form__review--autor-name Владимир Сабанцев
                        .review-form__review--autor-pos Преподаватель LoftSchool
                    .review__desc
                      .review__desc--text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .review-form__btns
                    .review-form__pencil
                      .review-form__pencil--text Править
                      .review-form__pencil--icon 
                    .review-form__remove
                      .review-form__remove--text Удалить
                      .review-form__remove--icon
                .reviews-form
                  .review-form__review
                    .review-form__review--autor
                      .review-form__review--autor-photo
                        .user__photo
                          img(src=`~images/content/sabanc.png`).user__photo-avatar
                      .review-form__review--autor-info
                        .review-form__review--autor-name Ковальчук Дмитрий
                        .review-form__review--autor-pos Основатель LoftSchool
                    .review__desc
                      .review__desc--text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .review-form__btns
                    .review-form__pencil
                      .review-form__pencil--text Править
                      .review-form__pencil--icon 
                    .review-form__remove
                      .review-form__remove--text Удалить
                      .review-form__remove--icon
              
              
                


</template>
<style lang="postcss">
  @import "../styles/main.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  .admin-wrapper {
    display: flex;

    & .maincontent {
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }
  
  .login {
    width: 100%;
    height: 100vh;
    min-height: 650px;
    padding-bottom: 14%;
    position: relative;
    /* @include fulldesctop {
      padding-bottom: 22%;
      height: 100%;
    }
    @include desctop {
      padding-bottom: 18%;
      height: 100%;
    }
    @include tablets {
      padding-bottom: 39%;
      height: 100%;
    }
    @include phones {
      height: 100%;
    } */

    & .login-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      z-index: -1;
      &__item {
        min-width: 100%;
        background-position: 50% 0;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(0) translateZ(0);
        &--1 {
          background-image: url("../images/bg/paral1.png");
          z-index: 1;
          height: 55%;
        }
        &--2 {
          background-image: url("../images/bg/paral2.png");
          z-index: 2;
          top: 36%;
          height: 237px;
        }
        &--3 {
          background-image: url("../images/bg/paral3.png");
          z-index: 3;
          top: 25%;
          height: 500px;
        }
        &--4 {
        background-image: url("../images/bg/paral4.png");
          z-index: 4;
          top: 31%;
          height: 479px;
        }
        &--5 {
        background-image: url("../images/bg/paral5.png");
          z-index: 5;
          top: 24%;
          height: 500px;
        }
        &--6 {
          background-image: url("../images/bg/paral6.png");
          z-index: 6;
          top: 30%;
          height: 400px;
        }
        &--7 {
          background-image: url("../images/bg/paral7.png");
          z-index: 7;
          top: 63%;
          height: 53%;
        }
        &--8 {
          background-image: url("../images/bg/paral8.png");
          z-index: 8;
          top: 41%;
          height: 70%;
        }
        &--9 {
          background-image: url("../images/bg/paral9.png");
          z-index: 9;
          height: 75%;
          top: 25%;
          background-color: rgb($text-color, .2);
        }
        &--10 {
          height: 100%;
          background-color: $text-color;
          opacity: .4;
          z-index: 10;
        }
      }
    }

    & .login-overlay {
      position: absolute;
      width: 35%;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: white;
      padding: 4%;
      color: $text-color;
    }
    & .login-overlay__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    & .login-overlay__menu {
      display: flex;
      justify-content: flex-end;
    }
    & .login-overlay__close {
      background: svg-load("remove.svg", "fill=$text-color", "width=100%", "height=100%");
      width: 20px;
      height: 20px;
      &:hover {
        background: svg-load("remove.svg", "fill=$main-color", "width=100%", "height=100%");
      }
    }
    & .login-overlay__title {
      text-align: center;
      font-size: 28px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      margin-bottom: 10%;
    }
    & .login-overlay__form {
      
    }
    & .admin-entry {
      width: 100%;
      display: flex;
      flex-direction: column;
      &__text {
        opacity: .6;
        padding-left: 50px;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
      }
      &__form-wrap {
        transition: .6s;
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 6%;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid currentColor;
        padding: 3px 4px 3px 50px;
        font-size: 18px;
        font-weight: bold;
        line-height: 2;
        color: currentColor;
      }
      & .admin-entry__btn {
        text-align: center;
        /* justify-content: center;
        display: flex; */
      }
      & .admin__btn {
        padding: 15px 80px;
        background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
        text-transform: uppercase;
        border-radius: 40px;
        font-size: 18px;
        font-weight: bold;
        line-height: 2.67;
        color: white;
        transition: .6s;
        @include desctop {
          padding: 29px 130px;
        }
        @include tablets {
          padding: 25px 90px;
        }
        &:hover {
          background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,127,255) 35%, rgb(0,145,255) 100%);
        }
      }
    }
  }
 
  .admin-entry__icon--name {
    background-image: svg-load("user.svg", "fill=$text-color", "width=100%", "height=100%");
    width: 30px;
    height: 30px;
    opacity: .4;
    position: absolute;
    top: 40%;
    left: 0;
  }
  .admin-entry__icon--passw {
    background-image: svg-load("key.svg", "fill=$text-color", "width=100%", "height=100%");
    width: 30px;
    height: 30px;
    opacity: .4;
    position: absolute;
    top: 40%;
    left: 0;
  }
  .admin-header {
    background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
    display: flex;
    justify-content: center;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: row;
      color: white;
      padding-top: 10px;
      padding-bottom: 10px;
      align-items: center;
    }
    & .user-info {
      width: 25%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    & .user-info__avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 5%;
    }
    & .user-info__photo {
      max-width: 100%;
      max-height: none;
    }
    & .user-info__name {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.89;
    }
    & .admin-title {
      width: 65%;
      opacity: .7;
    }
    & .admin-exit {
      width: 10%;
      display: flex;
      justify-content: flex-end;
    }
    & .admin-exit__ref {
      text-decoration: underline;
      opacity: .7;
      transition: .6s;
      &:hover {
        opacity: 1;
      }
    }
  }
  .admin-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    &__container {
      width: 92%;
    }
    & .admin__menu-list {
      line-height: 6;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 35%;
    }
    & .admin__menu-item {
      width: 10%;
      color: $text-color;
      border-bottom: 2px solid transparent;
      opacity: .7;
      transition: .6s;
      flex-grow: 1;
      text-align: center;
      text-align: center;
      &:hover {
      border-bottom: 2px solid $main-color;

      }
    }
    & .admin__menu-link {
      text-decoration: none;
      color: currentColor;
      font-size: 16px;
      font-weight: normal;
      line-height: 2.25;
      transition: .6s;
      &:hover {
        color: $main-color;
        font-weight: 600;
        
      }
    }
  }
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
    }
    & .about-me__title {
      font-size: 21px;
      font-weight: bold;
      line-height: 1.62;
      margin-right: 7%;
    }
    & .about-me__new-group {
      display: flex;
      flex-direction: row;
      width: 25%;
      color: $main-color;
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
          width: 60%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid transparent;
          padding: 3px 4px 3px 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.89;
          color: currentColor;
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
          justify-content: space-between
        }
        & .form-skills__skill {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
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
            left: 84%;
            transform: translate(-50%,-50%);
            
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
      padding-bottom: 3%;
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
      }
      & .label-upload {
        width: 90%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
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
        visibility: hidden;
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
        @include desctop {
          padding: 29px 130px;
        }
        @include tablets {
          padding: 25px 90px;
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
          &:focus {
            border: 1px solid  rgba($main-color,1);
          }
        }
      }
      .rewriting__work--textarea {
        width: 100%;
        margin-bottom: 8%;
        height: 40%;
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
      & .rewriting__work--tag {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5%;
      }
      & .work--tag {
        padding: 10px 17px;
        background-color: #eceff2;
        border-radius: 40%;
        margin-right: 3%;
      }
      & .rewriting__work--btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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
      }
      & .add-work__icon {
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      & .add-work__icon-circle {
        background-image: svg-load("circle.svg", "fill=white", "width=100%", "height=100%");
        width: 150px;
        height: 150px;
        
      }
      & .add-work__icon-plus {
        background-image: svg-load("plus.svg", "fill=white", "width=100%", "height=100%");
        width: 34px;
        height: 34px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      & .add-work__text {
        position: absolute;
        top: 62%;
        width: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: bold;
        line-height: 1.67;
      }
      & .works-form {
        width: 32%;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
        padding-bottom: 2%;
        margin-bottom: 2%;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n) {
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
        top: 70%;
        left: 0;
        color: currentColor;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      & .work--tag {
        padding: 8px 20px;
        background-color: #eceff2;
        border-radius: 40%;
        margin-right: 3%;
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
  .reviews {
    color: $text-color;
    display: flex;
    justify-content: center;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: column;
      justify-content: center
    }
    & .reviews__info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4%;
    }
    & .reviews__info--title {
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
    }
    & .review-new__form {
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      
    
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
    }
    & .review-new__photo--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #dee4ed;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
    & .photo--icon {
      width: 50%;
      height: 60%;
      background-image: svg-load("user-icon.svg", "fill=white", "width=100%", "height=100%");
      background-position: center;
      background-repeat: no-repeat;
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
       visibility: hidden;
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
      &--name {
        width: 42%;
        margin-right: 5%;
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
        margin-right: 5%;
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
      }
      & .add-review__icon {
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      & .add-review__icon-circle {
        background-image: svg-load("circle.svg", "fill=white", "width=100%", "height=100%");
        width: 150px;
        height: 150px;
        
      }
      & .add-review__icon-plus {
        background-image: svg-load("plus.svg", "fill=white", "width=100%", "height=100%");
        width: 34px;
        height: 34px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      & .add-review__text {
        position: absolute;
        top: 62%;
        top: 70%;
        width: 46%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: bold;
        line-height: 1.67;
      }
      & .reviews-form {
        width: 32%;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
        padding: 2%;
        margin-bottom: 2%;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      & .review-form__review {
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
      }
      & .review__desc--text {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        opacity: .7;
        padding: 3%;
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


       

