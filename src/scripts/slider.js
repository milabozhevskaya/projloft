import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"]
};
const btns = {
  template: "#slider-btns"
};
const tags = {
  template: "#slider-tags",
  props: ["tags"]
};
const description = {
  template: "#slider-description",
  components: {tags},
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
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
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
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
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});