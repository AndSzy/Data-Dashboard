import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import TheModal from "./components/TheModal.vue";

import DragControler from './components/DragControler.js';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'TheModal', path: '/modal', component: TheModal, props: true},
]
});

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('DragControler', DragControler);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
