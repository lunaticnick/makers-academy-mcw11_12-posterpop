import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import * as admin from 'firebase-admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import scriptURL from 'sw-loader!../sw.js';

navigator.serviceWorker.register(scriptURL).then(console.log("sw successfully registered"));

Vue.use(VueResource);
Vue.use(BootstrapVue);

var serviceAccount = require('/Users/EW/Downloads/meventoapp-firebase-adminsdk-qr2v9-6c7b73ede0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://meventoapp.firebaseio.com'
});

Vue.config.productionTip = false;
let app;
let config = {
  apiKey: "AIzaSyDUT4H6FTVp-HoiEfXW38YqARZYLOuYkN4",
  authDomain: "posterpop-app.firebaseapp.com",
  databaseURL: "https://posterpop-app.firebaseio.com",
  projectId: "posterpop-app",
  storageBucket: "posterpop-app.appspot.com",
  messagingSenderId: "74742822159"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
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
