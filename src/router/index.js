import Vue from 'vue'
import Router from 'vue-router'
import Mainview from '@/components/Mainview'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainview',
      component: Mainview,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ]
})
