import button from './button.vue'

function install(Vue) {
  Vue.component(button.name, button)
}

button.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default button