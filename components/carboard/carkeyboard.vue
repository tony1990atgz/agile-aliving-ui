<template>
  <transition name='slide'>
    <div class="carboard"  v-show="flag">
      <div
        v-for="(line,gIndex) in words"
        :key='gIndex'
        class='carboard-line'
      >
          <template v-for="(item,index) in line">
              <span
                v-if="item.word=='del'"
                class="del"
                :key='index'
                @click="del" >
              </span>
              <span
                v-else
                :key='index'
                :class="[{active:item.active},{disabled:item.disabled}]"
                @click="checkword(gIndex,index)"
                >
                  {{item.word}}
              </span>
          </template>
      </div>
    </div>
  </transition>
</template>
<script>
const PREFIX = [
  [{word: '京'}, {word: '沪'}, {word: '粤'}, {word: '津'}, {word: '冀'}, {word: '晋'}, {word: '蒙'}, {word: '辽'}, {word: '吉'}, {word: '黑'}],
  [{word: '苏'}, {word: '浙'}, {word: '皖'}, {word: '闽'}, {word: '赣'}, {word: '鲁'}, {word: '豫'}, {word: '鄂'}, {word: '湘'}],
  [{word: '桂'}, {word: '琼'}, {word: '渝'}, {word: '川'}, {word: '贵'}, {word: '云'}, {word: '藏'}, {word: '陕'}],
  [{word: '甘'}, {word: '青'}, {word: '宁'}, {word: '新'}, {word: '使'}, {word: 'del'}]
]
const NUMBER = [
  [{word: '1'}, {word: '2'}, {word: '3'}, {word: '4'}, {word: '5'}, {word: '6'}, {word: '7'}, {word: '8'}, {word: '9'}, {word: '0'}],
  [{word: 'A'}, {word: 'B'}, {word: 'C'}, {word: 'D'}, {word: 'E'}, {word: 'F'}, {word: 'G'}, {word: 'H'}, {word: 'J'}, {word: 'K'}],
  [{word: 'L'}, {word: 'M'}, {word: 'N'}, {word: 'P'}, {word: 'Q'}, {word: 'R'}, {word: 'S'}, {word: 'T'}, {word: 'U'}, {word: 'V'}],
  [{word: 'W'}, {word: 'X'}, {word: 'Y'}, {word: 'Z'}, {word: '港'}, {word: '澳'}, {word: '学'}, {word: '领'}, {word: 'del'}]
]
export default{
  data(){
    return {
      flag: false,
      words: []
    }
  },
  created(){
    this.temp = NUMBER
    this.words = PREFIX
  },
  methods: {
    show() {
      this.flag = true
    },
    hide() {
      this.flag = false
    },
    del(){
        this.$emit("delword");
    },
    checkword(gIndex,index){
      if (this.temp[gIndex][index].disabled) return 
      this.$emit("getword",this.words[gIndex][index].word)
    },
    switchType(type) {
      if (type === 'prefix') {
        this.words = PREFIX
      } else if (type === 'number') {
        this.words = this.temp
      }
    },
    // 禁止键盘上的数字或文字，0：不禁止任何按钮，1：禁止数字和汉子，2：禁止汉子
    enabelWord(type) {
      this.temp.forEach((line, windex) => {
        line.forEach((item, index) => {
            if (type == 1 && windex == 0) {
                this.$set(item, "disabled", true);
            } else if ((type == 1 || type == 2) && windex == 3 && index > 3 && index < 8) {
                this.$set(item, "disabled", true);
            } else {
                this.$set(item, "disabled", false);
            }
        });
      });
    },
    setEnableWords(type,switchType) {
      this.enabelWord(type)
      this.switchType(switchType)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~static/stylus/mixin.styl'
@import '~static/stylus/variable.styl'
.carboard
  autobottomscreen(#cfd4da)
  padding-bottom 10px
  &.slide-enter-active, &.slide-leave-active
    transition all .2s
  &.slide-enter, &.slide-leave-to
    transform translate3d(0, 100%,0)
  .carboard-line
    flex-center()
    padding-top 10px
  span
    box-sizing border-box
    font-size 18px
    background #fff
    width 36px
    height 36px
    line-height 36px
    border-radius 4px
    box-shadow 0px 0px 4px 0px #abafb4
    color #333
    margin 0 2px
    user-select none 
    &.disabled
      background #dcdfe3
      color #666666
      box-shadow none
  .del
    width 60px
    background #fff url('./del.png') no-repeat center center
    background-size 24px 17px
</style>