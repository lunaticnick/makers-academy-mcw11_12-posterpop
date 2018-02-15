import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import CapturePhoto from '@/components/CapturePhoto';
import Form from '@/components/Form';
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import UrlList from '@/components/UrlList'
import AboutUs from '@/components/AboutUs'
import firebase from 'firebase'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/sign_in'
    },
    {
      path: '/',
      redirect: '/sign_in'
    },
    {
      path: '/home',
      components: {
        home: Home,
        capturePhoto: CapturePhoto,

      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about_us',
      components: {
        home: Home,
        aboutUs: AboutUs,
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my_links',
      components: {
        home: Home,
        urlList: UrlList,
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign_up',
      components: {
        signUp: SignUp,
      }
    },
    {
      path: '/sign_in',
      components: {
        signIn: SignIn,
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('sign_in')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})
export default router
