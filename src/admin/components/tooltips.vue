<template lang="pug">
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