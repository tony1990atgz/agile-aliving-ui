import toast from './toast.vue'

const install = Vue => {
  Vue.component(toast.name, toast)
}

toast.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default toast