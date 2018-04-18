// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueAgile from 'vue-agile'
import StarRating from 'vue-star-rating'

Vue.use(VueAgile)
Vue.use(BootstrapVue);
Vue.component('star-rating', StarRating);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
