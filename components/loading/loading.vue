<template>
  <div>
    <transition name='fade'>
      <div class="agile-loading-container" @touchmove.prevent v-if='flag && !simple'>
        <loading-icon :class='[sizeCls, {"agile-mask" : !simple}]'></loading-icon>
      </div>
    </transition>
    <loading-icon v-if='simple' :class='sizeCls'></loading-icon>
  </div>
</template>

<script>
import loadingIcon from './icon.vue'
export default {
  name: 'agile-loading',
  computed: {
    sizeCls() {
      const size = this.size
      return size === 1 ? 'medium' : size === 2 ? 'large' : 'small' 
    }
  },
  components: {
    loadingIcon
  },
  props: {
    simple: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    show() {
      this.flag = true
    },
    hide() {
      this.flag = false
    }
  }
}
</script>

<style lang="stylus">
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-loading-container
  fullscreen($base-mask-bg)
  flex-center()
  z-index 9999
  &.fade-enter-active,&.fade-leave-active
    transition opacity .2s
  &.fade-enter,&.fade-leave-to
    opacity 0
</style>
