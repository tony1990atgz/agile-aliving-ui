import counter from './counter.vue'

const install = Vue => {
  Vue.component(counter.name, counter)
}

counter.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default counter