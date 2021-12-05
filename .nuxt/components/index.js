export { default as FAQ } from '../../components/FAQ.vue'
export { default as QA } from '../../components/QA.vue'
export { default as Testimonial } from '../../components/Testimonial.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as VideoModal } from '../../components/VideoModal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
