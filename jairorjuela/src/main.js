import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification'

import '@/main.scss'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
