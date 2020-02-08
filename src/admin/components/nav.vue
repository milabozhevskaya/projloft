<template lang="pug">
  nav.admin-nav
    .admin-nav__container  
      ul.admin__menu-list
        li.admin__menu-item
          a(href="#").admin__menu-link Обо мне
        li.admin__menu-item
          a(href="#").admin__menu-link Работы
        li.admin__menu-item
          a(href="#").admin__menu-link Отзывы
</template>

<style lang="postcss">
  @import "../../styles/main.pcss";
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
      @include tablets {
        width: 60%;
      }
      @include phones {
        width: 100%;
      }
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
</style>