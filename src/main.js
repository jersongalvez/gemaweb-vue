// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//IMPORTACION DE ICONOS DE LA APLICACION
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArchive, faBacteria, faBook, faGears, faHome, faInfo, faListUl, faPowerOff, faTentArrowDownToLine, faUserAlt, faUserNurse, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faArchive)
library.add(faHome)
library.add(faUserAlt)
library.add(faPowerOff)
library.add(faInfo)
library.add(faBook)
library.add(faUsers)
library.add(faTentArrowDownToLine)
library.add(faBacteria)
library.add(faGears)
library.add(faListUl)
library.add(faUserNurse)
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
