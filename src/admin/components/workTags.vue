<template lang="pug">
  label(for="tags").rewriting__work--info-row
    .rewriting__work--tags-title Добавление тэга
    .rewriting__work--tags-input
      input(name="tags" type="text" v-model="tagsList" @input="tagsInArray" autocomplete="off").work--tags
    .rewriting__work--tag(v-for="(tag, index) in tagsArray" :key="index") 
      .work--tag {{tag}}
        button.work--tag-remove(@click.prevent="removeTag(index)")
</template>
<script>
export default {
  props: {
    tags: String
  },
  data() {
    return {
      tagsList: "",
      tagsArray: []
    }
  },
  watch: {
    tags() {
      this.tagsList = this.tags;
      this.tagsInArray();
    },
    tagsList() {
      this.$emit('defineTagsString', this.tagsList);
    }
  },
  methods: {
    tagsInArray() {
      this.tagsArray = (this.tagsList.length === 0) ? [] : this.tagsList.split(',');
    },
    removeTag(index) {
      this.tagsArray.splice(index, 1);
      this.tagsList = this.tagsArray.join(',');
    }
  },
  mounted() {
    this.tagsList = this.tags;
    this.tagsInArray();
  }
}
</script>
<style lang="postcss">
.work--tag-remove {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
  background: svg-load("remove.svg", fill="$text-color") center no-repeat;
}
</style>