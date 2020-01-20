<template>
  <div class='questionnaire-score-choice'>
    <question :index='index' :question="question.question"></question>
    <div class="single-score-wrapper">
      <div
        class="single-score-item"
        v-for='(item,index) in score'
        :class='{active: curIndex === index}'
        @click='selectScoreAnswer(item, index)'
        :key='index'>
        {{ item }}
      </div>
    </div>
    <div class="satisfy-wrapper" v-if='curScore && (curScore <= minScore)'>
      <div class="title">不满意的原因</div>
      <multi
        ref='multi'
        :need-other-desc='needOtherDesc'
        :question="reson"
        :other='question.other'
        :border='border'
        @multiAnswer='multiAnswer'
      ></multi>
    </div>
  </div>
</template>

<script>
import question from './question.vue'
import multi from './multi.vue'
export default {
  props: {
    // 打分题题目
    question: {
      type: Object,
      default: () => {}
    },
    // 题目编号
    index: {
      type: Number,
      default: -1
    },
    border: {
      type: Boolean,
      default: false
    },
    // 低于多少分将出现不满意的原因
    minScore: {
      type: Number,
      default: 3
    },
    // 是否选中其他时需要填写内容
    needOtherDesc: {
      type: Boolean,
      default: false
    }
  },
  components: {
    question,
    multi
  },
  data() {
    return {
      score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      curIndex: -1,
      curScore: null,
      reson: {}
    }
  },
  created() {
    this.reson.answers = this.question.answers
    this.reson.other = this.question.other
    this.reson.id = this.question.id
  },
  methods: {
    selectScoreAnswer(item, index) {
      const id = this.question.id
      this.$emit('scoreAnswer', id, [item])
      this.temp = [item]
      this.curScore = item
      this.curIndex = index
    },
    multiAnswer(id, item) {
      this.$emit('scoreReason', id, [this.curScore, item])
      this.temp = [this.curScore, item]
    },
    scoreValidate() {
      const temp = this.temp
      if (!this.curScore) return false
      if (this.curScore <= this.minScore && !this.$refs.multi.multiValidate()) {
        return false
      }
      return true
    },
    validate() {
      return new Promise((resolve, reject) => {
        if (!this.scoreValidate()) {
          reject(this.index + 1)
        }
        resolve()
      })
    }
  }
}
</script>

<style lang="stylus">
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.questionnaire-score-choice
  padding 10px
  border-bottom-1px()
  font-size $f12
  box-sizing border-box
  .single-score-wrapper
    display flex
    flex-wrap wrap
    border-left 1px solid $agile
    border-top 1px solid $agile
    .single-score-item
      width 20%
      box-sizing border-box
      border-right 1px solid $agile
      border-bottom 1px solid $agile
      lh(40px)
      text-align center
      background $white
      &.active
        background $agile
        color $white
  .satisfy-wrapper
    margin-top 10px
    .title
      font-size 10px
      color $black999
      padding-bottom 6px
    .questionnaire-multi-choice
      padding 0
      &::after
        background transparent
</style>
