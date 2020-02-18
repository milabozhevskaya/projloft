<template lang="pug">
  .work__tags
    .work--tag(v-for="(tag, index) in (this.tags.split(', '))" :key="index")
      .work--tag-item {{tag}}
</template>
<script>
export default {
  props: {
    tags: String
  },
  data() {
    return {
      // one: this.tags,
      // tagsArray: (this.tags.length === 0) ? [] : this.tags.split(', ')
    }
    
  }
};
</script>