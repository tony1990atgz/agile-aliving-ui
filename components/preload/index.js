import preload from './preload.vue'

function install(Vue) {
  Vue.component(preload.name, preload)
}

preload.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default preload
