<template>
    <div>
        <div class="title">
            <h5>{{msg1}}</h5>
            <a href="#" class="more">{{msg2}}</a> 
        </div>
        <div class="image"><img :src="url" alt="" class="main"></div>
        <ul>
            <li v-for="item in list1" :key="item.id">
                <a href="#">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                    <span>{{item.price}}</span>
                </a>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
</template>
<script>
export default {
    name:'hometicket',
    data(){
        return{
            msg1:'当季景点门票',
            msg2:'更多>>',
            url:'static/picture/ticket01.jpg',
            list1:[{id:1,img:'static/picture/ticket02.jpg',title:'清明上河园',desc:'穿越宋朝，亲身体验清明上河图',price:'￥199'},
                    {id:2,img:'static/picture/ticket03.jpg',title:'龙门石窟',desc:'世界文化遗产 中国石刻艺术宝库',price:'￥99'}]
                        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../assets/style.stylus'
.title
    display :flex
    h5
        font-size:.34rem
        padding:0 .14rem
        line-height :.6rem
    .more
        font-size :0.24rem
        font-size :0.24rem
        display :block
        padding :0.15rem 0.26rem
        color :#666666
        margin-left :3.75rem
.image
    margin-bottom :-.3rem
    .main 
        width :100%
        padding :.1rem .12rem
        box-sizing :border-box
        border-radius :.1rem
ul
    .clear
        clear:both
    li
        float:left
        width :3.5rem
        height :4rem
        padding:0.1rem 0.12rem 0
        span
            font-size :0.35rem
            display :block
            color :#ff7400
            font-weight :600
        h3,p
            font-size :0.26rem
            display :block
            margin :0.1rem 0.1rem
            width :100%
            overflow :hidden
            text-overflow :ellipsis
            white-space :nowrap
        img
            width :3.5rem
            border-radius :0.1rem
            display :block
        p
            color :#666666
</style>