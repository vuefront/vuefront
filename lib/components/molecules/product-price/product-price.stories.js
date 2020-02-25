import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductPrice from './product-price.vue';
import './product-price.scss';
Vue.component('vfMProductPrice', vfMProductPrice);
storiesOf('molecule|Product Price', module).add('default', function () {
  return {
    components: {
      vfMProductPrice: vfMProductPrice
    },
    template: "<vf-m-product-price price=\"$10\"></vf-m-product-price>"
  };
}, {
  info: {}
}).add('special', function () {
  return {
    components: {
      vfMProductPrice: vfMProductPrice
    },
    template: "<vf-m-product-price price=\"$10\" special=\"$5\"></vf-m-product-price>"
  };
}, {
  info: {}
}).add('small', function () {
  return {
    components: {
      vfMProductPrice: vfMProductPrice
    },
    template: "<vf-m-product-price price=\"$10\" special=\"$5\" variant=\"small\"></vf-m-product-price>"
  };
}, {
  info: {}
});