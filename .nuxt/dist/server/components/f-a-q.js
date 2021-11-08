exports.ids = [1,2];
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

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ.vue?vue&type=template&id=09e2f712&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"faq"}},[_vm._ssrNode("<div class=\"bg-gray-900\" data-v-09e2f712>","</div>",[_vm._ssrNode("<div class=\"max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8\" data-v-09e2f712>","</div>",[_vm._ssrNode("<div class=\"max-w-3xl mx-auto divide-y divide-gray-700\" data-v-09e2f712>","</div>",[_vm._ssrNode("<h2 class=\"\n            text-center text-3xl\n            font-extrabold\n            bg-clip-text\n            text-transparent\n            bg-gradient-to-r\n            from-purple-400\n            to-indigo-500\n            sm:text-4xl\n            text-uppercase\n            font-display\n          \" data-v-09e2f712>\n          Häufig gestellte Fragen\n        </h2> "),_vm._ssrNode("<dl class=\"mt-6 space-y-6 divide-y divide-gray-700\" data-v-09e2f712>","</dl>",_vm._l((_vm.questions),function(question,i){return _c('QA',{key:i,attrs:{"question":question,"open":_vm.questionIsOpen,"index":i}})}),1)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FAQ.vue?vue&type=template&id=09e2f712&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FAQvue_type_script_lang_js_ = ({
  data() {
    return {
      questionIsOpen: false,
      questions: [{
        question: "Wie sieht mein Training aus?",
        answer: "Mein Training ist sehr vielseitig und spielerisch gestaltet. Gleichzeitig gehen wir mit höchster Konzentration und Zielstrebigkeit vor. Aspekte der Ausdauer, Kraft, Schnelligkeit, Balance, Koordination, Konzentration und mentalen Stärke finden dabei in meinem Training ihren Platz. Auch Verletzungen bekommen wir wieder in den Griff."
      }, {
        question: "Für wen ist mein Training geeignet?",
        answer: "Das Training ist grundsätzlich für jeden geeignet, der daran interessiert ist seinen Körper auf das nächste Level zu bringen. Es sind keine Vorkenntnisse notwendig, um mit einem Training bei mir zu starten. Jeder ist willkommen!"
      }, {
        question: "Was solltest du mitbringen?",
        answer: "Für das Training solltest du die Bereitschaft, die nötige Arbeit zu investieren, Geduld und auch bei Regen, Schnee und Hitze zu trainieren."
      }, {
        question: "Welche Ergebnisse kannst du erwarten?",
        answer: "Die Ergebnisse, die wir zusammen erreichen hängen davon ab, wieviel Zeit du investierst und wie qualitativ hochwertig du die einzelnen Trainingseinheiten durchführst. Sprich – es hängt vor allem von dir ab. Ich kann dir den optimalen Weg ebnen, doch betreten musst du ihn selbst."
      }, {
        question: "Was solltest du mitbringen?",
        answer: "Für das Training solltest du die Bereitschaft, die nötige Arbeit zu investieren, Geduld und auch bei Regen, Schnee und Hitze zu trainieren."
      }]
    };
  },

  methods: {
    handleToggleQuestion() {
      console.log("Toggle");
      this.questionIsOpen = !this.questionIsOpen;
    }

  }
});
// CONCATENATED MODULE: ./components/FAQ.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FAQvue_type_script_lang_js_ = (FAQvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FAQ.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FAQvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09e2f712",
  "2a6b11d7"
  
)

/* harmony default export */ var FAQ = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {QA: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=f-a-q.js.map