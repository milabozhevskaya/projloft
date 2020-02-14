<template lang="pug">
  .wrapper
    template(v-if="$route.meta.public")
      router-view
    
    template(v-else-if="userIsLogged")
      adminheader
      adminnav
      main.content
        router-view(:pageTitle="$route.meta.title")
   
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: 'app',
  components: {
    adminheader: () => import("./components/header"),
    adminnav: () => import("./components/nav"),
    tooltips: () => import("./components/tooltips"),
    // about: () => import("./components/pages/about")
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters("user",["userIsLogged"]),
    ...mapState("tooltips", { visible: state => state.visible })
  },
  methods: {
    ...mapActions("tooltips", ["closeTooltip"])
  },
  watch: {
    visible(value) {
      if (value === true) {
        let timeout;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  }
}
</script>



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
  
  
</style>


       

