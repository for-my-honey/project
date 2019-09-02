<template>
    <div>
        <h5>{{hot}}</h5>
        <ul>
            <li v-for="item in list" :key="item.id">
                <a href="#">
                    <img :src="item.img" alt="">
                    <p>{{item.desc}}</p>
                    <span>{{item.price}}</span>
                    <div class="title">
                        <h4>{{item.title1}}</h4>
                        <i>{{item.title2}}</i>
                    </div>
                </a>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
</template>
<script>
export default {
    name:'homehot',
    data(){
        return {
            hot:'当季热门度假',
            list:[{id:1,img:'static/picture/01.jpg',title1:'郑州-丽江',title2:'8天自由行',desc:'含往返机票（含税）+7晚住宿',price:'￥2980'},
                    {id:2,img:'static/picture/02.jpg',title1:'郑州-三亚',title2:'6天跟团游',desc:'含往返机票（含税）+7晚住宿',price:'￥2232'},
                    {id:3,img:'static/picture/03.jpg',title1:'郑州-海口',title2:'5天自由行',desc:'含往返机票（含税）+7晚住宿',price:'￥2360'},
                    {id:4,img:'static/picture/04.jpg',title1:'郑州-泰国',title2:'6天跟团游',desc:'含往返机票（含税）+7晚住宿',price:'￥4494'},],
        }
    }
}
</script>
<style lang="stylus" scoped>
h5
    font-size:.34rem
    padding:0.2rem 0.14rem 0
ul
    .clear
        clear:both
    li
        float:left
        width :3.5rem
        height :3.6rem
        padding:0.1rem 0.12rem 0
        position :relative
        span
            font-size :0.35rem
            display :block
            color :#ff7400
            font-weight :600
        .title
            height:.7rem
            width :2rem
            text-align :center
            position :absolute
            top:1.7rem
            left :50%
            margin-left :-1rem
            background :rgba(0,0,0,0.6)
            h4
                font-size :.28rem
                color :#fff
                font-weight :400
            i 
                font-size :.24rem
                font-style :normal
                display :block
                color :#ffde00
        p
            font-size :0.26rem
            display :block
            margin :0.1rem 0.1rem
            color :#000
            overflow :hidden
            text-overflow :ellipsis
            white-space :nowrap
        img
            width :3.5rem
            border-radius :0.1rem
            display :block
</style>