import loading from './loading.vue'

function install(Vue) {
  Vue.component(loading.name, loading)
}

loading.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default loading