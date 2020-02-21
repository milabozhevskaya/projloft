<template lang="pug">
  .messages(v-if="visible")
    .message(:class="type")
      .message__container
        //- pre {{text}}
        .message__text {{text}}
        button.message__close(type="button" @click="closeTooltipUser")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    // visible: ""
    // message: {
    //   text: "",
    //   type: ""
    // }
  },
  computed: {
    ...mapState('tooltips', {
      visible: state => state.visible,
      text: state => state.text,
      type: state => state.type
    })
  },
  methods: {
    ...mapActions('tooltips', ['closeTooltip']),
    closeTooltipUser() {
      this.closeTooltip();
    }
  }
}
</script>
<style lang="postcss">
  .messages {
    position: fixed;
    bottom: 7%;
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
    /* width: 400px; */
    color: #fff;
    width: 45%;
    margin: 0 auto;
    padding: 15px 20px;
    border-radius: 5px;
    position: relative;
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
      justify-content: center;
      align-items: center;
    }
    &__text {
      font-size: 18px;
      font-weight: 600;
    }
    &__close {
      display: block;
      width: 15px;
      background: none;
      border: 0;
      position: absolute;
      height: 15px;
      top: 50%;
      right: 3%;
      transform: translate(-50%, -50%);
      background: svg-load("remove.svg", fill="#fff") center no-repeat;
      /* &:before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: svg-load("remove.svg", fill="#fff") center no-repeat / container;
      } */
    }
  }

</style>