import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/search' ,
    name:'App',
    component: () => import('../App.vue'),
  },
  {
    path: '/search/:id?',
    name: 'Home',
    component: () => import('../views/Home.vue'),

  },
 
]

const router = new VueRouter({
  routes
})

export default router
