<template>
  <div class="agile-switch-container" :class='[type, {disable:disable}]' @click='toggle'>
    <div class="switch" :class='[type, {active:flag}]'></div>
  </div>
</template>

<script>
export default {
  name: 'agile-switch',
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    default: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'agile'
    }
  },
  data() {
    return {
      flag: false
    }
  },
  created() {
    this.flag = this.default
  },
  methods: {
    toggle() {
      if (this.disable) {
        return
      }
      this.flag = !this.flag
      this.$emit('toggle',this.flag)
    }
  }
}
</script>

<style lang="stylus">
@import '~static/stylus/variable.styl'
.agile-switch-container
  display inline-block
  width 56px
  height 28px
  border-radius 28px
  box-sizing border-box
  position relative
  &.agile
    border 1px solid $agile
    box-shadow 0 0 2px $agile
  &.primary
    border 1px solid $primary
    box-shadow 0 0 2px $primary
  &.success
    border 1px solid $success
    box-shadow 0 0 2px $success
  &.warning
    border 1px solid $warning
    box-shadow 0 0 2px $warning
  &.default
    border 1px solid $default
    box-shadow 0 0 2px $default
  &.disable
    opacity .2
  .switch
    box-sizing border-box
    position absolute
    left -1px
    top -1px
    height 28px
    width 28px
    border 1px solid $agile
    background $white
    border-radius 28px
    transition all .2s
    &.active
      transform translateX(100%)
      &.agile
        background $agile
      &.primary
        background $primary
      &.success
        background $success
      &.warning
        background $warning
      &.default
        background $default
    &.agile
      border-color $agile
    &.primary
      border-color $primary
    &.success
      border-color $success
    &.warning
      border-color $warning
    &.default
      border-color $default
</style>

