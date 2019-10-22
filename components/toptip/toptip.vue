<template>
  <transition name='slide'>
    <div class='agile-toptip-container' v-show='flag'>
      <span :style='{color:color}'>{{tip}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'agile-toptip',
  props: {
    tip: {
      type: String,
      default: '这是提示'
    },
    delay: {
      type: Number,
      default: 2000
    },
    color: {
      type: String,
      default: '#fff'
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
      setTimeout(() => {
        this.hide()
      }, this.delay);
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
.agile-toptip-container
  autotopscreen($base-mask-bg)
  lh($base-btn-h)
  text-align center
  color $white
  font-size $base-font-size
  &.slide-enter-active, &.slide-leave-active
      transition all .2s
  &.slide-enter, &.slide-leave-to
      transform translate3d(0, -100%,0)
</style>
