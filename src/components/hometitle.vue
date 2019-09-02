<template>
    <div>
        <ul class="title">
            <li v-for="(item,index) in list0" :key="item.id"  @click.prevent="tab(index)"><a href="" :class="{active:nowindex===index}">{{item.msg}}</a></li>
            <span>更多>></span>
        </ul>
        <div class="content" v-cloak>
            <transition>
                <ul v-if="nowindex===0">
                    <li v-for="item in list1" :key="item.id">
                        <a href="#">
                            <img :src="item.img" alt="">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <span>{{item.price}}</span>
                        </a>   
                    </li>
                </ul>
           </transition>
           <transition>
                <ul v-if="nowindex===1">
                        <li v-for="item in list2" :key="item.id">
                            <a href="#">
                                <img :src="item.img" alt="">
                                <h3>{{item.title}}</h3>
                                <p>{{item.desc}}</p>
                                <span>{{item.price}}</span>
                            </a>   
                        </li>
                    </ul>
            </transition>
            <transition>
                <ul v-if="nowindex===2">
                    <li v-for="item in list3" :key="item.id">
                        <a href="#">
                            <img :src="item.img" alt="">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <span>{{item.price}}</span>
                        </a>   
                    </li>
                </ul>
            </transition>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    name:'hometitle',
    data(){
        return{
            list0:[{id:1,msg:'今日特惠'},
                    {id:2,msg:'特惠门票'},
                    {id:3,msg:'特惠一日游'}],
            list1:[{id:1,img:'static/picture/01.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，北京曼谷七日游',price:'￥1990起'},
                    {id:2,img:'static/picture/02.jpg',title:'北京-泰国6天跟团游',desc:'快乐十一，相遇泰国',price:'￥1690起'},
                    {id:3,img:'static/picture/03.jpg',title:'北京-泰国7天跟团游',desc:'牵手吉普，享受甜蜜十一',price:'￥2990起'},
                    {id:4,img:'static/picture/04.jpg',title:'北京-青岛4天跟团游',desc:'快乐十一，相遇泰国',price:'￥1500起'},],
            list2:[{id:1,img:'static/picture/01.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥1690起'},
                    {id:2,img:'static/picture/03.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥2990起'},
                    {id:3,img:'static/picture/02.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥2990起'},
                    {id:4,img:'static/picture/04.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥1090起'},],
            list3:[{id:1,img:'static/picture/04.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥1690起'},
                    {id:2,img:'static/picture/03.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥1890起'},
                    {id:3,img:'static/picture/01.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥2690起'},
                    {id:4,img:'static/picture/02.jpg',title:'北京-泰国7天跟团游',desc:'快乐十一，相遇泰国',price:'￥3390起'},],
            nowindex: 0
        }
    },
    methods:{
        tab(index) {
           this.nowindex=index
        }
    }
}
</script>


<style lang="stylus" scoped>
// .v-enter,.v-leave-to
//     opacity :0
// .v-enter-active,.v-leave-active
//     transition:all 0.3s ease
@import '../assets/style.stylus'
.title
    display :flex
    span
        font-size :0.24rem
        font-size :0.24rem
        display :block
        padding :0.15rem 0.26rem
        color :#666666
        margin-top :0.35rem
        margin-left :1rem
    li
        a
            font-size :0.24rem
            display :block
            border:1px solid #d7d7d7
            padding :0.15rem 0.26rem
            color :#666666
            margin-left :0.1rem
            margin-top :0.35rem
            border-radius :0.08rem
    .active
        background-color: #17c0c8;
        color :white
.clear
    clear:both
.content
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
        img
            width :3.5rem
            border-radius :0.1rem
            display :block
        p
            color :#666666
</style>