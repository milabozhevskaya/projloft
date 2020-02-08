<template lang="pug">
  .login
    loginbackground
    loginoverlay
</template>


<script>
import loginbackground from '../loginbackground';
import loginoverlay from '../loginoverlay';

export default {
  components: {
    loginbackground,
    loginoverlay
  }
}
</script>

<style lang="postcss">
  @import "../../../styles/main.pcss";

  .login {
    width: 100%;
    height: 100vh;
    min-height: 650px;
    padding-bottom: 14%;
    position: relative;
    @include phones {
      display: none;
    } 
  }
</style>