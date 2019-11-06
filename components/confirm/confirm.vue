<template>
  <transition name="confirm">
    <div class="agile-confirm-container" @touchmove.prevent :class='isTransparent' v-show="status" @click="modalHide">
      <div class="box" @click.stop>
        <div class="title" v-html='title'></div>
        <div class="operate" v-if="!single">
          <div class="left" @click="doConfirm">{{confirm}}</div>
          <div class="right" @click="doCancel">{{cancel}}</div>
        </div>
        <div class="operate" v-if="single">
          <div class="left" @click="doConfirm">{{confirm}}</div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default{
    name: 'agile-confirm',
    props:{
      title: {
        type: String,
        default: "这是内容title"
      },
      single: {
        type: Boolean,
        default: false,
      },
      confirm: {
        type: String,
        default: '确定'
      },
      cancel: {
        type: String,
        default: '再想想'
      },
      notModalHide: {
        type: Boolean,
        default: false
      },
      transparent: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isTransparent() {
        return this.transparent ? 'confirm-transparent' : ''
      }
    },
    data() {
      return {
        status: false
      }
    },
    methods:{
      show() {
        this.status = true
      },
      modalHide() {
        if (this.notModalHide) return
        this.status = false
      },
      hide() {
        this.status = false
      },
      doConfirm(){
        this.$emit('confirm')
      },
      doCancel(){
        this.hide()
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-confirm-container
  fullscreen($base-mask-bg)
  &.confirm-transparent
    background transparent
    .box
      border 1px solid #eee
      box-shadow 1px 1px 0px #000
  &.confirm-enter-active,&.confirm-leave-active
    transition all 0.2s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  &.confirm-enter,&.confirm-leave-to
    opacity 0
    transform scale(1.1)
  .box
    pos-center(#fff)
    border-radius 10px
    max-width $maxwidth
    width 60%
    text-align center
    .title
      font-size $base-font-size
      padding 20px 10px
      line-height 24px
      border-bottom-1px()
    .operate
      font-size 12px
      display flex
      line-height 40px
      height 40px
      color rgb(65,185,178)
      .left
        flex 1
      .right
        flex 1
        border-left-1px()
</style>
