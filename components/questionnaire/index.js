import questionnaire from './questionnaire.vue'

function install(Vue) {
  Vue.component(questionnaire.name, questionnaire)
}

questionnaire.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default questionnaire
