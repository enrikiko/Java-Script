// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {auth} from './firebase'

Vue.use(BootstrapVue);
Vue.use(VueFire)
// Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to,from,next) => {
  let currentUser = auth.currentUser
  let isLogin = to.matched.some( record => record.name=="login")
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next("login")
  }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
