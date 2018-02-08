import Vue from 'vue';
import Router from 'vue-router';
import PageTitle from '@/components/PageTitle';
import CapturePhoto from '@/components/CapturePhoto';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      components: {
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
  ],
});
