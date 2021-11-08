exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=video-modal.js.map