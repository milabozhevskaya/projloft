<template lang="pug">
  .messages 
    .message(:class="type")
      .message__container
        message__text {{text}}
        button.message__close(type="button" @click="closeTooltip")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState('tooltips', {
      text: state => state.text,
      type: state => state.type
    })
  },
  methods: {
    ...mapActions('tooltips', ['closeTooltip'])
  }
}
</script>
<style lang="postcss">
  .messages {
    position: fixed;
    botton: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    flex-direction: row;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    &.visible {
      transform: translateY(0);
      transition: all 0.2s ease-in-out;
    }
  }
  .message {
    width: 400px;
    color: #fff;
    margin: 0 auto;
    padding: 20px 30px;

    &.success {
      background: green;
    }
    &.warning {
      background: orange;
    }
    &.error {
      background: red;
    }
    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      font-size: 18px;
      font-weight: 600;
    }
    &__close {
      display: block;
      width: 20px;
      background: none;
      border: 0;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: svg-load("remove.svg", fill="#fff") center no-repeat / container;
      }
    }
  }

</style>