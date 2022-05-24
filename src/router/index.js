import Vue from 'vue'
import Router from 'vue-router'
//IMPORTACION DE ARCHIVOS PARA PRESTADORES
import Pqrs from '../views/prestadores/Pqrs'
import BuscarPqrs from '../views/prestadores/BuscarPqrs'
//IMPORTACION DE ARCHIVOS PARA LA PLATAFORMA GEMAWEB
import Login from '../views/gemaweb/Login'
import Inicio from '../views/gemaweb/Inicio'
import RecuperarContrasena from '../views/gemaweb/RecuperarContrasena'
Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    /****************************
      RUTAS PARA LOS PRESTADORES
    *****************************/
    {
      path: '/pqrs',
      name: 'Pqrs',
      component: Pqrs
    },
    {
      path: '/buscarpqrs',
      name: 'Buscarpqrs',
      component: BuscarPqrs
    },

    /****************************
      RUTAS PARA LA ADMINISTRACION
    *****************************/
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/gemaweb/recuperarcontrasena',
        name: 'RecuperarContrasena',
        component: RecuperarContrasena
      },
      {
        path: '/gemaweb/inicio',
        name: 'Inicio',
        component: Inicio
      },
  ]
})
