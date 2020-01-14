import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import vuetify from './assets/plugins/vuetify'
import router from './router'
import { store } from  './store'
import AlertCmp from './components/Alert'
const fb = require('./db')
import Worldmap from "./components/Worldmap";

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
Vue.component('worldmap', Worldmap)

new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  render: h => h(App),
  created () {
        fb.auth.onAuthStateChanged((user) => {
          if (user) {
            console.log('Moin')
            this.$store.dispatch('autoSignIn', user)
            this.$store.dispatch('fetchUserData')
          }
        })
      this.$store.dispatch('loadArticles')

  }
})
