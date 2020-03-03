import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vueJsonp from 'vue-jsonp'

Vue.use(vueJsonp)
Vue.prototype.$axios = axios;
Vue.prototype.$webAppId = 7342480;
Vue.prototype.$author = '©Сергей Киселёв'
Vue.prototype.$user_id = null;
Vue.prototype.$verVK = 5.103;
/*
Vue.prototype.$webAppId = 7340553;
*/
Vue.prototype.$BaseURL = 'http://127.0.0.1:8080';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
