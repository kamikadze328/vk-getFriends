import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueJsonp from 'vue-jsonp'

Vue.use(vueJsonp)
Vue.prototype.$webAppId = 7342480;
Vue.prototype.$verVK = 5.103;
Vue.prototype.$BaseURL = 'http://127.0.0.1:8080';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
