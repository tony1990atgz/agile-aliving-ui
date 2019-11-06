<template>
  <div class='questionnaire-multi-choice'>
    <question
      :index='index'
      :question="question.question"
      v-if='question.question && question.question.length'
    ></question>
    <div class="multi-answer-wrapper">
      <div
        class="multi-answer-item"
        v-for='(item,index) in question.answers'
        :class='{active: multiIndex[item.id], border: border}'
        @click='selectMultiAnswer(item)'
        :key='index'>
        {{item.answer}}
      </div>
      <div
        v-if='other'
        class="multi-answer-item"
        :class='{active: multiIndex["other"], border: border}'
        @click='selectMultiAnswer("other")'
      >
        <div class="left">其他</div>
        <div class="right" @click.stop>
          <input class='multi-input' @change='selectMultiAnswer("otherinput")' ref='otherinput' v-model='otherinput' v-show='multiIndex["other"]'/>
          <input class='multi-input' v-model='otherinput' v-show='!multiIndex["other"]' disabled/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import question from './question.vue'
export default {
  props: {
    // 问题题目
    question: {
      type: Object,
      default: () => {}
    },
    // 选项是否有边框
    border: {
      type: Boolean,
      default: false
    },
    // 题目编号
    index: {
      type: Number,
      default: -1
    },
    // 是否有其他选项
    other: {
      type: Boolean,
      default: false
    },
    // 是否选中其他时需要填写内容
    needOtherDesc: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.needOtherDesc)
  },
  data() {
    return {
      multiIndex: {},
      otherinput: ''
    }
  },
  methods: {
    selectMultiAnswer(item) {
      if (!item) return
      // 选项默认反转，但是其他input输入change的时候并不改变
      if (item !== 'otherinput') {
        this._reverse(item)
      }
      this.$emit('multiAnswer', this.question.id, this.formatAnswer())
    },
    focusOtherInput() {
        const other = this.multiIndex['other']
        setTimeout(() => {
          this.$refs.otherinput.focus()
        },20)
    },
    _reverse(item) {
      let target
      if (item === 'other') {
        target = item
        this.focusOtherInput()
      } else {
        target = item.id
      }
      this.reverse(target)
    },
    reverse(target) {
      const flag = this.multiIndex[target]
      this.$set(this.multiIndex, target, !flag)
    },
    // 返回规则：答案id用逗号隔开，其他用|隔开（有|代表other是选中的）
    formatAnswer() {
      const multiIndex = this.multiIndex
      const arr = []
      let other = ''
      for (let key in multiIndex) {
        if (multiIndex[key]) {
          if (key !== 'other') {
            arr.push(key)
          } else {
            other = this.otherinput
          }
        }
      }
      let ret = arr.join(',') + (multiIndex['other'] ? `|${other}` : '')
      return ret
    },
    // 校验当前多选题
    multiValidate() {
      return (this.validateOtherInput() && this.formatAnswer().length  > 0) ? true : false
    },
    validateOtherInput() {
      if (this.needOtherDesc) {
        if (this.multiIndex['other'] && this.otherinput.length <= 0) {
          return false
        }
      }
      return true
    },
    validate() {
      return new Promise((resolve, reject) => {
        if (!this.multiValidate()) {
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
.questionnaire-multi-choice
  box-sizing border-box
  padding 10px
  border-bottom-1px()
  .multi-answer-wrapper
    font-size $f12
    .multi-answer-item
      lh(36px)
      padding-left 21px
      no-wrap()
      background url('../images/multi.png') no-repeat 0 11px
      background-size 16px 16px
      box-sizing border-box
      display flex
      &.border
        border-radius 5px
        border 1px solid #eee
        margin-bottom 10px
        padding-left 31px
        background-position-x 8px
        &:last-child
          margin-bottom 0
      &.active
        background-image url('../images/multiactive.png')
      .right
        display flex
        align-items center
        flex 1
        margin-right 10px
        .multi-input
          border 1px solid #eee
          box-sizing border-box
          height 26px
          margin-left 10px
          width 100%
          padding-left 4px
</style>
