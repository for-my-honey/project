<template>
    <div>
        <ul>
            <a href="#" v-for="item in navlist1" :key="item.id">
                <li>
                    <img :src="item.imgurl" alt=""><p>{{item.desc}}</p>
                </li>
            </a>
        </ul>
        <ul>
            <a href="#" v-for="item in navlist2" :key="item.id">
                <li>
                    <img :src="item.imgurl" alt=""><p>{{item.desc}}</p>
                </li>
            </a>
        </ul>
        <ul>
            <a href="#" v-for="item in navlist3" :key="item.id">
                <li>
                    <img :src="item.imgurl" alt=""><p>{{item.desc}}</p>
                </li>
            </a>
        </ul>
    </div>
</template>
<script>
export default {
    name:'homenav',
    data(){
        return {
            navlist1:[{imgurl:'static/icon/group.png',desc:'特惠酒店'},
                    {imgurl:'static/icon/bargainflight.png',desc:'低价机票'},
                    {imgurl:'static/icon/inn.png',desc:'客栈'},
                    {imgurl:'static/icon/haiwai.png',desc:'海外酒店'},
                    {imgurl:'static/icon/kezhan.png',desc:'民宿'}],
            navlist2:[{imgurl:'static/icon/bus.png',desc:'车票'},
                    {imgurl:'static/icon/tuan.png',desc:'旅游团购'},
                    {imgurl:'static/icon/freetravel.png',desc:'自由行'},
                    {imgurl:'static/icon/car.png',desc:'专车自驾'},
                    {imgurl:'static/icon/aroundtravel.png',desc:'周边短途'}],
            navlist3:[{imgurl:'static/icon/jr.png',desc:'金融理财'},
                    {imgurl:'static/icon/card.png',desc:'保险车险'},
                    {imgurl:'static/icon/travel.png',desc:'攻略'},
                    {imgurl:'static/icon/youlun.png',desc:'邮轮'},
                    {imgurl:'static/icon/oversea.png',desc:'换外币'}],
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style.stylus'
*
    font-size :.26rem
    color :#333
    ul
        display :flex
        width :100%
        li 
            padding:.1rem .15rem
            text-align :center
            // border:1px solid red
            width 1.2rem
            img 
                width :.8rem
                                      
</style>