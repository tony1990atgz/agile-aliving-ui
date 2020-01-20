import agileToast from './components/toast'
import agileKeyboard from './components/keyboard'
import agileCarboard from './components/carboard'
import agileConfirm from './components/confirm'
import agileLoading from './components/loading'
import agileButton from './components/button'
import agilePreload from './components/preload'
import agileToptip from './components/toptip'
import agileSwitch from './components/switch'
import agileActionsheet from './components/actionsheet'
import agileQuestionnaire from './components/questionnaire'
import agileCounter from './components/counter'


const components = [
  agileToast,
  agileKeyboard,
  agileCarboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload,
  agileToptip,
  agileSwitch,
  agileActionsheet,
  agileQuestionnaire,
  agileCounter
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
  agileCarboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload,
  agileToptip,
  agileSwitch,
  agileActionsheet,
  agileQuestionnaire,
  agileCounter
}

export default {
  install,
  agileToast,
  agileKeyboard,
  agileCarboard,
  agileConfirm,
  agileLoading,
  agileButton,
  agilePreload,
  agileToptip,
  agileSwitch,
  agileActionsheet,
  agileQuestionnaire,
  agileCounter
}