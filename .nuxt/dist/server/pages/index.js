exports.ids = [6,1,2,3];
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoModal.vue?vue&type=template&id=6e6f0bca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showModal)?_c('div',{staticClass:"fixed inset-0 flex items-center justify-center p-4 z-40"},[_vm._ssrNode("<button tabindex=\"0\" type=\"button\" class=\"\n      absolute\n      right-0\n      top-0\n      p-4\n      rounded-md\n      inline-flex\n      items-center\n      justify-center\n      text-white\n      hover:text-gray-100\n      z-50\n    \"><span class=\"sr-only\">Video schießen</span> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" aria-hidden=\"true\" class=\"h-6 w-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path></svg></button> "),_c('transition',{attrs:{"enter-active-class":"transition-all transition-fast ease-out-quad","leave-active-class":"transition-all transition-medium ease-in-quad","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0","appear":""},on:{"before-leave":function($event){_vm.backdropLeaving = true},"after-leave":function($event){_vm.backdropLeaving = false}}},[(_vm.showBackdrop)?_c('div',[_c('div',{staticClass:"absolute inset-0 bg-gray-900 opacity-80 z-40",on:{"click":_vm.close}})]):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"enter-active-class":"transition-all transition-fast ease-out-quad","leave-active-class":"transition-all transition-medium ease-in-quad","enter-class":"opacity-0 scale-70","enter-to-class":"opacity-100 scale-100","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-70","appear":""},on:{"before-leave":function($event){_vm.cardLeaving = true},"after-leave":function($event){_vm.cardLeaving = false}}},[(_vm.showContent)?_c('div',{staticClass:"relative rounded-md overflow-hidden"},[_vm._t("default")],2):_vm._e()])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/VideoModal.vue?vue&type=template&id=6e6f0bca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoModal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VideoModalvue_type_script_lang_js_ = ({
  props: ["open"],

  data() {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    };
  },

  mounted() {
    const onEscape = e => {
      if (this.open && e.keyCode === 27) {
        this.close();
      }
    };

    if (document) {
      document.addEventListener("keydown", onEscape);
      this.$once("hook:destroyed", () => {
        document.removeEventListener("keydown", onEscape);
      });
    }
  },

  watch: {
    open: {
      handler: function (newValue) {
        if (newValue) {
          this.show();
        } else {
          this.close();
        }
      },
      immediate: true
    },

    leaving(newValue) {
      if (newValue === false) {
        this.showModal = false;
        this.$emit("close");
      }
    }

  },
  computed: {
    leaving() {
      return this.backdropLeaving || this.cardLeaving;
    }

  },
  methods: {
    show() {
      this.showModal = true;
      this.showBackdrop = true;
      this.showContent = true;
    },

    close() {
      this.showBackdrop = false;
      this.showContent = false;
    }

  }
});
// CONCATENATED MODULE: ./components/VideoModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VideoModalvue_type_script_lang_js_ = (VideoModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VideoModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VideoModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0689f141"
  
)

