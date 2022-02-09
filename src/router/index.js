import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/edit' },
  {
    path: '/friends',
    // name: 'friends',
    component: () => import('@/views/FriendsCircle/index.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/UserHome/index.vue')
  },
  {
    path: '/ebs',
    component: () => import('@/views/EbsCaseClip/index.vue')
  },
  {
    path: '/edit',
    component: () => import('@/views/EditDynamic/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
