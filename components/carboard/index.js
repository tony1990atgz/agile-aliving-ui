import carboard from './carboard.vue'

const install = Vue => {
  Vue.component(carboard.name, carboard)
}

carboard.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default carboard