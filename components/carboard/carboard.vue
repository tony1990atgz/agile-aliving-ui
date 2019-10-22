<template>
   <div class="agile-carinput-container">
      <div class='title' v-if="needtitle">{{title}}</div>
      <div class="carno">
          <span :class="{ on:curIndex === 0 }"  @click="inputCarNo(0)">{{carNo[0]}}</span>
          <span :class="{ on:curIndex === 1 }"  @click="inputCarNo(1)">{{carNo[1]}}</span>
          <div class="dot"></div>
          <span :class="{ on:curIndex === 2 }"  @click="inputCarNo(2)">{{carNo[2]}}</span>
          <span :class="{ on:curIndex === 3 }"  @click="inputCarNo(3)">{{carNo[3]}}</span>
          <span :class="{ on:curIndex === 4 }"  @click="inputCarNo(4)">{{carNo[4]}}</span>
          <span :class="{ on:curIndex === 5 }"  @click="inputCarNo(5)">{{carNo[5]}}</span>
          <span :class="{ on:curIndex === 6 }"  @click="inputCarNo(6)">{{carNo[6]}}</span>
          <span 
            :class="[{on:curIndex==7 },'extra-input', {hasNewSource:hasNewSource}]"
            @click="inputCarNo(7)"
          >{{carNo[7]}}</span>
      </div>
      <carboard ref='carboard' @getword='getword' @delword='delword'></carboard>
  </div>
</template>

<script>
import carboard from './carkeyboard.vue'
export default {
  name: 'agile-carboard',
  props: {
    title: {
      type: String,
      default: '请点击方框输入您的车牌'
    },
    needtitle: {
      type: Boolean,
      default: true
    }
  },
  components: {
    carboard
  },
  computed: {
    hasNewSource() {
      const carNo = this.carNo
      return carNo.length && carNo[7] && carNo[7].length > 0
    }
  },
  data() {
    return {
      curIndex: 0,
      carNo: []
    }
  },
  methods: {
    show() {
      this.$refs.carboard.show()
    },
    hide() {
      this.$refs.carboard.hide()
    },
    getword(word) {
      this.$set(this.carNo, this.curIndex, word)
      if (this.curIndex === 6 || this.curIndex === 7) {
        this.hide()
        this.curIndex = -1
      } else {
        this.setIndex(this.curIndex + 1)
      }
      this.$emit('getcarno', this.carNo.join(''))
    },
     delword() {
        this.$set(this.carNo, this.curIndex, '')
        this.setIndex(this.curIndex > 0 ? this.curIndex - 1 : 0)
    },
    inputCarNo(index) {
        this.setIndex(index);
        this.show()
    },
    setIndex(index) {
      const carboard = this.$refs.carboard
      this.curIndex = index
      if (index === 0) {
        carboard.switchType('prefix')
      } else if (index === 1) {
        carboard.setEnableWords(1, 'number')
      } else if (index > 1 && index < 6) {
        carboard.setEnableWords(2, 'number')
      } else {
        carboard.setEnableWords(0, 'number')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.agile-carinput-container
  .title
    height: 30px
    line-height: 30px
    font-size: 12px
    color: #999
    text-align left
  .carno
      height: 40px
      display: flex
    .dot
      width: 20px
      height: 40px
      line-height: 40px
      text-align: center
      position: relative
      &:after
        content ''
        position: absolute
        display: block
        font-style: normal
        width: 5px
        height: 5px
        color: #666
        border-radius: 5px
        background: #666
        left: 50%
        top: 50%
        margin-left: -3px
        margin-top: -3px
    span
      flex 1
      font-size: 18px
      box-sizing border-box
      background: #fff
      display: block
      height: 40px
      border: none
      margin-right: 2px
      border: 1px solid #dcdcdc
      border-radius: 5px
      line-height: 40px
      text-align: center
      padding: 0
      &:last-child
        margin-right 0
      &.on
        border-color: #41b9b2
      &.extra-input
        background: url("./newsource.png") no-repeat center center
        background-size: 40px 40px
        border-color transparent
        &.on
          background: #fff
          border-color: #41b9b2
        &.hasNewSource
          background: #fff
          border-color: #dcdcdc
          &.on
            background: #fff
            border-color: #41b9b2
</style>
