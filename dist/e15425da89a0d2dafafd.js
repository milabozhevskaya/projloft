(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{371:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var r=function(e){return"https://webdev-api.loftschool.com/"+e}},383:function(e,t,i){},398:function(e,t,i){"use strict";var r=i(383);i.n(r).a},410:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviews__add"},[e._m(0),i("form",{staticClass:"review-new__form"},[i("div",{staticClass:"review-new__desc"},[i("div",{staticClass:"review-new__photo"},[i("div",{staticClass:"review-new__photo--icon"},[0!==e.photoUrl.length?i("img",{staticClass:"img-photoUrl",attrs:{src:e.photoUrl}}):e._e(),i("div",{staticClass:"photo--icon",class:{filled:e.photoUrl.length}})]),i("label",{staticClass:"label-upload--review-new",attrs:{for:"photo"}},[i("vue-dropzone",{attrs:{id:"drop2",options:e.dropOptions}}),i("input",{staticClass:"label-upload--review-file",attrs:{name:"photo",type:"file"},on:{change:e.loadPhoto}}),e._m(1)],1)]),i("div",{staticClass:"review-new__info"},[i("div",{staticClass:"review-new__autor"},[i("div",{staticClass:"review-new__autor--name"},[i("div",{staticClass:"review-new__autor--name-title"},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"review-new__autor--name-text",attrs:{name:"name",type:"text",placeholder:"Введите имя"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}})]),i("div",{staticClass:"review-new__autor--pos"},[i("div",{staticClass:"review-new__autor--pos-title"},[e._v("Титул автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"review-new__autor--pos-text",attrs:{name:"occ",type:"text",placeholder:"Введите титул"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}})])]),i("div",{staticClass:"review-new__review"},[i("div",{staticClass:"review-new__review--title"},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"review-new__review--text",attrs:{name:"desc","field-type":"textarea",wrap:"soft"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}})])])]),i("div",{staticClass:"review-new__review--btns"},[i("button",{staticClass:"review-new__review--btn review--reset",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$emit("closeAddReview")}}},[e._v("Отмена")]),i("button",{staticClass:"review-new__review--btn review--save",attrs:{name:"name",type:"button"},on:{click:function(t){t.preventDefault(),"new"===e.mode?e.addUserReview():e.updateUserReview()}}},[e._v("Сохранить")])])])])};r._withStripped=!0;var o=i(66),s=i(371),n=i(385);function a(e,t,i,r,o,s,n){try{var a=e[s](n),c=a.value}catch(e){return void i(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var t=this,i=arguments;return new Promise(function(r,o){var s=e.apply(t,i);function n(e){a(s,r,o,n,c,"next",e)}function c(e){a(s,r,o,n,c,"throw",e)}n(void 0)})}}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){l(e,t,i[t])})}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={props:{mode:String},data:function(){return{photoUrl:"",review:{id:"",author:"",occ:"",photo:{},text:""},dropOptions:{url:"https://httpbin.org/post",maxFileSize:1.5,maxFiles:1,chunking:!1,addRemoveLinks:!1}}},components:{vueDropzone:i.n(n).a},computed:v({},Object(o.e)("reviews",{currentReview:function(e){return e.currentReview}})),watch:{currentReview:function(){"edit"===this.mode&&this.getCurrentReview()},mode:function(){"edit"===this.mode?this.getCurrentReview():(this.review={},this.photoUrl="")}},created:function(){"edit"===this.mode&&this.getCurrentReview()},methods:v({},Object(o.b)("reviews",["addReview","updateReview"]),Object(o.b)("tooltips",["showTooltip"]),{loadPhoto:function(e){var t=e.target.files[0];this.review.photo=t,this.getPhoto(t)},getPhoto:function(e){var t=this,i=new FileReader;try{i.readAsDataURL(e),i.onloadend=function(){t.photoUrl=i.result}}catch(e){this.showTooltip({type:"error",text:e.message})}},addUserReview:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in adduserreview"),e.prev=1,e.next=4,this.addReview(this.review);case 4:e.sent,this.review={},this.$emit("closeAddReview"),this.showTooltip({type:"success",text:"Отзыв добавлен"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.showTooltip({type:"error",text:e.t0.message});case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),updateUserReview:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.updateReview(this.review);case 3:e.sent,this.review={},this.$emit("closeAddReview"),this.showTooltip({type:"success",text:"Отзыв успешно изменен"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),getCurrentReview:function(){this.review=v({},this.currentReview),this.photoUrl=Object(s.a)(this.review.photo),this.review.photo=""}})},w=(i(398),i(96)),p=Object(w.a)(u,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"review-new"},[t("div",{staticClass:"review-new--title"},[this._v("Новый отзыв")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label-upload--review-btn"},[t("div",{staticClass:"label-upload--add-photo"},[t("button",{staticClass:"label-upload--btn-text"},[this._v("Добавить фото")])]),t("div",{staticClass:"label-upload--rewr-photo"},[t("button",{staticClass:"label-upload--btn-text"},[this._v("Редактировать фото")])])])}],!1,null,null,null);p.options.__file="src/admin/components/reviewAdd.vue";t.default=p.exports}}]);