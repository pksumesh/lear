import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import axios from './axios-auth'
=======
import axios from 'axios'
>>>>>>> Merge branch '237-annual-report-ui' of https://github.com/kialj876/lear into CORS_TEST
import Vuelidate from 'vuelidate'
import Vue2Filters from 'vue2-filters'
import Affix from 'vue-affix'
import router from './router'
import store from './store'
import './plugins/vuetify'
import './registerServiceWorker'

Vue.use(Vuelidate)
Vue.use(Vue2Filters)
Vue.use(Affix)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
