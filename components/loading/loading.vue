<template>
  <div>
    <transition name='fade'>
      <div class="agile-loading-container" v-if='flag && !simple'>
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
.agile-loading-container
  position fixed
  top 0
  bottom 0
  width 100%
  background rgba(0,0,0,.6)
  display flex
  align-items center
  justify-content center 
  z-index 999
  &.fade-enter-active,&.fade-leave-active
    transition opacity .2s
  &.fade-enter,&.fade-leave-to
    opacity 0

</style>
