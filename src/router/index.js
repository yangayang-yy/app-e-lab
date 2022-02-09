import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/friends' },
  {
    path: '/friends',
    // name: 'friends',
    component: () => import('../views/FriendsCircle/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
