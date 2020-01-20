<template>
  <div class='agile-questionnaire-container'>
    <div v-for='(question, index) in questions' :key='index'>
      <single
        v-if='question.type === 0'
        ref='question'
        :question="question"
        :index='index'
        :border='border'
        @singleAnswer='singleAnswer'/>
      <multi
        v-if='question.type === 1'
        ref='question'
        :question="question"
        :other='question.other'
        :need-other-desc='needOtherDesc'
        :index='index'
        :border='border'
        @multiAnswer='multiAnswer'/>
      <score
        v-if='question.type === 2'
        ref='question'
        :question="question"
        :index='index'
        :need-other-desc='needOtherDesc'
        :border='border'
        :minScore='minScore'
        @scoreReason='scoreReason'
        @scoreAnswer='scoreAnswer'/>
    </div>
    <div class="submit-wrapper" :class='{"submit-fixed" : fixed}'>
      <agile-button @click='submit'>提交</agile-button>
    </div>
    <div style='height:60px' v-if='fixed'></div>
  </div>
</template>

<script>
import agileButton from '../button/button.vue'
import single from './components/single.vue'
import multi from './components/multi.vue'
import score from './components/score.vue'
/**
 *  问卷调查组件对数据格式有个严格的要求
 * （1）每一个题目和选项必须包含自己的id
 * （2）每一个题目需要有自己的题目内容title
 * （3）type表示题目类型：0为单选题、1位多选题、2为打分题
 * （4）答案为一个数组，字段为answers。
 * （5）多选题或打分题的情况下包含其他的字段，other。为true就存在其他选项
 * （6）格式样式：
 *    [
        {
          id: 11,
          type: 0,
          question: '请问您觉得公共区域秩序管理打多少分？',
          answers: [
            {id: 11, answer: '多次推诿'},
            {id: 12, answer: '没按约定时间内上门'},
            {id: 13, answer: '没按约定时间内上门 sure'}
          ]
        },
        {
          id: 12,
          type: 1,
          question: '请问您觉得公共区域秩序管理打多少分？',
          other: true,
          answers: [
            {id: 21, answer: '多次推诿'},
            {id: 22, answer: '没按约定时间内上门'},
            {id: 23, answer: '没按约定时间内上门 sure'}
          ]
        },
        {
          id: 14,
          type: 2,
          question: '请问您觉得公共区域秩序管理打多少分？',
          other: true,   
          answers: [
            {id: 31, answer: '多次推诿'},
            {id: 32, answer: '没按约定时间内上门'},
            {id: 33, answer: '没按约定时间内上门 sure'}
          ]
        }
      ]
 */
export default {
  name: 'agile-questionnaire',
  props: {
    // 题目数据
    questions: {
      type: Array,
      default: () => []
    },
    // 答案是否有边框
    border: {
      type: Boolean,
      default: false
    },
    // 提交按钮是否浮动
    fixed: {
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
    single,
    multi,
    score,
    agileButton
  },
  data() {
    return {
      answers: {},  // 合并存储答案
      filter: {     // 分类存储答案
        single: {},
        multi: {},
        score: {}
      }
    }
  },
  methods: {
    // 存储单选题答案
    singleAnswer(id, item) {
      this.answers[id] = item
      this.filter.single[id] = item
    },
    // 存储多选题答案
    multiAnswer(id, item) {
      this.answers[id] = item
      this.filter.multi[id] = item
    },
    // 存储打分题答案
    scoreAnswer(id, item) {
      this.answers[id] = item
      this.filter.score[id] = item
    },
    // 存储打分题存在不满意情况的答案
    scoreReason(id, item) {
      this.answers[id] = item
      this.filter.score[id] = item
    },
    /** 验证完后提交答案
     * 
     *  通过验证情况返回结果：
     * （1）flag:true  //表示验证通过
     * （1）answers:{"11":12,"12":"22|111","13":[4],"14":[2,"32,33|3333"],"15":111}
     *    -- key 为题目的id，值为题目id
     *    -- |意思是题目id为12存在答案id为22的选项，同时还存在其他选项的选择
     *       此时输入为空，如果是23|jarvis，此时输入为jarvis
     *    -- 值为数组的是打分题，数据第一项为分数，第二项为不满意情况下的答案，规则与上述一致
     *  （3）filter: {"single":{"11":12,"15":111},"multi":{"12":"22|111"},"score":{"13":[4],"14":[2,"32,33|3333"]}}
     *    -- 分类结果。分别有单选、多选、打分题的分类答案
     *    -- 返回与上述一致
     *  
     *  没通过验证的情况：
     *  （1）flag:false //表示验证不通过
     *  （2）err：表示错误的题号
     * */
    submit() {
      this.validate().then(res => {
        this._removeErrorStyle()
        this.$emit('validate', true, this.answers, this.filter)
      }).catch(err => {
        this._removeErrorStyle()
        this.errIndex = err - 1
        this._scrollToQuestion(err - 1)
        this.$emit('validate', false, err)
      })
    },
    _scrollToQuestion(index) {
      const question = this.$refs.question[index].$el
      question.style.border ='1px solid red'
      window.scrollTo({top: question.offsetTop})
    },
    _removeErrorStyle() {
      if (this.errIndex >= 0) {
        const question = this.$refs.question[this.errIndex].$el
        question.removeAttribute('style')
      }
    },
    // 得到各个题目的验证结果
    validate() {
      const question = this.$refs.question
      const promiseGroup = []
      question.forEach(item => {
        promiseGroup.push(item.validate())
      })
      return Promise.all(promiseGroup) 
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-questionnaire-container
  text-align left
  .submit-wrapper
    margin 10px
    &.submit-fixed
      margin 0
      autobottomscreen()
</style>
