import Vue from 'vue';
import Router from 'vue-router';
import PageTitle from '@/components/PageTitle';
import CapturePhoto from '@/components/CapturePhoto';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    components: {
      pageTitle: PageTitle,
      capturePhoto: CapturePhoto,
      formPage: Form,
    },
  }],
});
