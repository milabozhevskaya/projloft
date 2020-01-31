import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs"
}
const btns = {
  template: "#slider-btns"
}
const tags = {
  template: "#slider-tags"
}
const description = {
  template: "#slider-description",
  components: {tags}
}

const display = {
  template: "#slider-display",
  components: {
    thumbs, btns
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, description
  },
  data() {
    return {
      works: []
    };
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item;

      });
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});