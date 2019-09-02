<template>
    <div>
        <h5>{{strategy}}</h5>
        <ul class="title">
            <li v-for="(item,index) in list0" :key="item.id"  @click.prevent="tab(index)"><a href="" :class="{active:nowindex===index}">{{item.msg}}</a></li>
            <span>更多>></span>
        </ul>
        <div class="content" v-cloak>
            <ul v-if="nowindex===0">
                <li v-for="item in list1" :key="item.id">
                    <a href="#">
                        <img :src="item.img" alt="">
                        <h3>{{item.title}}</h3>
                    </a>   
                </li>
            </ul>
            <ul v-if="nowindex===1">
                <li v-for="item in list2" :key="item.id">
                    <a href="#">
                        <img :src="item.img" alt="">
                        <h3>{{item.title}}</h3>
                    </a>   
                </li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    name:'homestrategy',
    data(){
        return{
            strategy:'旅游攻略',
            list0:[{id:1,msg:'十一去哪儿'},
                    {id:2,msg:'趣味亲子游'}],
            list1:[{id:1,img:'static/picture/strategy01.jpg',title:'避暑张家界，数不尽的湘西美景'},
                    {id:2,img:'static/picture/strategy02.jpg',title:'说走就走，马来西亚浪漫之旅'},
                    {id:3,img:'static/picture/strategy03.jpg',title:'从你的全世界路过，圆梦稻城亚丁'},
                    {id:4,img:'static/picture/strategy04.jpg',title:'穿越高山草甸，在青海湖旁发个呆'},],
            list2:[{id:1,img:'static/picture/strategy05.jpg',title:'驾一叶扁舟，寻瓯江往事'},
                    {id:2,img:'static/picture/strategy06.jpg',title:'不负嵊夏好时光，泗乎太安逸'},
                    {id:3,img:'static/picture/strategy07.jpg',title:'探访日本，一部家庭旅行画册'},
                    {id:4,img:'static/picture/strategy08.jpg',title:'厦门，带娃出行与幸福同行'},],
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
h5
    font-size:.34rem
    padding:0.2rem 0.14rem
.title
    display :flex
    span
        font-size :0.24rem
        font-size :0.24rem
        display :block
        padding :0.15rem 0.26rem
        color :#666666
        margin-left :2.2rem
    li
        a
            font-size :0.24rem
            display :block
            border:1px solid #d7d7d7
            padding :0.15rem 0.26rem
            color :#666666
            margin-left :0.1rem
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
        height :3.4rem
        padding:0.1rem 0.12rem 0
        span
            font-size :0.35rem
            display :block
            color :#ff7400
            font-weight :600
        h3
            font-size :0.3rem
            display :block
            margin :0.1rem 0.1rem
            font-weight :400
        img
            width :3.5rem
            border-radius :0.1rem
            display :block
</style>