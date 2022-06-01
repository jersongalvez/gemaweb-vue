import Vue from 'vue'
import Router from 'vue-router'
//IMPORTACION DE ARCHIVOS PARA PRESTADORES
import Pqrs from '../views/prestadores/Pqrs'
import BuscarPqrs from '../views/prestadores/BuscarPqrs'
//IMPORTACION DE ARCHIVOS PARA LA PLATAFORMA GEMAWEB
import Login from '../views/gemaweb/Login'
import RecuperarContrasena from '../views/gemaweb/RecuperarContrasena'
import Inicio from '../views/gemaweb/Inicio'
import Usuarios from '../views/gemaweb/Usuarios'
import AltoCancer from '../views/gemaweb/AltoCancer'
import AltoArtitris from '../views/gemaweb/AltoArtitris'
import AltoHipertitis from '../views/gemaweb/AltoHipertitis'
import AltoErc from '../views/gemaweb/AltoErc'
import AltoHemofilia from '../views/gemaweb/AltoHemofilia'
import AltoNoVih from '../views/gemaweb/AltoNoVih'
import AltoVih from '../views/gemaweb/AltoVih'
import ContraReferenciaUsuarios from '../views/gemaweb/ContraReferenciaUsuarios'
Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    /****************************
      RUTAS PARA LOS PRESTADORES
    *****************************/
    {
      path: '/',
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
        path: '/gemaweb/login',
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
      {
        path: '/gemaweb/usuarios',
        name: 'Usuarios',
        component: Usuarios
      },
      //MALLA VALIDADORA DE ALTO COSTO
      {
        path: '/gemaweb/altocancer',
        name: 'AltoCancer',
        component: AltoCancer
      },
      {
        path: '/gemaweb/artitris',
        name: 'AltoArtitris',
        component: AltoArtitris
      },
      {
        path: '/gemaweb/hipertitis',
        name: 'AltoHipertitis',
        component: AltoHipertitis
      },
      {
        path: '/gemaweb/erc',
        name: 'AltoErc',
        component: AltoErc
      },
      {
        path: '/gemaweb/hemofilia',
        name: 'AltoHemofilia',
        component: AltoHemofilia
      },
      {
        path: '/gemaweb/novih',
        name: 'AltoNoVih',
        component: AltoNoVih
      },
      {
        path: '/gemaweb/vih',
        name: 'AltoVih',
        component: AltoVih
      },
      //CONTRAREFERENCIA
      {
        path: '/gemaweb/contrausuarios',
        name: 'ContraReferenciaUsuarios',
        component: ContraReferenciaUsuarios
      },

  ]
})
