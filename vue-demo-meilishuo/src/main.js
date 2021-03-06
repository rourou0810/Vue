// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/css/style.css'

Vue.use(VueResource);
Vue.use(router)

Vue.config.productionTip = false

require('./mock.js')

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
//挂在到vue实例上
new Vue({
 router,
 el: '#app',
 render: h => h(App)
})
