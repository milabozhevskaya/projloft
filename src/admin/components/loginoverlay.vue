<template lang="pug">
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
</template>

<style lang="postcss" scoped>
  @import "../../styles/main.pcss";


 .login-overlay {
    position: absolute;
    width: 35%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 4%;
    color: $text-color;
    @include desctop {
      width: 45%;
    }
    @include tablets {
      width: 60%;
    }
    @include phones {
      width: 100%;
      height: 100%;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .login-overlay__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      @include phones {
        display: none;
      }
    }
    & .login-overlay__menu {
      display: flex;
      justify-content: flex-end;
      @include phones {
        position: absolute;
        top: 8%;
        right: 10%;
      }
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
        margin-bottom: 8%;
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
          padding: 20px 70px;
          font-size: 16px;
        }
        @include tablets {
          padding: 13px 55px;
          font-size: 16px;
        }
        &:hover {
          background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,127,255) 35%, rgb(0,145,255) 100%);
        }
      }
    
    & .admin-entry__icon--name {
      background-image: svg-load("user.svg", "fill=$text-color", "width=100%", "height=100%");
      width: 30px;
      height: 30px;
      opacity: .4;
      position: absolute;
      top: 40%;
      left: 0;
    }
    & .admin-entry__icon--passw {
      background-image: svg-load("key.svg", "fill=$text-color", "width=100%", "height=100%");
      width: 30px;
      height: 30px;
      opacity: .4;
      position: absolute;
      top: 40%;
      left: 0;
    }
  }
 }
  
</style>