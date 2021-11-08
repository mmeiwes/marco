exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QA.vue?vue&type=template&id=8f17d952&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-6"},[_vm._ssrNode("<dt class=\"text-lg\"><button type=\"button\" aria-controls=\"faq-0\" aria-expanded=\"false\" class=\"text-left w-full flex justify-between items-start text-gray-400\"><span class=\"font-medium text-white\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.question.question)+"\n      ")+"</span> <span class=\"ml-6 h-7 flex items-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" aria-hidden=\"true\" class=\"rotate-0 h-6 w-6 transform\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"></path></svg></span></button></dt> <dd id=\"faq-0\" class=\"mt-2 pr-12\""+(_vm._ssrStyle(null,null, { display: (_vm.questionIsOpen || _vm.index === 0) ? '' : 'none' }))+"><p class=\"text-base text-gray-300\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.question.answer)+"\n    ")+"</p></dd>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QA.vue?vue&type=template&id=8f17d952&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QA.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var QAvue_type_script_lang_js_ = ({
  props: {
    question: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      questionIsOpen: false
    };
  },

  methods: {
    toggleQuestion() {
      this.questionIsOpen = !this.questionIsOpen;
    }

  }
});
// CONCATENATED MODULE: ./components/QA.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QAvue_type_script_lang_js_ = (QAvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/QA.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QAvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a6b2782"
  
)

/* harmony default export */ var QA = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=q-a.js.map