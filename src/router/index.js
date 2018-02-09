import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import PageTitle from '@/components/PageTitle';
import CapturePhoto from '@/components/CapturePhoto';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      components: {
        home: Home,
        pageTitle: PageTitle,
        capturePhoto: CapturePhoto,
      },
    },
    {
      path: '/photo',
      components: {
        pageTitle: PageTitle,
      }
    },
    {
      path: '/about_us',
      components: {
        home: Home,
      }
    },
  ],
});
