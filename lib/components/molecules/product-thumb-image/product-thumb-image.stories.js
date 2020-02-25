import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductThumbImage from './product-thumb-image.vue';
import product from '@/.storybook/store/product.js';
Vue.component('vfMProductThumbImage', vfMProductThumbImage);
storiesOf('molecule|Product Thumb Image', module).add('default', function () {
  return {
    components: {
      vfMProductThumbImage: vfMProductThumbImage
    },
    template: "<vf-m-product-thumb-image :product=\"product\">This is an alert message</vf-m-product-thumb-image>",
    data: function data() {
      return {
        product: product
      };
    }
  };
}, {
  info: {}
});