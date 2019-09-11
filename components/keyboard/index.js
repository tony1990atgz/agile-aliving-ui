import keyboard from './keyboard.vue'

const install = Vue => {
  Vue.component(keyboard.name, keyboard)
}

keyboard.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default keyboard