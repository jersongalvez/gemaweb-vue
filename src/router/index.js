import Vue from 'vue'
import Router from 'vue-router'
import Pqrs from '../views/prestadores/Pqrs'
import BuscarPqrs from '../views/prestadores/BuscarPqrs'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
  ]
})
