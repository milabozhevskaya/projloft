<template lang="pug">
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
</template>

<style lang="postcss" scoped>
  .login-bg {
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
        background-image: url("../../images/bg/paral1.png");
        z-index: 1;
        height: 55%;
      }
      &--2 {
        background-image: url("../../images/bg/paral2.png");
        z-index: 2;
        top: 36%;
        height: 237px;
      }
      &--3 {
        background-image: url("../../images/bg/paral3.png");
        z-index: 3;
        top: 25%;
        height: 500px;
      }
      &--4 {
        background-image: url("../../images/bg/paral4.png");
        z-index: 4;
        top: 31%;
        height: 479px;
      }
      &--5 {
        background-image: url("../../images/bg/paral5.png");
        z-index: 5;
        top: 24%;
        height: 500px;
      }
      &--6 {
        background-image: url("../../images/bg/paral6.png");
        z-index: 6;
        top: 30%;
        height: 400px;
      }
      &--7 {
        background-image: url("../../images/bg/paral7.png");
        z-index: 7;
        top: 63%;
        height: 53%;
      }
      &--8 {
        background-image: url("../../images/bg/paral8.png");
        z-index: 8;
        top: 41%;
        height: 70%;
      }
      &--9 {
        background-image: url("../../images/bg/paral9.png");
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
</style>