<template lang="pug">
  form.works__rewriting
    .rewriting
      .rewriting--title {{(mode === 'edit') ? 'Редактирование работы' : 'Добавить работу'}} 
    .rewriting__work
      .rewriting__work--img
        label(for="image").label-upload
          .rewriting__work--photoUrl(v-if='photoUrl.length !== 0')
            img(:src="photoUrl")
          vue-dropzone(id="drop1" :options="dropOptions")
          .label-upload--text Перетащите или загрузите изображение
          input(name="image" type="file" @change="loadPhoto").label-upload--file
          .label-upload--btn
            button(@click.prevent).btn-upload Загрузить
      .rewriting__work--info
        .rewriting__work--info-row
          .rewriting__work--name-title Название
          .rewriting__work--name-input
            input(name="name" type="text" v-model="work.title" autocomplete="off").work--name 
        .rewriting__work--info-row
          .rewriting__work--link-title Ссылка
          .rewriting__work--link-input
            input(name="name" type="text" v-model="work.link" autocomplete="off").work--link 
        .rewriting__work--textarea
          .rewriting__work--textarea-title  Описание
          .rewriting__work--textarea-input
            textarea(name="description" field-type="textarea" v-model="work.description" autocomplete="off").work--textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
        work-tags(
          :tagsS="work.techs"
          @defineTagsString="defineTagsString"
        )
        .rewriting__work--btns()
          button(type="button" @click.prevent="$emit('closeAddForm')").rewriting__work--btn.work--reset Отмена
          button(name="name" type="button" @click.prevent="mode === 'new' ? addUserWork() : updateUserWork()").rewriting__work--btn.work--save Сохранить
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { getImgUrl } from "../helpers/getImgUrl";
import vueDropzone from 'vue2-dropzone';
export default {
  props: {
    mode: String
  },
  data() {
    return {
      payloaD: {
        type: "success",
        text: "hello"
      },
      photoUrl: "",
      techsStirng: "",
      work: {
        id: "",
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      },
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFileSize: 1.5,
        maxFiles: 1,
        chunking: false,
        addRemoveLinks: false
      }
    }
  },
  components: {
    workTags: () => import('./workTags'),
    vueDropzone
  },
  computed: {
    ...mapState("works", { currentWork: state => state.currentWork})
  },
  watch: {
    currentWork() {
      if (this.mode === "edit") this.getCurrentWork();
    },
    mode() {
      if (this.mode === "edit") {
        this.getCurrentWork()
      } else {
        this.work = {};
        this.work.techs = "";
        this.photoUrl = "";
      };
    }
  },
  created() {
    if (this.mode === "edit") this.getCurrentWork();
  },
  methods: {
    ...mapActions('works', ['addWork', 'updateWork', "getWorks"]),
    ...mapActions('tooltips', ['showTooltip']),
    loadPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      this.getPhoto(file);
    },
    getPhoto(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photoUrl = reader.result;
        };
      } catch (error) {
        this.showTooltip ({
          type: "error",
          text: "Не получилось прочитать фото"
        });
      }
    },
    async addUserWork() {
      try {
        const response = await this.addWork(this.work);
        this.work = {};
        this.$emit('closeAddForm');
        if (response == 201) {
          this.showTooltip({
            type: "success",
            text: "Работа добавлена"
          });
        } else {
          this.showTooltip({
            type: "error",
            text: "Работа не добавлена"
          });
        }
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async updateUserWork() {
      try {
        // console.log(this.work);
        const response = await this.updateWork(this.work);
        console.log(response);
        this.getWorks();
        this.work = {};
        this.$emit('closeAddForm');
        this.showTooltip({
          type: "success",
          text: "Работа изменена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    defineTagsString(value) {
      this.work.techs = value;
    },
    getCurrentWork() {
      this.work = { ...this.currentWork };
      this.photoUrl = getImgUrl(this.work.photo);
      this.work.photo = "";
    }
  }
}
</script>
<style lang="postcss">
#drop1 {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
}
</style>