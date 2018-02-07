import Vue from 'vue';
import HelloWorld from '@/components/PageTitle';

describe('PageTitle.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.page-title h1').textContent)
      .to.equal('Hi!');
  });
});
