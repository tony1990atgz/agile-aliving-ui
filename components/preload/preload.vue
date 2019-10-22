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
      this.callback()
    }).catch(err => {
      this.callback()
    })
  },
  methods: {
    callback() {
      setTimeout(() => {
        this.hide()
        this.$emit('callback')
      }, 200)
    },
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
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.agile-preload-container
  fullscreen($white)
  flex-center()
  flex-direction column
  .agile-preload-bg
    width 120px
    height 120px
    background-size 100% 100%
  .agile-preload-progress
    margin-top 10px
    font-size $base-font-size
</style>
