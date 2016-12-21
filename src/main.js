import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter(require('./router'))

new Vue({
  el: '#app',
  router: router,
  render: home => home(App)
})
