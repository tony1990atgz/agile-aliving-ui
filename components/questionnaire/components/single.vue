<template>
  <div class='questionnaire-single-choice'>
    <question :index='index' :question="question.question"></question>
    <div class="single-answer-wrapper">
      <div
        class="single-answer-item"
        v-for='(item,index) in question.answers'
        :class='{active: curIndex === index, border: border}'
        @click='selectSingleAnswer(item, index)'
        :key='index'>
        {{item.answer}}
      </div>
    </div>
  </div>
</template>

<script>
import question from './question.vue'
export default {
  props: {
    question: {
      type: Object,
      default: () => {}
    },
    border: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      curIndex: -1
    }
  },
  methods: {
    selectSingleAnswer(item, index) {
      this.$emit('singleAnswer', this.question.id, item.id)
      this.curIndex = index
    },
    singleValidate() {
      return this.curIndex === -1 ? false : true
    },
    validate() {
      return new Promise((resolve, reject) => {
        if (!this.singleValidate()) {
          reject(this.index + 1)
        }
        resolve()
      })
    }
  },
  components: {
    question
  }
}
</script>

<style lang="stylus">
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.questionnaire-single-choice
  padding 10px
  border-bottom-1px()
  box-sizing border-box
  .single-answer-wrapper
    font-size $f12
    .single-answer-item
      lh(36px)
      padding-left 21px
      no-wrap()
      background url('../images/single.png') no-repeat 0 11px
      background-size 16px 16px
      box-sizing border-box
      &.border
        border-radius 5px
        border 1px solid #eee
        margin-bottom 10px
        padding-left 31px
        background-position-x 8px
        &:last-child
          margin-bottom 0
      &.active
        background-image url('../images/singleactive.png')
</style>
