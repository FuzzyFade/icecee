import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuetify)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')