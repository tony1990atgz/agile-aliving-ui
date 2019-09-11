import toast from './components/toast'
import keyboard from './components/keyboard'
import confirm from './components/confirm'


const components = [
  toast,
  keyboard,
  confirm
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  toast,
  keyboard,
  install,
  confirm
}

export default {
  toast,
  keyboard,
  install,
  confirm
}