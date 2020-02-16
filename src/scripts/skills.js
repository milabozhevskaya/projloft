console.log('this is skills module');

import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});

const skill = {
  template: "#skill",
  props: {
    skill: Object
  },
  mounted() {
    const circle = this.$refs["color-circle"];
    // const dashArray = parseInt(
    //   getComputedStyle(circle).getPropertyValue("stroke-dasharray")
    // );
    // const percent = (dashArray / 100) * (100 - this.skillPercent);
    // console.log(percent);
    const percent = "-" + this.skill.percent + "s";
    console.log(percent);
    circle.style.animationDelay = percent;
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: ["skill"]
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data() {
    return {
      skills: []    }
  },
  components: {
    skillsRow
  },
  async created() {
    const { data } = await $axios.get("/categories/259")
    this.skills = data;
  }
})