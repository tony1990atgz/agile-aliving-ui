<template>
  <div class="number-wrapper">
    <div class="minus">
      <button
        @click='minus'
        :class='{active: !flag && dir==="minus", disabled: num <= startNum}'
      ></button>
    </div>
    <div class="num">
      <input type='text' v-model='num' @blur='blur'/>
      <ul ref='ul'>
        <li v-for='i in numList' :key='i'>{{i}}</li>
      </ul>
    </div>
    <div class="plus">
      <button
        @click='add'
        :class='{active: !flag && dir==="add", disabled: num >= limit}'
      ></button>
    </div>
  </div>
</template>

<script>
const HEIGHT = 30
export default {
  name: 'agile-counter',
  props: {
    startNum: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 100
    },
    duration: {
      type: Number,
      default: 0.2
    }
  },
  data() {
    return {
      num: this.startNum,
      dir: '',
      flag: true
    }
  },
  computed: {
    numList() {
      const n = this.num
      return [n-1, n, n+1]
    }
  },
  methods: {
    add() {
      if (this.flag && this.num < this.limit) {
        this.move('add')
      }
    },
    minus() {
      if (this.flag && this.num > this.startNum) {
        this.move('minus')
      }
    },
    blur() {
      const { num, limit, startNum } = this 
      this.num = parseInt(num >= limit ? limit : num <= startNum ? startNum : num)
      this.$emit('getcount', this.num)
    },
    move(dir) {
      this.dir = dir
      this.flag = false
      let transformY
      let nextNum
      if (dir === 'add') {
        transformY = `${-2 * HEIGHT}px`
        nextNum = this.num + 1
      } else if (dir === 'minus') {
        transformY = 0
        nextNum = this.num - 1
      }
      this.$emit('getcount', nextNum)
      this._move(transformY, nextNum)
    },
    _move(transformY, nextNum) {
      const ul = this.$refs.ul
      ul.style.transition = `all ${this.duration}s`
      ul.style.transform = `translateY(${transformY})`
      ul.style.zIndex = 99
      ul.addEventListener('transitionend', () => {
        this.flag = true
        this.dir = ''
        ul.style.transform = `translateY(-${HEIGHT}px)`
        ul.style.transition = `none`
        ul.style.zIndex = 1
        this.num = nextNum
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.number-wrapper
  display flex
  width 110px
  height 34px
  align-items center
  text-align center
  font-size 14px
  >div
    height 100%
  .minus,.plus
    width 34px
    button
      width 100%
      height 100%
      border-radius 50%
      border 0
      background url(./btns.jpg) no-repeat
      background-size 100% auto
      outline none
      cursor pointer
      &.disabled
        background-position: 0 -300px
        cursor not-allowed
  .plus
    button
      background-position: 0 0
      &:hover
        background-position 0 -120px
  .minus
    button
      background-position: 0 -60px
      &:hover
        background-position 0 -180px
  .num
    margin 0 5px
    flex 1
    position relative
    overflow hidden
    input
      font-size 14px
      width 100%
      height 32px
      border 0
      outline none
      text-align center
      z-index 10
      position relative
    ul
      left 0
      top 0
      width 32px
      list-style none
      position absolute
      z-index 1
      text-align center
      transform translateY(-30px)
      background #fff
      padding 0
      margin 0
      li
        line-height 30px
</style>
