import actionsheet from './actionsheet.vue'

function install(Vue) {
  Vue.component(actionsheet.name, actionsheet)
}

actionsheet.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default actionsheet