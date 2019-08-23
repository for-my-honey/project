<template>
    <div>
        <header>
            <div class="header-left"><span class="iconfont">&#xe625;</span></div>
            <div class="header-input"><span class="iconfont">&#xe632;</span>
                <Input type="text" v-model="value" placeholder="搜索景点酒店"/>
            </div> 
            <div class="header-right">城市<span class="iconfont">&#xe62d;</span></div>
        </header>
    </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data(){
      return {
          value:''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/style.stylus'
*
    font-size :0.28rem
header
    height :.86rem
    background :$bgColor
    border :1px solid #17c0c8
    display :flex
    line-height :0.86rem
    justify-content :space-between
    .header-left,.header-right
        margin :0 0.2rem
    .header-input
        background :white
        border-radius 0.05rem
        height :0.6rem
        
        line-height 0.6rem
        margin :0.13rem 0
        padding :0 0.1rem
        input
            border :none
        input:visited
            outline :none
            border :1px solid white
</style>
