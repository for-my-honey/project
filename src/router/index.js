import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import homeHeader from '@/components/homeHeader'
// import homeSwiper from '@/components/homeSwiper'
// import homeNav from '@/components/homeNav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
    // {
    //   path: '/homeHeader',
    //   name: 'homeHeader',
    //   component: homeHeader
    // },
    // {
    //   path: '/homeSwiper',
    //   name: 'homeSwiper',
    //   component: homeSwiper
    // },
    // {
    //   path: '/homeNav',
    //   name: 'homeNav',
    //   component: homeNav
    // },
    
  ]
})
