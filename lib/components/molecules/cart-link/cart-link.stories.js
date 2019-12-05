import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCartLink from './cart-link.vue';
Vue.component('vfMCartLink', vfMCartLink);
storiesOf('molecule|Cart Link', module).add('default', function () {
  return {
    components: {
      vfMCartLink: vfMCartLink
    },
    template: "<vf-m-cart-link></vf-m-cart-link>"
  };
}, {
  info: {}
});