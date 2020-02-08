<template lang="pug">
  .wrapper
    login
    adminheader
    adminnav
    main.content
      aboutme
      works
      reviews
   
</template>

<script>
import login from './components/pages/login';
import adminheader from './components/header';
import adminnav from './components/nav';
import aboutme from './components/pages/about';
import works from './components/pages/works';
import reviews from './components/pages/reviews';

export default {
  name: 'app',
  components: {
    login,
    adminheader,
    adminnav,
    aboutme,
    works,
    reviews
  },
  data () {
    return {

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


       

