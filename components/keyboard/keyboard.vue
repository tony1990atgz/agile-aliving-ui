<template>
  <transition name='slide'>
    <div class="agile-keyboard-container" v-show="flag">
      <div class="keyboard-mask" @click="hide"></div>
      <div class="keyboard-btns">
        <div class="keybroard-group">
          <div class="keyboard-btn"  @click='emit(1)'>1</div>
          <div class="keyboard-btn"  @click='emit(4)'>4</div>
          <div class="keyboard-btn"  @click='emit(7)'>7</div>
          <div class="keyboard-btn"  @click='emit(0)' style='width:200%;padding-left:8px'>0</div>
        </div>
        <div class="keybroard-group" style="height: 159px">
          <div class="keyboard-btn"  @click='emit(2)'>2</div>
          <div class="keyboard-btn"  @click='emit(5)'>5</div>
          <div class="keyboard-btn"  @click='emit(8)'>8</div>
        </div>
        <div class="keybroard-group">
          <div class="keyboard-btn"  @click='emit(3)'>3</div>
          <div class="keyboard-btn"  @click='emit(6)'>6</div>
          <div class="keyboard-btn"  @click='emit(9)'>9</div>
          <div class="keyboard-btn"  @click='emit(".")'>.</div>
        </div>
        <div class="keybroard-group keyboard-group-pay">
          <div class="keyboard-btn"  @click='del'>
            <img width="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAmCAMAAACxpjgOAAAAeFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNERETd3d3////c3Nz5+fnV1dVTU1PMzMzLy8tlZWVXV1cJVqCFAAAAHHRSTlMA/Mr33DMLnYHh0Yw/OCUcEAXn4sGuqHZiXEkudOxZZwAAAQVJREFUOMuV1eluwjAQBOAkJKHQ0paeHGNycbz/GyJFMoN2bMmenxt9P7Ja7xZMs0JC6uaJVEhKRfFZppGS5BWJeYj3RTb5RS55QzZZ+8J1dNC4882SHXzG7uRUnLqzIe0X+JVGayQvYNS43ldIPhawRoQhf2BoVJBsgKhRAc6jGC96B0v2QNhQGNJ+I2aCAmxwwEwhATY4YIZZCFkilmnohgkB8iMldncIzRv4tFT009wD/f3/qHC+15Zsq6iAmpkUxzImwoajr4JGyHYdEWI4/JsyLtRw7RkhxpC2FhE3ssYus1AzWsJRu10oQDNehbQrZO/kQz4plhkk/yTlHz6mqdPO6x2kDriopO6SLAAAAABJRU5ErkJggg== "/>
          </div>
          <div class="keyboard-pay" @click="pay" :class="{active : canPay}">付款</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'agile-keyboard',
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      flag: false,
      value: "",
      canPay: false
    }
  },
  methods: {
    emit(val) {
      let value = this.value
      const len = value.length
      if (~value.indexOf('.') && val === '.') return

      if (~value.indexOf('.')) {
        const index = value.indexOf('.')
        if (len - 1 - index >= this.min) return
      } else {
        if (len >= this.max && val !== '.') return
      }

      this.value += val
      this.$emit('getvalue', this.value)
    },
    del() {
      let value = this.value
      const len = value.length
      if (len === 0) return
      value = value.substr(0, len - 1)
      this.value = value
      this.$emit('getvalue', value)
    },
    pay() {
      if (this.canPay) {
        this.hide()
        const amount = (this.value * 100) | 0
        this.$emit('pay', amount)
      }
    },
    isEmpty(newVal) {
      const count = newVal || this.value
      const reg = /[^(0|.)]/
      if (!reg.test(count)) {
        return true
      }
      return false
    },
    show() {
      this.flag = true
    },
    hide() {
      this.flag = false
    }
  },
  watch: {
    value(newVal) {
      if (this.isEmpty(newVal)) {
        this.canPay = false
      } else {
        this.canPay = true
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-keyboard-container
  fullscreen()
  user-select none
  transition all .2s
  &.slide-enter-active, &.slide-leave-active
    .keyboard-btns
      transition all .2s
  &.slide-enter, &.slide-leave-to
    .keyboard-btns
      transform translate3d(0, 100%,0)
  .keyboard-mask
    width: 100%
    height 100%
  .keyboard-btns
    autobottomscreen(#e4e4e4)
    height: 220px
    padding: 8px
    box-sizing: border-box
    display: flex
    font-size: 24px
    .keybroard-group
      flex 1
      &:not(:last-child)
        margin-right 8px
      &.keyboard-group-pay
        display flex
        flex-direction column
    .keyboard-btn
      height: 45px
      background: #f3f3f3
      border-radius: 4px
      margin-bottom: 8px
      text-align: center
      line-height: 45px
    .keyboard-pay
      font-size $base-font-size
      flex 1
      flex-center()
      background: #f3f3f3
      border-radius: 4px
      background: #41b9b2
      color: #b3b3b3
      margin-bottom 0
      &.active
        color $white
</style>
