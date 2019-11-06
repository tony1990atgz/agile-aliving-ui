<template>
  <div class='questionnaire-question'>
    <span v-if="index !== -1">{{index + 1}}、</span>{{question}}
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
    }
  }
}
</script>

<style lang="stylus">
.questionnaire-question
  font-size 14px
  font-weight bold
  margin-bottom 10px
</style>
