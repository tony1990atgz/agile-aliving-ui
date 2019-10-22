import toptip from './toptip.vue'

function install(Vue) {
  Vue.component(toptip.name, toptip)
}

toptip.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default toptip