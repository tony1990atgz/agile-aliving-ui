import agileToast from './components/toast'
import agileKeyboard from './components/keyboard'
import agileConfirm from './components/confirm'
import agileLoading from './components/loading'
import agileButton from './components/button'
import agilePreload from './components/preload'


const components = [
  agileToast,
  agileKeyboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload
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
  install,
  agileToast,
  agileKeyboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload
}

export default {
  install,
  agileToast,
  agileKeyboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload
}