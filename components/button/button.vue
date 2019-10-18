<template>
  <button class='agile-button-container' :class='[type, radiusCls, {active: flag === true}]' @click='click'>
    <slot></slot>
  </button>
</template>

<script>
function throttle(funcs, interval) {
  let timer
  return () => {
    if (timer) return
    timer = setTimeout(() => {
      timer = null
      funcs()
    }, interval);
  }
}

export default {
  name: 'agile-button',
  props: {
    type: {
      type: String,
      default: 'agile'
    },
    radius: {
      type: Number,
      default: 0
    }
  },
  computed: {
    radiusCls() {
      const radius = this.radius
      return radius === 1 ? 'radius' : radius === 2 ? 'radius50' : ''
    }
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    click() {
      this.flag = true
      throttle(() => {
        this.flag = false        
        this.$emit('click')
      }, 100)()
    }
  }
}
</script>

<style lang="stylus">
.agile-button-container
  width 100%
  border 1px solid #dcdfe6
  display block
  height 40px
  outline none
  line-height 40px
  background blue
  color white
  font-size 14px
  transition opacity .1s
  &.active
    opacity .8
  &.radius
    border-radius 4px
  &.radius50
    border-radius 20px
  &.agile
    background-color #14c8b7
    border-color #14c8b7
  &.primary
    background-color #409eff
    border-color #409eff
  &.success
    background-color #67c23a
    border-color #67c23a
  &.warning
    background-color #f56c6c
    border-color #f56c6c
  &.default
    background-color #fff
    border-color #dcdfe6
    color #000
</style>
