import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import VueMoment from 'vue-moment'

import '@/main.scss'

Vue.use(VueMoment, { moment })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
