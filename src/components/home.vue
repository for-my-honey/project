<template>
    <div>
        <homeheader></homeheader>
        <homeswiper></homeswiper>
        <homenav></homenav>
        <hometitle></hometitle>
        <homehot></homehot>
        <hometicket></hometicket>
        <homestrategy></homestrategy>
        <homefoot></homefoot>
    </div>
</template>

<script>
import hometitle from '@/components/hometitle'
import homeheader from '@/components/homeheader'
import homeswiper from '@/components/homeswiper'
import homenav from '@/components/homenav'
import homehot from '@/components/homehot'
import hometicket from '@/components/hometicket'
import homestrategy from '@/components/homestrategy'
import homefoot from '@/components/homefoot'
export default {
  name: 'home',
  components:{
      homeheader,
      homeswiper,
      homenav,
      hometitle,
      homehot,
      hometicket,
      homestrategy,
      homefoot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
