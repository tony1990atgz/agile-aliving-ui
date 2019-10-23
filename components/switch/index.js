import switches from './switch.vue'

function install(Vue) {
  Vue.component(switches.name, switches)
}

switches.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default switches
