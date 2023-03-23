import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Sesion/LoginView.vue'
import RegistroView from '../views/Sesion/RegistroView.vue'
import admin from '../views/Perfil/administrador/Admin.vue'

import ContrasenaView from'../views/Sesion/ContrasenaView.vue'
import RecuContraseña from'../views/Sesion/RecuContraseña.vue'

import PerfilPostulanteView from'../views/Perfil/Postulante/PerfilPostulanteView.vue'
import Experiencia from'../views/Perfil/Postulante/Experiencia.vue'
import ArchivoPostulanteView from '../views/Perfil/Postulante/ArchivoPostulante.vue'
import VistaOferta from'../views/Perfil/Postulante/VistaOferta.vue'
import PostulacionesView from'../views/Perfil/Postulante/PostulacionesView.vue'

import PerfilEmpleador from'../views/Perfil/empleador/PerfilEmpleador.vue'
import OfertaEmpleo from'../views/Perfil/empleador/OfertaEmpleo.vue'
import PublicarView from '../views/Perfil/empleador/PublicarView.vue'
import Postulantes from '../views/Perfil/empleador/Postulantes.vue'
import Misofertas from'../views/Perfil/empleador/Misofertas.vue'
import Editaroferta from'../views/Perfil/empleador/Editaroferta.vue'

import PerfilAdministrador from'../views/Perfil/administrador/PerfilAdministrador.vue'
import Usuarios from'../views/Perfil/administrador/Usuarios.vue'
import Subcategoria from '../views/Perfil/administrador/Subcategoria.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/about',name: 'about',component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')},
  {path: '/login',name: 'login',component: login},
  {path: '/RegistroView',name: 'RegistroView',component: RegistroView},
  {path: '/admin',name: 'admin',component: admin},
  {path: '/ContrasenaView', 
  name: 'ContrasenaView',
   component: ContrasenaView
  },
  {path: '/RecuContraseña',
   name: 'RecuContraseña', 
   component: RecuContraseña
  },
  // postulante
  { path: '/PerfilPostulanteView'
  ,name: 'PerfilPostulanteView',
   component: PerfilPostulanteView
   },
  {path: '/ArchivoPostulanteView',
  name: 'ArchivoPostulanteView',
   component: ArchivoPostulanteView},

  { path: '/Experiencia', 
  name: 'Experiencia',
   component: Experiencia},

//Empleador
  {
    path: '/PerfilEmpleador',
    name: 'PerfilEmpleador',
    component: PerfilEmpleador
  },
   {
    path: '/OfertaEmpleo',
    name: 'OfertaEmpleo',
    component: OfertaEmpleo
  },
  {
    path: '/Postulantes',
    name: 'Postulantes',
    component: Postulantes
  },
  {
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  },
  {
    path: '/PostulacionesView',
    name: 'PostulacionesView',
    component: PostulacionesView
  },
  {
    path: '/VistaOferta',
    name: 'VistaOferta',
    component: VistaOferta
  },
  
  {
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  },
  {
    path: '/Misofertas',
    name: 'Misofertas',
    component: Misofertas
  },
  {
    path: '/Editaroferta',
    name: 'Editaroferta',
    component: Editaroferta
  },

//administrador

 {
    path: '/PerfilAdministrador',
    name: 'PerfilAdministrador',
    component: PerfilAdministrador
  },
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/Subcategoria',
    name: 'Subcategoria',
    component: Subcategoria
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
