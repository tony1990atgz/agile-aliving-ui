import confirm from './confirm.vue'

const install = Vue => {
  Vue.component(confirm.name, confirm)
}

confirm.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default confirm