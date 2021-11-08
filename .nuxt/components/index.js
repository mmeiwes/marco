export const FAQ = () => import('../../components/FAQ.vue' /* webpackChunkName: "components/f-a-q" */).then(c => wrapFunctional(c.default || c))
export const QA = () => import('../../components/QA.vue' /* webpackChunkName: "components/q-a" */).then(c => wrapFunctional(c.default || c))
export const TheFooter = () => import('../../components/TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const VideoModal = () => import('../../components/VideoModal.vue' /* webpackChunkName: "components/video-modal" */).then(c => wrapFunctional(c.default || c))

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
