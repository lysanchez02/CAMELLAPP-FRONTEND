import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Sesion/LoginView.vue'
import RegistroView from '../views/Sesion/RegistroView.vue'
import admin from '../views/Perfil/Admin/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/about',name: 'about',component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')},
  {path: '/login',name: 'login',component: login},
  {path: '/RegistroView',name: 'RegistroView',component: RegistroView},
  {path: '/admin',name: 'admin',component: admin},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