/* harmony default export */ var VideoModal = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.h-hero{\n  height:calc(100vh - 90px)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=23ed942b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col"},[_vm._ssrNode("<main class=\"h-full self-stretch mt-auto\">","</main>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"relative\"><div class=\"absolute inset-x-0 bottom-0 h-1/2 lg:bg-gray-100\"></div> <div class=\"\n            h-hero\n            max-w-7xl\n            mx-auto\n            sm:px-6\n            lg:px-8\n            py-8\n            flex flex-col\n            justify-center\n          \"><h2 class=\"\n              px-4\n              lg:px-0\n              font-display\n              text-5xl\n              tracking-tighter\n              uppercase\n              mb-8\n              bg-clip-text\n              text-transparent\n              bg-gradient-to-r\n              from-purple-400\n              to-indigo-600\n            \">\n            Ein neues Lebensgefühl durch Bewegung.\n          </h2> <div class=\"relative lg:rounded-md overflow-hidden w-full\"><div class=\"\n                absolute\n                inset-0\n                h-full\n                w-full\n                p-4\n                lg:p-0\n                rounded-md\n                cursor-pointer\n              \"><img src=\"/img/Hero.png\" alt=\"People working on laptops\" class=\"h-full w-full object-cover rounded-md ç\"></div> <div class=\"relative px-4 py-40 lg:px-8 mt-60 flex justify-center\"><button type=\"button\" class=\"\n                  absolute\n                  left-10\n                  bottom-1/2\n                  transform\n                  -translate-y-1/2\n                  h-28\n                  w-28\n                  block\n                  bg-white\n                  rounded-full\n                  overflow-hidden\n                  focus:outline-none\n                  focus:ring-2\n                  focus:ring-offset-2\n                  focus:ring-indigo-800\n                \"><span class=\"sr-only\">Video anschauen und mehr erfahren</span> <div aria-hidden=\"true\" class=\"\n                    absolute\n                    inset-0\n                    w-full\n                    h-full\n                    flex\n                    items-center\n                    justify-center\n                  \"><svg fill=\"currentColor\" viewBox=\"0 0 84 84\" class=\"h-20 w-20 text-gray-800\"><circle opacity=\"0.9\" cx=\"42\" cy=\"42\" r=\"0\"></circle> <path d=\"M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z\"></path></svg></div></button></div></div></div></div> "),_c('VideoModal',{attrs:{"open":_vm.videoIsEnabled},on:{"close":function($event){_vm.videoIsEnabled = false}}},[(_vm.videoIsEnabled)?_c('video',{ref:"vid",staticClass:"relative z-50",attrs:{"id":"vid"}},[_c('source',{attrs:{"src":"/video/featured.mp4","type":"video/mp4"}}),_vm._v("\n          Your browser does not support HTML video.\n        ")]):_vm._e()]),_vm._ssrNode(" <div class=\"\n          max-w-7xl\n          mx-auto\n          px-4\n          pb-12\n          sm:px-6\n          lg:px-8\n          relative\n          z-10\n          mt-8\n          lg:-mt-20\n        \"><h1 class=\"\n            text-center\n            block\n            font-bold\n            uppercase\n            font-display\n            text-2xl\n            mb-8\n          \"><span class=\"\n              bg-clip-text\n              text-transparent\n              bg-gradient-to-r\n              from-purple-400\n              to-indigo-600\n            \">Personal Training</span>\n          in Hövelhöf und Kreis Paderborn\n        </h1></div>")],2),_vm._ssrNode(" <section id=\"about\"><div class=\"relative pt-16 overflow-hidden\"><div aria-hidden=\"true\" class=\"absolute inset-x-0 top-0 h-48\"></div> <div class=\"relative\"><div class=\"\n              lg:mx-auto\n              lg:max-w-7xl\n              lg:px-8\n              lg:grid\n              lg:grid-cols-2\n              lg:grid-flow-col-dense\n            \"><div class=\"px-4 lg:max-w-xl mx-auto lg:py-16 lg:mx-0 lg:px-0\"><div><div class=\"mt-6\"><h2 class=\"\n                      text-3xl\n                      font-display font-extrabold\n                      text-gray-900\n                      uppercase\n                    \">\n                    Marco Meiwes\n                    <span class=\"\n                        bg-clip-text\n                        text-transparent\n                        bg-gradient-to-r\n                        from-purple-400\n                        to-indigo-500\n                      \">Personal Trainer</span></h2> <p class=\"mt-4 text-lg text-gray-500\">\n                    Hey, ich bin Marco und ich bin Personal Trainer aus\n                    Hovelhöf im Kreis Paderborn. Ich helfe Menschen sich in\n                    ihrem Körper wohlzufühlen. Mir geht es nicht um Fitness,\n                    sondern darum: Was kann der Körper und was kann er nicht?\n                    Wie frei kannst du dich in deinem Körper bewegen? Hier\n                    setzt mein Training an. Wer einen funktionalen,\n                    beweglichen und verletzungsfreien Körper haben möchte ist\n                    bei mir an der richtigen Adresse.\n                  </p> <h2 class=\"\n                      py-4\n                      text-3xl\n                      font-display font-extrabold\n                      text-gray-900\n                    \">\n                    Über mich\n                  </h2> <p class=\"text-lg text-gray-500\">\n                    Bewegung ist mein Leben. Seit 20 Jahren spiele ich\n                    Badminton im Verein und bin mittlerweile seit 10 Jahren\n                    als Badmintontrainer aktiv. Nebenbei habe ich auf meine\n                    körperliche Fitness immer großen Wert gelegt. Der Sport\n                    hat mir das nötige Vertrauen in mich selbst gegeben und\n                    mir gezeigt, wozu mein Körper fähig ist. Während meines\n                    Sportstudiums veränderte sich mein Training von einem\n                    fitnessorientierten zu einem vielseitigen und\n                    bewegungsorientierten Training.\n                  </p> <p class=\"mt-4 text-lg text-gray-500\">\n                    Meine Leidenschaft ist die Optimierung des menschlichen\n                    Körpers – Menschen zu unterstützen, die bereit sind ihr\n                    volles Potenzial auszuschöpfen und ihren Körper auf das\n                    nächste Level zu bringen.\n                  </p> <div class=\"mt-6\"><a href=\"mailto:marco-meiwes@web.de\" class=\"\n                        inline-flex\n                        bg-gradient-to-r\n                        from-purple-600\n                        to-indigo-600\n                        bg-origin-border\n                        px-4\n                        py-2\n                        border border-transparent\n                        text-base\n                        font-medium\n                        shadow-sm\n                        rounded-full\n                        text-white\n                        hover:from-purple-700 hover:to-indigo-700\n                      \">\n                      Jetzt kontaktieren\n                    </a></div></div></div></div> <div class=\"mt-12 sm:mt-16 lg:mt-0 px-4\"><div class=\"\n                  -mr-48\n                  lg:pl-6\n                  md:-mr-16\n                  rounded-lg\n                  overflow-hidden\n                  lg:px-0 lg:m-0 lg:relative lg:h-full\n                \"><img src=\"/img/FeaturedRight.jpg\" alt=\"Inbox user interface\" class=\"\n                    w-full\n                    lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none\n                  \"></div></div></div></div> <div class=\"mt-24\"><div class=\"\n              lg:mx-auto\n              lg:max-w-7xl\n              lg:px-8\n              lg:grid\n              lg:grid-cols-2\n              lg:grid-flow-col-dense\n              lg:gap-24\n            \"><div class=\"\n                px-4\n                lg:max-w-xl\n                mx-auto\n                sm:px-6\n                lg:py-32 lg:mx-0 lg:px-0 lg:col-start-2\n              \"><div><div class=\"mt-6\"><h2 class=\"\n                      text-3xl\n                      font-extrabold\n                      text-gray-900\n                      font-display\n                      uppercase\n                    \">\n                    Was möchtest du wirklich?\n                  </h2> <p class=\"mt-4 text-lg text-gray-500\">\n                    Jetzt mal Hand aufs Herz. Dir geht es nicht um ein\n                    Six-Pack, einen flachen Bauch oder einen knackigen\n                    Hintern. Dir ist es viel wichtiger dich in deinem Körper\n                    wohlzufühlen und all die schönen Dinge des Lebens ausüben\n                    zu können, ohne ständig an den eigenen Körper denken zu\n                    müssen. Du möchtest viel Energie haben, leistungsfähig,\n                    mental ausgeglichen und belastbar sein.\n                  </p> <p class=\"mt-4 text-lg text-gray-500\">\n                    Du möchtest einen Körper, der dich mit Leichtigkeit durchs\n                    Leben bringt. Fahrradtouren mit der Familie, Bergsteigen\n                    mit Freunden, das Schwimmen im nächsten See oder das\n                    Tanzen mit dem Partner – all das sind Aktivitäten, die du\n                    gerne machst und genießen möchtest, ohne dass dir dein\n                    Körper einen Strich durch die Rechnung macht.\n                  </p> <p class=\"mt-4 text-lg text-gray-500\">\n                    Doch wie gelangst du zu diesem Körper? Hier komme ich ins\n                    Spiel. Ich zeige dir, wie wir am effektivsten da\n                    hinkommen, wo du hinmöchtest. Ich helfe dir, dir weniger\n                    Gedanken, um deinen Körper zu machen, damit du Zeit hast,\n                    dich auf die wirklich wichtigen Dinge im Leben zu\n                    konzentrieren – vorausgesetzt, du bist bereit die nötige\n                    Arbeit zu investieren.\n                  </p> <div class=\"mt-6\"><a href=\"mailto:marco-meiwes@web.de\" class=\"\n                        inline-flex\n                        bg-gradient-to-r\n                        from-purple-600\n                        to-indigo-600\n                        bg-origin-border\n                        px-4\n                        py-2\n                        border border-transparent\n                        text-base\n                        font-medium\n                        shadow-sm\n                        text-white\n                        rounded-full\n                      \">\n                      Jetzt kontaktieren\n                    </a></div></div></div></div> <div class=\"mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 max-w-lg\"><div class=\"lg:-ml-24 lg:px-0 lg:m-0 lg:relative lg:h-full\"><div class=\"px-4\"><div class=\"\n                      aspect-w-1 aspect-h-1\n                      rounded-lg\n                      lg:bg-gray-100\n                      overflow-hidden\n                    \"><img src=\"/img/gallery2.jpg\" alt=\"Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system.\" class=\"w-full h-full object-center object-cover\"></div> <div class=\"\n                      grid grid-cols-2\n                      gap-4\n                      mt-4\n                      sm:gap-6 sm:mt-6\n                      lg:gap-8 lg:mt-8\n                    \"><div class=\"\n                        aspect-w-1 aspect-h-1\n                        rounded-lg\n                        bg-gray-100\n                        overflow-hidden\n                      \"><img src=\"/img/gallery.jpg\" alt=\"Detail of temperature setting button on kettle bass with digital degree readout.\" class=\"w-full h-full object-center object-cover\"></div> <div class=\"\n                        aspect-w-1 aspect-h-1\n                        rounded-lg\n                        bg-gray-100\n                        overflow-hidden\n                      \"><img src=\"/img/gallery3.jpg\" alt=\"Kettle spout pouring boiling water into coffee grounds in pour-over mug.\" class=\"w-full h-full object-center object-cover\"></div></div></div></div></div></div></div></div></section> <section id=\"testimonials\" aria-labelledby=\"testimonial-heading\" class=\"relative mt-12 pb-24 max-w-7xl mx-auto lg:py-32\"><div class=\"max-w-2xl mx-auto lg:max-w-none\"><h2 class=\"\n            text-3xl\n            lg:text-5xl\n            font-display font-extrabold\n            bg-clip-text\n            text-transparent\n            bg-gradient-to-r\n            from-purple-500\n            to-indigo-600\n            uppercase\n          \">\n          Kundenmeinungen\n        </h2> <div class=\"\n            mt-16\n            space-y-16\n            lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8\n          \"><blockquote class=\"sm:flex lg:flex-col self-stretch\"><svg width=\"24\" height=\"18\" viewBox=\"0 0 24 18\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"flex-shrink-0 text-gray-300\"><path d=\"M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z\" fill=\"currentColor\"></path></svg> <div class=\"\n                mt-8\n                sm:mt-0 sm:ml-6\n                lg:mt-10 lg:ml-0\n                h-full\n                flex flex-col\n              \"><p class=\"text-lg text-gray-600\">\n                Das individuelle Training mit Marco finde ich klasse. Er passt\n                sich dabei immer mir an, da ich bislang nicht gerade der\n                sportlichste Typ war und eine Arm-OP hinter mir habe.\n              </p> <p class=\"text-lg text-gray-600 mt-2\">\n                Und dass wir meistens draußen trainieren, finde ich super!\n              </p> <cite class=\"\n                  mt-4\n                  lg:mt-auto\n                  block\n                  font-semibold\n                  not-italic\n                  text-purple-600\n                \">\n                Franky\n              </cite></div></blockquote> <blockquote class=\"sm:flex lg:flex-col self-stretch\"><svg width=\"24\" height=\"18\" viewBox=\"0 0 24 18\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"flex-shrink-0 text-gray-300\"><path d=\"M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z\" fill=\"currentColor\"></path></svg> <div class=\"\n                mt-8\n                sm:mt-0 sm:ml-6\n                lg:mt-10 lg:ml-0\n                h-full\n                flex flex-col\n              \"><p class=\"text-lg text-gray-600\">\n                Das besondere an Marcos Training ist, dass wir nur den eigenen\n                Körper verwenden und das komplett ausreicht. Mit seinem\n                Feedback und dem Glauben an mich klappen auch schwierige\n                Sachen.\n              </p> <cite class=\"\n                  block\n                  font-semibold\n                  not-italic\n                  text-purple-600\n                  lg:mt-auto\n                \">\n                Finn\n              </cite></div></blockquote></div></div></section> "),_c('FAQ')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=23ed942b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      videoIsEnabled: false
    };
  },

  methods: {
    enableVideo() {
      this.videoIsEnabled = true;
      this.$nextTick(function () {
        if (window.document) {
          console.log(this.$refs.vid);
          this.$refs.vid.play();
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "033a5046"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoModal: __webpack_require__(31).default,FAQ: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=index.js.map