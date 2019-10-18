<template>
  <div class='agile-preload-container' :style='"background: " + bg' v-show='flag'>
    <div class="agile-preload-bg" :style='"background-image:url(" + icon + ")"' v-if='icon.length'></div>
    <agile-loading v-else></agile-loading>
    <div class="agile-preload-progress">{{percent}}%</div>
  </div>
</template>

<script>
import agileLoading from '../loading/loading.vue'
export default {
  name: 'agile-preload',
  props: {
    images: {
      type: Array,
      default: []
    },
    bg: {
      type: String,
      default: '#fff'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      flag: true,
      count: 0
    }
  },
  components: {
    agileLoading
  },
  computed: {
    percent() {
      return (this.count / this.len * 100) | 0
    }
  },
  mounted() {
    this.len = this.images.length
    this.load().then(res => {
      this.$emit('callback')
    }).catch(err => {
      this.$emit('callback')
      console.log(err)
    })
  },
  methods: {
    hide() {
      this.flag = false
    },
    loadImage(src) {
      const img = new Image()
      img.src = src
      return new Promise((resolve, reject) => {
        img.onload = () => {
          this.count++
          resolve()
        }
        img.onerror = () => {
          this.count++
          reject('err')
        }
      })
    },
    load() {
      const images = this.images
      const promiseGroup = images.map(item => {
        return this.loadImage(item)
      })
      return Promise.all(promiseGroup)
    }
  }
}
</script>

<style lang="stylus">
.agile-preload-container
  position fixed
  top 0
  bottom 0
  left 0
  overflow hidden
  width 100%
  display flex
  align-items center
  justify-content center
  z-index 999
  flex-direction column
  background #fff
  .agile-preload-bg
    width 120px
    height 120px
    background-size 100% 100%
  .agile-preload-progress
    margin-top 10px
    font-size 14px
</style>
