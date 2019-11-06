<template>
  <transition name='slide'>
    <div class='agile-actionsheet-container'  v-show='flag'>
      <div class="actionsheet">
        <div class="title">
          <div class="cancel" @click='hide' v-if="!simple">取消</div>
          <div class='desc'>actionsheet</div>
          <div class="confirm" @click='confirmItem' v-if="!simple">确定</div>
        </div>
        <div class="body" >
          <ul>
            <li :class='{active: curIndex === index}' v-for='(item,index) in content' @click='selectItem(item, index)' :key='index'>{{item.name || item}}</li>
          </ul>
        </div>
      </div>
      <div class="mask" @click='hide' @touchmove.prevent></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'agile-actionsheet',
  props: {
    simple: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'actionsheet title'
    },
    content: {
      type: Array,
      defalut: () => []
    }
  },
  data() {
    return {
      flag: false,
      curIndex: -1
    }
  },
  methods: {
    show() {
       this.flag = true
    },
    hide() {
      this.flag = false
    },
    selectItem(item, index) {
      this.temp = item
      const simple = this.simple
      this.curIndex = index
      if (simple) {
        this.hide()
        this.$emit('selectItem', item)
      }
    },
    confirmItem() {
      this.hide()
      this.$emit('selectItem', this.temp)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
$h=50px
.agile-actionsheet-container
  fullscreen()
  user-select none
  transition all .2s
  &.slide-enter-active, &.slide-leave-active
    .actionsheet,.mask
      transition all .2s
  &.slide-enter, &.slide-leave-to
    .actionsheet
      transform translate3d(0, 100%,0)
    .mask
      opacity 0
  .actionsheet
    autobottomscreen($white)
    text-align center
    .title
      lh($h)
      border-bottom-1px()
      font-size $f18
      font-weight 500
      color $black333
      flex-center()
      .desc
        flex 1
      .cancel,.confirm
        font-size $f14
        padding 0 15px
      .cancel
        text-align left
        color $black999
      .confirm
        text-align right
        color $success
    .body
      height 200px
      overflow-y scroll
      &::-webkit-scrollbar
        background: none
        height: 1px
        width 6px
      &::-webkit-scrollbar-thumb
        height: 2px
        border-radius: 10px
        cursor: pointer
        background: #e8e9ed
      li
        lh($h)
        color $black666
        font-size $f16
        &:not(:last-child)
          border-bottom-1px()
        &.active
          color $success
  .mask
    width: 100%
    height 100%
    background $base-mask-bg
</style>