<template>
  <div class="agile-loading-icon-wrapper">
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
    <i class="agile-loading-icon"></i>
  </div>
</template>

<script>
export default {
  sizeCls: {
    type: String,
    default: 'small'
  }
}
</script>

<style lang="stylus" scoped>
.agile-loading-icon-wrapper
  position relative
  display inline-block
  &.small
    width 24px
    height 24px
  &.medium
    width 30px
    height 30px
  &.large
    width 36px
    height 36px
  &.agile-mask
    .agile-loading-icon
      background-color #fff
.agile-loading-icon
  position absolute
  left 44.5%
  top 37%
  width 2px
  height 25%
  border-radius 50%/20%
  opacity .25
  background-color #000
  animation spinner-fade 1s linear infinite
  &:first-child
    animation-delay 0s
    transform rotate(-150deg) translateY(-150%)
  &:nth-child(2)
    animation-delay .083333333333333s
    transform rotate(-120deg) translateY(-150%)
  &:nth-child(3)
    animation-delay .166666666666667s
    transform rotate(-90deg) translateY(-150%)
  &:nth-child(4)
    animation-delay .25s
    transform rotate(-60deg) translateY(-150%)
  &:nth-child(5)
    animation-delay .333333333333333s
    transform rotate(-30deg) translateY(-150%)
  &:nth-child(6)
    animation-delay .416666666666667s
    transform rotate(0deg) translateY(-150%)
  &:nth-child(7)
    animation-delay .5s
    transform rotate(30deg) translateY(-150%)
  &:nth-child(8)
    animation-delay .583333333333333s
    transform rotate(60deg) translateY(-150%)
  &:nth-child(9)
    animation-delay .666666666666667s
    transform rotate(90deg) translateY(-150%)
  &:nth-child(10)
    animation-delay .75s
    transform rotate(120deg) translateY(-150%)
  &:nth-child(11)
    animation-delay .833333333333333s
    transform rotate(150deg) translateY(-150%)
  &:nth-child(12)
    animation-delay .916666666666667s
    transform rotate(180deg) translateY(-150%)
@keyframes spinner-fade {
  0%{opacity:.85}
  50%{opacity:.25}
  to{opacity:.25}
}
</style>
