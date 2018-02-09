import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router-config'
import App from './App.vue'

const router = new VueRouter({
	mode: 'history',
	base: '/admin',
	routes: routes.routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})