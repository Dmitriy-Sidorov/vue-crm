import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
    apiKey: 'AIzaSyCoytDEKNHFrMvJOCKcPJsIKKPX44O-RBw',
    authDomain: 'vue-crm-financial-system.firebaseapp.com',
    projectId: 'vue-crm-financial-system',
    storageBucket: 'vue-crm-financial-system.appspot.com',
    messagingSenderId: '630756236531',
    appId: '1:630756236531:web:7508b2960a182116a3ab86'
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
