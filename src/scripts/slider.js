import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"]
};
const btns = {
  template: "#slider-btns"
};
const tags = {
  template: "#slider-tags",
  props: ["tags"],
  computed: {
      tagsArray() {
        return (this.tags.length === 0) ? [] :this.tags.split(',');
    }
  }
  // data() {
  //   return {
  //     tagsArray: (this.tags.length === 0) ? [] :this.tags.split(',')
  //   }
  // }
};


const description = {
  template: "#slider-description",
  components: {tags},
  props: ["currentWork"],
  computed: {
    // tagsArray() {
    //   return this.currentWork.techs.split(', ');
    // }
  }
};

const display = {
  template: "#slider-display",
  components: {
    thumbs, btns
  },
  props: ["works", "currentWork", "currentIndex"],
  computed: {
    reversedWorks() {
      // return [...this.works].reverse();
      return this.works;
    }
  }
  
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, description
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const iTems = item;
        const imgUrlBase="https://webdev-api.loftschool.com/";
        item.photo = imgUrlBase + iTems.photo;
        // console.log(item.photo);
        // console.log(item);
        return item;

      });
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    loopIndex(value) {
      const worksLength = this.works.length - 1;
      if (value > worksLength) {
        this.currentIndex = worksLength;
      }
      if (value < 0) {
        this.currentIndex = 0;
      }
      if (value > (worksLength-1)) {
        this.$el.querySelector('.display__btn-next').style.opacity=".5";

      }
      if (value < 1) {
        this.$el.querySelector('.display__btn-prev').style.opacity=".5";
      }
      if ((value >0) & (value<worksLength)) {
        this.$el.querySelector('.display__btn-next').style.opacity="1";

      }
      if ((value >0) & (value=(worksLength-1))) {
        this.$el.querySelector('.display__btn-prev').style.opacity="1";


      }

      // if (value > worksLength) this.currentIndex = 0;
      // if (value < 0) this.currentIndex = worksLength;
    }
  },
  watch: {
    currentIndex(value) {
      this.loopIndex(value);
    }
  },
  async created() {
    const data = await $axios.get("/works/259");
    // console.log(data.data);
    this.works = this.makeArrWithRequiredImages(data.data);
    // this.works = data.data;
  }
});