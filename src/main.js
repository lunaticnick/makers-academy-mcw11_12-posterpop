import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

  var config = {
    apiKey: "AIzaSyDM9yYNwqxpiAxck0c47649KrIxOlR-m0M",
    authDomain: "root-bricolage-194510.firebaseapp.com",
    databaseURL: "https://root-bricolage-194510.firebaseio.com",
    projectId: "root-bricolage-194510",
    storageBucket: "root-bricolage-194510.appspot.com",
    messagingSenderId: "308649884099"
  };
  firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
