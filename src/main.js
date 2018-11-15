import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from "firebase/app";
Vue.config.productionTip = false
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC--KN7VpPm6JRomF4a9fYdKNwZ3e6gCUU",
  authDomain: "chatdatabase-d32ec.firebaseapp.com",
  databaseURL: "https://chatdatabase-d32ec.firebaseio.com",
  projectId: "chatdatabase-d32ec",
  storageBucket: "",
  messagingSenderId: "419301994310"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
