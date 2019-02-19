import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
    }
  ]
})
