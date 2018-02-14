import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';

Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
let app;
let config = {
    apiKey: "AIzaSyA2Io8q1VNfHX0r6zOnVmRw-_Ijh3JJvz8",
    authDomain: "meventoapp.firebaseapp.com",
    databaseURL: "https://meventoapp.firebaseio.com",
    projectId: "meventoapp",
    storageBucket: "meventoapp.appspot.com",
    messagingSenderId: "390824242533"
  };

  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user){
    if(!app){
      /* eslint-disable no-new */
      app = new Vue({
        el: '#app',
        router,
        components: {
          App,
        },
        template: '<App/>',
      });
    }
  })
