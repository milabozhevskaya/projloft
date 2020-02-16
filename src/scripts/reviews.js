import Vue from 'vue';
import Flickity from 'vue-flickity';
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});


new Vue({
  el: '.reviews',
  // template: "reviewsContainer",
  // data: {
  //   disabledClass: true
  // },
  components: {
    Flickity
  },
  props: {
    disabled: Boolean
  },
  
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
        selectedAttraction: 0.2,
        friction: 0.8
        
      },
      
    }
  },
  
  methods: {
    requiredImages(data) {
      return data.map(item => {
        const iTems = item;
        const imgUrlBase="https://webdev-api.loftschool.com/";
        item.photo = imgUrlBase + iTems.photo;
        console.log(item.photo);
        console.log(item);
        return item;

      });
    },
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },
    
    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();

    },
    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0) {
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled=true;
        // this.$el.querySelector('.reviews__slider-direc--next').disabled=false;

        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity=".3";
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity="1";

      } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length-1) {
        // this.$el.querySelector('.reviews__slider-direc--next').disabled=true;
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled=false;
        
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity=".3";
        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity="1";

      } else {
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled = false;
        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity="1";

        // this.$el.querySelector('.reviews__slider-direc--next').disabled = false;
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity="1";

      }
    
    }
  },
  async created() {
    const  data  = await $axios.get("/reviews/259");
    console.log(data);
    this.reviews = data.data.map(item => {
      const iTems = item;
      const imgUrlBase="https://webdev-api.loftschool.com/";
      item.photo = imgUrlBase + iTems.photo;
      console.log(item.photo);
      console.log(item);
      return item;

    });
    // this.reviews = requiredImages(data.data);
    // this.reviews = data.data;
  }
});