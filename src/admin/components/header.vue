<template lang="pug">
  header.admin-header
    .admin-header__container
      .user-info-photo
        .user-info__avatar
          img(src=`~images/content/user.jpg`).user-info__photo
      .user-info
        .user-info__name Мила Божевская
        .admin-title Панель администрирования
        .admin-exit
          a.admin-exit__ref(@click="logoutUser") Выйти
</template>
<script>
  import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>
<style lang="postcss">
  @import "../../styles/main.pcss";
  .admin-header {
    background-image: linear-gradient(to right, rgb(0,103,239) 0%, rgb(0,124,241) 60%, rgb(0,137,242) 100%);
    display: flex;
    justify-content: center;
    &__container {
      width: 92%;
      display: flex;
      flex-direction: row;
      color: white;
      padding-top: 15px;
      padding-bottom: 15px;
      align-items: center;
      justify-content: space-between;
      @include tablets {
        width: 97%;
      }
      @include phones {
        flex-direction: row;
        align-items: start;
      }
    }
    & .user-info {
      width: 95%;
      display: flex;
      flex-direction: row;
      align-items: center;
      @include desktop {
        width: 92%;
      }
      @include phones {
        width: 85%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
      }
      
    }
    & .user-info-photo {
      width: 6%;
      @include tablets {
        width: 12%;
      }
    }
    & .user-info__avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 2%;
      @include tablets {
        margin-right: 2%;
      }
    }
    & .user-info__photo {
      min-width: 100%;
      height: 100%;
      /* min-height: 100%; */
    }
    & .user-info__name {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.89;
      width: 15%;
      @include desktop {
        width: 24%;
      }
      @include tablets {
        width: 44%;
      }
      @include phones {
        width: 70%;
      }
    }
    & .admin-title {
      width: 72%;
      opacity: .7;
      font-size: 14px;
      @include tablets {
        width: 60%;
      }
      @include phones {
        display: none;
      }
    }
    & .admin-exit {
      width: 10%;
      display: flex;
      justify-content: flex-end;
      @include phones {
        width: 19%;
        justify-content: flex-start;

      }
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
</style>