import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductThumbInline from './product-thumb-inline.vue';
import product from '@/.storybook/store/product.js';
Vue.component('vfMProductThumbInline', vfMProductThumbInline);
storiesOf('molecule|Product Thumb Inline', module).add('default', function () {
  return {
    components: {
      vfMProductThumbInline: vfMProductThumbInline
    },
    template: "<vf-m-product-thumb-inline :product=\"product\"></vf-m-product-thumb-inline>",
    data: function data() {
      return {
        product: product
      };
    }
  };
}, {
  info: {}
});