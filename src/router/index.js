import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import PageTitle from '@/components/PageTitle';
import CapturePhoto from '@/components/CapturePhoto';
import Form from '@/components/Form';
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/home',
      components: {
        home: Home,
        pageTitle: PageTitle,
        capturePhoto: CapturePhoto,
      },
    },
    {
      path: '/about_us',
      components: {
        home: Home,
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
