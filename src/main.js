import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(Vuetify, {
  iconfont: 'mdi'
});


new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app');