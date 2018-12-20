import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
