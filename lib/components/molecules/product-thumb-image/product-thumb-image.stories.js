import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import mProductThumbImage from './product-thumb-image.vue';
storiesOf('molecule|Product Thumb Image', module).add('default', function () {
  return {
    components: {
      vfMProductThumbImage: mProductThumbImage
    },
    template: "<vf-m-product-thumb-image show=\"true\">This is an alert message</vf-m-product-thumb-image>"
  };
}, {
  info: {}
});