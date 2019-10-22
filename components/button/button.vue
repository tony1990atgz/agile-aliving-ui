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
@import '~static/stylus/variable.styl'
.agile-button-container
  width 100%
  border 1px solid $default
  display block
  outline none
  height $base-btn-h
  line-height $base-btn-h
  color $white
  font-size $base-font-size
  transition opacity .1s
  &.active
    opacity .8
  &.radius
    border-radius 4px
  &.radius50
    border-radius $base-btn-h
  &.agile
    background-color $agile
    border-color $agile
  &.primary
    background-color $primary
    border-color $primary
  &.success
    background-color $success
    border-color $success
  &.warning
    background-color $warning
    border-color $warning
  &.default
    background-color $white
    border-color $default
    color $black
</style>
