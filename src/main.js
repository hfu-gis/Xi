import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import vuetify from './plugins/vuetify'
import router from './router'
import store from  './store'
import AlertCmp from './views/Alert'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

new Vue({
  vuetify,store,
  router: router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBy-Hfsl2MOQMRQIIcEFwWmMTytfTq_UOg',
      authDomain: 'nachrichten-app.firebaseapp.com',
      databaseURL: 'https://nachrichten-app.firebaseio.com',
      projectId: 'nachrichten-app',
      storageBucket: ''
    })
  }
}).$mount('#app')
