import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/search' ,
    name:'App',
    component: () => import('../App.vue'),
    component: App
  },
  {
    path: '/search/:id?',
    name: 'Home',
    component: Home
  },
 
]

const router = new VueRouter({
  routes
})

export default router
