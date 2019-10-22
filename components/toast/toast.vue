<template>
  <transition name="toast">
    <div class="agile-toast-container" :class='posClass'  v-show="status">
        <div class="toast-box"  @click="hide">
          {{content}}
        </div>
    </div>
  </transition>
</template>

<script>
  const posClass = {
    top: 'top',
    center: 'center',
    bottom: 'bottom',
  }
  export default{
    name: 'agile-toast',
    props:{
      delay: {
        type: Number,
        default: 2000
      },
      position: {
        type: String,
        default: 'bottom'
      }
    },
    computed: {
      posClass() {
        return posClass[this.position]
      }
    },
    data() {
      return {
        timer: null,
        status: false,
        flag: true,
        content: 'toast提示组件'
      }
    },
    methods:{
      show() {
        if (!this.flag) return
        this.status = true
        this.flag = false
        this.timer = setTimeout(() => {
          this.flag = true
          this.hide()
        }, this.delay)
      },
      set(value, flag) {
        this.content = value
        this.show()
        if (flag) {
          clearTimeout(this.timer)
        }
      },
      hide() {
        this.status = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-toast-container
  posx-center()
  &.bottom
    bottom 5%
  &.center
    top 50%
    transform translate(-50%, -50%)
  &.top
    top 5%
  &.toast-enter-active,&.toast-leave-active
    transition all 0.3s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    .toast-box
      transition all 0.3s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  &.toast-enter,&.toast-leave-to
    opacity 0
    .toast-box
      transform scale(1.1)
  .toast-box
    max-width 80%
    transform-origin center
    background $base-mask-bg
    color #fff
    line-height 24px
    font-size $base-font-size
    padding 5px 15px
    word-break break-all
</style>
